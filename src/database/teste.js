const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-9.644514",
        lng: "-35.699884",
        name: "Casa do Servo Sofredor",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "+55 11 98143-7077",
        images: [
            "https://images.unsplash.com/photo-1595207011175-3d72f5a3b21c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1562790519-bc8a4a47cd0e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 8h até 18h",
        open_on_weekends: "0"

    })

    //consultar dados da tabela
    const selectedOrphanages = await db.all("DELETE FROM orphanages")
    console.log(selectedOrphanages)

    //cosultar somente 1 orphanato, pelo id
    const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "4"');
    console.log(orphanages)

    // deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id= '4'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id= '5'"))
})