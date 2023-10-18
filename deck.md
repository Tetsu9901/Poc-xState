<!-- slide -->

<!-- slide -->

![](./docs/keskonfoula.png)

<!-- slide -->

Migration **Fluxible** vers **Redux**

<!-- slide -->

## Gestionnaires d'états

<!-- slide -->

![](./docs/puppet.jpeg)

<!-- slide -->

## `whoami`

> **Maxime Blanc**
> Techlead Core TVJS
> Bedrock

<!-- slide -->

# Projet XState

> Retrouver le contrôle de son application grâce à la formule :
> n < 2<sup>n</sup>

<!-- slide -->

## Qu'est ce qu'un état ?

> La combinaison de l'ensemble des caractéristiques d'un système, à un moment donné

<!-- slide -->

## Comment représenter un état ?

> Démo n°1

<!-- slide -->

## Machine à états finis

- Un **état initial**
- Un nombre fini d'**états**
- Un nombre fini d'**événements**
- Une fonction de transition tel que
  `STATE + EVENT => NEW STATE`

<!-- slide -->

<img src="./docs/schmea-communication.png" height="500px" />

> Démo n°2

<!-- slide -->

## Résumé

- Transition d'état suite à un événement
- Transition d'état après une durée
- État composé
- État parallèle
- Gestion des effets de bord avec **les actions**
- Persister une valeur avec **le contexte**

<!-- slide -->

## Des questions ?

Non, on n'aura pas le temps

<!-- slide -->

> As-tu regardé le poids d'XState sur bundlephobia ? <br /> **Un certain Antoine.C**

<!-- slide -->

![](./docs/xstate-bundlesize.png)

<!-- slide -->

<img src="./docs/javascript-is-olive-oil-for-developers.jpg" height="600px" />

<!-- slide -->

## Robot3 : Les machines à états 0%MG

![](./docs/robot3-bundlesize.png)

<!-- slide -->

## Peu importe la librairie

> n < 2<sup>n</sup>, c'est déjà un début

<!-- slide -->

## Le choix final vous appartient
