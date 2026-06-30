import supabase from '../config/supabaseClient.js'

export async function listarFuncionarios(req, res) {
    const { data, error } = await supabase
        .from('funcionarios')
        .select('*')

    if (error) return res.status(500).json(error)

    res.json(data)
}

export async function criarFuncionario(req, res) {
    const { data, error } = await supabase
        .from('funcionarios')
        .insert([req.body])
        .select()

    if (error) return res.status(500).json(error)

    res.json(data)
}