# Tibrag site

## Informatie

### Workers

- update-gomodules
  Deze stopt met werken wanneer een personal access token (PAT) verloopt (eens per jaar). Dan moet er een nieuwe gegenereerd worden (Evelien > PAT > regenerate > copy key voor latere stap). Daarna moet deze ook geupdate worden in de secrets (deze repository > settings > secrets > actions > edit > paste de nieuwe key gekregen via de eerdere regenerate).

### Contact formulier

<https://formspree.io> (max 50 inzendingen per maand)
<https://un-static.com/how-to/add-hugo-contact-form/>

## TODO lijst

### Webpaginas

- Voorpagina
- Socials Linktree

## Installatie

installeer sass (https://sass-lang.com/install) en voeg het toe aan je PATH zodat het overal in de terminal beschikbaar is.
Installeer hugo extended (https://gohugo.io/getting-started/installing/)

1. Clone deze repository

```sh
git clone --recurse-submodules --remote https://github.com/tibrag/website.git
```

2. Run `cd website` om naar de map van deze repository te gaan in de terminal
3. Run `hugo server` om de website lokaal te bekijken
4. Run `hugo --gc --minify` om de website te bouwen met garbage collection en minificatie (output in de public map)
5. Deploy de inhoud van de public map naar een webserver of hosting service
