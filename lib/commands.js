import {getChatStats, UI_ChannelDatabase, updateChatStats, Version_Now} from '../main';

// ID of previous video queued (so !random doesn't add it again)
let LAST_VIDEO_ID_QUEUED = 'some-bogus-dont-leave-empty';
// additional command occuring in the chat message
let COMMAND = false;

/**
 * Format chat messages before sending and execute commands.
 *
 * @param {string} msg
 * @return {string}
 */

export function prepareMessage(msg) {
  if (msg.startsWith('!')) {
    COMMAND = true;
    if (msg.startsWith('!stat')) {
      const {numberOfMessages, totalMessageLength} = getChatStats();
      const averageMessageLength =
          numberOfMessages > 0 ? Math.round(totalMessageLength / numberOfMessages) : 0;
      msg = `you have sent ${numberOfMessages} messages, ` +
          `total length is ${totalMessageLength} characters ` +
          `(${averageMessageLength} per message) `;
    } else if (msg.startsWith('!pick ')) {
      const arr = msg.split('!pick ')[1].split(',');
      const rnd = Math.round(Math.random() * (arr.length - 1));
      msg = arr[rnd];
    } else if (msg.startsWith('!ask ')) {
      if (AskAnswers_Array.length < 1) {
        AskAnswers_Array = ['yes', 'no'];
      }
      const rnd = Math.round(Math.random() * (AskAnswers_Array.length - 1));
      msg = AskAnswers_Array[rnd];
    } else if (msg.startsWith('!time')) {
      let h = new Date().getHours();
      if (h < 10) {
        h = '0' + h;
      }
      let m = new Date().getMinutes();
      if (m < 10) {
        m = '0' + m;
      }
      msg = 'current time: ' + h + ':' + m;
    } else if (msg.startsWith('!dice')) {
      const rnd = Math.round(Math.random() * 5) + 1;
      msg = '' + rnd;
    } else if (msg.startsWith('!roll')) {
      let rnd = Math.round(Math.random() * 999);
      if (rnd < 100) {
        rnd = '0' + rnd;
      }
      if (rnd < 10) {
        rnd = '0' + rnd;
      }
      msg = '' + rnd;
    } else if (msg.startsWith('!q')) {
      if (RandomQuotes_Array.length < 1) {
        RandomQuotes_Array = ['error: no quotes available'];
      }
      const rnd = Math.round(Math.random() * (RandomQuotes_Array.length - 1));
      msg = RandomQuotes_Array[rnd];
    } else if (msg.startsWith('!randomemote')) {
      const emoteCount = TabCompletionEmotes.length;
      const randomEmoteIndex = Math.round(Math.random() * emoteCount - 1);
      const randomEmote = TabCompletionEmotes[randomEmoteIndex];
      msg = randomEmote;
    } else if (msg.startsWith('!random') && hasPermission('playlistadd')) {
      if (UI_ChannelDatabase) {
        let link = '';
        let title = '';
        while (link === '' || link.includes(LAST_VIDEO_ID_QUEUED)) {
          const rnd = Math.round(Math.random() * (CHANNEL_DATABASE.length - 1));
          link = CHANNEL_DATABASE[rnd][0];
          title = CHANNEL_DATABASE[rnd][1];
        }
        const parsed = parseMediaLink(link);
        socket.emit('queue', {
          id: parsed['id'],
          pos: 'end',
          type: parsed['type'],
          temp: $('.add-temp').prop('checked'),
        });
        msg = `random media added! - ${title}`;
      }
    } else if (msg.startsWith('!skip') && hasPermission('voteskip')) {
      socket.emit('voteskip');
      msg = 'current item has been voteskipped';
    } else if (msg.startsWith('!next') && hasPermission('playlistjump')) {
      socket.emit('playNext');
      msg = 'started playing next item';
    } else if (msg.startsWith('!bump') && hasPermission('playlistmove')) {
      const last = $('#queue').children().length;
      const uid = $(`#queue .queue_entry:nth-child(${last})`).data('uid');
      const title = $(`#queue .queue_entry:nth-child(${last}) .qe_title`).html();
      socket.emit('moveMedia', {from: uid, after: PL_CURRENT}, $('.add-temp').prop('checked'));
      msg = `last item bumped as next: ${title}`;
    } else if (msg.startsWith('!add ') && hasPermission('playlistadd')) {
      const parsed = parseMediaLink(msg.split('!add ')[1]);
      if (parsed['id'] === null) {
      msg = 'error: invalid link, item has not been added';
      } else {
        socket.emit('queue', {
          id: parsed['id'],
          pos: 'end',
          type: parsed['type'],
          temp: $('.add-temp').prop('checked'),
        });
        msg = 'media has been added!';
      }
    } else if (msg.startsWith('!np')) {
      msg = 'Now playing: ' + $('.queue_active a').html();
    } else if (msg.startsWith('!discord')) {
      msg = 'https://discord.gg/g8tCGSc2bx';
    } else if (msg.startsWith('!link')) {
      msg = 'https://tinyurl.com/jamcydj';
    } else if (msg.startsWith('!guide')) {
      msg = 'https://tinyurl.com/CyDJguideV2';
    } else if (msg.startsWith('!script')) {
      msg = 'http://github.com/papertek/CyDJ';
    } else if (msg.startsWith('!report')) {
      msg = 'https://tinyurl.com/CDJReport';
    } else if (msg.startsWith('!botcommands')) {
      msg = 'https://github.com/airforce270/cytubebot#commands';
    } else if (msg.startsWith('!version')) {
      msg = `Running: ${Version_Now}`;
    } else if (msg.startsWith('!media')) {
      const item = $(`.queue_active`).data('media');
      msg = `Heres the link: ${formatURL(item)}`;
    } else {
      COMMAND = false;
    }
  }
  return msg;
}

// Function taken from util.js.
// This takes user commands and actually let's the user post them.

$('#chatline, #chatbtn').unbind();

const _msg = $('#chatline').val();
let msg = $('#chatline').val();
if (msg.trim()) {
  msg = prepareMessage(msg.trim());
  if (COMMAND) {
    socket.emit('chatMsg', {msg: _msg});
    msg = `➥ ${msg}`;
    COMMAND = false;
  }
  socket.emit('chatMsg', {msg: msg});
  updateChatStats(_msg);
  $('#chatline').val('');
}


const RandomQuotes_Array = [
  '"i wannt to purr so fucking bad right neow" -J6papertek',
];

const AskAnswers_Array = [
  '100% for sure',
  'definitely, yes',
  'yes',
  'probably',
  'not any chance',
  'definitely no',
  'a little chance',
  'no',
  '50/50',
  'fairy is tired and will not answer',
  'I refuse to answer',
  'i asked your mom and she said no',
  'umph... yes...',
  'ahhh.. hhaahhh... yeah...',
  'what',
];

socket.on('queue', (data) => LAST_VIDEO_ID_QUEUED = data.item.media.id);
