export const validateContactForm = ({ firstName, lastName, phoneNum, email }) => {
    const errors = {};

    if (!firstName) {
        errors.firstName = 'Required';
    } else if (firstName.length < 2) {
        errors.firstName = 'Must be at least 2 characters.';
    } else if (firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!lastName) {
        errors.lastName = 'Required';
    } else if (lastName.length < 2) {
        errors.lastName = 'Must be at least 2 characters.';
    } else if (lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    const reg = /^\d{10}$/;
    if (!reg.test(phoneNum)) {
        errors.phoneNum = 'The phone number should contain only numbers and must be 10 digits.';
    }

    if (!email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
};