import { useEffect, useState } from "react";

export default function useWebSocket(paymentId:string) {
  const [paid, setPaid] = useState<boolean>(false)

  useEffect(() => {
    const socket = new WebSocket(`wss://payments.pre-bnvo.com/ws/merchant/${paymentId}`)

    socket.addEventListener('message', (e) => {
      setPaid(true)
    })
  }, [])

  return paid
}