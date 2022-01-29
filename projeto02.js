console.clear()
const prompt = require('prompt-sync')();
console.log()



var jogadornome = "";
var name = "";
var playerchoice = ""; 
var computerchoice="";
var reiniciar = "";

console.log('Vamos jogar Jokenpô')
jogadornome = prompt('Qual o seu nome? ')
name = jogadornome
console.log(`${name} boa sorte! `)
console.log()
    
var continuar = 'sim'

               while(continuar == 'sim') {
                   console.clear()
                let rounds = +prompt(`${name} você deseja jogar quantas rodadas? `)
                var jogadorpontos = 0; 
                var computadorpontos = 0;
                for (let i=1; i<=rounds; i++) 
                {
                        var novaArray  = ['pedra', 'papel', 'tesoura']
                        console.log('')    
                        playerchoice = prompt(`Escolha entre Pedra, Papel e Tesoura:`).toLocaleLowerCase();
                            
                            var computerchoice = novaArray[Math.floor(Math.random() * novaArray.length)];
                                    console.log(`Resposta do computador: ${computerchoice}`);
                                    if (playerchoice == 'papel' && computerchoice == 'papel'){
                                    console.log("Vocês empataram!")
                                    }
                                    else if(playerchoice == 'papel' && computerchoice == 'pedra'){
                                        console.log('Você ganhou!')
                                        jogadorpontos++
                                    } 
                                    else if(playerchoice == 'papel' && computerchoice == 'tesoura'){
                                        console.log('Você perdeu!')
                                        computadorpontos++
                                    } 
                                    else if(playerchoice == 'pedra' && computerchoice == 'pedra'){
                                        console.log('Vocês empataram!')
                                    }
                                    else if(playerchoice == 'pedra' && computerchoice == 'tesoura'){
                                        console.log('Você ganhou!')
                                        jogadorpontos++
                                    }
                                    else if(playerchoice == 'pedra' && computerchoice == 'papel'){
                                        console.log('Você perdeu!')
                                        computadorpontos++
                                    }
                                    else if(playerchoice == 'tesoura' && computerchoice == 'tesoura'){
                                        console.log('Vocês empataram!')
                                    }
                                    else if(playerchoice == 'tesoura' && computerchoice == 'papel'){
                                        console.log('Você ganhou!')
                                        jogadorpontos++
                                    }
                                    else if(playerchoice == 'tesoura' && computerchoice == 'pedra'){
                                        console.log('Você perdeu!')
                                        computadorpontos++
                              }
                              
                                
                      }
                      console.log('')
                              console.log(`Você venceu ${jogadorpontos} vezes!`)
                              console.log(`O computador venceu ${computadorpontos} vezes`)
                              if(jogadorpontos>computadorpontos){
                              console.log('Você venceu!')
                              }else if(jogadorpontos == computadorpontos){
                              console.log('Vocês empataram!')
                              }else if(jogadorpontos<computadorpontos){
                              console.log('Você perdeu!')

                     }
                     continuar = prompt('Deseja começar o jogo novamente? ').toLocaleLowerCase();

            }
