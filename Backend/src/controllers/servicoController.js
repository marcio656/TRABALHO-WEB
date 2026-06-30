import supabase from '../config/supabaseClient.js'

export async function listarServicos(req, res) {
    const { data, error } = await supabase
        .from('servicos')
        .select('*')

    if (error) return res.status(500).json(error)

    res.json(data)
}

export async function criarServico(req, res) {
    const { data, error } = await supabase
        .from('servicos')
        .insert([req.body])
        .select()

    if (error) return res.status(500).json(error)

    res.json(data)
}