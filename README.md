# Groupe-3 Producteurs locaux

## ProdArt version Beta 
Autrices et auteurs :  Leonie Nussbaum, Marie Melly, Bechir Boumaza et Francesco Tromellini. 

Projet réalisé dans le cadre du cours _Programmation pour Internet II - Meteor.js_ dispensé par Isaac Pante et Loris Rimaz. 

## Description du projet

Plateforme s'apparentant à Tinder (dans une certaine mesure, notamment au niveau de l'interface), qui permet aux consommateurs de rentrer leur localisation et un rayon voulu pour découvrir des producteurs aux alentours et pouvoir les suivre (à voir). Les producteurs/artisants pourront mettre à jour leurs données, et les consommateurs pourront alors suivre leurs actualités s'ils le veulent. Notre projet serait donc centré autour de la mise en avant de producteurs et d'artisans locaux. Il y aurait également possibilité de trouver des producteurs/artisans de manière plus ciblée, en recherchant des informations plus spécifiques que simplement un rayon (comme par exemple un type d'objet/produit particulier). De plus, il serait possible de définir un itinéraire, et en fonciton de celui-ci, faire apparaître les producteurs/artisans se situant sur le trajet.  

## Services apparentés
Plusieurs services se rapprochant du nôtre existent déjà. Voici plusieurs d'entre eux qui nous ont inspiré pour plusieurs raisons :  
- *Qoqa* par sa mise en avant de produits locaux ou de bons plans favorisant une consommation potentiellement plus locale ; 
- *Association romande marché paysan* qui, grâce à son site web, permet aux consommateurs de trouver des producteurs locaux, soit par leur identité, soit par leurs produits ;
- *Wheretobio* qui constitue une source d'inspiration intéressante, tant au niveau de l'expérience utilisateur (interface simple, efficace et agréable d'utilisation) qu'au niveau du contenu (mise en avant de producteurs locaux bio). Toutefois, notre projet constituerait une plus value puisque nous désirons mettre en avant non seulement des producteurs, mais également des artisans (ce que ne fait pas *wheretobio*).  
- *Etsy* dans sa logique de plateforme à destination des  artisans. Nous ne désirons pas devenir un lieu de commerce/transaction contrairement à celle-ci, mais le principe de la mise en avant de l'artisanat est très intéressant. 
- *Toogoodtogo* dans une logique de diminution du gaspillage alimentaire, mais également sur le principe du "panier surprise", permettant au producteur/artisan de liquider des stocks parfois encombrants (denrées périssables) ou pour faire découvrir des projets originaux/personnels. 


##  Bénéfices du projet pour le public cible
La plateforme va aider les producteurs et artisans :
 - à gagner de la visibilité et donc à se faire connaître par un plus grand nombre ;
 - à favoriser l’entrepreneuriat ;
 - à favoriser un sens de communauté.

La plateforme serait utile aussi du point de vue des utilisateurs :
 - pour connaitre les producteurs et artisans de la région ;
 - valoriser les produits de la tradition locale ;
 - consommer de manière plus écologique ;
 - favoriser les petits producteurs, et donc contribuer au développement de la communauté.


## Liste des actions possibles pour les différents rôles dans le projet 
Acteur 1, les producteurs et artisans:
- créer un profil et une page pour leurs produits ;
- indiquer un certain nombre d'infos (adresse, types de produits, description, lien url pour potentiel site ou page personnelle, photos, horaire d'ouverture…);
- tenir à jour la liste des produits disponibles sur le moment ;
- communiquer des promotions ;

Acteur 2, les consommateurs:
- créer un profil de consommateur ;
- pouvoir indiquer un rayon autour de sa localisation ;
- faire des recherches ciblées (par catégories pas exemple) ;
- pouvoir suivre les pages des producteurs ou artisans ;
- pouvoir partager les pages si besoin ;
- pouvoir laisser des appréciations (pas forcèment sur le modèle classique, à redéfinir).

Interaction consommateurs - producteurs/artisans 
- Deux moyens pour entrer en communication : soit par un chat qui est hébergé par l'application, soit via les données personnelles rendues disponibles par les producteurs/artisans. C'est à ces derniers de préciser quel moyen ils favorisent. A voir si on laisse aux producteurs/artisans le choix de désactiver la fonctionnalité chat, et d'envoyer de ce fait un message automatique annonçant que le producteur/artisan ne répond pas (ou alors carrément supprimer le bouton chat). 
- Moyen de rendre compte de la satisfaction du consommateur : système du like, comme sur Instagram. On ne désire pas permettre de mettre des commentaires désagréables. Cependant, il est nécessaire que l'on permette aux consommateurs de signaler lorsqu'il y a eu un comportement ou une qualité de produit déplorable.

## Types de catégories de produits 
On veut commencer par trier nos produits en deux macro-catégories : alimentaire vs. non-alimentaire :
1. Non-alimentaire (en lien avec les artisans) :
- Bijoux et accessoires ;
- Vêtements et travail tissus ;
- Art et création ;
- Mobiliers ;
- Maison et déco ; 
- Mariage et fêtes ;
  
3. Alimentaire (en lien avec les producteurs) : 
- Boulangerie & pâtisserie ;
- Epiceries ;
- Divers ; 
- Fruits & légumes ; 
- céréales ;

## Administration 
Il est nécessaire de penser à la manière dont on peut modérer ce qui se passe sur notre application, notamment au niveau de la qualité des produits mis à disposition par les producteurs/artisans. A voir si le chat doit également être modéré : on doit annoncer que l'on peut avoir les messages qui sont échangés via la messagerie. De plus, il ne faut pas oublier de mettre une charte qui spécifie que nous, en tant qu'administrateurs de l'application, ne sommes pas résponsables de ce qui est mis sur notre plateforme. 
Définir les sanctions : à partir de tant de signalisations, compte suspendu pour une durée de tant de mois. Ensuite, suppression du compte imédiat. 

