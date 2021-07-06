var app = new Vue(
  {
    el: "#boolzapp-js",
    data: {
      contacts: [
        {
          name: 'Michele',
          avatar: 'img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di dargli da mangiare',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: 'img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'received'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: 'img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Luisa',
          avatar: 'img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
      ],
      indiceAttivo: 0,
      newMessage: "",
      searchedContact: "",
      openPanel: false,
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
      }
    }
  }
);
