import { z } from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";


const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "name is required"),
    addressLine1: z.string().min(1, "Address Line is required"),
    city: z.string().min(1, "City is required"),
    country: z.string().min(1, "Country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
    onSave: (userProfileData: UserFormData) => void;
    isLoading: boolean;

}

const UserProfileForm = ({ onSave, isLoading}: Props) => {
    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
    });

    return(
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSave)}
                className="space-y-4 bg-grey-50 rounded-lg md:p-10"
            >
                <div>
                    <h2 className="text-2xl font-bold"> User Profile Form</h2>
                    <FormDescription>
                        View and change your profile information here
                    </FormDescription>

                </div>
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} disabled className="bg-white"/>
                            </FormControl>
                        </FormItem>
                    )}/>

                <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} disabled className="bg-white"/>
                        </FormControl>
                    </FormItem>
                )}/>

                <div className="flex flex-col md:flex-row gap-4">
                    <FormField control={form.control} name="addressLine1" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} disabled className="bg-white"/>
                            </FormControl>
                        </FormItem>
                    )}/>
                </div>
            </form>
        </Form>
    )

}

export default UserProfileForm;