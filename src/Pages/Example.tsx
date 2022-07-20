import React, { useState } from "react";
import "./stylesSignin.scss";
import "./styles.scss";
import * as Yup from "yup";
import validationSchema from "./validation";
import Signup from "../components/Step1";
import { FormikWizard } from "../components/FormikWizard";
import { Button, Input } from "@chakra-ui/react";
interface Props {

}

export const Example: React.FC<Props> = ({

}) => {
  const [file, setFile] = useState("./avisdocPolitique.pdf");
  const [numPages, setNumPages] = useState(null);

  const ProgressBar = (progress: number) => {
    const progressPercentage = (100 / 3) * (progress + 1);


    return (
      <div className=" h-2 w-full bg-gray-300 border rounded-md">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`h-full ${
            progressPercentage < 75 ? "bg-indigo-500" : "bg-green-300"
          }`}
        ></div>
      </div>
    );
  };
  const handleLogout = async () => {
    try {
      
      // setPath("/");
      window.location.href = "/";
      localStorage.clear();
    } catch (error) {
      window.location.href = "/";
      localStorage.clear();
      console.error(error);
    }
  };

  return (
    <div className="doctor-signup flexColCenter min-h-screen flex justify-center">
      <div className=" z-40 top-8 flexColCenter firstModal2 ">
        <h2>Bienvenue sur AvisDoc 👋 </h2>
        <div className="m-2 w-full">
          <ul className="stepper" data-mdb-stepper="stepper">
            <FormikWizard
              initialValues={
                {
                politique: "",
                condition: "",
                subscriptionId: "",
                stripeSubscriptionId: "",
                email: "",
                firstName: "",
                lastName: "",
                type: "",
                password: "",
                passwordConfirmation: "",
                customerId: "",
                numCom: "",
                city: "",
                address: "",
                codePostale: "",
                phone: "",
                speciality: "",
                gender: "",
                birthday: "",
                country: "France",
                newPassword: false,
              }}
              onSubmit={async (values) => {
         
                const { politique, condition } = values;

       console.log(values)
              }}
              validateOnNext
              activeStepIndex={0}
              steps={[
                {
                  component: ({
                    errors,
                    values,
                    handleChange,
                    setFieldValue,
                    
                  }) => (
                    <>
                      <div className="stepper-content text-justify text-sm mb-4 ">
                        En vous inscrivant, vous reconnaissez avoir pris
                        connaissance des Conditions Générales d’Utilisation et
                        de la Politique de protection des données personnelles
                        de Avisdoc et en accepter les termes.<br></br> Avisdoc,
                        responsable du traitement, a besoin de traiter vos
                        données pour créer et administrer votre compte dans le
                        cadre de votre usage de sa plateforme de téléexpertise,
                        pour assurer son bon fonctionnement et sa sécurité, pour
                        réaliser des enquêtes de satisfaction, des statistiques,
                        des études et autres actions de promotion sur
                        l’utilisation de ses services et pour répondre à vos
                        demandes. Tous les champs doivent obligatoirement être
                        remplis, faute de quoi nous ne serions pas en mesure de
                        satisfaire votre demande. La création de votre compte et
                        l’utilisation de la plateforme sont basées sur votre
                        consentement, ou sur les intérêts légitimes d’Avisdoc ou
                        sur le respect de ses obligations légales. Selon les
                        conditions applicables, vous pouvez modifier et accéder
                        à vos données, demander leur effacement ou leur
                        portabilité, exercer votre droit d’opposition ou de
                        limitation du traitement, et définir des directives
                        quant au sort de vos données, directement grâce aux
                        paramètres de votre compte ou par courriel à{" "}
                        <i className="font-bold">contact@avisdoc.co</i>.
                        <br></br> Lorsqu’il est la base légale applicable, vous
                        pouvez retirer à tout moment votre consentement au
                        traitement de vos données. Pour plus d’information, nous
                        vous invitons à consulter notre Politique de protection
                        des données personnelles.
                      </div>
                      <div className="flex flexCenter space-x-5  my-2 mx-4 ">
                        <a
                          className="flex  text-indigo-500 space-x-1   text-xs  "
                          href={"./avisdocConditions.pdf"}
                          target="_parent"
                          download="avisdocConditions.pdf"
                        >
                  
                        </a>

                        <a
                          className=" flex space-x-1 text-indigo-500  text-xs  "
                          href={"./avisdocPolitique.pdf"}
                          target="_blank"
                          download="avisdocPolitique.pdf"
                        >
                  
                          <p>
                            {" "}
                            Politique de protection des données personnelles
                          </p>
                        </a>
                      </div>
                      <Input
                        name="politique"
                        type="checkbox"
                        onChange={(e) => {
                          if (values.politique === "oui") {
                            setFieldValue("politique", "");
                          } else {
                            setFieldValue("politique", e.target.value);
                          }

                      
                        }}
                        value="oui"
                    aria-label="Je déclare avoir pris connaissance de la Politique de protection des données personnelles et accepte que mes données  soient collectées et traitées par Avisdoc selon ses termes.
       "
                        checked={values.politique === "oui"}
                      
                      />
                      <Input
                        name="condition"
                        type="checkbox"
                        onChange={(e) => {
                          if (values.condition === "oui") {
                            setFieldValue("condition", "");
                          } else {
                            setFieldValue("condition", e.target.value);
                          }

                 
                        }}
                        value="oui"
                        aria-label="Je déclare avoir pris connaissance et accepter les Conditions Générales d’Utilisation. "
                        checked={values.condition === "oui"}
                      
                      />
                    </>
                  ),
                  validationSchema: Yup.object().shape({
                    condition: Yup.string().required("required"),
                    politique: Yup.string().required("required"),
                  }),
                },
                {
                  component: ({
                    errors,
                    values,
                    handleBlur,
                    handleChange,
                    setFieldValue,
                    touched,
                  }) => (
                    <Signup
                      setFieldValue={setFieldValue}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      values={values}
                      errors={errors}
                      touched={touched}
                    />
                  ),
                  validationSchema: validationSchema,
                },

            
              ]}
            >
              {({
                renderComponent,
                handlePrev,
                handleNext,
                isNextDisabled,
                isPrevDisabled,
                isLastStep,
                currentStepIndex,
                values,
                setErrors,
                setFieldValue,
              }) => (
                <>
                  <div className="wrapper option-1 option-1-1">
                    {currentStepIndex
                      ? ProgressBar(currentStepIndex)
                      : ProgressBar(0)}
                    {}
                    <ol className="c-stepper">
                      <li className="c-stepper__item">
                        <h3
                          className={`c-stepper__title ${
                            currentStepIndex == 0
                              ? "text-indigo-500"
                              : "text-gray-300"
                          }`}
                        >
                          CGU et RGPD
                        </h3>
                        <p className="c-stepper__desc mb-3"></p>
                      </li>
                      <li className="c-stepper__item">
                        <h3
                          className={`c-stepper__title ${
                            currentStepIndex == 1
                              ? "text-indigo-500"
                              : "text-gray-300"
                          }`}
                        >
                          Informations personnelles
                        </h3>
                        <p className="c-stepper__desc mb-3"></p>
                      </li>
                      <li className="c-stepper__item">
                        <h3
                          className={`c-stepper__title ${
                            currentStepIndex == 2
                              ? "text-indigo-500"
                              : "text-gray-300"
                          }`}
                        >
                          Abonnement
                        </h3>
                        <p className="c-stepper__desc"></p>
                      </li>
                    </ol>
                    {renderComponent()}
                  </div>

                  <Button
                    
                    className="float-right flexCenter mx-5 my-5"
                    width="100px"
                    height="50px"
                    type="button"
                    onClick={
                      currentStepIndex == 1
                        ? async () => {
                            const CustomerId = null
                            if (CustomerId && CustomerId !== null) {
                              setFieldValue("stripeCustomerId", CustomerId);

                              handleNext();
                            } else if (CustomerId == null) {
                           
                              setErrors({ email: "email alredy Used" });
                            }
                          }
                        : handleNext
                    }
                    disabled={
                      isNextDisabled ||
                      (currentStepIndex == 2 && values.stripeCustomerId === "")
                    }
                  >
                    {" "}
                    {isLastStep ? "Terminer" : "Suivant "}{" "}
                  </Button>

                  {!isPrevDisabled && (
                    <>
                      <Button
               
                        className="float-right flexCenter mx- 5 my-5"
                        width="100px"
                        height="50px"
                        type="button"
                        onClick={handlePrev}
                        hidden={isPrevDisabled}
                      >
                        Précédent
                      </Button>
                    </>
                  )}

                  <Button
            
                    className="float-left flexCenter my-5"
                    width="100px"
                    height="50px"
                    type="button"
                    onClick={handleLogout}
                  >
                    Annuler
                  </Button>
                </>
              )}
            </FormikWizard>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example;
