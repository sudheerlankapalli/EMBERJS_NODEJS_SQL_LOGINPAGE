// frontend/app/controllers/application.js
//below is the main code
// import Controller from '@ember/controller';
// import { inject as service } from '@ember/service';
// import { action } from '@ember/object';
// console.log('Hello from controller/.js');
// export default class ApplicationController extends Controller {
//   @service ajax;

//   @action
//   async submitForm(event) {
//     console.log('submitForm action called');
//     console.log('event:', event);
//     event.preventDefault();

//     try {
//       // eslint-disable-next-line no-unused-vars
//       const response = await fetch('http://localhost:3000/submit-form', {
//         data: {
//           firstName: this.model.firstName,
//           lastName: this.model.lastName,
//           email: this.model.email,
//           phoneNumber: this.model.phoneNumber,
//           address: this.model.address,
//         },
//       });
//       alert('Data submitted successfully!');
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('Error submitting form. Please try again later.');
//     }
//   }
// }

// frontend/app/controllers/application.js

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service ajax;

  @action
  async submitForm(event) {
    console.log('submitForm action called');
    event.preventDefault();

    try {
      const formData = {
        firstName: this.model.firstName,
        lastName: this.model.lastName,
        email: this.model.email,
        phoneNumber: this.model.phoneNumber,
        address: this.model.address,
      };

      // Call the ajax service post method
      await this.ajax.post('http://localhost:3000/submit-form', formData);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again later.');
    }
  }
}
