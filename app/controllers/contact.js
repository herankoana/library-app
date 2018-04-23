import Controller from '@ember/controller';
import { match, not, gte, or } from '@ember/object/computed';

export default Controller.extend({

  headerMessage: 'Contact Us',
  emailAddress: '',
  message: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  notValid: not('isValid'),
  isLongEnough: gte('message.length',5),
  notLongEnough: not('isLongEnough'),
  isDisabled: or('notValid','notLongEnough'),

  actions: {

   sendMessage() {
     alert(`Your Email: ${this.get('emailAddress')}\nYour Message: ${this.get('message')}`);
     this.set('responseMessage', `We got your message and will get in touch soon!`);
     this.set('emailAddress', '');
     this.set('message', '');
   }
 }

});
