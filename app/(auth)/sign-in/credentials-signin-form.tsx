'use client'
import Link from "next/link"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { signInWithCredentials } from "@/lib/actions/user.actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const CredentialsSignInForm = () => {
    const [data, action] = useActionState(signInWithCredentials, {
        success: false,
        msg: ''
    })

    const SignInButton = () => {
        const { pending } = useFormStatus()

        return <Button disabled={pending} className="w-full mt-8 bg-slate-400 hover:bg-slate-500" variant='default'>
            {pending ? 'Signing In...' : 'Sign In'}
        </Button>
    }

    return (
        <form action={action}>
            <div className="grid gap-y-8">
                <div className="grid gap-2">
                    <Label htmlFor="email" className="font-semibold">Email</Label>
                    <Input type="email" id="email" name="email" autoComplete="email" placeholder="Email" required />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password" className="font-semibold">Password</Label>
                    <Input type="password" id="password" name="password" autoComplete="password" placeholder="Password" required />
                </div>
            </div>
            {data && !data.success && data.msg != '' && (<div className="text-center text-sm text-destructive mt-6">{data.msg}</div>)}
            <SignInButton />
            <div className="text-sm text-center text-muted-foreground mt-6">
                Don&apos;t have an account?&nbsp;
                <Link href="/sign-up" target="_self" className="hover:underline">Sign Up</Link>
            </div>
        </form>
    )
}

export default CredentialsSignInForm