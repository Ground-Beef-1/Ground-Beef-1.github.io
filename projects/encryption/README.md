# Encryption Activity Reflection


## Part 1: Key Exchange

My Key:1
My Partner's Key:6

Our initial shared key:7

## Part 2: Messaging

Complete this table with each of your messages. This should 
include the entire conversation - the messages that you sent
and the messages that you received.

(If you used something other than the caesar cipher here, describe what you did)

| Encoded Message | Decoded Message | Key |
| --------------- | --------------- | --- |
| VBIXK?          | CIPER?          |  7  |
| Vjcvu pqv jqy - |That's not how - |     |
|aqw urgnn earjgt.|you spell cypher.|  2  |
|VG’F PVCURE      |IT'S CIPHER      |  13 |
|Nbunm qbun C mucx|Thats what I said|  20 |

## Part 3: Connection to TCP/IP Model

### Application Layer: Turn your message into binary

Everything we've done in this activity takes place in the application layer. By the time the message leaves the application
layer, it is encoded in binary. We've been working with text for this activity
 for convenience, but let's see what the binary
looks like.

Go back to the first encrypted message that you sent (it should be in `
rsa_encryption_activity/send/encrypted_message.b64`).

This message is represented as a string of letters, numbers, and symbols. But
 we know that the real message is in binary.

Select the first six characters from this message and copy them here:

Using the ASCII table, convert these five characters to binary (if necessary,
include leading zeroes so that each character is 8 bits): 

### Transport Layer: Break your message into packets

Assume that each packet can hold two bytes. Fill in the packet information 
below with the binary values you computed above.

    =========
    Packet 1:D0

    Source: Madeline
    Destination: Graham  
    Sequence: 1/3
    Data: [0100 0100] [0011 0000]
    =========
    Packet 2:No

    Source: Madeline 
    Destination: Graham
    Sequence: 2/3 
    Data: [0100 1110] [0110 1111]
    =========
    Packet 3:Yg

    Source: Madeline
    Destination: Graham
    Sequence: 3/3
    Data: [0101 1001] [0110 0111]
    =========

## Part 4: Reflection Questions

- What is the difference between symmetric and asymmetric encryption? What 
purpose did each serve in this simulation? asymmetric encryption is with
two different keys (public for sender and public for reciever) where only
the private key can decode which is what the first message started with. 
Symmetric is the messaging part of the activity where we had matching decoders
- Why is it important that this protocol uses a new key for each message?
This is so if one key is found, the attacker only gets one message
- Why is it important that you never share your secret key?
It's kinda in the name... secret, private, whatever, just keep it that way. If
 you
share it, say goodbye to privacy because that is your secret decryptor so if it
is gotten, anyone can decrypt those messages.
- In the transport layer, do these messages use TCP or UDP? Why?
TCP because it is important nothing gets lost in transit with this activity.
- Now that you've created packets in the transport layer, give a short 
explanation of what happens to these packets in the internet layer and 
in the link layer.
In the internet layer, that guy gives IP adresses so it will be known where to
go. In the link layer, that is where we see what the message is (imagine I put
an epic thumbs-up emoji here because I dont know how to put it here yet).
- This protocol successfully encrypts the **content** of the message. 
Even though and adversary in the middle can't read the content of the message,
 what other
information can they still see?
Where it is from, where it is going (cotton eyed joe).
