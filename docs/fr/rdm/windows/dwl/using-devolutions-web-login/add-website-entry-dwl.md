---
eleventyComputed:
  title: Ajouter une entrée de site Web avec {{ fr.DWL }}
---
{% snippet icon.badgeInfo %} 
Cette rubrique explique comment créer une entrée à partir de vos identifiants de site Web existants. Si vous n&apos;avez pas encore créé de compte pour le site Web, consultez plutôt notre rubrique sur la façon de [Créer un compte de site Web avec {{ fr.DWL }}](/fr/rdm/windows/dwl/using-devolutions-web-login/create-account-website/) . 
{% endsnippet %}
 
Des entrées de site Web peuvent être créées avec {{ fr.DWL }} dans {{ fr.RDM }} . Ce type d&apos;entrée est utile pour enregistrer vos identifiants de connexion afin que vous n&apos;ayez plus à les mémoriser. Ces entrées sont également utilisées par {{ fr.DWL }} pour reconnaître un site Web et [récupérer vos identifiants](/fr/rdm/windows/dwl/using-devolutions-web-login/retrieve-credentials/) .  

La principale façon d&apos;y parvenir est de se connecter avec succès au site Web. {{ fr.DWL }} proposera automatiquement d&apos;enregistrer vos identifiants dans une nouvelle entrée de site Web dans {{ fr.RDM }} . Il est également possible de créer manuellement l&apos;entrée de site Web.  

Suivez les instructions dans les sections ci-dessous pour apprendre à ajouter une entrée de site Web :  

* [Ajouter automatiquement une entrée de site Web](#ajouter-automatiquement-une-entrée-de-site-web) 
* [Ajouter manuellement une entrée de site Web](#ajouter-manuellement-une-entrée-de-site-web) 

### Ajouter automatiquement une entrée de site Web 

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d&apos;Atlassian comme exemple.  
![Page de connexion](/img/fr/rdm/windows/RDMWin2100.png) 
1. Les sites Web demandent généralement des informations telles qu&apos;une adresse courriel / un nom d&apos;utilisateur et un mot de passe. Suivre le processus de connexion du site Web jusqu&apos;à la connexion à votre compte. 
1. Une fenêtre ***Ajouter un site Web*** de {{ fr.DWL }} apparaîtra dans le coin du navigateur Web.  
![Ajouter un site Web](/img/fr/rdm/windows/RDMWin2101.png) 
1. Saisir un ***Nom*** pour l&apos;entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu&apos;il reflète le contenu de l&apos;entrée pour la retrouver plus facilement au besoin. 
1. Saisir un ***Dossier de destination*** dans lequel sauvegarder l&apos;entrée de site Web. Si ce champ reste vide, l&apos;entrée sera sauvegardée à la racine du coffre. Si le dossier spécifié n&apos;existe pas, il sera créé en même temps que l&apos;entrée. 
1. Spécifier si vous souhaitez enregistrer votre entrée dans votre ***Coffre d&apos;utilisateur*** ou dans un ***Coffre*** . Notez que pour créer votre entrée dans le coffre de votre choix, le coffre correspondant doit être actuellement ouvert dans {{ fr.RDM }} . 
1. Cliquer sur ***Enregistrer*** . 

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.RDM }} . La prochaine fois que vous vous connecterez à ce compte, {{ fr.DWL }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](/fr/rdm/windows/dwl/using-devolutions-web-login/retrieve-credentials/) . 

### Ajouter manuellement une entrée de site Web 

1. Aller à la page de connexion du site Web. Cette page sera différente pour chaque site Web; cette rubrique utilisera le site Web d&apos;Atlassian comme exemple.  
![Page de connexion](/img/fr/rdm/windows/RDMWin2100.png) 
1. Cliquer sur l&apos;extension {{ fr.DWL }} dans la barre d&apos;outils de votre navigateur, puis, dans l&apos;onglet ***Correspondant*** , cliquer sur le bouton ***Ajouter un site Web*** .  
![Bouton Ajouter un site Web](/img/fr/rdm/windows/RDMWin2102.png) 
1. L&apos;onglet ***Ajouter un site Web*** de {{ fr.DWL }} s&apos;ouvrira dans votre navigateur.  
![Ajouter un site Web](/img/fr/rdm/windows/RDMWin2090.png) 
1. Saisir un ***Nom*** pour l&apos;entrée. Le nom par défaut peut être gardé ou modifié, mais il est recommandé qu&apos;il reflète le contenu de l&apos;entrée pour la retrouver plus facilement au besoin. 
1. Le champ ***URL*** est automatiquement rempli avec l&apos;URL de la page de connexion de l&apos; [étape 1]( . 
1. Saisir le ***Nom d&apos;utilisateur*** et le ***Mot de passe*** qui sont utilisés pour se connecter à ce site Web. Dépendamment du site Web, le nom d&apos;utilisateur pourrait être une adresse courriel. 
1. Saisir un ***Dossier de destination*** dans lequel sauvegarder l&apos;entrée de site Web. Si ce champ reste vide, l&apos;entrée sera sauvegardée à la racine du coffre. Si le dossier spécifié n&apos;existe pas, il sera créé en même temps que l&apos;entrée. 
1. Spécifier si vous souhaitez enregistrer votre entrée dans votre ***Coffre d&apos;utilisateur*** ou dans un ***Coffre*** . Notez que pour créer votre entrée dans le coffre de votre choix, le coffre correspondant doit être actuellement ouvert dans {{ fr.RDM }} . 
1. Cliquer sur ***Enregistrer*** . 

Vos identifiants sont maintenant stockés sécuritairement dans une nouvelle entrée de site Web dans {{ fr.RDM }} . La prochaine fois que vous vous connecterez à ce compte, {{ fr.DWL }} le détectera et récupérera vos identifiants. Suivez nos instructions étape par étape pour [récupérer vos identifiants](DevolutionsWebLogin_RetrieveCredentials_2) . 
