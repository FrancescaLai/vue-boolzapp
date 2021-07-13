var app = new Vue(
  {
    el: "#boolzapp-js",
    data: {
      contacts: [
        {
          name: 'Michele',
          avatar: 'img/avatar_1.jpg',
          accessTime: "10:24",
          visible: true,
          messages: [
            {
              time: '15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent',
              active: 'false'
            },
            {
              time: '15:50:00',
              message: 'Ricordati di dargli da mangiare',
              status: 'sent',
              active: 'false'
            },
            {
              time: '16:15:22',
              message: 'Tutto a posto, non ti preoccupare!',
              status: 'received',
              active: 'false'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: 'img/avatar_2.jpg',
          accessTime: "18:03",
          visible: true,
          messages: [
            {
              time: '16:30:00',
              message: 'Ciao come stai?',
              status: 'sent',
              active: 'false'
            },
            {
              time: '16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received',
              active: 'false'
            },
            {
              time: '16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'received',
              active: 'false'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: 'img/avatar_3.jpg',
          accessTime: "20:37",
          visible: true,
          messages: [
            {
              time: '10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received',
              active: 'false'
            },
            {
              time: '10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent',
              active: 'false'
            },
            {
              time: '16:15:22',
              message: 'Ah scusa!',
              status: 'received',
              active: 'false'
            }
          ],
        },
        {
          name: 'Giacomo',
          avatar: 'img/avatar_4.jpg',
          accessTime: "04:00",
          visible: true,
          messages: [
            {
              time: '15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
              active: 'false'
            },
            {
              time: '15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received',
              active: 'false'
            }
          ],
        },
      ],
      indiceAttivo: 0,
      newMessage: "",
      searchedContact: "",
      messageIndex: 0,
      openEmoji: false,
      emoticons: [
        '😀','😆','😁','😅','🤣','😂','🙂','😉','😉','😊','😇','🥰','😍','🤩','😘','😗','🍋','🍌','🍍','🥭','🍎','🍏','🍄','🧅','🥯','🍔','🥓','🍟','🍺','🍷','🍸','🥃','🍫',
      ],
    },
    methods: {
      contactActive: function(index){
        this.indiceAttivo = index;
      },

      addNewMessage: function(){
        let text = {
          date: '10/01/2020 15:50:00',
          message: this.newMessage,
          status: "sent"
        };

      var contactObj = this.contacts[this.indiceAttivo];

      this.contacts[this.indiceAttivo].messages.push(text);

      this.newMessage = "";

      setTimeout(function(){
        let text = {
          date: '10/01/2020 15:50:00',
          message: "ok",
          status: "received"
        };

        contactObj.messages.push(text);
        }, 1000);
      },

      searchContact: function(item) {
        if ( (item.name).toLowerCase().includes(this.searchedContact) ) {
        return true;
        }
      },

      callToAction: function(i){
        this.messageIndex = i;
        if (this.contacts[this.indiceAttivo].messages[this.indiceAttivo].active == false){
          this.contacts[this.indiceAttivo].messages.forEach(message => {
            return message.active = false;
          });
          return this.contacts[this.indiceAttivo].messages[this.messageIndex].active = true;
        } else {
          this.contacts[this.indiceAttivo].messages.forEach(message => {
            return message.active = false;
          });
        }

      },

      callToEmoji: function(){
        return this.openEmoji = !this.openEmoji;
      },

      addEmoji: function(i){
        return this.newMessage += this.emoticons[i];
      },
    }
  }
);
