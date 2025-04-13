"use client";

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useSigninHook } from '@/hooks/useSignin'
import { Facebook } from 'lucide-react'
import React from 'react'

const SigninPage = () => {
  const { form, onSubmit } = useSigninHook();

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
        <Card className='w-[500px] bg-white shadow-lg rounded-lg p-6'>
          <CardHeader>
            <CardTitle><h1 className='text-2xl font-bold mb-4'>Sign In or Create your account</h1></CardTitle>
            <CardDescription><p>Sign up for free or log in to access amazing deals and benefits!</p></CardDescription>
          </CardHeader>
          <CardContent>
            <Button className='w-full bg-blue-600 hover:bg-blue-500 cursor-pointer rounded-full'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-5 h-5 mr-2 bg-white rounded-full p-1"
            >
              <path fill="#EA4335" d="M24 9.5c3.1 0 5.9 1.1 8.1 3.3l6-6C34.7 3.1 29.7 1 24 1 14.9 1 7.1 6.5 3.7 14.1l7.1 5.5C12.5 14 17.8 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.1 24.5c0-1.5-.1-3-.4-4.5H24v9h12.4c-.5 2.7-2 5-4.2 6.5l6.6 5.1c3.9-3.6 6.3-8.9 6.3-16.1z" />
              <path fill="#FBBC05" d="M10.8 28.1c-.7-2-1.1-4.1-1.1-6.1s.4-4.1 1.1-6.1L3.7 14C2 17.4 1 21 1 24.9s1 7.5 2.7 10.9l7.1-5.5z" />
              <path fill="#34A853" d="M24 47c5.7 0 10.6-1.9 14.1-5.1l-6.6-5.1c-1.8 1.2-4 1.9-7.5 1.9-6.2 0-11.5-4.5-13.2-10.5l-7.1 5.5C7.1 41.5 14.9 47 24 47z" />
            </svg>
              Sign with Google
            </Button>
            <Button className='w-full mt-2 bg-white bordered border-1 border-blue-600 text-blue-800 rounded-full hover:bg-white cursor-pointer'>
              <Facebook />
              Sign with Facebook
            </Button>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <p className="mx-4 text-gray-500">or</p>
              <hr className="flex-grow border-gray-300" />
            </div>

            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className='bg-white bordered border-1 border-blue-800 w-full hover:border-none rounded-full text-blue-800 hover:bg-blue-600 hover:text-white cursor-pointer' >Submit</Button>
            </form>
          </Form>
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-gray-500">Don`t have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a></p>
            {/* <p className="text-center text-sm text-gray-500">Forgot your password? <a href="/forgot-password" className="text-blue-600 hover:underline">Reset Password</a></p> */}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default SigninPage