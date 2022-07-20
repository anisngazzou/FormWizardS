import { useState } from "react";
import { FormikValues } from "formik";
import _ from "lodash";
import "../../Pages/stylesSignin.scss";
// import voir from "../../assets/images/voir.png";
import { Input } from "@chakra-ui/react";


interface IProps {
  setFieldValue: Function;
  handleBlur: Function;
  handleChange: Function;
  values: FormikValues;
  errors: any;
  touched: any;
}
const Signup: React.FC<IProps> = ({
  setFieldValue,
  handleBlur,
  values,
  errors,
}) => {
  const [passwordFormType1, setPasswordFormType1] = useState("password");
  const [passwordFormType2, setPasswordFormType2] = useState("password");

  return (
    <>
      <form className="w-full min-w-full">
        <div className="flex justify-between flex-wrap  ">
          <div className="relative">
            {" "}
            <Input
              id="lastName"
              placeholder="Saisissez votre nom"
              type="text"
              // error={values["firstName"] !== "" ? errors.lastName : undefined}
              value={values.lastName}
              onChange={(e) => setFieldValue("lastName", e.target.value)}
              onBlur={(e) => setFieldValue("lastName", e.target.value)}
              style={{ width: "361px" }}
            />
            {errors.lastName && (
              <span className="absolute top-0 bottom-0 right-0 ">
                {values.lastName === "" ? (
                  <span className="flex items-center w-2 h-2 subpixel-antialiased   text-xs my-1 mx-2 leading-none   rounded-full">
                    ✯{" "}
                  </span>
                ) : (
                  <span className="flex items-center w-4 h-3 subpixel-antialiased rounded-bl-md   bg-red-200   leading-none rounded-tr-md ">
                    {" "}
                  </span>
                )}
              </span>
            )}
          </div>
          <div className="relative">
            {" "}
            <Input
              id="firstName"
              placeholder="Saisissez votre prénom"
              type="text"
              // error={values["email"] !== "" ? errors.lastName : undefined}
              value={values.firstName}
              onChange={(e) => setFieldValue("firstName", e.target.value)}
              onBlur={() => handleBlur}
              style={{ width: "361px" }}
            />
            {errors.firstName && (
              <span className="absolute top-0 bottom-0 right-0 ">
                {values.firstName === "" ? (
                  <span className="flex items-center w-2 h-2 subpixel-antialiased   text-xs my-1 mx-2 leading-none   rounded-full">
                    ✯{" "}
                  </span>
                ) : (
                  <span className="flex items-center w-4 h-3 subpixel-antialiased rounded-bl-md   bg-red-200   leading-none rounded-tr-md ">
                    {" "}
                  </span>
                )}
              </span>
            )}
          </div>
        </div>

        <div className={"flex bloc flex-wrap justify-between"}>
          <div className="relative">
            <Input
              id="email"
              placeholder="Saisissez votre email"
              type="text"
              // error={values["numCom"] !== "" ? errors.email : undefined}
              value={values.email}
              onChange={(e) => setFieldValue("email", e.target.value)}
              onBlur={() => handleBlur}
              style={{ width: "361px" }}
            />
            {errors.email && (
              <span className="absolute top-0 bottom-0 right-0 ">
                {values.email === "" ? (
                  <span className="flex items-center w-2 h-2 subpixel-antialiased   text-xs my-1 mx-2 leading-none   rounded-full">
                    ✯{" "}
                  </span>
                ) : (
                  <span className="flex items-center w-4 h-3 subpixel-antialiased rounded-bl-md   bg-red-200   leading-none rounded-tr-md ">
                    {" "}
                  </span>
                )}
              </span>
            )}
          </div>
          <div className="relative">
            <Input
              id="numCom"
              placeholder="Votre numéro d'inscription (RPPS,Adeli,...)"
              type="text"
              value={values.numCom}
              // error={values["password"] !== "" ? errors.numCom : undefined}
              onChange={(e) => setFieldValue("numCom", e.target.value)}
              onBlur={() => handleBlur}
              style={{ width: "361px" }}
            />
            {errors.numCom && (
              <span className="absolute top-0 bottom-0 right-0 ">
                {values.numCom === "" ? (
                  <span className="flex items-center w-2 h-2 subpixel-antialiased   text-xs my-1 mx-2 leading-none   rounded-full">
                    ✯{" "}
                  </span>
                ) : (
                  <span className="flex items-center w-4 h-3 subpixel-antialiased rounded-bl-md   bg-red-200   leading-none rounded-tr-md ">
                    {" "}
                  </span>
                )}
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="relative">
            <Input
              id="password"
              placeholder="********"
              value={values.password}
              type={passwordFormType1}
              // error={values["email"] !== "" ? errors.password : undefined}
              className="pr-10"
              onChange={(e) => setFieldValue("password", e.target.value)}
              style={{ width: "361px" }}
            />

            <img
            //   src={voir}
              alt="voir"
              className="absolute right-3 top-6 w-4 h-3 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setPasswordFormType1(
                  passwordFormType1 === "password" ? "text" : "password"
                );
              }}
            />
            {errors.password && (
              <span className="absolute top-0 bottom-0 right-0 ">
                {values.password === "" ? (
                  <span className="flex items-center w-2 h-2 subpixel-antialiased   text-xs m-1  leading-none   rounded-full">
                    {" "}
                    ✯{" "}
                  </span>
                ) : (
                  <span className="flex items-center w-4 h-3 subpixel-antialiased rounded-bl-md   bg-red-200   leading-none rounded-tr-md ">
                    {" "}
                  </span>
                )}
              </span>
            )}
          </div>

          <div className="relative">
            <Input
              id="passwordConfirmation"
              placeholder="********"
              type={passwordFormType2}
              className="pr-10"
              // error={
              //   values["password"] !== ""
              //     ? errors.passwordConfirmation
              //     : undefined
              // }
              onChange={(e) =>
                setFieldValue("passwordConfirmation", e.target.value)
              }
              value={values.passwordConfirmation}
              onBlur={() => handleBlur}
              style={{ width: "361px" }}
            />
            <img
            //   src={voir}
              alt="voir"
              className="absolute right-3 top-6 w-4 h-3 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setPasswordFormType2(
                  passwordFormType2 === "password" ? "text" : "password"
                );
              }}
            />
            {errors.passwordConfirmation && (
              <span className="absolute top-0 bottom-0 right-0 ">
                {values.passwordConfirmation === "" ? (
                  <span className="flex items-center w-2 h-2 subpixel-antialiased   text-xs m-1  leading-none   rounded-full">
                    {" "}
                    ✯{" "}
                  </span>
                ) : (
                  <span className="flex items-center w-4 h-3 subpixel-antialiased rounded-bl-md   bg-red-200   leading-none rounded-tr-md ">
                    {" "}
                  </span>
                )}
              </span>
            )}
          </div>
          {values.password !== "" && (
            <i className="text-xs w-64 ">{errors.password}</i>
          )}
          <i className="text-xs w-64 ">{errors.passwordConfirmation}</i>
        </div>

        <div className="flex justify-between	flex-wrap">
          <div className="relative">
            <Input
              id="adresse"
              placeholder="Saisissez votre adresse professionnelle"
              type="text"
              value={values.adresse}
              onChange={(e) => setFieldValue("adresse", e.target.value)}
              onBlur={() => handleBlur}
              style={{ width: "361px" }}
              className="mb-1.5 "
              // error={values["codePostale"] !== "" ? errors.adresse : undefined}
            />
            {errors.adresse && (
              <span className="absolute top-0 bottom-0 right-0 ">
                {values.adresse === "" ? (
                  <span className="flex items-center w-2 h-2 subpixel-antialiased   text-xs my-1 mx-2 leading-none   rounded-full">
                    ✯{" "}
                  </span>
                ) : (
                  <span className="flex items-center w-4 h-3 subpixel-antialiased rounded-bl-md   bg-red-200   leading-none rounded-tr-md ">
                    {" "}
                  </span>
                )}
              </span>
            )}
          </div>
          <div className="relative">
            <Input
              id="codePostale"
              placeholder="Saisissez votre code postal"
              type="number"
              value={values.codePostale}
              onChange={(e) => setFieldValue("codePostale", e.target.value)}
              onBlur={() => handleBlur}
              style={{ width: "361px" }}
              // error={values["phone"] !== "" ? errors.codePostale : undefined}
            />
            {errors.codePostale && (
              <span className="absolute top-0 bottom-0 right-0 ">
                {values.codePostale === "" ? (
                  <span className="flex items-center w-2 h-2 subpixel-antialiased   text-xs my-1 mx-2 leading-none   rounded-full">
                    ✯{" "}
                  </span>
                ) : (
                  <span className="flex items-center w-4 h-3 subpixel-antialiased rounded-bl-md   bg-red-200   leading-none rounded-tr-md ">
                    {" "}
                  </span>
                )}
              </span>
            )}
          </div>

          <div className="relative">
            <Input
              id="phone"
              placeholder="Saisissez votre numéro de téléphone"
              // error={values["codePostale"] !== "" ? errors.phone : undefined}
              type="text"
              value={values.phone}
              onChange={(e) => setFieldValue("phone", e.target.value)}
              onBlur={() => handleBlur}
              style={{ width: "361px" }}
            />
            {errors.phone && (
              <span className="absolute top-0 bottom-0 right-0 ">
                {values.phone === "" ? (
                  <span className="flex items-center w-2 h-2 subpixel-antialiased   text-xs my-1 mx-2 leading-none   rounded-full">
                    ✯{" "}
                  </span>
                ) : (
                  <span className="flex items-center w-4 h-3 subpixel-antialiased rounded-bl-md   bg-red-200   leading-none rounded-tr-md ">
                    {" "}
                  </span>
                )}
              </span>
            )}
          </div>
          <div className="relative">
            <Input
              id="birthday"
              type="date"
              value={values.birthday}
              onChange={(e) => setFieldValue("birthday", e.target.value)}
              onBlur={(e) => setFieldValue("birthday", e.target.value)}
              className="custom-Input mb-8"
              style={{ width: "361px" }}
            />

            <span className="absolute top-0 bottom-0 right-5">
              <span className="flex items-center w-max h-4 subpixel-antialiased px-1 py-1 text-xs  leading-none text-gray-400  bg-gray-100 rounded">
                <label className="text-sm text-gray-400">
                  Date de naissance{" "}
                </label>
              </span>
            </span>
            {errors.birthday && (
              <span className="absolute top-0 bottom-0 right-0 ">
                {values.birthday === "" ? (
                  <span className="flex items-center w-2 h-2 subpixel-antialiased   text-xs my-1 mx-2 leading-none   rounded-full">
                    ✯{" "}
                  </span>
                ) : (
                  <span className="flex items-center w-4 h-3 subpixel-antialiased rounded-bl-md   bg-red-200   leading-none rounded-tr-md ">
                    {" "}
                  </span>
                )}
              </span>
            )}
          </div>
          <p className="flex flexCenter border rounded-xl pr-2">
            {" "}
            <span className="flex items-center w-max h-4 subpixel-antialiased px-1 py-1 text-xs h-full leading-none text-gray-400  bg-gray-100 rounded">
              💡
            </span>
            <p className="text-indigo-500  text-xs">✯ Champ obligatoire </p>
          </p>
        </div>
      </form>
    </>
  );
};

export default Signup;
