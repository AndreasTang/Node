const getPandaState = require('./notes')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

const panda = [{
    name: 'E-Hentai',
    state: 'alive'
},{
    name: 'Ex-Hentai',
    state: 'Dead'
}]

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            content: 'panda is dead',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log(`Title: ${argv.title}`)
        console.log(`body: ${argv.body}`)
        console.log(argv)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove note',
    handler: () => {
        console.log('remove one')
    }
})

yargs.command({
    command: 'list',
    describe: 'list all command',
    handler: () => {
        console.log('all')
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: () => {
        console.log('read one')
    }
})

yargs.parse()