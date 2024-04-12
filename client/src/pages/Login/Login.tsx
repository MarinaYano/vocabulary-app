import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authSchema } from "@/schema/auth.schema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const form = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      username: "",
      password: "",
    }
  })

  function onSubmit(values: z.infer<typeof authSchema>) {
    console.log(values)
  }

  return (
    <div className="border solid rounded w-80 mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-72 min-w-64 my-5 mx-auto space-y-8">
        <h3 className="text-lg font-semibold mt-5">Login</h3>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
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
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center">
            <Button type="submit">Submit</Button>
            <Link to='/signup'>
              <span className="px-4 py-2 text-sm font-medium">
                Sign Up
              </span>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default Login