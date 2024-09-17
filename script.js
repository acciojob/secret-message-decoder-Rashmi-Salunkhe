//your JS code here. If required.
      // Simulating object allocation in heap memory
        const heapMemory = {
            secretMessage: {
                encrypted: "Uifsf jt b tfdsfu nfttbhf!",
                decryptionKey: 1 // This is a Caesar cipher shift by 1
            },
            missionInfo: {
                missionName: "Operation Decode",
                priority: "High",
                agentName: "Agent X"
            }
        };

        // Function to decrypt the message using a simple Caesar cipher
        function decryptMessage(encryptedMessage, shift) {
            let decrypted = '';
            for (let i = 0; i < encryptedMessage.length; i++) {
                let char = encryptedMessage[i];
                
                // Only decrypt letters (ignore spaces and punctuation)
                if (char.match(/[a-zA-Z]/)) {
                    let charCode = encryptedMessage.charCodeAt(i);

                    // Decrypt uppercase letters
                    if (charCode >= 65 && charCode <= 90) {
                        char = String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
                    }
                    // Decrypt lowercase letters
                    else if (charCode >= 97 && charCode <= 122) {
                        char = String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
                    }
                }

                decrypted += char;
            }
            return decrypted;
        }

        // Accessing the encrypted message from heap memory
        const encryptedMessage = heapMemory.secretMessage.encrypted;
        const decryptionKey = heapMemory.secretMessage.decryptionKey;

        // Decrypting the message
        const decryptedMessage = decryptMessage(encryptedMessage, decryptionKey);

        // Display the decrypted message
        document.getElementById('message-area').innerText = `Decrypted Message: ${decryptedMessage}`;
   