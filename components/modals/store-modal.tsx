"use client"

import * as z from "zod"
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { isAxiosError } from "axios"

import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/user-store-modal";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// create a schema the form will reference;
const formSchema = z.object({
    name: z.string().min(1),
})

export const StoreModal = () => {
    const storeModal = useStoreModal();

    const [loading, setLoading] = useState<boolean>(false);

    // intialize the form with the formSchema.
    const form = useForm<z.infer<typeof formSchema>>({
        // its the resolver that helps zod validate the form
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        }
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            setLoading(true);

            const response = await axios.post('/api/stores', values);

            window.location.assign(`/${response.data.id}`)

        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data || "Something went wrong!"
                toast.error(errorMessage);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <Modal
            title="Create a store"
            description="Add a new store to manage your products and categories"
            isOpen={storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            <Form
                {...form}
            >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Name
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Store name"
                                        {...field}
                                        disabled={loading}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="pt-6 space-x-12 flex items-center justify-end">
                        <Button
                            variant="outline" onClick={storeModal.onClose}
                            type="submit"
                        >
                            Cancel
                        </Button>
                        <Button>Continue</Button>
                    </div>
                </form>
            </Form>
        </Modal>
    )
}