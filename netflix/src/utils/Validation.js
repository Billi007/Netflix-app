export const checkValidate = (email, password) => {

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    if(!isEmailValid) return "Invalid email Address";
    if(!isPasswordValid) return "Invalid password";
    if(isPasswordValid.length < 6) return "Password must be at least 6 characters"

    return null;
}