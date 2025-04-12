"use client";

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription  } from '@/components/ui/card'
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useSignupHook } from '@/hooks/useSignup';
import Image from 'next/image'
import React from 'react'

export default function SignupPage() {
    const {form, onSubmit, isPending, error, success} = useSignupHook();
    return (
        <>
        <div className="flex justify-center items-center h-screen">
            <div className="absolute inset-0">
                <Image
                    src="/bg.jpg"
                    alt="background picture"
                    width={1000}
                    height={400}
                    className="w-full h-[400px] object-cover opacity-70"
                />
                <div className="h-[120vh] absolute inset-0 bg-gray-700 opacity-80"></div>
            </div>
            <div className="relative z-10 flex flex-col justify-center items-center text-white">
            <div className="mb-[20px] mt-[100px]">
                <h1 className="text-4xl text-white font-bold text-">Welcome to CRDelux <sup>®</sup></h1>
                <p className="text-lg text-white text-center">Join us and experience the best services.</p>
                <p className="text-lg text-white text-center">Create your account to get started.</p>
                <p className="text-lg text-white text-center">We are glad to have you here.</p>
            </div>
                <Card className="w-[800px] h-auto bg-white shadow-lg rounded-2xl">
                    <CardHeader>
                        <CardTitle className='text-center text-4xl'>Join CRDelux <sup>®</sup> for Free</CardTitle>
                        <CardDescription className='text-center text-lg'>Get access to exclusive benefits and start your journey with us today.</CardDescription>
                    </CardHeader>
                    <CardContent className='mt-[30px]'>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4 ">
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem className=''>
                                            <FormLabel className='text-md text-black'>First Name</FormLabel>
                                            <FormControl>
                                                <Input className='rounded-[3px] h-[45px]' placeholder="Enter First Name" {...field} />
                                            </FormControl>
                                            <FormMessage className='text-[12px]'/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel className='text-md text-black'>Last Name</FormLabel>
                                            <FormControl>
                                                <Input className='rounded-[3px] h-[45px]' placeholder="Enter Last Name" {...field} />
                                            </FormControl>
                                            <FormMessage className='text-[12px]'/>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel className='text-md text-black'>Address</FormLabel>
                                        <FormControl>
                                            <Input className='rounded-[3px] h-[45px]' placeholder="Enter Your Address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel className='text-md text-black'>Phone</FormLabel>
                                            <FormControl>
                                                <Input className='rounded-[3px] h-[45px]' placeholder="Enter phone" {...field} />
                                            </FormControl>
                                            <FormMessage className='text-[12px]'/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel className='text-md text-black'>Email</FormLabel>
                                            <FormControl>
                                                <Input type='email' className='rounded-[3px] h-[45px]' placeholder="Enter email" {...field} />
                                            </FormControl>
                                            <FormMessage className='text-[12px]'/>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem>
                                                <FormLabel className='text-md text-black'>Password</FormLabel>
                                                <FormControl>
                                                    <Input type='password' className='rounded-[3px] h-[45px]' placeholder="Enter password" {...field} />
                                                </FormControl>
                                                <FormMessage className='text-[12px]'/>
                                                </FormItem>
                                            )}
                                        />
                                    <FormField
                                        control={form.control}
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel className='text-md text-black'>Confirm Password</FormLabel>
                                            <FormControl>
                                                <Input type='password' className='rounded-[3px] h-[45px]' placeholder="Re-type password" {...field} />
                                            </FormControl>
                                            <FormMessage className='text-[12px]'/>
                                            </FormItem>
                                        )}
                                    />
                                    <div className='items-center justify-center'>
                                        <ul  className="text-[12px] text-gray-500 list-disc pl-5 space-y-1">
                                            <li className=''>Password must be at least 8 characters long.</li>
                                            <li className=''>Password must contain at least one uppercase letter.</li>
                                            <li className=''>Password must contain at least one lower letter.</li>
                                            <li className=''>Password must contain at least one number.</li>
                                            <li className=''>Password must contain at least one special character.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex mt-[30px]">
                                    <Button className='w-[100px ] text-lg mr-4  text-white rounded rouded-sm' type="submit" disabled={isPending}>
                                        {isPending ? "Creating.." : "Create" }
                                    </Button>
                                    <p className="text-center text-[12px] text-gray-500">
                                        Already have an account?
                                        <Button variant="link" className="underline text-md " onClick={() => window.location.href = "/login"}>
                                            Sign in
                                        </Button>
                                    </p>
                                </div>
                            </form>
                        </Form>
                        {error && <p className='text-red-500 text-center mt-2'>{error}</p>}
                        {success && <p className='text-green-500 text-center mt-2'>{success}</p>}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
