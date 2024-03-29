import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';

import { addContactsThunk, editContactThunk } from 'redux/contacts/operations';
import { selectUserContacts } from 'redux/selectors';

import { InputComponent } from 'components/Input';

import {
  duplicateNameNotification,
  duplicateNumberNotification,
} from 'helpers/helper';

import { ContainerForm, Form, WrapperForButton } from './styled';
import { ButtonUi } from 'ui/ButtonUi.styled';

const contactInitialState = {
  name: '',
  number: '',
};

export const ContactForm = ({
  editingContact,
  setEditingContact,
  setActiveContact,
  onCloseModal,
}) => {
  const contacts = useSelector(selectUserContacts);
  const dispatch = useDispatch();

  const [contact, setContact] = useState(contactInitialState);

  useEffect(() => {
    if (editingContact) setContact(editingContact);
  }, [editingContact]);

  const handleCancel = () => {
    setEditingContact(null);
    setContact(contactInitialState);
    setActiveContact(null);
    onCloseModal();
  };

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const number = form.elements.contactNumber.value.trim();
    let name = form.elements.contactName.value.trim();
    const nameWords = name.split(' ');
    name = nameWords
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    if (
      !duplicateNameNotification(contacts, name, editingContact) ||
      !duplicateNumberNotification(contacts, number, editingContact)
    ) {
      return;
    }

    if (editingContact) {
      dispatch(editContactThunk({ id: editingContact.id, name, number }));
    } else {
      dispatch(addContactsThunk({ name, number }));
    }

    Notify.success(
      `Contact ${name} successfully ${editingContact ? 'edited' : 'added'}.`
    );

    setContact(contactInitialState);
    setEditingContact(null);
    setActiveContact(null);
    onCloseModal();
  };

  const handleSetContact = (inputName, value) => {
    setContact(prevContact => ({
      ...prevContact,
      [inputName]: value,
    }));
  };

  return (
    <ContainerForm>
      <Form onSubmit={handleSubmit}>
        <InputComponent
          label="Name:"
          type="text"
          name="contactName"
          value={contact.name}
          onChange={e => handleSetContact('name', e.target.value)}
          required
        />
        <InputComponent
          label="Number:"
          type="text"
          name="contactNumber"
          value={contact.number}
          onChange={e => handleSetContact('number', e.target.value)}
          required
        />
        <WrapperForButton>
          <ButtonUi margin={'0'} type="submit">
            {editingContact ? 'Edit contact' : 'Add contact'}
          </ButtonUi>
          {editingContact && (
            <ButtonUi margin={'0'} type="button" onClick={handleCancel}>
              Cancel
            </ButtonUi>
          )}
        </WrapperForButton>
      </Form>
    </ContainerForm>
  );
};

ContactForm.propTypes = {
  editingContact: PropTypes.object,
  setEditingContact: PropTypes.func,
  setActiveContact: PropTypes.func,
  onCloseModal: PropTypes.func,
  contacts: PropTypes.array,
};

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

// import { addContactsThunk, editContactThunk } from 'redux/contactsOperations';
// import { selectUserContacts } from 'redux/selectors';

// import Notiflix from 'notiflix';

// import {
//   ButtonForm,
//   ContainerForm,
//   Form,
//   InputStyle,
//   WrapperForButton,
//   WrapperStyle,
// } from './FormAddContact.styled';
// import { InputComponent } from 'components/Input/Input';
// import { useFormik } from 'formik';
// import { contactSchema } from 'schemas';

// export const ContactForm = ({ editingContact, setEditingContact }) => {
//   const contacts = useSelector(selectUserContacts);
//   const dispatch = useDispatch();

//   const formik = useFormik({
//     initialValues: {
//       contactName: '',
//       contactNumber: '',
//     },
//     validationSchema: contactSchema,
//     onSubmit: values => handleSubmit(values),
//   });

//   // useEffect(() => {
//   //   if (editingContact && formik.values.contactName !== editingContact.name) {
//   //     formik.setValues({
//   //       contactName: editingContact.name,
//   //       contactNumber: editingContact.number,
//   //     });
//   //   }
//   // }, [editingContact, formik]);

//   // useEffect(() => {
//   //   if (editingContact) {
//   //     if (
//   //       formik.values.contactName !== editingContact.name ||
//   //       formik.values.contactNumber !== editingContact.number
//   //     ) {
//   //       formik.setValues({
//   //         contactName: editingContact.name,
//   //         contactNumber: editingContact.number,
//   //       });
//   //     }
//   //   }
//   // }, [editingContact, formik]);

//   useEffect(() => {
//      console.log('Editing Contact (contactform.jsx):', editingContact);
//      console.log('Formik values (contactform.jsx):', formik.values);
//     if (
//       editingContact &&
//       (formik.values.contactName !== editingContact.name ||
//         formik.values.contactNumber !== editingContact.number)
//     ) {
//       console.log('Setting Formik values...');
//       formik.setValues({
//         contactName: editingContact.name,
//         contactNumber: editingContact.number,
//       });
//     }
//   }, [editingContact, formik]);

//   const handleCancel = () => {
//     setEditingContact(null);
//     formik.resetForm();
//   };

//   const handleSubmit = ({ contactName, contactNumber }) => {
//     const nameWords = contactName.split(' ');
//     const name = nameWords
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');

//     if (
//       contacts.some(
//         contact => contact.name === name && editingContact !== contact
//       )
//     )
//       return Notiflix.Notify.info(`Contact with name ${name} already exists!`);

//     if (
//       contacts.some(
//         contact =>
//           contact.number === contactNumber && editingContact !== contact
//       )
//     )
//       return Notiflix.Notify.info(
//         `Contact with number ${contactNumber} already exists!`
//       );

//     if (editingContact) {
//       dispatch(
//         editContactThunk({ id: editingContact.id, name, number: contactNumber })
//       );
//     } else {
//       dispatch(addContactsThunk({ name, number: contactNumber }));
//     }

//     Notiflix.Notify.success(
//       `Contact ${name} successfully ${editingContact ? 'edited' : 'added'}.`
//     );

//     formik.resetForm();
//     setEditingContact(null);
//   };

//   return (
//     <ContainerForm>
//       <Form onSubmit={formik.handleSubmit}>
//         <InputComponent
//           label="Name:"
//           type="text"
//           name="contactName"
//           placeholder="Enter a name"
//           value={formik.values.contactName}
//           onChange={formik.handleChange}
//           required
//           wrapperStyle={WrapperStyle}
//           inputStyle={InputStyle}
//           formik={formik}
//         />
//         <InputComponent
//           label="Number:"
//           type="text"
//           name="contactNumber"
//           placeholder="Enter phone number"
//           value={formik.values.contactNumber}
//           onChange={formik.handleChange}
//           required
//           wrapperStyle={WrapperStyle}
//           inputStyle={InputStyle}
//           formik={formik}
//         />
//         <WrapperForButton>
//           <ButtonForm type="submit">
//             {editingContact ? 'Edit contact' : 'Add contact'}
//           </ButtonForm>
//           {editingContact && (
//             <ButtonForm type="button" onClick={handleCancel}>
//               Cancel
//             </ButtonForm>
//           )}
//         </WrapperForButton>
//       </Form>
//     </ContainerForm>
//   );
// };

// ContactForm.propTypes = {
//   editingContact: PropTypes.object,
//   setEditingContact: PropTypes.func,
//   contacts: PropTypes.array,
// };
