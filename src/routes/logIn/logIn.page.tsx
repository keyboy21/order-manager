import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/form"
import { Button } from "@/components/ui/Button"
import {
     Card,
     CardContent,
     CardDescription,
     CardHeader,
     CardTitle,
} from "@/components/ui/Card"
import { Container } from "@/components/ui/Container"
import { Input } from "@/components/ui/Input"
import { useAuth } from "@/providers/auth.provider"
import { notify } from "@/utils/notify.util"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Toaster } from "sonner"
import { z } from "zod"

export function LoginPage() {

     const navigate = useNavigate();
     const { onLogin } = useAuth();

     const form = useForm<z.infer<typeof logInSchema>>({
          resolver: zodResolver(logInSchema),
          defaultValues: {
               username: "",
               password: "",
          },
     });

     const onSubmit = async (formData: z.infer<typeof logInSchema>) => {
          const { username, password } = formData;

          if (username && password === 'admin') {
               onLogin({ username, password }, () => {
                    navigate("/");
               });
          } else {
               notify("Учетные данные введены неверно", {
                    type: "error",
               });
          }

     };

     return (
          <section>
               <Container className="flex justify-center items-center h-[100vh] flex-col">
                    <Card className="w-full max-w-sm">
                         <CardHeader className="text-center">
                              <CardTitle className="text-2xl">Вход</CardTitle>
                              <CardDescription className="text-sm">Для входа в систему</CardDescription>
                         </CardHeader>
                         <CardContent>
                              <Form {...form}>
                                   <form
                                        onSubmit={form.handleSubmit(onSubmit)}
                                        className="flex flex-col gap-y-3"
                                   >
                                        <FormField
                                             control={form.control}
                                             name="username"
                                             render={({ field }) => (
                                                  <FormItem>
                                                       <FormLabel>User name</FormLabel>
                                                       <FormControl>
                                                            <Input placeholder="Enter user name" {...field} />
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
                                                            <Input
                                                                 type="password"
                                                                 {...field}
                                                            />
                                                       </FormControl>
                                                       <FormMessage />
                                                  </FormItem>
                                             )}
                                        />
                                        <Button color="green" type="submit">
                                             Создать
                                        </Button>
                                   </form>
                              </Form>
                         </CardContent>
                    </Card>

               </Container>
               <Toaster />
          </section>
     )
}

const logInSchema = z.object({
     username: z.string({
          message: "enter correct username",
     }).min(5, {
          message: "username must be at least 5 characters",
     }),
     password: z
          .string()
          .min(5, {
               message: "password must be at least 6 characters",
          }),
});
