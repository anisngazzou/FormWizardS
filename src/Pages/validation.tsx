import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string()
    .email("Veuillez saisir une adresse mail valide 😯 ")
    .required("Champ obligatoire 🚧"),
  lastName: Yup.string().required("Champ obligatoire 🚧 "),
  firstName: Yup.string().required("Champ obligatoire 🚧 "),
 
  birthday: Yup.string().required("Champ obligatoire 🚧 "),
  password: Yup.string()

    .required("Votre mot de passe est obligatoire.")
    .min(8, "Minimum 8 caractères ")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Votre mot de passe doit contenir 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial."
    ),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Mot de passe doit étre identique!"
  ),

  // medecin: Yup.string(),
});
