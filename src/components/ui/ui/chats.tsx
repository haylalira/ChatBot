  
'use client'

import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { Button } from "../button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../card";
import { Input } from "../input";
 
import { useChat } from 'ai/react'


export default function Chat() {
 
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api:"/api/chat",
  })

  
    return (
  <div className='flex  min-h-screen items-center justify-center bg-fuchsia-100'>
    <Card className='w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]'>
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
      <CardDescription>Using Vercel SDK to create a chat bot</CardDescription>
      </CardHeader>
   <CardContent className='space-y-4'>
    { messages.map( message => {
      return(
      
      <div key={message.id} className='flex gap-3 text-slate-600 text-sn'>
      
      {message.role === 'user' && (
  <Avatar>
  <AvatarFallback>HL</AvatarFallback>
  <AvatarImage src='https://github.com/haylalira.png'/>
   </Avatar>
      )}
       {message.role === 'assistant' && (
  <Avatar>
  <AvatarFallback>HL</AvatarFallback>
  <AvatarImage src='https://github.com/rocketseat.png'/>
   </Avatar>
      )}
    

      <p className='leading-relaxed'>
       <span className='block font-bold text-slate-800'>{message.role === 'user' ? 'humano':"AI" }:</span>
     {message.content}
       </p>
     </div>)
    }) }
  
   </CardContent>
   <CardFooter>
    <form  className='space-x-2 bg w-full flex gap-2 ' onSubmit={handleSubmit} >
    <Input placeholder='how can I help you? ' value={input}
            onChange={handleInputChange} />
    <Button className='' type="submit">Send</Button>
    </form>
   </CardFooter>
    </Card>
  </div>
    )
  }