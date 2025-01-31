import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { APP_NAME } from "@/lib/constants"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import CredentialsSignInForm from "./credentials-signin-form"

export const metadata: Metadata = {
    title: 'Sign In'
  }

const SignInPage = () => {
    return (
        <Card>
            <CardHeader>
            <Link href="/">
                <CardTitle className="grid grid-cols-[auto_1fr] items-center gap-0">
                    
                        <Image src="/images/ghost_skateboard_logo.svg" width={130} height={60} alt={`${APP_NAME} Logo`} priority={true} />
                        <h1 className="text-5xl"><span className="text-slate-400">CHEAP</span>SKATE</h1>
                
                </CardTitle>
                </Link>
                <CardDescription className="flex justify-center">
                    <h3 className="text-xl font-semibold">Sign in to your account</h3>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <CredentialsSignInForm />
            </CardContent>
        </Card>
    )
}

export default SignInPage