# NOTICE

- (**12/22**) Since Heroku has ended thier free tier instances, I'd taken down the server all together. However, if you are somewhat savvy you should be able to run it locally.

- (**08/22**) It has come to my attenetion that Mint has updated thier API and the code in its current state will NOT work.

# Minty

A little weekend project to help my dad help his mom get set up with [Mint](http://mint.intuit.com/). If
you aren't new to personal finance management tools you'll know that financial institutions often will
not let you import transactions older than 3 months. This means in most cases you'll have to export CSV
files or if you are lucky (and use Quicken, like me) Quicken files. However, Mint doesn't provide
any support for CSVs or any other form of importing older transactions.

After helping my dad research the issue, I found a couple of similar tools but none of them were
very friendly to non-technical people. While my dad is quite a computer savvy, he's not a programmer.

I also came across [MintImporter](https://mintimporter.com/) but they charge as much as $0.10 per
imported transaction! That's crazy!

## Useage

All you need to use this tool is a Mint account and a browser (if you are reading this you most likely
have the latter).

1. Navigate to [https://noahcardoza.dev/minty/](https://noahcardoza.dev/minty/)

2. Authorize the tool to access your Mint account. [Learn more](#is-it-safe).

3. Normalize your CSV.

4. Upload the file.

5. Reflect on all the time you just saved.

## FAQ

### Is It Safe?

While under most circumstances, giving your cookies to someone else is never a good idea, there is no way
around it in this case. Because Mint does not support any form of API access, cookie sharing is the
only way to allow the tool to import records on your behalf.

#### The good news!

1. This project is open-source, which means all the code is freely available and out in the open.
   Nothing is going on behind the scenes. Take a look at the code for yourself [here](https://github.com/NoahCardoza/minty/tree/main/api).

2. As soon as the import is complete, you can invalidate the cookies you shared immediately by clicking the logout button
   in the top right of the Mint website.
