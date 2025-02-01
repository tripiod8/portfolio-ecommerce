'use server';

import { signIn, signOut } from "@/auth";
import { signInFormSchema } from "../validators";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function signInWithCredentials(prevState: unknown, formData: FormData) {
    try {
        const user = signInFormSchema.parse({
            email: formData.get('email'),
            password: formData.get('password')
        })
        await signIn('credentials', user)

        return {success: true, msg: 'Signed in successfully.'}
    } catch (error) {
        if(isRedirectError(error)) {
            throw error

            return {success: false, msg: 'Invalid email or password.'}
        }
    }
}

export async function signOutUser() {
    await signOut()
}

function ciLeanrFunc()
{
    console.log('CI Learn 3');
}