import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

export const equipamentoService = {
    async listar() {
        const { data, error } = await supabase
            .from('equipamentos')
            .select('*')

        if (error) throw error
        return data
    },
    async criar(equipamento) {
        const { data, error } = await supabase
            .from('equipamentos')
            .insert([equipamento])
            .select()

        if (error) throw error
        return data
    }
}
export const cidadeService = {
    async listar() {
        const { data, error } = await supabase
            .from('cidades')
            .select('*')

        if (error) throw error
        return data
    },
    async criar(cidade) {
        const { data, error } = await supabase
            .from('cidades')
            .insert([cidade])
            .select()

        if (error) throw error
        return data
    }
}
export const servicoService = {
    async listar() {
        const { data, error } = await supabase
            .from('servicos')
            .select('*')

        if (error) throw error
        return data
    },

    async criar(servico) {
        const { data, error } = await supabase
            .from('servicos')
            .insert([servico])
            .select()

        if (error) throw error
        return data
    }
}

export const funcionarioService = {
    async listar() {
        const { data, error } = await supabase
            .from('funcionarios')
            .select('*')

        if (error) throw error
        return data
    },
    async criar(funcionarios) {
        const { data, error } = await supabase
        .from('funcionarios')
        .insert([funcionarios])
        .select()

        if(error) throw error
        return data
    }
}