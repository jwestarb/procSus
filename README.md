# README #

Aplicativo Móvel ProcSUS

### What is this repository for? ###

* Desenvolvido com IONIC Framework.
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions


### Passos para outra pessoa contribuir com o projeto ###

Iniciar fazendo um fork do repositório original: https://bitbucket.org/jwestarb/procsus

* Clone seu projeto do seu repositório:
```
git clone git@bitbucket.org:<SEU_USUARIO>/procsus.git
```
* Para evitar git merge git e hard code merge, você deve trabalhar em um ramo diferente do *master*. Eu uso o nome padrão *work* para o branch.
```
git branch work
```
* Depois de fazer modificações no seu repositório local no branch *work*. Deve fazer *commit*.
```
git commit -am "Mensagem explicando as alterações"
```
* **Passo Importante:** Antes de enviar suas mudanças, atualize seu repo local com o repo do projeto principal, portanto, agora, você vai precisar fazer um *fetch* remoto.
```
git remote add upstream git@bitbucket.org:jwestarb/procsus.git
```
E faça um pull
```
git fetch upstream
```
Faça um merge para o branch master
```
git checkout master
git merge upstream/master master
```
* Now we can push our changes from *work* branch to *master* and after to your personal repo
* Agora nós podemos empurrar nossas mudanças de * trabalho * branch para * * mestre e após a sua repo pessoal
* Agora pode fazer um push das mudanças do brach *work* para o *master* e depois para o seu repositório local
```
git checkout work
git rebase master
git checkout master
git merge work
git push origin master
#go back to work for new changes
git checkout work
```
Quando faz um "rebase master", git irá pegar todos commits do *master* e colocar no branch *work*, mas seus commits locais no branch *work* estão sempre no topo. Com este guia você evitar conflitos e commita seu código sempre no topo, tornando-se a última alteração do repo.

Você pode criar "alias" para os comandos. Examplo:
```
alias async='git checkout master && git fetch upstream && git merge upstream/master master && git checkout work && git rebase master'
```
Deste modo é só digitar *async* no termial antes de iniciar mudanças antes de fazer Pull das suas alterações.

Outro exemplo:
```
alias apush='git checkout master && git merge work && git push origin master && git checkout work'
```
