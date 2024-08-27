import React from "react"
import {InputOTP,InputOTPGroup,InputOTPSlot} from "@/components/ui/input-otp"
  
export default function OTP() {
    return(
        <InputOTP maxLength={6}>
            <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
            </InputOTPGroup>
        </InputOTP>

    )
}