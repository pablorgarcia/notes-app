(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{g7Zk:function(e,a,o){"use strict";o.r(a),o.d(a,"GitModule",function(){return t});var s=o("tyNb"),n=o("fXoL");const r=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=n.xb({type:e,selectors:[["app-git-page"]],decls:56,vars:0,consts:[[1,"markdown-body"]],template:function(e,a){1&e&&(n.Gb(0,"main",0),n.Gb(1,"h1"),n.Qb(2,"Gu\xeda r\xe1pida para Git"),n.Fb(),n.Gb(3,"p"),n.Qb(4,"Comandos de Git usados en el d\xeda a d\xeda. Versi\xf3n: Explicado rapidillo pa' ti y pa' mi..."),n.Fb(),n.Gb(5,"h2"),n.Qb(6,"Diferentes estados de tu archivo"),n.Fb(),n.Gb(7,"ol"),n.Gb(8,"li"),n.Gb(9,"b"),n.Qb(10,"Working area"),n.Fb(),n.Qb(11,": Pues como bien dice, el momento en el que est\xe1s trabajado. Escribiendo tus cosas, borrando..."),n.Fb(),n.Gb(12,"li"),n.Gb(13,"b"),n.Qb(14,"Stagin Area"),n.Fb(),n.Qb(15," o "),n.Gb(16,"b"),n.Qb(17,"Index"),n.Fb(),n.Qb(18,": Oye esto ya me mola, creo que lo deber\xeda guardar..."),n.Fb(),n.Gb(19,"li"),n.Gb(20,"b"),n.Qb(21,"Commited"),n.Fb(),n.Qb(22," o "),n.Gb(23,"b"),n.Qb(24,"HEAD"),n.Fb(),n.Qb(25,": \xa1 Ala guardao !"),n.Fb(),n.Fb(),n.Qb(26,' ![Flujo de trabajo](https://github.com/pablorgarcia/Guia-rapida-para-Git/blob/master/images/workflow.png "Flujo de trabajo") '),n.Gb(27,"h3"),n.Qb(28,"Mirar el estado de nuestros archivos"),n.Fb(),n.Gb(29,"code"),n.Qb(30,"`git status`"),n.Fb(),n.Gb(31,"p"),n.Qb(32,"Nos dice el estado en el que se encuentran nuestros archivos. Si est\xe1n sin seguimiento, si tienen seguimiento pero se han cambiado o si est\xe1n en Stagin ya."),n.Fb(),n.Gb(33,"h3"),n.Qb(34,"Meter en Stagin Area"),n.Fb(),n.Gb(35,"code"),n.Qb(36,"`git add <archivo>`"),n.Fb(),n.Gb(37,"p"),n.Qb(38,"A\xf1ade el archivo que le pasemos a stagin area, y que luego estar\xe1 en el commit."),n.Fb(),n.Gb(39,"code"),n.Qb(40,"`git add <archivo1> <archivo2>`"),n.Fb(),n.Gb(41,"p"),n.Qb(42,"A\xf1ade varios archivos a stagin."),n.Fb(),n.Gb(43,"code"),n.Qb(44,"`git add .`"),n.Fb(),n.Gb(45,"p"),n.Qb(46,'El "." agrega todo a stagin.'),n.Fb(),n.Gb(47,"h3"),n.Qb(48,"Remover de Stagin Area"),n.Fb(),n.Gb(49,"code"),n.Qb(50,"`git rm <archivo>`"),n.Fb(),n.Gb(51,"p"),n.Qb(52,"Elimina un archivo de stagin."),n.Fb(),n.Gb(53,"h3"),n.Qb(54,"Hacer un commit"),n.Fb(),n.Qb(55," `git commit -m \"Mensaje descriptivo del cambio\"`\nCon este comando hacemos un commit de los archivos que est\xe9n en stagin area. Se hace una instantanea de los archivos en ese momento y se agrega a la cabecera (HEAD) quedando registrado y guardado como un punto en el tiempo. Pero a\xfan no en tu repositorio remoto. `git commit -m \"Mensaje descriptivo del cambio\" <archivo>`\nHacemos un commit de solo un archivo de stagin. `git commit --amend -m \"Mensaje descriptivo del cambio\"`\nModificamos el \xfaltimo commit. ### Hacer un push\nTus cambios est\xe1n ahora en el HEAD de tu copia local. Para enviar estos cambios a tu repositorio remoto ejecuta.\n`git push origin master` ### Guardar r\xe1pido tus cambios, sin llegar a hacer un 'add' Muchas veces, cuando has estado trabajando una parte del c\xf3digo, los archivos se pueden desordenar y al querer cambiar de rama un momento para hacer otra cosa hay un conflicto. Si no quieres hacer un commit de un trabajo porque va por la mitad y quieres volver a ese punto m\xe1s tarde puedes hacer un: `git stash` `git stash list` si quieres ver una lista con los archivos que tienes 'staseados' `git stash pop`\nLos cambios guardados en stash vuelven. `git status --show-stash`\nVer el status con los archivos en stash. ### \xbfC\xf3mo descartar los cambios 'unstaged'? `git checkout -- .`\nPara todos los archivos 'unstaged'. Esto reemplaza los cambios en tu directorio de trabajo con el \xfaltimo contenido de HEAD. Los cambios que ya han sido agregados al Index, as\xed como tambi\xe9n los nuevos archivos, se mantendr\xe1n sin cambio. `git checkout -- path/to/file/to/revert`\nPara un archivo en un path especifico. ### Listar los commits `git log`\nNos mostrar\xe1 un log o hist\xf3rico de commits realizados en este repositorio. Copiarlo en un archivo de texto o similar puede ser una gran idea si piensas viajar en el tiempo de tu hist\xf3rico. Para salir de ah\xed pulsa `q`. ### Viajar en el tiempo `git checkout <codigo_sha>`\nNos lleva al estado del repositorio en ese momento. Para volver a donde est\xe1bamos tienes que coger el c\xf3digo SHA en el que te encontrabas. ### Desacer el commit volviendo al anterior, desaciendo los cambios `git reset --hard`\nNo te han gustado los cambios y quieres volver al estado del \xfaltimo commit, eliminando de manera permanente todos los cambios a todos los archivos realizados.\nLa opci\xf3n \"--hard\" provoca que si hubiera archivos que no se han agregado al repositorio permanecer\xe1n. `git reset --soft`\nIguala tu 'staging area' con el 'repositorio', no afectar\xe1 tu 'working directory' y hace un `add` a los archivos. No borra el c\xf3digo. ## Las ramas\nToma el estado en el que se encuentra el archivo y hace una derivaci\xf3n a otro espacio, de forma que se puede trabajar en \xe9l sin afectar al archivo inicial. M\xe1s adelante podemos juntarlos. ### Crear una rama `git branch <nombre_rama>`\nPor ejemplo: `git branch someTest` ### Cambiarse a esa rama `git checkout <nombre_rama>`\nPor ejemplo: `git checkout mi-rama` ### Trabaja en tu rama Dentro de tu rama puedes trabajar normal, hacer tus commits y avanzar en el proyecto, pero lo que haces est\xe1 s\xf3lo en esa rama. Si cambias de rama sin m\xe1s lo que hayas hecho en esa rama no lo vas a ver. Para poder juntar todo tienes que mergear (fundir o fusionar) las ramas. ## Merge ### Cuando mergeas pueden pasar dos cosas 1. Todo se ha hecho bien y no hay problemas.\n2. Cada uno ha tocado el mismo archivo por su cuenta y al mergear las ramas dan conflicto. Git no sabe que cambios son los que han de permanecer, y lo junta pero con conflicto. ### Resolver conflicto En un mundo ideal lo suyo es ponerse de acuerdo en que hace cada uno. En caso de conflicto sentarse con la persona con la que nos ha surgido y determinar qu\xe9 es lo que vale. Pero si no es as\xed toma la decisi\xf3n de que es lo v\xe1lido y \"pa-lante\". Intenta no romper nada... X) * Resolver el conflicto.\n* Comitear cambios.\n* Subirlos.\n* Comprueba que todo est\xe1 ok y que en tu rama est\xe1n los cambios finales. #### Nombres de ramas famosos * develop \xf3 dev\n* feature/loquesea\n* bugfix/esePeasoBug\n* hotfix/ayQueEst\xe1EnProducci\xf3n\n* master ![Image of git branch schema](https://s3.amazonaws.com/media-p.slid.es/uploads/843308/images/4760613/git-flow-commands-without-flow.png) ### Ya has acabado commit y hay que subirlo. `git commit -m \"blablablaa #n\xbaissue\"`\nPara que el commit que vas a hacer quede ligado a un Issue en concreto: `git commit -m \"blablablaa Fix #n\xbaissue\"`\nPara que el commit que vas a hacer cierre un Issue en concreto: `git push origin <nombre-rama>`\nA la rama donde est\xe1s... \xbfvale? Una vez tienes ya todo guardado y subido, mergea tu rama a donde corresponda, por ejemplo develop: 1. Hazte pull de la rama donde vas a meter tu rama.\n2. Mu\xe9vete a la rama donde vas a llevar tus cambios.\n3. Haz merge de tu rama a la rama donde est\xe1s. `git merge <mi-rama>`\nEstando en develop Las ramas molan pero no seas Di\xf3genes.\nMantener la higiene de ramas es algo importante. Si no vas a desarrollar una segunda release, o incluso un proyecto paralelo... cuando acabes con el trabajo de una rama... \xa1\xa1\xa1M\xc1TALA!!! muaaahahahahahha. `git branch` para ver la lista de las ramas que has creado en local. `git branch -D <nombre-rama>` utilizamos el '-D' para eliminar la rama. ## Cuando tienes un repo en remoto `git pull origin <nombre_de_la_rama>` Si hay conflicto resuelve y comitea. `git push origin <nombre_de_la_rama>` En resumen:\nCuanto m\xe1s acutalizada tengas la rama donde est\xe1s y tu repo, menos conflictos tendr\xe1s. ANTES DE HACER PUSH HAZ PULL. `git fetch` Descarga el historial del repo remoto. ### \xbfTu repositorio local no est\xe1 apuntando al repositorio remoto? `git remote add <nombre_para_remoto> <url>`\nEjemplo: `git remote add origin https://github.com/usuario/nombre_del_repositorio.git` `git push -u origin master` Cuando hagas push, recuerda hacerlo a ambos (o tendr\xe1s un bonito caos...) ## Configurar Git `git config --global user.name \"nombre\"` `git config --global user.email \"tu_mail@example.com\"` `git config --list`\nComprobar q est\xe1 todo ok. ## Crear un repositorio en local `git init`\nNavegar con la terminal hasta dentro de la carpeta que queremos. ## Clonar un repositorio de GitHub en local `git clone <url del proyecto>`\nCrear un repositorio en local dentro de la carpeta que queremos, pero tray\xe9ndolo de GitHub. La url la cogemos de la ventana que sale al pulsar el bot\xf3n de 'Clone or download'. ## Elimina Git del proyecto para empezar de nuevo\n`rm -rf .git` En la carpeta raiz del proyecto. Despu\xe9s: `git init` ## Gesti\xf3n de conflictos Lo ideal es que no se den... pero se van a dar. Si tienes un conflicto \xa1No entres en p\xe1nico!\nEs bueno tener papel a mano para anotar cosas.\nIntenta siempre hablar con la persona que ha hecho el c\xf3digo con el que has tenido conflicto.\nF\xedjate SIEMPRE en lo que dice la consola, da muchas pistas.\nUn plugin en el editor que uses puede ser una gran ayuda. Ten siempre MUY en cuenta que es lo que has hecho tu, y que es lo que viene de afuera.\nSi no lo haces puedes tener un buen l\xedo. Y recuerda CASI TODO EN GIT tiene soluci\xf3n. Evitar conflictos absurdos antes de que se den: La gu\xeda de estilos para el c\xf3digo no es tonteria. Esos espacios vs. tabs.\nComillas simples, comillas dobles, mejor todos igual, en css ni te cuento. PONERSE DE ACUERDO TE QUITAR\xc1 DOLORES DE CABEZA No tiene soluci\xf3n en git:\n`git checkout` No se puede deshacer, porque se pierde la referencia totalmente, si haces eso sin haber guardado un commit, perder\xe1s todos los cambios que hayas hecho. **Fuentes**: https://slides.com/elenam-lopez/no-liarla-parda-con-git-x-2#/ https://github.com/ElenaMLopez/taller_git https://rogerdudler.github.io/git-guide/index.es.html https://stackoverflow.com/ https://git-scm.com/ "),n.Fb())},styles:[""]}),e})()}];let i=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=n.Bb({type:e}),e.\u0275inj=n.Ab({imports:[[s.c.forChild(r)],s.c]}),e})(),t=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=n.Bb({type:e}),e.\u0275inj=n.Ab({imports:[[i]]}),e})()}}]);