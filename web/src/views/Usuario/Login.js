import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { toast } from 'react-toastify';

import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik';
import * as yup from 'yup';

import { Button, TextField, Typography } from '@material-ui/core';

import api from '../../services/api';
import { addToken } from '../../store/modules/auth/ection';

const useStyles = makeStyles((theme) => ({
    content: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    contentBody: {
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
    },
    form: {
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 125,
        flexBasis: 700,
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    },
    title: {
        marginTop: theme.spacing(3),
    },
    sugestion: {
        marginTop: theme.spacing(2),
    },
    textField: {
        marginTop: theme.spacing(2),
    },
    signInButton: {
        margin: theme.spacing(2, 0),
    },
}));

const validaCampos = yup.object().shape({
    email: yup
        .string()
        .email('O Email  é invalido')
        .required('O email é obrigatório'),
    senha: yup.string().required('Senha é obrigatória'),
});

const SignIn = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = async (values) => {
        api.post('auth', values)
            .then((response) => {
                const { token } = response.data;
                dispatch(addToken(token));
            })
            .catch((err) => {
                toast.error(err.response.data.error);
            });
    };
    return (
        <div className={classes.content}>
            <div className={classes.contentBody}>
                <Formik
                    initialValues={{ email: '', senha: '' }}
                    validationSchema={validaCampos}
                    onSubmit={handleSubmit}
                >
                    {() => (
                        <FormikForm className={classes.form}>
                            <Typography
                                align="center"
                                className={classes.title}
                                color="textSecondary"
                                variant="h2"
                            >
                                Seja bem vindo!
                            </Typography>
                            <div>
                                <Field
                                    className={classes.textField}
                                    fullWidth
                                    label="Seu email"
                                    name="email"
                                    type="text"
                                    as={TextField}
                                    variant="outlined"
                                />
                                <ErrorMessage component="span" name="email" />
                            </div>

                            <div>
                                <Field
                                    className={classes.textField}
                                    fullWidth
                                    label="Sua senha"
                                    name="senha"
                                    type="password"
                                    as={TextField}
                                    variant="outlined"
                                />
                                <ErrorMessage component="span" name="senha" />
                            </div>

                            <Button
                                className={classes.signInButton}
                                color="primary"
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Entrar
                            </Button>
                        </FormikForm>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default withRouter(SignIn);
