import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Textarea,
  VStack,
  Text,
} from '@chakra-ui/react';
import { FiSend } from 'react-icons/fi';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import './utils/form.css';
import { MyFormValues } from '../interfaces';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const FormSection: React.FC<{}> = () => {
  const initialValues: MyFormValues = { name: '', email: '', message: '' };
  const sendSchema = Yup.object().shape({
    name: Yup.string().required('Name required').min(6, 'Name is too short'),
    email: Yup.string().email('invalid email').required('Email required'),
    message: Yup.string().required('Message required'),
  });
  const form: any = useRef();
  const [success, setSuccess] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={sendSchema}
      onSubmit={(values, onSubmitProps) => {
        emailjs
          .sendForm(
            'service_ebgsz0b',
            'template_qbbaqgb',
            form.current,
            'LOxpMxPK_gvAsON7J'
          )
          .then(
            (result) => {
              setSuccess(true);
            },
            (error) => {
              console.log(error.text);
            }
          );
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();
        setTimeout(() => {
          setSuccess(false);
        }, 3800);
      }}
    >
      {({ handleSubmit, values, handleChange, errors }) => (
        <Form ref={form} onSubmit={handleSubmit}>
          <VStack gap={4} w={'100%'} alignItems={'flex-start'} position={'relative'}>
            <Heading
              as={'h3'}
              fontSize={'2xl'}
              mb={3}
              opacity={0.8}
              color={'brand.secondary'}
            >
              Send Me a Message
            </Heading>

            <FormControl>
              <FormLabel>Your Name</FormLabel>
              <InputGroup>
                {errors.name && (
                  <Text
                    position={'absolute'}
                    bottom={'-20px'}
                    right={0}
                    bg={'brand.secondary'}
                    fontSize={'xs'}
                    px={3}
                    borderRadius={5}
                    zIndex={1}
                  >
                    {errors.name}
                  </Text>
                )}
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="type your name..."
                  _placeholder={{ opacity: 0.3, color: 'inherit' }}
                  focusBorderColor="brand.secondary"
                  boxShadow="sm"
                  value={values.name}
                  onChange={handleChange}
                  position={'relative'}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Your Email address</FormLabel>
              <InputGroup>
                {errors.email && (
                  <Text
                    position={'absolute'}
                    bottom={'-20px'}
                    right={0}
                    bg={'brand.secondary'}
                    fontSize={'xs'}
                    px={3}
                    borderRadius={5}
                    zIndex={1}
                  >
                    {errors.email}
                  </Text>
                )}
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="type your email..."
                  _placeholder={{ opacity: 0.3, color: 'inherit' }}
                  focusBorderColor="brand.secondary"
                  boxShadow="sm"
                  value={values.email}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Message</FormLabel>
              {errors.message && (
                <Text
                  position={'absolute'}
                  bottom={'-20px'}
                  right={0}
                  bg={'brand.secondary'}
                  fontSize={'xs'}
                  px={3}
                  borderRadius={5}
                  zIndex={1}
                >
                  {errors.message}
                </Text>
              )}
              <Textarea
                id="message"
                name="message"
                focusBorderColor="brand.secondary"
                boxShadow="sm"
                value={values.message}
                onChange={handleChange}
              />
            </FormControl>
            <Button
              type="submit"
              variant={'outline'}
              boxShadow="md"
              size={'lg'}
              leftIcon={<FiSend />}
            >
              Submit
            </Button>
            {success && (
              <Text
                position={'absolute'}
                bottom={'-40px'}
                left={0}
                bg={'brand.secondary'}
                fontSize={'sm'}
                px={3}
                borderRadius={5}
                zIndex={1}
              >
                El mensaje se envió con exito!
              </Text>
            )}
          </VStack>
        </Form>
      )}
    </Formik>
  );
};

export default FormSection;
