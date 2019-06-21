import React, { useEffect, useState } from 'react'
import { Formik, Field, ErrorMessage } from 'formik';
import { Container, TextField, Typography, Button } from '@material-ui/core';
import api from "../../lib/Api"
import * as Yup from 'yup';

function ProfilePage() {
    const[profile,setProfile] = useState()
    const schema = Yup.object({
        name:Yup.string().required(),
        dob:Yup.date().required(),
        username:Yup.string().required(),
        address:Yup.string().required()
    })
    useEffect(()=>{
        api.get_user_details().then(data=>setProfile(data))
    },[])

    return (
        <Container size="lg">
            <Typography variant="h5" component="h1">Profile Management</Typography>
            {profile && 
                <Formik 
                    onSubmit={
                        (values,action)=>{
                            console.log(values);
                            action.setSubmitting(false);
                        }
                    }
                    initialValues={profile}
                    validationSchema={schema}
                    render={
                        ({ 
                            values,
                            errors,
                            status,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting 
                        }) => {
                            const formOption={onChange:handleChange,onBlur:handleBlur,fullWidth:true}
                            return (
                                <form onSubmit={handleSubmit}>
                                    <TextField
                                        type="text"
                                        id="name"
                                        name="name"
                                        label="Name"
                                        value={values['name']}
                                        error={touched.email && Boolean(errors.email)}
                                        {...formOption}
                                        />
                                    <div className="text-danger">{errors.name}</div>
                                    
                                    <TextField
                                        type="text"
                                        id="username"
                                        name="username"
                                        label="Username"
                                        value={values['username']}
                                        {...formOption}
                                        />
                                    <div className="text-danger">{errors.username}</div>

                                    <TextField
                                        type="date"
                                        id="dob"
                                        name="dob"
                                        label="Date of Birth"
                                        value={values['dob']}
                                        {...formOption}
                                        />
                                    <div className="text-danger">{errors.dob}</div>

                                    <TextField
                                        type="text"
                                        id="address"
                                        name="address"
                                        label="Address"
                                        value={values['address']}
                                        {...formOption}
                                        />
                                     <div className="text-danger">{errors.address}</div>
                                    
                                    <Button type="submit" disabled={isSubmitting} color="primary" size="medium">Save</Button>
                                </form>
                        )}
                }
                />
            }
        </Container>
    )
}

export default ProfilePage
