"use client";

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter  } from '@/components/ui/card'
import { Form, FormField, FormItem, FormLabel, FormMessage, FormControl } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useSignupHook } from '@/hooks/useSignup';
import React from 'react'

export default function SignupPage() {
    const {form,onSubmit, isPending} = useSignupHook();
    return (
        <>
        <div className='flex justify-center items-center h-screen'>
        <Card className='w-[450px] h-auto bg-white shadow-lg rounded-2xl border-[#A08963]'>
            <CardHeader>
                <CardTitle className='text-center text-4xl font-bold text-[#A08963]'>SIGN UP</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="flex justify-between">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel className='text-[#A08963]'>First Name</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-[3px] border-[#A08963]' placeholder="Enter first name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel className='text-[#A08963] '>Last Name</FormLabel>
                                    <FormControl>
                                        <Input className='rounded-[3px] border-[#A08963]' placeholder="Enter last name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className='text-[#A08963] '>Address</FormLabel>
                                <FormControl>
                                    <Input className='rounded-[3px] border-[#A08963]' placeholder="Enter address" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className='text-[#A08963] '>Phone</FormLabel>
                                <FormControl>
                                    <Input className='rounded-[3px] border-[#A08963]' placeholder="Enter phone" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className='text-[#A08963] '>Email</FormLabel>
                                <FormControl>
                                    <Input className='rounded-[3px] border-[#A08963]' placeholder="Enter email" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className='text-[#A08963] '>Password</FormLabel>
                                <FormControl>
                                    <Input type='password' className='rounded-[3px] border-[#A08963]' placeholder="Enter password" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel className='text-[#A08963] '>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input type='password' className='rounded-[3px] border-[#A08963]' placeholder="Re-type password" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button className='min-w-full bg-[#A08963] text-[20px]  text-white hover:bg-[#d6ba8f]' type="submit" disabled={isPending}>
                            {isPending ? "CREATING.." : "REGISTER" }
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="justify-center">
                <p className="text-center">
                    Already have an account?
                    <Button variant="link" className="text-[#A08963] underline ml-1" onClick={() => window.location.href = "/login"}>
                        Sign in
                    </Button>
                </p>
            </CardFooter>
        </Card>

        </div>
        </>
    )
}
