import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UsuariosScalarFieldEnumSchema = z.enum(['id','nome','cpf','senha','criadoEm','atualizadoEm','deletadoEm','deletado','email','ativo','administrador','nucleoId']);

export const NucleosScalarFieldEnumSchema = z.enum(['id','nome','regiao','criadoEm','atualizadoEm','deletadoEm','deletado']);

export const SessoesScalarFieldEnumSchema = z.enum(['id','sessao','pessoas','quantidadeVegetal']);

export const PreparosScalarFieldEnumSchema = z.enum(['id','criadoEm','atualizadoEm','deletadoEm','deletado','inicio','fim','producaoLitros','maririId','chacronaId','lenhaId']);

export const MaririScalarFieldEnumSchema = z.enum(['id','criadoEm','atualizadoEm','deletadoEm','deletado','pesoKg','unidades','tipo','tipoPlantacao','origemMensagem']);

export const ChacronaScalarFieldEnumSchema = z.enum(['id','criadoEm','atualizadoEm','deletadoEm','deletado','pesoKg','unidades','tipo','tipoPlantacao','origemMensagem']);

export const LenhaScalarFieldEnumSchema = z.enum(['id','criadoEm','atualizadoEm','deletadoEm','deletado','quantidadeM2','tempoFornalhaAcesa','tipoLenha','tipoFornalha']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USUARIOS SCHEMA
/////////////////////////////////////////

export const UsuariosSchema = z.object({
  id: z.string().cuid(),
  nome: z.string(),
  cpf: z.string().nullable(),
  senha: z.string(),
  criadoEm: z.coerce.date(),
  atualizadoEm: z.coerce.date(),
  deletadoEm: z.coerce.date().nullable(),
  deletado: z.boolean(),
  email: z.string().nullable(),
  ativo: z.boolean(),
  administrador: z.boolean(),
  nucleoId: z.string().nullable(),
})

export type Usuarios = z.infer<typeof UsuariosSchema>

/////////////////////////////////////////
// NUCLEOS SCHEMA
/////////////////////////////////////////

export const NucleosSchema = z.object({
  id: z.string().cuid(),
  nome: z.string(),
  regiao: z.string(),
  criadoEm: z.coerce.date(),
  atualizadoEm: z.coerce.date(),
  deletadoEm: z.coerce.date().nullable(),
  deletado: z.boolean(),
})

export type Nucleos = z.infer<typeof NucleosSchema>

/////////////////////////////////////////
// SESSOES SCHEMA
/////////////////////////////////////////

export const SessoesSchema = z.object({
  id: z.string().cuid(),
  sessao: z.string(),
  pessoas: z.string(),
  quantidadeVegetal: z.string(),
})

export type Sessoes = z.infer<typeof SessoesSchema>

/////////////////////////////////////////
// PREPAROS SCHEMA
/////////////////////////////////////////

export const PreparosSchema = z.object({
  id: z.string().cuid(),
  criadoEm: z.coerce.date(),
  atualizadoEm: z.coerce.date(),
  deletadoEm: z.coerce.date().nullable(),
  deletado: z.boolean(),
  inicio: z.coerce.date(),
  fim: z.coerce.date(),
  producaoLitros: z.string(),
  maririId: z.string().nullable(),
  chacronaId: z.string().nullable(),
  lenhaId: z.string().nullable(),
})

export type Preparos = z.infer<typeof PreparosSchema>

/////////////////////////////////////////
// MARIRI SCHEMA
/////////////////////////////////////////

export const MaririSchema = z.object({
  id: z.string().cuid(),
  criadoEm: z.coerce.date(),
  atualizadoEm: z.coerce.date(),
  deletadoEm: z.coerce.date().nullable(),
  deletado: z.boolean(),
  pesoKg: z.string(),
  unidades: z.string(),
  tipo: z.string(),
  tipoPlantacao: z.string(),
  origemMensagem: z.string(),
})

export type Mariri = z.infer<typeof MaririSchema>

/////////////////////////////////////////
// CHACRONA SCHEMA
/////////////////////////////////////////

export const ChacronaSchema = z.object({
  id: z.string().cuid(),
  criadoEm: z.coerce.date(),
  atualizadoEm: z.coerce.date(),
  deletadoEm: z.coerce.date().nullable(),
  deletado: z.boolean(),
  pesoKg: z.string(),
  unidades: z.string(),
  tipo: z.string(),
  tipoPlantacao: z.string(),
  origemMensagem: z.string(),
})

export type Chacrona = z.infer<typeof ChacronaSchema>

/////////////////////////////////////////
// LENHA SCHEMA
/////////////////////////////////////////

export const LenhaSchema = z.object({
  id: z.string().cuid(),
  criadoEm: z.coerce.date(),
  atualizadoEm: z.coerce.date(),
  deletadoEm: z.coerce.date().nullable(),
  deletado: z.boolean(),
  quantidadeM2: z.string(),
  tempoFornalhaAcesa: z.string(),
  tipoLenha: z.string(),
  tipoFornalha: z.string(),
})

export type Lenha = z.infer<typeof LenhaSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USUARIOS
//------------------------------------------------------

export const UsuariosIncludeSchema: z.ZodType<Prisma.UsuariosInclude> = z.object({
  nucleo: z.union([z.boolean(),z.lazy(() => NucleosArgsSchema)]).optional(),
}).strict()

export const UsuariosArgsSchema: z.ZodType<Prisma.UsuariosDefaultArgs> = z.object({
  select: z.lazy(() => UsuariosSelectSchema).optional(),
  include: z.lazy(() => UsuariosIncludeSchema).optional(),
}).strict();

export const UsuariosSelectSchema: z.ZodType<Prisma.UsuariosSelect> = z.object({
  id: z.boolean().optional(),
  nome: z.boolean().optional(),
  cpf: z.boolean().optional(),
  senha: z.boolean().optional(),
  criadoEm: z.boolean().optional(),
  atualizadoEm: z.boolean().optional(),
  deletadoEm: z.boolean().optional(),
  deletado: z.boolean().optional(),
  email: z.boolean().optional(),
  ativo: z.boolean().optional(),
  administrador: z.boolean().optional(),
  nucleoId: z.boolean().optional(),
  nucleo: z.union([z.boolean(),z.lazy(() => NucleosArgsSchema)]).optional(),
}).strict()

// NUCLEOS
//------------------------------------------------------

export const NucleosIncludeSchema: z.ZodType<Prisma.NucleosInclude> = z.object({
  usuarios: z.union([z.boolean(),z.lazy(() => UsuariosFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => NucleosCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const NucleosArgsSchema: z.ZodType<Prisma.NucleosDefaultArgs> = z.object({
  select: z.lazy(() => NucleosSelectSchema).optional(),
  include: z.lazy(() => NucleosIncludeSchema).optional(),
}).strict();

export const NucleosCountOutputTypeArgsSchema: z.ZodType<Prisma.NucleosCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => NucleosCountOutputTypeSelectSchema).nullish(),
}).strict();

export const NucleosCountOutputTypeSelectSchema: z.ZodType<Prisma.NucleosCountOutputTypeSelect> = z.object({
  usuarios: z.boolean().optional(),
}).strict();

export const NucleosSelectSchema: z.ZodType<Prisma.NucleosSelect> = z.object({
  id: z.boolean().optional(),
  nome: z.boolean().optional(),
  regiao: z.boolean().optional(),
  criadoEm: z.boolean().optional(),
  atualizadoEm: z.boolean().optional(),
  deletadoEm: z.boolean().optional(),
  deletado: z.boolean().optional(),
  usuarios: z.union([z.boolean(),z.lazy(() => UsuariosFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => NucleosCountOutputTypeArgsSchema)]).optional(),
}).strict()

// SESSOES
//------------------------------------------------------

export const SessoesSelectSchema: z.ZodType<Prisma.SessoesSelect> = z.object({
  id: z.boolean().optional(),
  sessao: z.boolean().optional(),
  pessoas: z.boolean().optional(),
  quantidadeVegetal: z.boolean().optional(),
}).strict()

// PREPAROS
//------------------------------------------------------

export const PreparosIncludeSchema: z.ZodType<Prisma.PreparosInclude> = z.object({
  mariri: z.union([z.boolean(),z.lazy(() => MaririArgsSchema)]).optional(),
  chacrona: z.union([z.boolean(),z.lazy(() => ChacronaArgsSchema)]).optional(),
  lenha: z.union([z.boolean(),z.lazy(() => LenhaArgsSchema)]).optional(),
}).strict()

export const PreparosArgsSchema: z.ZodType<Prisma.PreparosDefaultArgs> = z.object({
  select: z.lazy(() => PreparosSelectSchema).optional(),
  include: z.lazy(() => PreparosIncludeSchema).optional(),
}).strict();

export const PreparosSelectSchema: z.ZodType<Prisma.PreparosSelect> = z.object({
  id: z.boolean().optional(),
  criadoEm: z.boolean().optional(),
  atualizadoEm: z.boolean().optional(),
  deletadoEm: z.boolean().optional(),
  deletado: z.boolean().optional(),
  inicio: z.boolean().optional(),
  fim: z.boolean().optional(),
  producaoLitros: z.boolean().optional(),
  maririId: z.boolean().optional(),
  chacronaId: z.boolean().optional(),
  lenhaId: z.boolean().optional(),
  mariri: z.union([z.boolean(),z.lazy(() => MaririArgsSchema)]).optional(),
  chacrona: z.union([z.boolean(),z.lazy(() => ChacronaArgsSchema)]).optional(),
  lenha: z.union([z.boolean(),z.lazy(() => LenhaArgsSchema)]).optional(),
}).strict()

// MARIRI
//------------------------------------------------------

export const MaririIncludeSchema: z.ZodType<Prisma.MaririInclude> = z.object({
  Preparos: z.union([z.boolean(),z.lazy(() => PreparosFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MaririCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const MaririArgsSchema: z.ZodType<Prisma.MaririDefaultArgs> = z.object({
  select: z.lazy(() => MaririSelectSchema).optional(),
  include: z.lazy(() => MaririIncludeSchema).optional(),
}).strict();

export const MaririCountOutputTypeArgsSchema: z.ZodType<Prisma.MaririCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => MaririCountOutputTypeSelectSchema).nullish(),
}).strict();

export const MaririCountOutputTypeSelectSchema: z.ZodType<Prisma.MaririCountOutputTypeSelect> = z.object({
  Preparos: z.boolean().optional(),
}).strict();

export const MaririSelectSchema: z.ZodType<Prisma.MaririSelect> = z.object({
  id: z.boolean().optional(),
  criadoEm: z.boolean().optional(),
  atualizadoEm: z.boolean().optional(),
  deletadoEm: z.boolean().optional(),
  deletado: z.boolean().optional(),
  pesoKg: z.boolean().optional(),
  unidades: z.boolean().optional(),
  tipo: z.boolean().optional(),
  tipoPlantacao: z.boolean().optional(),
  origemMensagem: z.boolean().optional(),
  Preparos: z.union([z.boolean(),z.lazy(() => PreparosFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => MaririCountOutputTypeArgsSchema)]).optional(),
}).strict()

// CHACRONA
//------------------------------------------------------

export const ChacronaIncludeSchema: z.ZodType<Prisma.ChacronaInclude> = z.object({
  Preparos: z.union([z.boolean(),z.lazy(() => PreparosFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ChacronaCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ChacronaArgsSchema: z.ZodType<Prisma.ChacronaDefaultArgs> = z.object({
  select: z.lazy(() => ChacronaSelectSchema).optional(),
  include: z.lazy(() => ChacronaIncludeSchema).optional(),
}).strict();

export const ChacronaCountOutputTypeArgsSchema: z.ZodType<Prisma.ChacronaCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ChacronaCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ChacronaCountOutputTypeSelectSchema: z.ZodType<Prisma.ChacronaCountOutputTypeSelect> = z.object({
  Preparos: z.boolean().optional(),
}).strict();

export const ChacronaSelectSchema: z.ZodType<Prisma.ChacronaSelect> = z.object({
  id: z.boolean().optional(),
  criadoEm: z.boolean().optional(),
  atualizadoEm: z.boolean().optional(),
  deletadoEm: z.boolean().optional(),
  deletado: z.boolean().optional(),
  pesoKg: z.boolean().optional(),
  unidades: z.boolean().optional(),
  tipo: z.boolean().optional(),
  tipoPlantacao: z.boolean().optional(),
  origemMensagem: z.boolean().optional(),
  Preparos: z.union([z.boolean(),z.lazy(() => PreparosFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ChacronaCountOutputTypeArgsSchema)]).optional(),
}).strict()

// LENHA
//------------------------------------------------------

export const LenhaIncludeSchema: z.ZodType<Prisma.LenhaInclude> = z.object({
  Preparos: z.union([z.boolean(),z.lazy(() => PreparosFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LenhaCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const LenhaArgsSchema: z.ZodType<Prisma.LenhaDefaultArgs> = z.object({
  select: z.lazy(() => LenhaSelectSchema).optional(),
  include: z.lazy(() => LenhaIncludeSchema).optional(),
}).strict();

export const LenhaCountOutputTypeArgsSchema: z.ZodType<Prisma.LenhaCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => LenhaCountOutputTypeSelectSchema).nullish(),
}).strict();

export const LenhaCountOutputTypeSelectSchema: z.ZodType<Prisma.LenhaCountOutputTypeSelect> = z.object({
  Preparos: z.boolean().optional(),
}).strict();

export const LenhaSelectSchema: z.ZodType<Prisma.LenhaSelect> = z.object({
  id: z.boolean().optional(),
  criadoEm: z.boolean().optional(),
  atualizadoEm: z.boolean().optional(),
  deletadoEm: z.boolean().optional(),
  deletado: z.boolean().optional(),
  quantidadeM2: z.boolean().optional(),
  tempoFornalhaAcesa: z.boolean().optional(),
  tipoLenha: z.boolean().optional(),
  tipoFornalha: z.boolean().optional(),
  Preparos: z.union([z.boolean(),z.lazy(() => PreparosFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LenhaCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UsuariosWhereInputSchema: z.ZodType<Prisma.UsuariosWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UsuariosWhereInputSchema),z.lazy(() => UsuariosWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsuariosWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsuariosWhereInputSchema),z.lazy(() => UsuariosWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cpf: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  senha: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ativo: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  administrador: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  nucleoId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nucleo: z.union([ z.lazy(() => NucleosNullableScalarRelationFilterSchema),z.lazy(() => NucleosWhereInputSchema) ]).optional().nullable(),
}).strict();

export const UsuariosOrderByWithRelationInputSchema: z.ZodType<Prisma.UsuariosOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  senha: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ativo: z.lazy(() => SortOrderSchema).optional(),
  administrador: z.lazy(() => SortOrderSchema).optional(),
  nucleoId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nucleo: z.lazy(() => NucleosOrderByWithRelationInputSchema).optional()
}).strict();

export const UsuariosWhereUniqueInputSchema: z.ZodType<Prisma.UsuariosWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    cpf: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    cpf: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    email: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    cpf: z.string(),
    email: z.string(),
  }),
  z.object({
    cpf: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  cpf: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UsuariosWhereInputSchema),z.lazy(() => UsuariosWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsuariosWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsuariosWhereInputSchema),z.lazy(() => UsuariosWhereInputSchema).array() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  senha: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  ativo: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  administrador: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  nucleoId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nucleo: z.union([ z.lazy(() => NucleosNullableScalarRelationFilterSchema),z.lazy(() => NucleosWhereInputSchema) ]).optional().nullable(),
}).strict());

export const UsuariosOrderByWithAggregationInputSchema: z.ZodType<Prisma.UsuariosOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  senha: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  email: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  ativo: z.lazy(() => SortOrderSchema).optional(),
  administrador: z.lazy(() => SortOrderSchema).optional(),
  nucleoId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => UsuariosCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UsuariosMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UsuariosMinOrderByAggregateInputSchema).optional()
}).strict();

export const UsuariosScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UsuariosScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UsuariosScalarWhereWithAggregatesInputSchema),z.lazy(() => UsuariosScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsuariosScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsuariosScalarWhereWithAggregatesInputSchema),z.lazy(() => UsuariosScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  cpf: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  senha: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  ativo: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  administrador: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  nucleoId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const NucleosWhereInputSchema: z.ZodType<Prisma.NucleosWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NucleosWhereInputSchema),z.lazy(() => NucleosWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NucleosWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NucleosWhereInputSchema),z.lazy(() => NucleosWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  regiao: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  usuarios: z.lazy(() => UsuariosListRelationFilterSchema).optional()
}).strict();

export const NucleosOrderByWithRelationInputSchema: z.ZodType<Prisma.NucleosOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  regiao: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  usuarios: z.lazy(() => UsuariosOrderByRelationAggregateInputSchema).optional()
}).strict();

export const NucleosWhereUniqueInputSchema: z.ZodType<Prisma.NucleosWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => NucleosWhereInputSchema),z.lazy(() => NucleosWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NucleosWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NucleosWhereInputSchema),z.lazy(() => NucleosWhereInputSchema).array() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  regiao: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  usuarios: z.lazy(() => UsuariosListRelationFilterSchema).optional()
}).strict());

export const NucleosOrderByWithAggregationInputSchema: z.ZodType<Prisma.NucleosOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  regiao: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NucleosCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NucleosMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NucleosMinOrderByAggregateInputSchema).optional()
}).strict();

export const NucleosScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NucleosScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NucleosScalarWhereWithAggregatesInputSchema),z.lazy(() => NucleosScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NucleosScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NucleosScalarWhereWithAggregatesInputSchema),z.lazy(() => NucleosScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  regiao: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export const SessoesWhereInputSchema: z.ZodType<Prisma.SessoesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessoesWhereInputSchema),z.lazy(() => SessoesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessoesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessoesWhereInputSchema),z.lazy(() => SessoesWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  sessao: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pessoas: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantidadeVegetal: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const SessoesOrderByWithRelationInputSchema: z.ZodType<Prisma.SessoesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessao: z.lazy(() => SortOrderSchema).optional(),
  pessoas: z.lazy(() => SortOrderSchema).optional(),
  quantidadeVegetal: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessoesWhereUniqueInputSchema: z.ZodType<Prisma.SessoesWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => SessoesWhereInputSchema),z.lazy(() => SessoesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessoesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessoesWhereInputSchema),z.lazy(() => SessoesWhereInputSchema).array() ]).optional(),
  sessao: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pessoas: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  quantidadeVegetal: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export const SessoesOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessoesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessao: z.lazy(() => SortOrderSchema).optional(),
  pessoas: z.lazy(() => SortOrderSchema).optional(),
  quantidadeVegetal: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessoesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessoesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessoesMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessoesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessoesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessoesScalarWhereWithAggregatesInputSchema),z.lazy(() => SessoesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessoesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessoesScalarWhereWithAggregatesInputSchema),z.lazy(() => SessoesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  sessao: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pessoas: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  quantidadeVegetal: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const PreparosWhereInputSchema: z.ZodType<Prisma.PreparosWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PreparosWhereInputSchema),z.lazy(() => PreparosWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PreparosWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PreparosWhereInputSchema),z.lazy(() => PreparosWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  inicio: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fim: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  producaoLitros: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  maririId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  chacronaId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lenhaId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mariri: z.union([ z.lazy(() => MaririNullableScalarRelationFilterSchema),z.lazy(() => MaririWhereInputSchema) ]).optional().nullable(),
  chacrona: z.union([ z.lazy(() => ChacronaNullableScalarRelationFilterSchema),z.lazy(() => ChacronaWhereInputSchema) ]).optional().nullable(),
  lenha: z.union([ z.lazy(() => LenhaNullableScalarRelationFilterSchema),z.lazy(() => LenhaWhereInputSchema) ]).optional().nullable(),
}).strict();

export const PreparosOrderByWithRelationInputSchema: z.ZodType<Prisma.PreparosOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  inicio: z.lazy(() => SortOrderSchema).optional(),
  fim: z.lazy(() => SortOrderSchema).optional(),
  producaoLitros: z.lazy(() => SortOrderSchema).optional(),
  maririId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  chacronaId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lenhaId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  mariri: z.lazy(() => MaririOrderByWithRelationInputSchema).optional(),
  chacrona: z.lazy(() => ChacronaOrderByWithRelationInputSchema).optional(),
  lenha: z.lazy(() => LenhaOrderByWithRelationInputSchema).optional()
}).strict();

export const PreparosWhereUniqueInputSchema: z.ZodType<Prisma.PreparosWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => PreparosWhereInputSchema),z.lazy(() => PreparosWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PreparosWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PreparosWhereInputSchema),z.lazy(() => PreparosWhereInputSchema).array() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  inicio: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fim: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  producaoLitros: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  maririId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  chacronaId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lenhaId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  mariri: z.union([ z.lazy(() => MaririNullableScalarRelationFilterSchema),z.lazy(() => MaririWhereInputSchema) ]).optional().nullable(),
  chacrona: z.union([ z.lazy(() => ChacronaNullableScalarRelationFilterSchema),z.lazy(() => ChacronaWhereInputSchema) ]).optional().nullable(),
  lenha: z.union([ z.lazy(() => LenhaNullableScalarRelationFilterSchema),z.lazy(() => LenhaWhereInputSchema) ]).optional().nullable(),
}).strict());

export const PreparosOrderByWithAggregationInputSchema: z.ZodType<Prisma.PreparosOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  inicio: z.lazy(() => SortOrderSchema).optional(),
  fim: z.lazy(() => SortOrderSchema).optional(),
  producaoLitros: z.lazy(() => SortOrderSchema).optional(),
  maririId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  chacronaId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  lenhaId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PreparosCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PreparosMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PreparosMinOrderByAggregateInputSchema).optional()
}).strict();

export const PreparosScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PreparosScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PreparosScalarWhereWithAggregatesInputSchema),z.lazy(() => PreparosScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PreparosScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PreparosScalarWhereWithAggregatesInputSchema),z.lazy(() => PreparosScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  inicio: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  fim: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  producaoLitros: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  maririId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  chacronaId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  lenhaId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const MaririWhereInputSchema: z.ZodType<Prisma.MaririWhereInput> = z.object({
  AND: z.union([ z.lazy(() => MaririWhereInputSchema),z.lazy(() => MaririWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MaririWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MaririWhereInputSchema),z.lazy(() => MaririWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  pesoKg: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  unidades: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tipo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tipoPlantacao: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  origemMensagem: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Preparos: z.lazy(() => PreparosListRelationFilterSchema).optional()
}).strict();

export const MaririOrderByWithRelationInputSchema: z.ZodType<Prisma.MaririOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  pesoKg: z.lazy(() => SortOrderSchema).optional(),
  unidades: z.lazy(() => SortOrderSchema).optional(),
  tipo: z.lazy(() => SortOrderSchema).optional(),
  tipoPlantacao: z.lazy(() => SortOrderSchema).optional(),
  origemMensagem: z.lazy(() => SortOrderSchema).optional(),
  Preparos: z.lazy(() => PreparosOrderByRelationAggregateInputSchema).optional()
}).strict();

export const MaririWhereUniqueInputSchema: z.ZodType<Prisma.MaririWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => MaririWhereInputSchema),z.lazy(() => MaririWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => MaririWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MaririWhereInputSchema),z.lazy(() => MaririWhereInputSchema).array() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  pesoKg: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  unidades: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tipo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tipoPlantacao: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  origemMensagem: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Preparos: z.lazy(() => PreparosListRelationFilterSchema).optional()
}).strict());

export const MaririOrderByWithAggregationInputSchema: z.ZodType<Prisma.MaririOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  pesoKg: z.lazy(() => SortOrderSchema).optional(),
  unidades: z.lazy(() => SortOrderSchema).optional(),
  tipo: z.lazy(() => SortOrderSchema).optional(),
  tipoPlantacao: z.lazy(() => SortOrderSchema).optional(),
  origemMensagem: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => MaririCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => MaririMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => MaririMinOrderByAggregateInputSchema).optional()
}).strict();

export const MaririScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MaririScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => MaririScalarWhereWithAggregatesInputSchema),z.lazy(() => MaririScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => MaririScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => MaririScalarWhereWithAggregatesInputSchema),z.lazy(() => MaririScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  pesoKg: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  unidades: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tipo: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tipoPlantacao: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  origemMensagem: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ChacronaWhereInputSchema: z.ZodType<Prisma.ChacronaWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ChacronaWhereInputSchema),z.lazy(() => ChacronaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChacronaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChacronaWhereInputSchema),z.lazy(() => ChacronaWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  pesoKg: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  unidades: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tipo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tipoPlantacao: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  origemMensagem: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Preparos: z.lazy(() => PreparosListRelationFilterSchema).optional()
}).strict();

export const ChacronaOrderByWithRelationInputSchema: z.ZodType<Prisma.ChacronaOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  pesoKg: z.lazy(() => SortOrderSchema).optional(),
  unidades: z.lazy(() => SortOrderSchema).optional(),
  tipo: z.lazy(() => SortOrderSchema).optional(),
  tipoPlantacao: z.lazy(() => SortOrderSchema).optional(),
  origemMensagem: z.lazy(() => SortOrderSchema).optional(),
  Preparos: z.lazy(() => PreparosOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ChacronaWhereUniqueInputSchema: z.ZodType<Prisma.ChacronaWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => ChacronaWhereInputSchema),z.lazy(() => ChacronaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChacronaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChacronaWhereInputSchema),z.lazy(() => ChacronaWhereInputSchema).array() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  pesoKg: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  unidades: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tipo: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tipoPlantacao: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  origemMensagem: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Preparos: z.lazy(() => PreparosListRelationFilterSchema).optional()
}).strict());

export const ChacronaOrderByWithAggregationInputSchema: z.ZodType<Prisma.ChacronaOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  pesoKg: z.lazy(() => SortOrderSchema).optional(),
  unidades: z.lazy(() => SortOrderSchema).optional(),
  tipo: z.lazy(() => SortOrderSchema).optional(),
  tipoPlantacao: z.lazy(() => SortOrderSchema).optional(),
  origemMensagem: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ChacronaCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ChacronaMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ChacronaMinOrderByAggregateInputSchema).optional()
}).strict();

export const ChacronaScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ChacronaScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ChacronaScalarWhereWithAggregatesInputSchema),z.lazy(() => ChacronaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ChacronaScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ChacronaScalarWhereWithAggregatesInputSchema),z.lazy(() => ChacronaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  pesoKg: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  unidades: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tipo: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tipoPlantacao: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  origemMensagem: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const LenhaWhereInputSchema: z.ZodType<Prisma.LenhaWhereInput> = z.object({
  AND: z.union([ z.lazy(() => LenhaWhereInputSchema),z.lazy(() => LenhaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LenhaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LenhaWhereInputSchema),z.lazy(() => LenhaWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  quantidadeM2: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tempoFornalhaAcesa: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tipoLenha: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tipoFornalha: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Preparos: z.lazy(() => PreparosListRelationFilterSchema).optional()
}).strict();

export const LenhaOrderByWithRelationInputSchema: z.ZodType<Prisma.LenhaOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  quantidadeM2: z.lazy(() => SortOrderSchema).optional(),
  tempoFornalhaAcesa: z.lazy(() => SortOrderSchema).optional(),
  tipoLenha: z.lazy(() => SortOrderSchema).optional(),
  tipoFornalha: z.lazy(() => SortOrderSchema).optional(),
  Preparos: z.lazy(() => PreparosOrderByRelationAggregateInputSchema).optional()
}).strict();

export const LenhaWhereUniqueInputSchema: z.ZodType<Prisma.LenhaWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => LenhaWhereInputSchema),z.lazy(() => LenhaWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LenhaWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LenhaWhereInputSchema),z.lazy(() => LenhaWhereInputSchema).array() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  quantidadeM2: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tempoFornalhaAcesa: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tipoLenha: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tipoFornalha: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  Preparos: z.lazy(() => PreparosListRelationFilterSchema).optional()
}).strict());

export const LenhaOrderByWithAggregationInputSchema: z.ZodType<Prisma.LenhaOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  quantidadeM2: z.lazy(() => SortOrderSchema).optional(),
  tempoFornalhaAcesa: z.lazy(() => SortOrderSchema).optional(),
  tipoLenha: z.lazy(() => SortOrderSchema).optional(),
  tipoFornalha: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => LenhaCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => LenhaMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => LenhaMinOrderByAggregateInputSchema).optional()
}).strict();

export const LenhaScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LenhaScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => LenhaScalarWhereWithAggregatesInputSchema),z.lazy(() => LenhaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LenhaScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LenhaScalarWhereWithAggregatesInputSchema),z.lazy(() => LenhaScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  quantidadeM2: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tempoFornalhaAcesa: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tipoLenha: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tipoFornalha: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const UsuariosCreateInputSchema: z.ZodType<Prisma.UsuariosCreateInput> = z.object({
  id: z.string().cuid().optional(),
  nome: z.string(),
  cpf: z.string().optional().nullable(),
  senha: z.string(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  email: z.string().optional().nullable(),
  ativo: z.boolean().optional(),
  administrador: z.boolean().optional(),
  nucleo: z.lazy(() => NucleosCreateNestedOneWithoutUsuariosInputSchema).optional()
}).strict();

export const UsuariosUncheckedCreateInputSchema: z.ZodType<Prisma.UsuariosUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  nome: z.string(),
  cpf: z.string().optional().nullable(),
  senha: z.string(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  email: z.string().optional().nullable(),
  ativo: z.boolean().optional(),
  administrador: z.boolean().optional(),
  nucleoId: z.string().optional().nullable()
}).strict();

export const UsuariosUpdateInputSchema: z.ZodType<Prisma.UsuariosUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  senha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ativo: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  administrador: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  nucleo: z.lazy(() => NucleosUpdateOneWithoutUsuariosNestedInputSchema).optional()
}).strict();

export const UsuariosUncheckedUpdateInputSchema: z.ZodType<Prisma.UsuariosUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  senha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ativo: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  administrador: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  nucleoId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UsuariosCreateManyInputSchema: z.ZodType<Prisma.UsuariosCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  nome: z.string(),
  cpf: z.string().optional().nullable(),
  senha: z.string(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  email: z.string().optional().nullable(),
  ativo: z.boolean().optional(),
  administrador: z.boolean().optional(),
  nucleoId: z.string().optional().nullable()
}).strict();

export const UsuariosUpdateManyMutationInputSchema: z.ZodType<Prisma.UsuariosUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  senha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ativo: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  administrador: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsuariosUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UsuariosUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  senha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ativo: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  administrador: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  nucleoId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const NucleosCreateInputSchema: z.ZodType<Prisma.NucleosCreateInput> = z.object({
  id: z.string().cuid().optional(),
  nome: z.string(),
  regiao: z.string(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  usuarios: z.lazy(() => UsuariosCreateNestedManyWithoutNucleoInputSchema).optional()
}).strict();

export const NucleosUncheckedCreateInputSchema: z.ZodType<Prisma.NucleosUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  nome: z.string(),
  regiao: z.string(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  usuarios: z.lazy(() => UsuariosUncheckedCreateNestedManyWithoutNucleoInputSchema).optional()
}).strict();

export const NucleosUpdateInputSchema: z.ZodType<Prisma.NucleosUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regiao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  usuarios: z.lazy(() => UsuariosUpdateManyWithoutNucleoNestedInputSchema).optional()
}).strict();

export const NucleosUncheckedUpdateInputSchema: z.ZodType<Prisma.NucleosUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regiao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  usuarios: z.lazy(() => UsuariosUncheckedUpdateManyWithoutNucleoNestedInputSchema).optional()
}).strict();

export const NucleosCreateManyInputSchema: z.ZodType<Prisma.NucleosCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  nome: z.string(),
  regiao: z.string(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional()
}).strict();

export const NucleosUpdateManyMutationInputSchema: z.ZodType<Prisma.NucleosUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regiao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NucleosUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NucleosUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regiao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessoesCreateInputSchema: z.ZodType<Prisma.SessoesCreateInput> = z.object({
  id: z.string().cuid().optional(),
  sessao: z.string(),
  pessoas: z.string(),
  quantidadeVegetal: z.string()
}).strict();

export const SessoesUncheckedCreateInputSchema: z.ZodType<Prisma.SessoesUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  sessao: z.string(),
  pessoas: z.string(),
  quantidadeVegetal: z.string()
}).strict();

export const SessoesUpdateInputSchema: z.ZodType<Prisma.SessoesUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pessoas: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantidadeVegetal: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessoesUncheckedUpdateInputSchema: z.ZodType<Prisma.SessoesUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pessoas: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantidadeVegetal: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessoesCreateManyInputSchema: z.ZodType<Prisma.SessoesCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  sessao: z.string(),
  pessoas: z.string(),
  quantidadeVegetal: z.string()
}).strict();

export const SessoesUpdateManyMutationInputSchema: z.ZodType<Prisma.SessoesUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pessoas: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantidadeVegetal: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessoesUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessoesUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sessao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pessoas: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  quantidadeVegetal: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PreparosCreateInputSchema: z.ZodType<Prisma.PreparosCreateInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  inicio: z.coerce.date(),
  fim: z.coerce.date(),
  producaoLitros: z.string(),
  mariri: z.lazy(() => MaririCreateNestedOneWithoutPreparosInputSchema).optional(),
  chacrona: z.lazy(() => ChacronaCreateNestedOneWithoutPreparosInputSchema).optional(),
  lenha: z.lazy(() => LenhaCreateNestedOneWithoutPreparosInputSchema).optional()
}).strict();

export const PreparosUncheckedCreateInputSchema: z.ZodType<Prisma.PreparosUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  inicio: z.coerce.date(),
  fim: z.coerce.date(),
  producaoLitros: z.string(),
  maririId: z.string().optional().nullable(),
  chacronaId: z.string().optional().nullable(),
  lenhaId: z.string().optional().nullable()
}).strict();

export const PreparosUpdateInputSchema: z.ZodType<Prisma.PreparosUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  inicio: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fim: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  producaoLitros: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mariri: z.lazy(() => MaririUpdateOneWithoutPreparosNestedInputSchema).optional(),
  chacrona: z.lazy(() => ChacronaUpdateOneWithoutPreparosNestedInputSchema).optional(),
  lenha: z.lazy(() => LenhaUpdateOneWithoutPreparosNestedInputSchema).optional()
}).strict();

export const PreparosUncheckedUpdateInputSchema: z.ZodType<Prisma.PreparosUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  inicio: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fim: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  producaoLitros: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maririId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  chacronaId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lenhaId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PreparosCreateManyInputSchema: z.ZodType<Prisma.PreparosCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  inicio: z.coerce.date(),
  fim: z.coerce.date(),
  producaoLitros: z.string(),
  maririId: z.string().optional().nullable(),
  chacronaId: z.string().optional().nullable(),
  lenhaId: z.string().optional().nullable()
}).strict();

export const PreparosUpdateManyMutationInputSchema: z.ZodType<Prisma.PreparosUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  inicio: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fim: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  producaoLitros: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PreparosUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PreparosUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  inicio: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fim: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  producaoLitros: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maririId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  chacronaId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lenhaId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const MaririCreateInputSchema: z.ZodType<Prisma.MaririCreateInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  pesoKg: z.string(),
  unidades: z.string(),
  tipo: z.string(),
  tipoPlantacao: z.string(),
  origemMensagem: z.string(),
  Preparos: z.lazy(() => PreparosCreateNestedManyWithoutMaririInputSchema).optional()
}).strict();

export const MaririUncheckedCreateInputSchema: z.ZodType<Prisma.MaririUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  pesoKg: z.string(),
  unidades: z.string(),
  tipo: z.string(),
  tipoPlantacao: z.string(),
  origemMensagem: z.string(),
  Preparos: z.lazy(() => PreparosUncheckedCreateNestedManyWithoutMaririInputSchema).optional()
}).strict();

export const MaririUpdateInputSchema: z.ZodType<Prisma.MaririUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pesoKg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unidades: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoPlantacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origemMensagem: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Preparos: z.lazy(() => PreparosUpdateManyWithoutMaririNestedInputSchema).optional()
}).strict();

export const MaririUncheckedUpdateInputSchema: z.ZodType<Prisma.MaririUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pesoKg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unidades: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoPlantacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origemMensagem: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Preparos: z.lazy(() => PreparosUncheckedUpdateManyWithoutMaririNestedInputSchema).optional()
}).strict();

export const MaririCreateManyInputSchema: z.ZodType<Prisma.MaririCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  pesoKg: z.string(),
  unidades: z.string(),
  tipo: z.string(),
  tipoPlantacao: z.string(),
  origemMensagem: z.string()
}).strict();

export const MaririUpdateManyMutationInputSchema: z.ZodType<Prisma.MaririUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pesoKg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unidades: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoPlantacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origemMensagem: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MaririUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MaririUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pesoKg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unidades: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoPlantacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origemMensagem: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChacronaCreateInputSchema: z.ZodType<Prisma.ChacronaCreateInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  pesoKg: z.string(),
  unidades: z.string(),
  tipo: z.string(),
  tipoPlantacao: z.string(),
  origemMensagem: z.string(),
  Preparos: z.lazy(() => PreparosCreateNestedManyWithoutChacronaInputSchema).optional()
}).strict();

export const ChacronaUncheckedCreateInputSchema: z.ZodType<Prisma.ChacronaUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  pesoKg: z.string(),
  unidades: z.string(),
  tipo: z.string(),
  tipoPlantacao: z.string(),
  origemMensagem: z.string(),
  Preparos: z.lazy(() => PreparosUncheckedCreateNestedManyWithoutChacronaInputSchema).optional()
}).strict();

export const ChacronaUpdateInputSchema: z.ZodType<Prisma.ChacronaUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pesoKg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unidades: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoPlantacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origemMensagem: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Preparos: z.lazy(() => PreparosUpdateManyWithoutChacronaNestedInputSchema).optional()
}).strict();

export const ChacronaUncheckedUpdateInputSchema: z.ZodType<Prisma.ChacronaUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pesoKg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unidades: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoPlantacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origemMensagem: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Preparos: z.lazy(() => PreparosUncheckedUpdateManyWithoutChacronaNestedInputSchema).optional()
}).strict();

export const ChacronaCreateManyInputSchema: z.ZodType<Prisma.ChacronaCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  pesoKg: z.string(),
  unidades: z.string(),
  tipo: z.string(),
  tipoPlantacao: z.string(),
  origemMensagem: z.string()
}).strict();

export const ChacronaUpdateManyMutationInputSchema: z.ZodType<Prisma.ChacronaUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pesoKg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unidades: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoPlantacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origemMensagem: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChacronaUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ChacronaUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pesoKg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unidades: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoPlantacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origemMensagem: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LenhaCreateInputSchema: z.ZodType<Prisma.LenhaCreateInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  quantidadeM2: z.string(),
  tempoFornalhaAcesa: z.string(),
  tipoLenha: z.string(),
  tipoFornalha: z.string(),
  Preparos: z.lazy(() => PreparosCreateNestedManyWithoutLenhaInputSchema).optional()
}).strict();

export const LenhaUncheckedCreateInputSchema: z.ZodType<Prisma.LenhaUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  quantidadeM2: z.string(),
  tempoFornalhaAcesa: z.string(),
  tipoLenha: z.string(),
  tipoFornalha: z.string(),
  Preparos: z.lazy(() => PreparosUncheckedCreateNestedManyWithoutLenhaInputSchema).optional()
}).strict();

export const LenhaUpdateInputSchema: z.ZodType<Prisma.LenhaUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  quantidadeM2: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tempoFornalhaAcesa: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoLenha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoFornalha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Preparos: z.lazy(() => PreparosUpdateManyWithoutLenhaNestedInputSchema).optional()
}).strict();

export const LenhaUncheckedUpdateInputSchema: z.ZodType<Prisma.LenhaUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  quantidadeM2: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tempoFornalhaAcesa: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoLenha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoFornalha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Preparos: z.lazy(() => PreparosUncheckedUpdateManyWithoutLenhaNestedInputSchema).optional()
}).strict();

export const LenhaCreateManyInputSchema: z.ZodType<Prisma.LenhaCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  quantidadeM2: z.string(),
  tempoFornalhaAcesa: z.string(),
  tipoLenha: z.string(),
  tipoFornalha: z.string()
}).strict();

export const LenhaUpdateManyMutationInputSchema: z.ZodType<Prisma.LenhaUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  quantidadeM2: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tempoFornalhaAcesa: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoLenha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoFornalha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LenhaUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LenhaUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  quantidadeM2: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tempoFornalhaAcesa: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoLenha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoFornalha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NucleosNullableScalarRelationFilterSchema: z.ZodType<Prisma.NucleosNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => NucleosWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => NucleosWhereInputSchema).optional().nullable()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const UsuariosCountOrderByAggregateInputSchema: z.ZodType<Prisma.UsuariosCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  senha: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  ativo: z.lazy(() => SortOrderSchema).optional(),
  administrador: z.lazy(() => SortOrderSchema).optional(),
  nucleoId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsuariosMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UsuariosMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  senha: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  ativo: z.lazy(() => SortOrderSchema).optional(),
  administrador: z.lazy(() => SortOrderSchema).optional(),
  nucleoId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UsuariosMinOrderByAggregateInputSchema: z.ZodType<Prisma.UsuariosMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  cpf: z.lazy(() => SortOrderSchema).optional(),
  senha: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  ativo: z.lazy(() => SortOrderSchema).optional(),
  administrador: z.lazy(() => SortOrderSchema).optional(),
  nucleoId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const UsuariosListRelationFilterSchema: z.ZodType<Prisma.UsuariosListRelationFilter> = z.object({
  every: z.lazy(() => UsuariosWhereInputSchema).optional(),
  some: z.lazy(() => UsuariosWhereInputSchema).optional(),
  none: z.lazy(() => UsuariosWhereInputSchema).optional()
}).strict();

export const UsuariosOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UsuariosOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NucleosCountOrderByAggregateInputSchema: z.ZodType<Prisma.NucleosCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  regiao: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NucleosMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NucleosMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  regiao: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NucleosMinOrderByAggregateInputSchema: z.ZodType<Prisma.NucleosMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  nome: z.lazy(() => SortOrderSchema).optional(),
  regiao: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessoesCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessoesCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessao: z.lazy(() => SortOrderSchema).optional(),
  pessoas: z.lazy(() => SortOrderSchema).optional(),
  quantidadeVegetal: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessoesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessoesMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessao: z.lazy(() => SortOrderSchema).optional(),
  pessoas: z.lazy(() => SortOrderSchema).optional(),
  quantidadeVegetal: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessoesMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessoesMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  sessao: z.lazy(() => SortOrderSchema).optional(),
  pessoas: z.lazy(() => SortOrderSchema).optional(),
  quantidadeVegetal: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MaririNullableScalarRelationFilterSchema: z.ZodType<Prisma.MaririNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => MaririWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => MaririWhereInputSchema).optional().nullable()
}).strict();

export const ChacronaNullableScalarRelationFilterSchema: z.ZodType<Prisma.ChacronaNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => ChacronaWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ChacronaWhereInputSchema).optional().nullable()
}).strict();

export const LenhaNullableScalarRelationFilterSchema: z.ZodType<Prisma.LenhaNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => LenhaWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => LenhaWhereInputSchema).optional().nullable()
}).strict();

export const PreparosCountOrderByAggregateInputSchema: z.ZodType<Prisma.PreparosCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  inicio: z.lazy(() => SortOrderSchema).optional(),
  fim: z.lazy(() => SortOrderSchema).optional(),
  producaoLitros: z.lazy(() => SortOrderSchema).optional(),
  maririId: z.lazy(() => SortOrderSchema).optional(),
  chacronaId: z.lazy(() => SortOrderSchema).optional(),
  lenhaId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PreparosMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PreparosMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  inicio: z.lazy(() => SortOrderSchema).optional(),
  fim: z.lazy(() => SortOrderSchema).optional(),
  producaoLitros: z.lazy(() => SortOrderSchema).optional(),
  maririId: z.lazy(() => SortOrderSchema).optional(),
  chacronaId: z.lazy(() => SortOrderSchema).optional(),
  lenhaId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PreparosMinOrderByAggregateInputSchema: z.ZodType<Prisma.PreparosMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  inicio: z.lazy(() => SortOrderSchema).optional(),
  fim: z.lazy(() => SortOrderSchema).optional(),
  producaoLitros: z.lazy(() => SortOrderSchema).optional(),
  maririId: z.lazy(() => SortOrderSchema).optional(),
  chacronaId: z.lazy(() => SortOrderSchema).optional(),
  lenhaId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PreparosListRelationFilterSchema: z.ZodType<Prisma.PreparosListRelationFilter> = z.object({
  every: z.lazy(() => PreparosWhereInputSchema).optional(),
  some: z.lazy(() => PreparosWhereInputSchema).optional(),
  none: z.lazy(() => PreparosWhereInputSchema).optional()
}).strict();

export const PreparosOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PreparosOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MaririCountOrderByAggregateInputSchema: z.ZodType<Prisma.MaririCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  pesoKg: z.lazy(() => SortOrderSchema).optional(),
  unidades: z.lazy(() => SortOrderSchema).optional(),
  tipo: z.lazy(() => SortOrderSchema).optional(),
  tipoPlantacao: z.lazy(() => SortOrderSchema).optional(),
  origemMensagem: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MaririMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MaririMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  pesoKg: z.lazy(() => SortOrderSchema).optional(),
  unidades: z.lazy(() => SortOrderSchema).optional(),
  tipo: z.lazy(() => SortOrderSchema).optional(),
  tipoPlantacao: z.lazy(() => SortOrderSchema).optional(),
  origemMensagem: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const MaririMinOrderByAggregateInputSchema: z.ZodType<Prisma.MaririMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  pesoKg: z.lazy(() => SortOrderSchema).optional(),
  unidades: z.lazy(() => SortOrderSchema).optional(),
  tipo: z.lazy(() => SortOrderSchema).optional(),
  tipoPlantacao: z.lazy(() => SortOrderSchema).optional(),
  origemMensagem: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChacronaCountOrderByAggregateInputSchema: z.ZodType<Prisma.ChacronaCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  pesoKg: z.lazy(() => SortOrderSchema).optional(),
  unidades: z.lazy(() => SortOrderSchema).optional(),
  tipo: z.lazy(() => SortOrderSchema).optional(),
  tipoPlantacao: z.lazy(() => SortOrderSchema).optional(),
  origemMensagem: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChacronaMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ChacronaMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  pesoKg: z.lazy(() => SortOrderSchema).optional(),
  unidades: z.lazy(() => SortOrderSchema).optional(),
  tipo: z.lazy(() => SortOrderSchema).optional(),
  tipoPlantacao: z.lazy(() => SortOrderSchema).optional(),
  origemMensagem: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ChacronaMinOrderByAggregateInputSchema: z.ZodType<Prisma.ChacronaMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  pesoKg: z.lazy(() => SortOrderSchema).optional(),
  unidades: z.lazy(() => SortOrderSchema).optional(),
  tipo: z.lazy(() => SortOrderSchema).optional(),
  tipoPlantacao: z.lazy(() => SortOrderSchema).optional(),
  origemMensagem: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LenhaCountOrderByAggregateInputSchema: z.ZodType<Prisma.LenhaCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  quantidadeM2: z.lazy(() => SortOrderSchema).optional(),
  tempoFornalhaAcesa: z.lazy(() => SortOrderSchema).optional(),
  tipoLenha: z.lazy(() => SortOrderSchema).optional(),
  tipoFornalha: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LenhaMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LenhaMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  quantidadeM2: z.lazy(() => SortOrderSchema).optional(),
  tempoFornalhaAcesa: z.lazy(() => SortOrderSchema).optional(),
  tipoLenha: z.lazy(() => SortOrderSchema).optional(),
  tipoFornalha: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const LenhaMinOrderByAggregateInputSchema: z.ZodType<Prisma.LenhaMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  criadoEm: z.lazy(() => SortOrderSchema).optional(),
  atualizadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletadoEm: z.lazy(() => SortOrderSchema).optional(),
  deletado: z.lazy(() => SortOrderSchema).optional(),
  quantidadeM2: z.lazy(() => SortOrderSchema).optional(),
  tempoFornalhaAcesa: z.lazy(() => SortOrderSchema).optional(),
  tipoLenha: z.lazy(() => SortOrderSchema).optional(),
  tipoFornalha: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NucleosCreateNestedOneWithoutUsuariosInputSchema: z.ZodType<Prisma.NucleosCreateNestedOneWithoutUsuariosInput> = z.object({
  create: z.union([ z.lazy(() => NucleosCreateWithoutUsuariosInputSchema),z.lazy(() => NucleosUncheckedCreateWithoutUsuariosInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NucleosCreateOrConnectWithoutUsuariosInputSchema).optional(),
  connect: z.lazy(() => NucleosWhereUniqueInputSchema).optional()
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const NucleosUpdateOneWithoutUsuariosNestedInputSchema: z.ZodType<Prisma.NucleosUpdateOneWithoutUsuariosNestedInput> = z.object({
  create: z.union([ z.lazy(() => NucleosCreateWithoutUsuariosInputSchema),z.lazy(() => NucleosUncheckedCreateWithoutUsuariosInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NucleosCreateOrConnectWithoutUsuariosInputSchema).optional(),
  upsert: z.lazy(() => NucleosUpsertWithoutUsuariosInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => NucleosWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => NucleosWhereInputSchema) ]).optional(),
  connect: z.lazy(() => NucleosWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => NucleosUpdateToOneWithWhereWithoutUsuariosInputSchema),z.lazy(() => NucleosUpdateWithoutUsuariosInputSchema),z.lazy(() => NucleosUncheckedUpdateWithoutUsuariosInputSchema) ]).optional(),
}).strict();

export const UsuariosCreateNestedManyWithoutNucleoInputSchema: z.ZodType<Prisma.UsuariosCreateNestedManyWithoutNucleoInput> = z.object({
  create: z.union([ z.lazy(() => UsuariosCreateWithoutNucleoInputSchema),z.lazy(() => UsuariosCreateWithoutNucleoInputSchema).array(),z.lazy(() => UsuariosUncheckedCreateWithoutNucleoInputSchema),z.lazy(() => UsuariosUncheckedCreateWithoutNucleoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsuariosCreateOrConnectWithoutNucleoInputSchema),z.lazy(() => UsuariosCreateOrConnectWithoutNucleoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsuariosCreateManyNucleoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsuariosWhereUniqueInputSchema),z.lazy(() => UsuariosWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UsuariosUncheckedCreateNestedManyWithoutNucleoInputSchema: z.ZodType<Prisma.UsuariosUncheckedCreateNestedManyWithoutNucleoInput> = z.object({
  create: z.union([ z.lazy(() => UsuariosCreateWithoutNucleoInputSchema),z.lazy(() => UsuariosCreateWithoutNucleoInputSchema).array(),z.lazy(() => UsuariosUncheckedCreateWithoutNucleoInputSchema),z.lazy(() => UsuariosUncheckedCreateWithoutNucleoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsuariosCreateOrConnectWithoutNucleoInputSchema),z.lazy(() => UsuariosCreateOrConnectWithoutNucleoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsuariosCreateManyNucleoInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UsuariosWhereUniqueInputSchema),z.lazy(() => UsuariosWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UsuariosUpdateManyWithoutNucleoNestedInputSchema: z.ZodType<Prisma.UsuariosUpdateManyWithoutNucleoNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsuariosCreateWithoutNucleoInputSchema),z.lazy(() => UsuariosCreateWithoutNucleoInputSchema).array(),z.lazy(() => UsuariosUncheckedCreateWithoutNucleoInputSchema),z.lazy(() => UsuariosUncheckedCreateWithoutNucleoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsuariosCreateOrConnectWithoutNucleoInputSchema),z.lazy(() => UsuariosCreateOrConnectWithoutNucleoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsuariosUpsertWithWhereUniqueWithoutNucleoInputSchema),z.lazy(() => UsuariosUpsertWithWhereUniqueWithoutNucleoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsuariosCreateManyNucleoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsuariosWhereUniqueInputSchema),z.lazy(() => UsuariosWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsuariosWhereUniqueInputSchema),z.lazy(() => UsuariosWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsuariosWhereUniqueInputSchema),z.lazy(() => UsuariosWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsuariosWhereUniqueInputSchema),z.lazy(() => UsuariosWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsuariosUpdateWithWhereUniqueWithoutNucleoInputSchema),z.lazy(() => UsuariosUpdateWithWhereUniqueWithoutNucleoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsuariosUpdateManyWithWhereWithoutNucleoInputSchema),z.lazy(() => UsuariosUpdateManyWithWhereWithoutNucleoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsuariosScalarWhereInputSchema),z.lazy(() => UsuariosScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UsuariosUncheckedUpdateManyWithoutNucleoNestedInputSchema: z.ZodType<Prisma.UsuariosUncheckedUpdateManyWithoutNucleoNestedInput> = z.object({
  create: z.union([ z.lazy(() => UsuariosCreateWithoutNucleoInputSchema),z.lazy(() => UsuariosCreateWithoutNucleoInputSchema).array(),z.lazy(() => UsuariosUncheckedCreateWithoutNucleoInputSchema),z.lazy(() => UsuariosUncheckedCreateWithoutNucleoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UsuariosCreateOrConnectWithoutNucleoInputSchema),z.lazy(() => UsuariosCreateOrConnectWithoutNucleoInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UsuariosUpsertWithWhereUniqueWithoutNucleoInputSchema),z.lazy(() => UsuariosUpsertWithWhereUniqueWithoutNucleoInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UsuariosCreateManyNucleoInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UsuariosWhereUniqueInputSchema),z.lazy(() => UsuariosWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UsuariosWhereUniqueInputSchema),z.lazy(() => UsuariosWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UsuariosWhereUniqueInputSchema),z.lazy(() => UsuariosWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UsuariosWhereUniqueInputSchema),z.lazy(() => UsuariosWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UsuariosUpdateWithWhereUniqueWithoutNucleoInputSchema),z.lazy(() => UsuariosUpdateWithWhereUniqueWithoutNucleoInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UsuariosUpdateManyWithWhereWithoutNucleoInputSchema),z.lazy(() => UsuariosUpdateManyWithWhereWithoutNucleoInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UsuariosScalarWhereInputSchema),z.lazy(() => UsuariosScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const MaririCreateNestedOneWithoutPreparosInputSchema: z.ZodType<Prisma.MaririCreateNestedOneWithoutPreparosInput> = z.object({
  create: z.union([ z.lazy(() => MaririCreateWithoutPreparosInputSchema),z.lazy(() => MaririUncheckedCreateWithoutPreparosInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MaririCreateOrConnectWithoutPreparosInputSchema).optional(),
  connect: z.lazy(() => MaririWhereUniqueInputSchema).optional()
}).strict();

export const ChacronaCreateNestedOneWithoutPreparosInputSchema: z.ZodType<Prisma.ChacronaCreateNestedOneWithoutPreparosInput> = z.object({
  create: z.union([ z.lazy(() => ChacronaCreateWithoutPreparosInputSchema),z.lazy(() => ChacronaUncheckedCreateWithoutPreparosInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChacronaCreateOrConnectWithoutPreparosInputSchema).optional(),
  connect: z.lazy(() => ChacronaWhereUniqueInputSchema).optional()
}).strict();

export const LenhaCreateNestedOneWithoutPreparosInputSchema: z.ZodType<Prisma.LenhaCreateNestedOneWithoutPreparosInput> = z.object({
  create: z.union([ z.lazy(() => LenhaCreateWithoutPreparosInputSchema),z.lazy(() => LenhaUncheckedCreateWithoutPreparosInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LenhaCreateOrConnectWithoutPreparosInputSchema).optional(),
  connect: z.lazy(() => LenhaWhereUniqueInputSchema).optional()
}).strict();

export const MaririUpdateOneWithoutPreparosNestedInputSchema: z.ZodType<Prisma.MaririUpdateOneWithoutPreparosNestedInput> = z.object({
  create: z.union([ z.lazy(() => MaririCreateWithoutPreparosInputSchema),z.lazy(() => MaririUncheckedCreateWithoutPreparosInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MaririCreateOrConnectWithoutPreparosInputSchema).optional(),
  upsert: z.lazy(() => MaririUpsertWithoutPreparosInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => MaririWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => MaririWhereInputSchema) ]).optional(),
  connect: z.lazy(() => MaririWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MaririUpdateToOneWithWhereWithoutPreparosInputSchema),z.lazy(() => MaririUpdateWithoutPreparosInputSchema),z.lazy(() => MaririUncheckedUpdateWithoutPreparosInputSchema) ]).optional(),
}).strict();

export const ChacronaUpdateOneWithoutPreparosNestedInputSchema: z.ZodType<Prisma.ChacronaUpdateOneWithoutPreparosNestedInput> = z.object({
  create: z.union([ z.lazy(() => ChacronaCreateWithoutPreparosInputSchema),z.lazy(() => ChacronaUncheckedCreateWithoutPreparosInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ChacronaCreateOrConnectWithoutPreparosInputSchema).optional(),
  upsert: z.lazy(() => ChacronaUpsertWithoutPreparosInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ChacronaWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ChacronaWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ChacronaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ChacronaUpdateToOneWithWhereWithoutPreparosInputSchema),z.lazy(() => ChacronaUpdateWithoutPreparosInputSchema),z.lazy(() => ChacronaUncheckedUpdateWithoutPreparosInputSchema) ]).optional(),
}).strict();

export const LenhaUpdateOneWithoutPreparosNestedInputSchema: z.ZodType<Prisma.LenhaUpdateOneWithoutPreparosNestedInput> = z.object({
  create: z.union([ z.lazy(() => LenhaCreateWithoutPreparosInputSchema),z.lazy(() => LenhaUncheckedCreateWithoutPreparosInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LenhaCreateOrConnectWithoutPreparosInputSchema).optional(),
  upsert: z.lazy(() => LenhaUpsertWithoutPreparosInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LenhaWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LenhaWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LenhaWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LenhaUpdateToOneWithWhereWithoutPreparosInputSchema),z.lazy(() => LenhaUpdateWithoutPreparosInputSchema),z.lazy(() => LenhaUncheckedUpdateWithoutPreparosInputSchema) ]).optional(),
}).strict();

export const PreparosCreateNestedManyWithoutMaririInputSchema: z.ZodType<Prisma.PreparosCreateNestedManyWithoutMaririInput> = z.object({
  create: z.union([ z.lazy(() => PreparosCreateWithoutMaririInputSchema),z.lazy(() => PreparosCreateWithoutMaririInputSchema).array(),z.lazy(() => PreparosUncheckedCreateWithoutMaririInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutMaririInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PreparosCreateOrConnectWithoutMaririInputSchema),z.lazy(() => PreparosCreateOrConnectWithoutMaririInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PreparosCreateManyMaririInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PreparosUncheckedCreateNestedManyWithoutMaririInputSchema: z.ZodType<Prisma.PreparosUncheckedCreateNestedManyWithoutMaririInput> = z.object({
  create: z.union([ z.lazy(() => PreparosCreateWithoutMaririInputSchema),z.lazy(() => PreparosCreateWithoutMaririInputSchema).array(),z.lazy(() => PreparosUncheckedCreateWithoutMaririInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutMaririInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PreparosCreateOrConnectWithoutMaririInputSchema),z.lazy(() => PreparosCreateOrConnectWithoutMaririInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PreparosCreateManyMaririInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PreparosUpdateManyWithoutMaririNestedInputSchema: z.ZodType<Prisma.PreparosUpdateManyWithoutMaririNestedInput> = z.object({
  create: z.union([ z.lazy(() => PreparosCreateWithoutMaririInputSchema),z.lazy(() => PreparosCreateWithoutMaririInputSchema).array(),z.lazy(() => PreparosUncheckedCreateWithoutMaririInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutMaririInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PreparosCreateOrConnectWithoutMaririInputSchema),z.lazy(() => PreparosCreateOrConnectWithoutMaririInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PreparosUpsertWithWhereUniqueWithoutMaririInputSchema),z.lazy(() => PreparosUpsertWithWhereUniqueWithoutMaririInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PreparosCreateManyMaririInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PreparosUpdateWithWhereUniqueWithoutMaririInputSchema),z.lazy(() => PreparosUpdateWithWhereUniqueWithoutMaririInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PreparosUpdateManyWithWhereWithoutMaririInputSchema),z.lazy(() => PreparosUpdateManyWithWhereWithoutMaririInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PreparosScalarWhereInputSchema),z.lazy(() => PreparosScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PreparosUncheckedUpdateManyWithoutMaririNestedInputSchema: z.ZodType<Prisma.PreparosUncheckedUpdateManyWithoutMaririNestedInput> = z.object({
  create: z.union([ z.lazy(() => PreparosCreateWithoutMaririInputSchema),z.lazy(() => PreparosCreateWithoutMaririInputSchema).array(),z.lazy(() => PreparosUncheckedCreateWithoutMaririInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutMaririInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PreparosCreateOrConnectWithoutMaririInputSchema),z.lazy(() => PreparosCreateOrConnectWithoutMaririInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PreparosUpsertWithWhereUniqueWithoutMaririInputSchema),z.lazy(() => PreparosUpsertWithWhereUniqueWithoutMaririInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PreparosCreateManyMaririInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PreparosUpdateWithWhereUniqueWithoutMaririInputSchema),z.lazy(() => PreparosUpdateWithWhereUniqueWithoutMaririInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PreparosUpdateManyWithWhereWithoutMaririInputSchema),z.lazy(() => PreparosUpdateManyWithWhereWithoutMaririInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PreparosScalarWhereInputSchema),z.lazy(() => PreparosScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PreparosCreateNestedManyWithoutChacronaInputSchema: z.ZodType<Prisma.PreparosCreateNestedManyWithoutChacronaInput> = z.object({
  create: z.union([ z.lazy(() => PreparosCreateWithoutChacronaInputSchema),z.lazy(() => PreparosCreateWithoutChacronaInputSchema).array(),z.lazy(() => PreparosUncheckedCreateWithoutChacronaInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutChacronaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PreparosCreateOrConnectWithoutChacronaInputSchema),z.lazy(() => PreparosCreateOrConnectWithoutChacronaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PreparosCreateManyChacronaInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PreparosUncheckedCreateNestedManyWithoutChacronaInputSchema: z.ZodType<Prisma.PreparosUncheckedCreateNestedManyWithoutChacronaInput> = z.object({
  create: z.union([ z.lazy(() => PreparosCreateWithoutChacronaInputSchema),z.lazy(() => PreparosCreateWithoutChacronaInputSchema).array(),z.lazy(() => PreparosUncheckedCreateWithoutChacronaInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutChacronaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PreparosCreateOrConnectWithoutChacronaInputSchema),z.lazy(() => PreparosCreateOrConnectWithoutChacronaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PreparosCreateManyChacronaInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PreparosUpdateManyWithoutChacronaNestedInputSchema: z.ZodType<Prisma.PreparosUpdateManyWithoutChacronaNestedInput> = z.object({
  create: z.union([ z.lazy(() => PreparosCreateWithoutChacronaInputSchema),z.lazy(() => PreparosCreateWithoutChacronaInputSchema).array(),z.lazy(() => PreparosUncheckedCreateWithoutChacronaInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutChacronaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PreparosCreateOrConnectWithoutChacronaInputSchema),z.lazy(() => PreparosCreateOrConnectWithoutChacronaInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PreparosUpsertWithWhereUniqueWithoutChacronaInputSchema),z.lazy(() => PreparosUpsertWithWhereUniqueWithoutChacronaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PreparosCreateManyChacronaInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PreparosUpdateWithWhereUniqueWithoutChacronaInputSchema),z.lazy(() => PreparosUpdateWithWhereUniqueWithoutChacronaInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PreparosUpdateManyWithWhereWithoutChacronaInputSchema),z.lazy(() => PreparosUpdateManyWithWhereWithoutChacronaInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PreparosScalarWhereInputSchema),z.lazy(() => PreparosScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PreparosUncheckedUpdateManyWithoutChacronaNestedInputSchema: z.ZodType<Prisma.PreparosUncheckedUpdateManyWithoutChacronaNestedInput> = z.object({
  create: z.union([ z.lazy(() => PreparosCreateWithoutChacronaInputSchema),z.lazy(() => PreparosCreateWithoutChacronaInputSchema).array(),z.lazy(() => PreparosUncheckedCreateWithoutChacronaInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutChacronaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PreparosCreateOrConnectWithoutChacronaInputSchema),z.lazy(() => PreparosCreateOrConnectWithoutChacronaInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PreparosUpsertWithWhereUniqueWithoutChacronaInputSchema),z.lazy(() => PreparosUpsertWithWhereUniqueWithoutChacronaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PreparosCreateManyChacronaInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PreparosUpdateWithWhereUniqueWithoutChacronaInputSchema),z.lazy(() => PreparosUpdateWithWhereUniqueWithoutChacronaInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PreparosUpdateManyWithWhereWithoutChacronaInputSchema),z.lazy(() => PreparosUpdateManyWithWhereWithoutChacronaInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PreparosScalarWhereInputSchema),z.lazy(() => PreparosScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PreparosCreateNestedManyWithoutLenhaInputSchema: z.ZodType<Prisma.PreparosCreateNestedManyWithoutLenhaInput> = z.object({
  create: z.union([ z.lazy(() => PreparosCreateWithoutLenhaInputSchema),z.lazy(() => PreparosCreateWithoutLenhaInputSchema).array(),z.lazy(() => PreparosUncheckedCreateWithoutLenhaInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutLenhaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PreparosCreateOrConnectWithoutLenhaInputSchema),z.lazy(() => PreparosCreateOrConnectWithoutLenhaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PreparosCreateManyLenhaInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PreparosUncheckedCreateNestedManyWithoutLenhaInputSchema: z.ZodType<Prisma.PreparosUncheckedCreateNestedManyWithoutLenhaInput> = z.object({
  create: z.union([ z.lazy(() => PreparosCreateWithoutLenhaInputSchema),z.lazy(() => PreparosCreateWithoutLenhaInputSchema).array(),z.lazy(() => PreparosUncheckedCreateWithoutLenhaInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutLenhaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PreparosCreateOrConnectWithoutLenhaInputSchema),z.lazy(() => PreparosCreateOrConnectWithoutLenhaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PreparosCreateManyLenhaInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PreparosUpdateManyWithoutLenhaNestedInputSchema: z.ZodType<Prisma.PreparosUpdateManyWithoutLenhaNestedInput> = z.object({
  create: z.union([ z.lazy(() => PreparosCreateWithoutLenhaInputSchema),z.lazy(() => PreparosCreateWithoutLenhaInputSchema).array(),z.lazy(() => PreparosUncheckedCreateWithoutLenhaInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutLenhaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PreparosCreateOrConnectWithoutLenhaInputSchema),z.lazy(() => PreparosCreateOrConnectWithoutLenhaInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PreparosUpsertWithWhereUniqueWithoutLenhaInputSchema),z.lazy(() => PreparosUpsertWithWhereUniqueWithoutLenhaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PreparosCreateManyLenhaInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PreparosUpdateWithWhereUniqueWithoutLenhaInputSchema),z.lazy(() => PreparosUpdateWithWhereUniqueWithoutLenhaInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PreparosUpdateManyWithWhereWithoutLenhaInputSchema),z.lazy(() => PreparosUpdateManyWithWhereWithoutLenhaInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PreparosScalarWhereInputSchema),z.lazy(() => PreparosScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PreparosUncheckedUpdateManyWithoutLenhaNestedInputSchema: z.ZodType<Prisma.PreparosUncheckedUpdateManyWithoutLenhaNestedInput> = z.object({
  create: z.union([ z.lazy(() => PreparosCreateWithoutLenhaInputSchema),z.lazy(() => PreparosCreateWithoutLenhaInputSchema).array(),z.lazy(() => PreparosUncheckedCreateWithoutLenhaInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutLenhaInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PreparosCreateOrConnectWithoutLenhaInputSchema),z.lazy(() => PreparosCreateOrConnectWithoutLenhaInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PreparosUpsertWithWhereUniqueWithoutLenhaInputSchema),z.lazy(() => PreparosUpsertWithWhereUniqueWithoutLenhaInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PreparosCreateManyLenhaInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PreparosWhereUniqueInputSchema),z.lazy(() => PreparosWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PreparosUpdateWithWhereUniqueWithoutLenhaInputSchema),z.lazy(() => PreparosUpdateWithWhereUniqueWithoutLenhaInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PreparosUpdateManyWithWhereWithoutLenhaInputSchema),z.lazy(() => PreparosUpdateManyWithWhereWithoutLenhaInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PreparosScalarWhereInputSchema),z.lazy(() => PreparosScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NucleosCreateWithoutUsuariosInputSchema: z.ZodType<Prisma.NucleosCreateWithoutUsuariosInput> = z.object({
  id: z.string().cuid().optional(),
  nome: z.string(),
  regiao: z.string(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional()
}).strict();

export const NucleosUncheckedCreateWithoutUsuariosInputSchema: z.ZodType<Prisma.NucleosUncheckedCreateWithoutUsuariosInput> = z.object({
  id: z.string().cuid().optional(),
  nome: z.string(),
  regiao: z.string(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional()
}).strict();

export const NucleosCreateOrConnectWithoutUsuariosInputSchema: z.ZodType<Prisma.NucleosCreateOrConnectWithoutUsuariosInput> = z.object({
  where: z.lazy(() => NucleosWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NucleosCreateWithoutUsuariosInputSchema),z.lazy(() => NucleosUncheckedCreateWithoutUsuariosInputSchema) ]),
}).strict();

export const NucleosUpsertWithoutUsuariosInputSchema: z.ZodType<Prisma.NucleosUpsertWithoutUsuariosInput> = z.object({
  update: z.union([ z.lazy(() => NucleosUpdateWithoutUsuariosInputSchema),z.lazy(() => NucleosUncheckedUpdateWithoutUsuariosInputSchema) ]),
  create: z.union([ z.lazy(() => NucleosCreateWithoutUsuariosInputSchema),z.lazy(() => NucleosUncheckedCreateWithoutUsuariosInputSchema) ]),
  where: z.lazy(() => NucleosWhereInputSchema).optional()
}).strict();

export const NucleosUpdateToOneWithWhereWithoutUsuariosInputSchema: z.ZodType<Prisma.NucleosUpdateToOneWithWhereWithoutUsuariosInput> = z.object({
  where: z.lazy(() => NucleosWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => NucleosUpdateWithoutUsuariosInputSchema),z.lazy(() => NucleosUncheckedUpdateWithoutUsuariosInputSchema) ]),
}).strict();

export const NucleosUpdateWithoutUsuariosInputSchema: z.ZodType<Prisma.NucleosUpdateWithoutUsuariosInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regiao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NucleosUncheckedUpdateWithoutUsuariosInputSchema: z.ZodType<Prisma.NucleosUncheckedUpdateWithoutUsuariosInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  regiao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsuariosCreateWithoutNucleoInputSchema: z.ZodType<Prisma.UsuariosCreateWithoutNucleoInput> = z.object({
  id: z.string().cuid().optional(),
  nome: z.string(),
  cpf: z.string().optional().nullable(),
  senha: z.string(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  email: z.string().optional().nullable(),
  ativo: z.boolean().optional(),
  administrador: z.boolean().optional()
}).strict();

export const UsuariosUncheckedCreateWithoutNucleoInputSchema: z.ZodType<Prisma.UsuariosUncheckedCreateWithoutNucleoInput> = z.object({
  id: z.string().cuid().optional(),
  nome: z.string(),
  cpf: z.string().optional().nullable(),
  senha: z.string(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  email: z.string().optional().nullable(),
  ativo: z.boolean().optional(),
  administrador: z.boolean().optional()
}).strict();

export const UsuariosCreateOrConnectWithoutNucleoInputSchema: z.ZodType<Prisma.UsuariosCreateOrConnectWithoutNucleoInput> = z.object({
  where: z.lazy(() => UsuariosWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UsuariosCreateWithoutNucleoInputSchema),z.lazy(() => UsuariosUncheckedCreateWithoutNucleoInputSchema) ]),
}).strict();

export const UsuariosCreateManyNucleoInputEnvelopeSchema: z.ZodType<Prisma.UsuariosCreateManyNucleoInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UsuariosCreateManyNucleoInputSchema),z.lazy(() => UsuariosCreateManyNucleoInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UsuariosUpsertWithWhereUniqueWithoutNucleoInputSchema: z.ZodType<Prisma.UsuariosUpsertWithWhereUniqueWithoutNucleoInput> = z.object({
  where: z.lazy(() => UsuariosWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UsuariosUpdateWithoutNucleoInputSchema),z.lazy(() => UsuariosUncheckedUpdateWithoutNucleoInputSchema) ]),
  create: z.union([ z.lazy(() => UsuariosCreateWithoutNucleoInputSchema),z.lazy(() => UsuariosUncheckedCreateWithoutNucleoInputSchema) ]),
}).strict();

export const UsuariosUpdateWithWhereUniqueWithoutNucleoInputSchema: z.ZodType<Prisma.UsuariosUpdateWithWhereUniqueWithoutNucleoInput> = z.object({
  where: z.lazy(() => UsuariosWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UsuariosUpdateWithoutNucleoInputSchema),z.lazy(() => UsuariosUncheckedUpdateWithoutNucleoInputSchema) ]),
}).strict();

export const UsuariosUpdateManyWithWhereWithoutNucleoInputSchema: z.ZodType<Prisma.UsuariosUpdateManyWithWhereWithoutNucleoInput> = z.object({
  where: z.lazy(() => UsuariosScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UsuariosUpdateManyMutationInputSchema),z.lazy(() => UsuariosUncheckedUpdateManyWithoutNucleoInputSchema) ]),
}).strict();

export const UsuariosScalarWhereInputSchema: z.ZodType<Prisma.UsuariosScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UsuariosScalarWhereInputSchema),z.lazy(() => UsuariosScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UsuariosScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UsuariosScalarWhereInputSchema),z.lazy(() => UsuariosScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  nome: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cpf: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  senha: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ativo: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  administrador: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  nucleoId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const MaririCreateWithoutPreparosInputSchema: z.ZodType<Prisma.MaririCreateWithoutPreparosInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  pesoKg: z.string(),
  unidades: z.string(),
  tipo: z.string(),
  tipoPlantacao: z.string(),
  origemMensagem: z.string()
}).strict();

export const MaririUncheckedCreateWithoutPreparosInputSchema: z.ZodType<Prisma.MaririUncheckedCreateWithoutPreparosInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  pesoKg: z.string(),
  unidades: z.string(),
  tipo: z.string(),
  tipoPlantacao: z.string(),
  origemMensagem: z.string()
}).strict();

export const MaririCreateOrConnectWithoutPreparosInputSchema: z.ZodType<Prisma.MaririCreateOrConnectWithoutPreparosInput> = z.object({
  where: z.lazy(() => MaririWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MaririCreateWithoutPreparosInputSchema),z.lazy(() => MaririUncheckedCreateWithoutPreparosInputSchema) ]),
}).strict();

export const ChacronaCreateWithoutPreparosInputSchema: z.ZodType<Prisma.ChacronaCreateWithoutPreparosInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  pesoKg: z.string(),
  unidades: z.string(),
  tipo: z.string(),
  tipoPlantacao: z.string(),
  origemMensagem: z.string()
}).strict();

export const ChacronaUncheckedCreateWithoutPreparosInputSchema: z.ZodType<Prisma.ChacronaUncheckedCreateWithoutPreparosInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  pesoKg: z.string(),
  unidades: z.string(),
  tipo: z.string(),
  tipoPlantacao: z.string(),
  origemMensagem: z.string()
}).strict();

export const ChacronaCreateOrConnectWithoutPreparosInputSchema: z.ZodType<Prisma.ChacronaCreateOrConnectWithoutPreparosInput> = z.object({
  where: z.lazy(() => ChacronaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ChacronaCreateWithoutPreparosInputSchema),z.lazy(() => ChacronaUncheckedCreateWithoutPreparosInputSchema) ]),
}).strict();

export const LenhaCreateWithoutPreparosInputSchema: z.ZodType<Prisma.LenhaCreateWithoutPreparosInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  quantidadeM2: z.string(),
  tempoFornalhaAcesa: z.string(),
  tipoLenha: z.string(),
  tipoFornalha: z.string()
}).strict();

export const LenhaUncheckedCreateWithoutPreparosInputSchema: z.ZodType<Prisma.LenhaUncheckedCreateWithoutPreparosInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  quantidadeM2: z.string(),
  tempoFornalhaAcesa: z.string(),
  tipoLenha: z.string(),
  tipoFornalha: z.string()
}).strict();

export const LenhaCreateOrConnectWithoutPreparosInputSchema: z.ZodType<Prisma.LenhaCreateOrConnectWithoutPreparosInput> = z.object({
  where: z.lazy(() => LenhaWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LenhaCreateWithoutPreparosInputSchema),z.lazy(() => LenhaUncheckedCreateWithoutPreparosInputSchema) ]),
}).strict();

export const MaririUpsertWithoutPreparosInputSchema: z.ZodType<Prisma.MaririUpsertWithoutPreparosInput> = z.object({
  update: z.union([ z.lazy(() => MaririUpdateWithoutPreparosInputSchema),z.lazy(() => MaririUncheckedUpdateWithoutPreparosInputSchema) ]),
  create: z.union([ z.lazy(() => MaririCreateWithoutPreparosInputSchema),z.lazy(() => MaririUncheckedCreateWithoutPreparosInputSchema) ]),
  where: z.lazy(() => MaririWhereInputSchema).optional()
}).strict();

export const MaririUpdateToOneWithWhereWithoutPreparosInputSchema: z.ZodType<Prisma.MaririUpdateToOneWithWhereWithoutPreparosInput> = z.object({
  where: z.lazy(() => MaririWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MaririUpdateWithoutPreparosInputSchema),z.lazy(() => MaririUncheckedUpdateWithoutPreparosInputSchema) ]),
}).strict();

export const MaririUpdateWithoutPreparosInputSchema: z.ZodType<Prisma.MaririUpdateWithoutPreparosInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pesoKg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unidades: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoPlantacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origemMensagem: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const MaririUncheckedUpdateWithoutPreparosInputSchema: z.ZodType<Prisma.MaririUncheckedUpdateWithoutPreparosInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pesoKg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unidades: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoPlantacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origemMensagem: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChacronaUpsertWithoutPreparosInputSchema: z.ZodType<Prisma.ChacronaUpsertWithoutPreparosInput> = z.object({
  update: z.union([ z.lazy(() => ChacronaUpdateWithoutPreparosInputSchema),z.lazy(() => ChacronaUncheckedUpdateWithoutPreparosInputSchema) ]),
  create: z.union([ z.lazy(() => ChacronaCreateWithoutPreparosInputSchema),z.lazy(() => ChacronaUncheckedCreateWithoutPreparosInputSchema) ]),
  where: z.lazy(() => ChacronaWhereInputSchema).optional()
}).strict();

export const ChacronaUpdateToOneWithWhereWithoutPreparosInputSchema: z.ZodType<Prisma.ChacronaUpdateToOneWithWhereWithoutPreparosInput> = z.object({
  where: z.lazy(() => ChacronaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ChacronaUpdateWithoutPreparosInputSchema),z.lazy(() => ChacronaUncheckedUpdateWithoutPreparosInputSchema) ]),
}).strict();

export const ChacronaUpdateWithoutPreparosInputSchema: z.ZodType<Prisma.ChacronaUpdateWithoutPreparosInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pesoKg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unidades: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoPlantacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origemMensagem: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ChacronaUncheckedUpdateWithoutPreparosInputSchema: z.ZodType<Prisma.ChacronaUncheckedUpdateWithoutPreparosInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  pesoKg: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  unidades: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipo: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoPlantacao: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  origemMensagem: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LenhaUpsertWithoutPreparosInputSchema: z.ZodType<Prisma.LenhaUpsertWithoutPreparosInput> = z.object({
  update: z.union([ z.lazy(() => LenhaUpdateWithoutPreparosInputSchema),z.lazy(() => LenhaUncheckedUpdateWithoutPreparosInputSchema) ]),
  create: z.union([ z.lazy(() => LenhaCreateWithoutPreparosInputSchema),z.lazy(() => LenhaUncheckedCreateWithoutPreparosInputSchema) ]),
  where: z.lazy(() => LenhaWhereInputSchema).optional()
}).strict();

export const LenhaUpdateToOneWithWhereWithoutPreparosInputSchema: z.ZodType<Prisma.LenhaUpdateToOneWithWhereWithoutPreparosInput> = z.object({
  where: z.lazy(() => LenhaWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LenhaUpdateWithoutPreparosInputSchema),z.lazy(() => LenhaUncheckedUpdateWithoutPreparosInputSchema) ]),
}).strict();

export const LenhaUpdateWithoutPreparosInputSchema: z.ZodType<Prisma.LenhaUpdateWithoutPreparosInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  quantidadeM2: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tempoFornalhaAcesa: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoLenha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoFornalha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const LenhaUncheckedUpdateWithoutPreparosInputSchema: z.ZodType<Prisma.LenhaUncheckedUpdateWithoutPreparosInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  quantidadeM2: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tempoFornalhaAcesa: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoLenha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tipoFornalha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PreparosCreateWithoutMaririInputSchema: z.ZodType<Prisma.PreparosCreateWithoutMaririInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  inicio: z.coerce.date(),
  fim: z.coerce.date(),
  producaoLitros: z.string(),
  chacrona: z.lazy(() => ChacronaCreateNestedOneWithoutPreparosInputSchema).optional(),
  lenha: z.lazy(() => LenhaCreateNestedOneWithoutPreparosInputSchema).optional()
}).strict();

export const PreparosUncheckedCreateWithoutMaririInputSchema: z.ZodType<Prisma.PreparosUncheckedCreateWithoutMaririInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  inicio: z.coerce.date(),
  fim: z.coerce.date(),
  producaoLitros: z.string(),
  chacronaId: z.string().optional().nullable(),
  lenhaId: z.string().optional().nullable()
}).strict();

export const PreparosCreateOrConnectWithoutMaririInputSchema: z.ZodType<Prisma.PreparosCreateOrConnectWithoutMaririInput> = z.object({
  where: z.lazy(() => PreparosWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PreparosCreateWithoutMaririInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutMaririInputSchema) ]),
}).strict();

export const PreparosCreateManyMaririInputEnvelopeSchema: z.ZodType<Prisma.PreparosCreateManyMaririInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PreparosCreateManyMaririInputSchema),z.lazy(() => PreparosCreateManyMaririInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PreparosUpsertWithWhereUniqueWithoutMaririInputSchema: z.ZodType<Prisma.PreparosUpsertWithWhereUniqueWithoutMaririInput> = z.object({
  where: z.lazy(() => PreparosWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PreparosUpdateWithoutMaririInputSchema),z.lazy(() => PreparosUncheckedUpdateWithoutMaririInputSchema) ]),
  create: z.union([ z.lazy(() => PreparosCreateWithoutMaririInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutMaririInputSchema) ]),
}).strict();

export const PreparosUpdateWithWhereUniqueWithoutMaririInputSchema: z.ZodType<Prisma.PreparosUpdateWithWhereUniqueWithoutMaririInput> = z.object({
  where: z.lazy(() => PreparosWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PreparosUpdateWithoutMaririInputSchema),z.lazy(() => PreparosUncheckedUpdateWithoutMaririInputSchema) ]),
}).strict();

export const PreparosUpdateManyWithWhereWithoutMaririInputSchema: z.ZodType<Prisma.PreparosUpdateManyWithWhereWithoutMaririInput> = z.object({
  where: z.lazy(() => PreparosScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PreparosUpdateManyMutationInputSchema),z.lazy(() => PreparosUncheckedUpdateManyWithoutMaririInputSchema) ]),
}).strict();

export const PreparosScalarWhereInputSchema: z.ZodType<Prisma.PreparosScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PreparosScalarWhereInputSchema),z.lazy(() => PreparosScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PreparosScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PreparosScalarWhereInputSchema),z.lazy(() => PreparosScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  criadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  atualizadoEm: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  deletadoEm: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  deletado: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  inicio: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  fim: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  producaoLitros: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  maririId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  chacronaId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  lenhaId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const PreparosCreateWithoutChacronaInputSchema: z.ZodType<Prisma.PreparosCreateWithoutChacronaInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  inicio: z.coerce.date(),
  fim: z.coerce.date(),
  producaoLitros: z.string(),
  mariri: z.lazy(() => MaririCreateNestedOneWithoutPreparosInputSchema).optional(),
  lenha: z.lazy(() => LenhaCreateNestedOneWithoutPreparosInputSchema).optional()
}).strict();

export const PreparosUncheckedCreateWithoutChacronaInputSchema: z.ZodType<Prisma.PreparosUncheckedCreateWithoutChacronaInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  inicio: z.coerce.date(),
  fim: z.coerce.date(),
  producaoLitros: z.string(),
  maririId: z.string().optional().nullable(),
  lenhaId: z.string().optional().nullable()
}).strict();

export const PreparosCreateOrConnectWithoutChacronaInputSchema: z.ZodType<Prisma.PreparosCreateOrConnectWithoutChacronaInput> = z.object({
  where: z.lazy(() => PreparosWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PreparosCreateWithoutChacronaInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutChacronaInputSchema) ]),
}).strict();

export const PreparosCreateManyChacronaInputEnvelopeSchema: z.ZodType<Prisma.PreparosCreateManyChacronaInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PreparosCreateManyChacronaInputSchema),z.lazy(() => PreparosCreateManyChacronaInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PreparosUpsertWithWhereUniqueWithoutChacronaInputSchema: z.ZodType<Prisma.PreparosUpsertWithWhereUniqueWithoutChacronaInput> = z.object({
  where: z.lazy(() => PreparosWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PreparosUpdateWithoutChacronaInputSchema),z.lazy(() => PreparosUncheckedUpdateWithoutChacronaInputSchema) ]),
  create: z.union([ z.lazy(() => PreparosCreateWithoutChacronaInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutChacronaInputSchema) ]),
}).strict();

export const PreparosUpdateWithWhereUniqueWithoutChacronaInputSchema: z.ZodType<Prisma.PreparosUpdateWithWhereUniqueWithoutChacronaInput> = z.object({
  where: z.lazy(() => PreparosWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PreparosUpdateWithoutChacronaInputSchema),z.lazy(() => PreparosUncheckedUpdateWithoutChacronaInputSchema) ]),
}).strict();

export const PreparosUpdateManyWithWhereWithoutChacronaInputSchema: z.ZodType<Prisma.PreparosUpdateManyWithWhereWithoutChacronaInput> = z.object({
  where: z.lazy(() => PreparosScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PreparosUpdateManyMutationInputSchema),z.lazy(() => PreparosUncheckedUpdateManyWithoutChacronaInputSchema) ]),
}).strict();

export const PreparosCreateWithoutLenhaInputSchema: z.ZodType<Prisma.PreparosCreateWithoutLenhaInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  inicio: z.coerce.date(),
  fim: z.coerce.date(),
  producaoLitros: z.string(),
  mariri: z.lazy(() => MaririCreateNestedOneWithoutPreparosInputSchema).optional(),
  chacrona: z.lazy(() => ChacronaCreateNestedOneWithoutPreparosInputSchema).optional()
}).strict();

export const PreparosUncheckedCreateWithoutLenhaInputSchema: z.ZodType<Prisma.PreparosUncheckedCreateWithoutLenhaInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  inicio: z.coerce.date(),
  fim: z.coerce.date(),
  producaoLitros: z.string(),
  maririId: z.string().optional().nullable(),
  chacronaId: z.string().optional().nullable()
}).strict();

export const PreparosCreateOrConnectWithoutLenhaInputSchema: z.ZodType<Prisma.PreparosCreateOrConnectWithoutLenhaInput> = z.object({
  where: z.lazy(() => PreparosWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PreparosCreateWithoutLenhaInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutLenhaInputSchema) ]),
}).strict();

export const PreparosCreateManyLenhaInputEnvelopeSchema: z.ZodType<Prisma.PreparosCreateManyLenhaInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PreparosCreateManyLenhaInputSchema),z.lazy(() => PreparosCreateManyLenhaInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PreparosUpsertWithWhereUniqueWithoutLenhaInputSchema: z.ZodType<Prisma.PreparosUpsertWithWhereUniqueWithoutLenhaInput> = z.object({
  where: z.lazy(() => PreparosWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PreparosUpdateWithoutLenhaInputSchema),z.lazy(() => PreparosUncheckedUpdateWithoutLenhaInputSchema) ]),
  create: z.union([ z.lazy(() => PreparosCreateWithoutLenhaInputSchema),z.lazy(() => PreparosUncheckedCreateWithoutLenhaInputSchema) ]),
}).strict();

export const PreparosUpdateWithWhereUniqueWithoutLenhaInputSchema: z.ZodType<Prisma.PreparosUpdateWithWhereUniqueWithoutLenhaInput> = z.object({
  where: z.lazy(() => PreparosWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PreparosUpdateWithoutLenhaInputSchema),z.lazy(() => PreparosUncheckedUpdateWithoutLenhaInputSchema) ]),
}).strict();

export const PreparosUpdateManyWithWhereWithoutLenhaInputSchema: z.ZodType<Prisma.PreparosUpdateManyWithWhereWithoutLenhaInput> = z.object({
  where: z.lazy(() => PreparosScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PreparosUpdateManyMutationInputSchema),z.lazy(() => PreparosUncheckedUpdateManyWithoutLenhaInputSchema) ]),
}).strict();

export const UsuariosCreateManyNucleoInputSchema: z.ZodType<Prisma.UsuariosCreateManyNucleoInput> = z.object({
  id: z.string().cuid().optional(),
  nome: z.string(),
  cpf: z.string().optional().nullable(),
  senha: z.string(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  email: z.string().optional().nullable(),
  ativo: z.boolean().optional(),
  administrador: z.boolean().optional()
}).strict();

export const UsuariosUpdateWithoutNucleoInputSchema: z.ZodType<Prisma.UsuariosUpdateWithoutNucleoInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  senha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ativo: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  administrador: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsuariosUncheckedUpdateWithoutNucleoInputSchema: z.ZodType<Prisma.UsuariosUncheckedUpdateWithoutNucleoInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  senha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ativo: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  administrador: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UsuariosUncheckedUpdateManyWithoutNucleoInputSchema: z.ZodType<Prisma.UsuariosUncheckedUpdateManyWithoutNucleoInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  nome: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cpf: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  senha: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  ativo: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  administrador: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PreparosCreateManyMaririInputSchema: z.ZodType<Prisma.PreparosCreateManyMaririInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  inicio: z.coerce.date(),
  fim: z.coerce.date(),
  producaoLitros: z.string(),
  chacronaId: z.string().optional().nullable(),
  lenhaId: z.string().optional().nullable()
}).strict();

export const PreparosUpdateWithoutMaririInputSchema: z.ZodType<Prisma.PreparosUpdateWithoutMaririInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  inicio: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fim: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  producaoLitros: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  chacrona: z.lazy(() => ChacronaUpdateOneWithoutPreparosNestedInputSchema).optional(),
  lenha: z.lazy(() => LenhaUpdateOneWithoutPreparosNestedInputSchema).optional()
}).strict();

export const PreparosUncheckedUpdateWithoutMaririInputSchema: z.ZodType<Prisma.PreparosUncheckedUpdateWithoutMaririInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  inicio: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fim: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  producaoLitros: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  chacronaId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lenhaId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PreparosUncheckedUpdateManyWithoutMaririInputSchema: z.ZodType<Prisma.PreparosUncheckedUpdateManyWithoutMaririInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  inicio: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fim: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  producaoLitros: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  chacronaId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lenhaId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PreparosCreateManyChacronaInputSchema: z.ZodType<Prisma.PreparosCreateManyChacronaInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  inicio: z.coerce.date(),
  fim: z.coerce.date(),
  producaoLitros: z.string(),
  maririId: z.string().optional().nullable(),
  lenhaId: z.string().optional().nullable()
}).strict();

export const PreparosUpdateWithoutChacronaInputSchema: z.ZodType<Prisma.PreparosUpdateWithoutChacronaInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  inicio: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fim: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  producaoLitros: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mariri: z.lazy(() => MaririUpdateOneWithoutPreparosNestedInputSchema).optional(),
  lenha: z.lazy(() => LenhaUpdateOneWithoutPreparosNestedInputSchema).optional()
}).strict();

export const PreparosUncheckedUpdateWithoutChacronaInputSchema: z.ZodType<Prisma.PreparosUncheckedUpdateWithoutChacronaInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  inicio: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fim: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  producaoLitros: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maririId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lenhaId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PreparosUncheckedUpdateManyWithoutChacronaInputSchema: z.ZodType<Prisma.PreparosUncheckedUpdateManyWithoutChacronaInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  inicio: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fim: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  producaoLitros: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maririId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lenhaId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PreparosCreateManyLenhaInputSchema: z.ZodType<Prisma.PreparosCreateManyLenhaInput> = z.object({
  id: z.string().cuid().optional(),
  criadoEm: z.coerce.date().optional(),
  atualizadoEm: z.coerce.date().optional(),
  deletadoEm: z.coerce.date().optional().nullable(),
  deletado: z.boolean().optional(),
  inicio: z.coerce.date(),
  fim: z.coerce.date(),
  producaoLitros: z.string(),
  maririId: z.string().optional().nullable(),
  chacronaId: z.string().optional().nullable()
}).strict();

export const PreparosUpdateWithoutLenhaInputSchema: z.ZodType<Prisma.PreparosUpdateWithoutLenhaInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  inicio: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fim: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  producaoLitros: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mariri: z.lazy(() => MaririUpdateOneWithoutPreparosNestedInputSchema).optional(),
  chacrona: z.lazy(() => ChacronaUpdateOneWithoutPreparosNestedInputSchema).optional()
}).strict();

export const PreparosUncheckedUpdateWithoutLenhaInputSchema: z.ZodType<Prisma.PreparosUncheckedUpdateWithoutLenhaInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  inicio: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fim: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  producaoLitros: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maririId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  chacronaId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const PreparosUncheckedUpdateManyWithoutLenhaInputSchema: z.ZodType<Prisma.PreparosUncheckedUpdateManyWithoutLenhaInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  criadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  atualizadoEm: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletadoEm: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  deletado: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  inicio: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  fim: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  producaoLitros: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  maririId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  chacronaId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UsuariosFindFirstArgsSchema: z.ZodType<Prisma.UsuariosFindFirstArgs> = z.object({
  select: UsuariosSelectSchema.optional(),
  include: UsuariosIncludeSchema.optional(),
  where: UsuariosWhereInputSchema.optional(),
  orderBy: z.union([ UsuariosOrderByWithRelationInputSchema.array(),UsuariosOrderByWithRelationInputSchema ]).optional(),
  cursor: UsuariosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsuariosScalarFieldEnumSchema,UsuariosScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UsuariosFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UsuariosFindFirstOrThrowArgs> = z.object({
  select: UsuariosSelectSchema.optional(),
  include: UsuariosIncludeSchema.optional(),
  where: UsuariosWhereInputSchema.optional(),
  orderBy: z.union([ UsuariosOrderByWithRelationInputSchema.array(),UsuariosOrderByWithRelationInputSchema ]).optional(),
  cursor: UsuariosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsuariosScalarFieldEnumSchema,UsuariosScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UsuariosFindManyArgsSchema: z.ZodType<Prisma.UsuariosFindManyArgs> = z.object({
  select: UsuariosSelectSchema.optional(),
  include: UsuariosIncludeSchema.optional(),
  where: UsuariosWhereInputSchema.optional(),
  orderBy: z.union([ UsuariosOrderByWithRelationInputSchema.array(),UsuariosOrderByWithRelationInputSchema ]).optional(),
  cursor: UsuariosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UsuariosScalarFieldEnumSchema,UsuariosScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UsuariosAggregateArgsSchema: z.ZodType<Prisma.UsuariosAggregateArgs> = z.object({
  where: UsuariosWhereInputSchema.optional(),
  orderBy: z.union([ UsuariosOrderByWithRelationInputSchema.array(),UsuariosOrderByWithRelationInputSchema ]).optional(),
  cursor: UsuariosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UsuariosGroupByArgsSchema: z.ZodType<Prisma.UsuariosGroupByArgs> = z.object({
  where: UsuariosWhereInputSchema.optional(),
  orderBy: z.union([ UsuariosOrderByWithAggregationInputSchema.array(),UsuariosOrderByWithAggregationInputSchema ]).optional(),
  by: UsuariosScalarFieldEnumSchema.array(),
  having: UsuariosScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UsuariosFindUniqueArgsSchema: z.ZodType<Prisma.UsuariosFindUniqueArgs> = z.object({
  select: UsuariosSelectSchema.optional(),
  include: UsuariosIncludeSchema.optional(),
  where: UsuariosWhereUniqueInputSchema,
}).strict() ;

export const UsuariosFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UsuariosFindUniqueOrThrowArgs> = z.object({
  select: UsuariosSelectSchema.optional(),
  include: UsuariosIncludeSchema.optional(),
  where: UsuariosWhereUniqueInputSchema,
}).strict() ;

export const NucleosFindFirstArgsSchema: z.ZodType<Prisma.NucleosFindFirstArgs> = z.object({
  select: NucleosSelectSchema.optional(),
  include: NucleosIncludeSchema.optional(),
  where: NucleosWhereInputSchema.optional(),
  orderBy: z.union([ NucleosOrderByWithRelationInputSchema.array(),NucleosOrderByWithRelationInputSchema ]).optional(),
  cursor: NucleosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NucleosScalarFieldEnumSchema,NucleosScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NucleosFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NucleosFindFirstOrThrowArgs> = z.object({
  select: NucleosSelectSchema.optional(),
  include: NucleosIncludeSchema.optional(),
  where: NucleosWhereInputSchema.optional(),
  orderBy: z.union([ NucleosOrderByWithRelationInputSchema.array(),NucleosOrderByWithRelationInputSchema ]).optional(),
  cursor: NucleosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NucleosScalarFieldEnumSchema,NucleosScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NucleosFindManyArgsSchema: z.ZodType<Prisma.NucleosFindManyArgs> = z.object({
  select: NucleosSelectSchema.optional(),
  include: NucleosIncludeSchema.optional(),
  where: NucleosWhereInputSchema.optional(),
  orderBy: z.union([ NucleosOrderByWithRelationInputSchema.array(),NucleosOrderByWithRelationInputSchema ]).optional(),
  cursor: NucleosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NucleosScalarFieldEnumSchema,NucleosScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NucleosAggregateArgsSchema: z.ZodType<Prisma.NucleosAggregateArgs> = z.object({
  where: NucleosWhereInputSchema.optional(),
  orderBy: z.union([ NucleosOrderByWithRelationInputSchema.array(),NucleosOrderByWithRelationInputSchema ]).optional(),
  cursor: NucleosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NucleosGroupByArgsSchema: z.ZodType<Prisma.NucleosGroupByArgs> = z.object({
  where: NucleosWhereInputSchema.optional(),
  orderBy: z.union([ NucleosOrderByWithAggregationInputSchema.array(),NucleosOrderByWithAggregationInputSchema ]).optional(),
  by: NucleosScalarFieldEnumSchema.array(),
  having: NucleosScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NucleosFindUniqueArgsSchema: z.ZodType<Prisma.NucleosFindUniqueArgs> = z.object({
  select: NucleosSelectSchema.optional(),
  include: NucleosIncludeSchema.optional(),
  where: NucleosWhereUniqueInputSchema,
}).strict() ;

export const NucleosFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NucleosFindUniqueOrThrowArgs> = z.object({
  select: NucleosSelectSchema.optional(),
  include: NucleosIncludeSchema.optional(),
  where: NucleosWhereUniqueInputSchema,
}).strict() ;

export const SessoesFindFirstArgsSchema: z.ZodType<Prisma.SessoesFindFirstArgs> = z.object({
  select: SessoesSelectSchema.optional(),
  where: SessoesWhereInputSchema.optional(),
  orderBy: z.union([ SessoesOrderByWithRelationInputSchema.array(),SessoesOrderByWithRelationInputSchema ]).optional(),
  cursor: SessoesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessoesScalarFieldEnumSchema,SessoesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessoesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessoesFindFirstOrThrowArgs> = z.object({
  select: SessoesSelectSchema.optional(),
  where: SessoesWhereInputSchema.optional(),
  orderBy: z.union([ SessoesOrderByWithRelationInputSchema.array(),SessoesOrderByWithRelationInputSchema ]).optional(),
  cursor: SessoesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessoesScalarFieldEnumSchema,SessoesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessoesFindManyArgsSchema: z.ZodType<Prisma.SessoesFindManyArgs> = z.object({
  select: SessoesSelectSchema.optional(),
  where: SessoesWhereInputSchema.optional(),
  orderBy: z.union([ SessoesOrderByWithRelationInputSchema.array(),SessoesOrderByWithRelationInputSchema ]).optional(),
  cursor: SessoesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessoesScalarFieldEnumSchema,SessoesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessoesAggregateArgsSchema: z.ZodType<Prisma.SessoesAggregateArgs> = z.object({
  where: SessoesWhereInputSchema.optional(),
  orderBy: z.union([ SessoesOrderByWithRelationInputSchema.array(),SessoesOrderByWithRelationInputSchema ]).optional(),
  cursor: SessoesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessoesGroupByArgsSchema: z.ZodType<Prisma.SessoesGroupByArgs> = z.object({
  where: SessoesWhereInputSchema.optional(),
  orderBy: z.union([ SessoesOrderByWithAggregationInputSchema.array(),SessoesOrderByWithAggregationInputSchema ]).optional(),
  by: SessoesScalarFieldEnumSchema.array(),
  having: SessoesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessoesFindUniqueArgsSchema: z.ZodType<Prisma.SessoesFindUniqueArgs> = z.object({
  select: SessoesSelectSchema.optional(),
  where: SessoesWhereUniqueInputSchema,
}).strict() ;

export const SessoesFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessoesFindUniqueOrThrowArgs> = z.object({
  select: SessoesSelectSchema.optional(),
  where: SessoesWhereUniqueInputSchema,
}).strict() ;

export const PreparosFindFirstArgsSchema: z.ZodType<Prisma.PreparosFindFirstArgs> = z.object({
  select: PreparosSelectSchema.optional(),
  include: PreparosIncludeSchema.optional(),
  where: PreparosWhereInputSchema.optional(),
  orderBy: z.union([ PreparosOrderByWithRelationInputSchema.array(),PreparosOrderByWithRelationInputSchema ]).optional(),
  cursor: PreparosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PreparosScalarFieldEnumSchema,PreparosScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PreparosFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PreparosFindFirstOrThrowArgs> = z.object({
  select: PreparosSelectSchema.optional(),
  include: PreparosIncludeSchema.optional(),
  where: PreparosWhereInputSchema.optional(),
  orderBy: z.union([ PreparosOrderByWithRelationInputSchema.array(),PreparosOrderByWithRelationInputSchema ]).optional(),
  cursor: PreparosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PreparosScalarFieldEnumSchema,PreparosScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PreparosFindManyArgsSchema: z.ZodType<Prisma.PreparosFindManyArgs> = z.object({
  select: PreparosSelectSchema.optional(),
  include: PreparosIncludeSchema.optional(),
  where: PreparosWhereInputSchema.optional(),
  orderBy: z.union([ PreparosOrderByWithRelationInputSchema.array(),PreparosOrderByWithRelationInputSchema ]).optional(),
  cursor: PreparosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PreparosScalarFieldEnumSchema,PreparosScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PreparosAggregateArgsSchema: z.ZodType<Prisma.PreparosAggregateArgs> = z.object({
  where: PreparosWhereInputSchema.optional(),
  orderBy: z.union([ PreparosOrderByWithRelationInputSchema.array(),PreparosOrderByWithRelationInputSchema ]).optional(),
  cursor: PreparosWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PreparosGroupByArgsSchema: z.ZodType<Prisma.PreparosGroupByArgs> = z.object({
  where: PreparosWhereInputSchema.optional(),
  orderBy: z.union([ PreparosOrderByWithAggregationInputSchema.array(),PreparosOrderByWithAggregationInputSchema ]).optional(),
  by: PreparosScalarFieldEnumSchema.array(),
  having: PreparosScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PreparosFindUniqueArgsSchema: z.ZodType<Prisma.PreparosFindUniqueArgs> = z.object({
  select: PreparosSelectSchema.optional(),
  include: PreparosIncludeSchema.optional(),
  where: PreparosWhereUniqueInputSchema,
}).strict() ;

export const PreparosFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PreparosFindUniqueOrThrowArgs> = z.object({
  select: PreparosSelectSchema.optional(),
  include: PreparosIncludeSchema.optional(),
  where: PreparosWhereUniqueInputSchema,
}).strict() ;

export const MaririFindFirstArgsSchema: z.ZodType<Prisma.MaririFindFirstArgs> = z.object({
  select: MaririSelectSchema.optional(),
  include: MaririIncludeSchema.optional(),
  where: MaririWhereInputSchema.optional(),
  orderBy: z.union([ MaririOrderByWithRelationInputSchema.array(),MaririOrderByWithRelationInputSchema ]).optional(),
  cursor: MaririWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MaririScalarFieldEnumSchema,MaririScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MaririFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MaririFindFirstOrThrowArgs> = z.object({
  select: MaririSelectSchema.optional(),
  include: MaririIncludeSchema.optional(),
  where: MaririWhereInputSchema.optional(),
  orderBy: z.union([ MaririOrderByWithRelationInputSchema.array(),MaririOrderByWithRelationInputSchema ]).optional(),
  cursor: MaririWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MaririScalarFieldEnumSchema,MaririScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MaririFindManyArgsSchema: z.ZodType<Prisma.MaririFindManyArgs> = z.object({
  select: MaririSelectSchema.optional(),
  include: MaririIncludeSchema.optional(),
  where: MaririWhereInputSchema.optional(),
  orderBy: z.union([ MaririOrderByWithRelationInputSchema.array(),MaririOrderByWithRelationInputSchema ]).optional(),
  cursor: MaririWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ MaririScalarFieldEnumSchema,MaririScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const MaririAggregateArgsSchema: z.ZodType<Prisma.MaririAggregateArgs> = z.object({
  where: MaririWhereInputSchema.optional(),
  orderBy: z.union([ MaririOrderByWithRelationInputSchema.array(),MaririOrderByWithRelationInputSchema ]).optional(),
  cursor: MaririWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MaririGroupByArgsSchema: z.ZodType<Prisma.MaririGroupByArgs> = z.object({
  where: MaririWhereInputSchema.optional(),
  orderBy: z.union([ MaririOrderByWithAggregationInputSchema.array(),MaririOrderByWithAggregationInputSchema ]).optional(),
  by: MaririScalarFieldEnumSchema.array(),
  having: MaririScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const MaririFindUniqueArgsSchema: z.ZodType<Prisma.MaririFindUniqueArgs> = z.object({
  select: MaririSelectSchema.optional(),
  include: MaririIncludeSchema.optional(),
  where: MaririWhereUniqueInputSchema,
}).strict() ;

export const MaririFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MaririFindUniqueOrThrowArgs> = z.object({
  select: MaririSelectSchema.optional(),
  include: MaririIncludeSchema.optional(),
  where: MaririWhereUniqueInputSchema,
}).strict() ;

export const ChacronaFindFirstArgsSchema: z.ZodType<Prisma.ChacronaFindFirstArgs> = z.object({
  select: ChacronaSelectSchema.optional(),
  include: ChacronaIncludeSchema.optional(),
  where: ChacronaWhereInputSchema.optional(),
  orderBy: z.union([ ChacronaOrderByWithRelationInputSchema.array(),ChacronaOrderByWithRelationInputSchema ]).optional(),
  cursor: ChacronaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChacronaScalarFieldEnumSchema,ChacronaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChacronaFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ChacronaFindFirstOrThrowArgs> = z.object({
  select: ChacronaSelectSchema.optional(),
  include: ChacronaIncludeSchema.optional(),
  where: ChacronaWhereInputSchema.optional(),
  orderBy: z.union([ ChacronaOrderByWithRelationInputSchema.array(),ChacronaOrderByWithRelationInputSchema ]).optional(),
  cursor: ChacronaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChacronaScalarFieldEnumSchema,ChacronaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChacronaFindManyArgsSchema: z.ZodType<Prisma.ChacronaFindManyArgs> = z.object({
  select: ChacronaSelectSchema.optional(),
  include: ChacronaIncludeSchema.optional(),
  where: ChacronaWhereInputSchema.optional(),
  orderBy: z.union([ ChacronaOrderByWithRelationInputSchema.array(),ChacronaOrderByWithRelationInputSchema ]).optional(),
  cursor: ChacronaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ChacronaScalarFieldEnumSchema,ChacronaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ChacronaAggregateArgsSchema: z.ZodType<Prisma.ChacronaAggregateArgs> = z.object({
  where: ChacronaWhereInputSchema.optional(),
  orderBy: z.union([ ChacronaOrderByWithRelationInputSchema.array(),ChacronaOrderByWithRelationInputSchema ]).optional(),
  cursor: ChacronaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChacronaGroupByArgsSchema: z.ZodType<Prisma.ChacronaGroupByArgs> = z.object({
  where: ChacronaWhereInputSchema.optional(),
  orderBy: z.union([ ChacronaOrderByWithAggregationInputSchema.array(),ChacronaOrderByWithAggregationInputSchema ]).optional(),
  by: ChacronaScalarFieldEnumSchema.array(),
  having: ChacronaScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ChacronaFindUniqueArgsSchema: z.ZodType<Prisma.ChacronaFindUniqueArgs> = z.object({
  select: ChacronaSelectSchema.optional(),
  include: ChacronaIncludeSchema.optional(),
  where: ChacronaWhereUniqueInputSchema,
}).strict() ;

export const ChacronaFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ChacronaFindUniqueOrThrowArgs> = z.object({
  select: ChacronaSelectSchema.optional(),
  include: ChacronaIncludeSchema.optional(),
  where: ChacronaWhereUniqueInputSchema,
}).strict() ;

export const LenhaFindFirstArgsSchema: z.ZodType<Prisma.LenhaFindFirstArgs> = z.object({
  select: LenhaSelectSchema.optional(),
  include: LenhaIncludeSchema.optional(),
  where: LenhaWhereInputSchema.optional(),
  orderBy: z.union([ LenhaOrderByWithRelationInputSchema.array(),LenhaOrderByWithRelationInputSchema ]).optional(),
  cursor: LenhaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LenhaScalarFieldEnumSchema,LenhaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LenhaFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LenhaFindFirstOrThrowArgs> = z.object({
  select: LenhaSelectSchema.optional(),
  include: LenhaIncludeSchema.optional(),
  where: LenhaWhereInputSchema.optional(),
  orderBy: z.union([ LenhaOrderByWithRelationInputSchema.array(),LenhaOrderByWithRelationInputSchema ]).optional(),
  cursor: LenhaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LenhaScalarFieldEnumSchema,LenhaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LenhaFindManyArgsSchema: z.ZodType<Prisma.LenhaFindManyArgs> = z.object({
  select: LenhaSelectSchema.optional(),
  include: LenhaIncludeSchema.optional(),
  where: LenhaWhereInputSchema.optional(),
  orderBy: z.union([ LenhaOrderByWithRelationInputSchema.array(),LenhaOrderByWithRelationInputSchema ]).optional(),
  cursor: LenhaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LenhaScalarFieldEnumSchema,LenhaScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const LenhaAggregateArgsSchema: z.ZodType<Prisma.LenhaAggregateArgs> = z.object({
  where: LenhaWhereInputSchema.optional(),
  orderBy: z.union([ LenhaOrderByWithRelationInputSchema.array(),LenhaOrderByWithRelationInputSchema ]).optional(),
  cursor: LenhaWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LenhaGroupByArgsSchema: z.ZodType<Prisma.LenhaGroupByArgs> = z.object({
  where: LenhaWhereInputSchema.optional(),
  orderBy: z.union([ LenhaOrderByWithAggregationInputSchema.array(),LenhaOrderByWithAggregationInputSchema ]).optional(),
  by: LenhaScalarFieldEnumSchema.array(),
  having: LenhaScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const LenhaFindUniqueArgsSchema: z.ZodType<Prisma.LenhaFindUniqueArgs> = z.object({
  select: LenhaSelectSchema.optional(),
  include: LenhaIncludeSchema.optional(),
  where: LenhaWhereUniqueInputSchema,
}).strict() ;

export const LenhaFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LenhaFindUniqueOrThrowArgs> = z.object({
  select: LenhaSelectSchema.optional(),
  include: LenhaIncludeSchema.optional(),
  where: LenhaWhereUniqueInputSchema,
}).strict() ;

export const UsuariosCreateArgsSchema: z.ZodType<Prisma.UsuariosCreateArgs> = z.object({
  select: UsuariosSelectSchema.optional(),
  include: UsuariosIncludeSchema.optional(),
  data: z.union([ UsuariosCreateInputSchema,UsuariosUncheckedCreateInputSchema ]),
}).strict() ;

export const UsuariosUpsertArgsSchema: z.ZodType<Prisma.UsuariosUpsertArgs> = z.object({
  select: UsuariosSelectSchema.optional(),
  include: UsuariosIncludeSchema.optional(),
  where: UsuariosWhereUniqueInputSchema,
  create: z.union([ UsuariosCreateInputSchema,UsuariosUncheckedCreateInputSchema ]),
  update: z.union([ UsuariosUpdateInputSchema,UsuariosUncheckedUpdateInputSchema ]),
}).strict() ;

export const UsuariosCreateManyArgsSchema: z.ZodType<Prisma.UsuariosCreateManyArgs> = z.object({
  data: z.union([ UsuariosCreateManyInputSchema,UsuariosCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UsuariosCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UsuariosCreateManyAndReturnArgs> = z.object({
  data: z.union([ UsuariosCreateManyInputSchema,UsuariosCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UsuariosDeleteArgsSchema: z.ZodType<Prisma.UsuariosDeleteArgs> = z.object({
  select: UsuariosSelectSchema.optional(),
  include: UsuariosIncludeSchema.optional(),
  where: UsuariosWhereUniqueInputSchema,
}).strict() ;

export const UsuariosUpdateArgsSchema: z.ZodType<Prisma.UsuariosUpdateArgs> = z.object({
  select: UsuariosSelectSchema.optional(),
  include: UsuariosIncludeSchema.optional(),
  data: z.union([ UsuariosUpdateInputSchema,UsuariosUncheckedUpdateInputSchema ]),
  where: UsuariosWhereUniqueInputSchema,
}).strict() ;

export const UsuariosUpdateManyArgsSchema: z.ZodType<Prisma.UsuariosUpdateManyArgs> = z.object({
  data: z.union([ UsuariosUpdateManyMutationInputSchema,UsuariosUncheckedUpdateManyInputSchema ]),
  where: UsuariosWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UsuariosUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.UsuariosUpdateManyAndReturnArgs> = z.object({
  data: z.union([ UsuariosUpdateManyMutationInputSchema,UsuariosUncheckedUpdateManyInputSchema ]),
  where: UsuariosWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const UsuariosDeleteManyArgsSchema: z.ZodType<Prisma.UsuariosDeleteManyArgs> = z.object({
  where: UsuariosWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NucleosCreateArgsSchema: z.ZodType<Prisma.NucleosCreateArgs> = z.object({
  select: NucleosSelectSchema.optional(),
  include: NucleosIncludeSchema.optional(),
  data: z.union([ NucleosCreateInputSchema,NucleosUncheckedCreateInputSchema ]),
}).strict() ;

export const NucleosUpsertArgsSchema: z.ZodType<Prisma.NucleosUpsertArgs> = z.object({
  select: NucleosSelectSchema.optional(),
  include: NucleosIncludeSchema.optional(),
  where: NucleosWhereUniqueInputSchema,
  create: z.union([ NucleosCreateInputSchema,NucleosUncheckedCreateInputSchema ]),
  update: z.union([ NucleosUpdateInputSchema,NucleosUncheckedUpdateInputSchema ]),
}).strict() ;

export const NucleosCreateManyArgsSchema: z.ZodType<Prisma.NucleosCreateManyArgs> = z.object({
  data: z.union([ NucleosCreateManyInputSchema,NucleosCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const NucleosCreateManyAndReturnArgsSchema: z.ZodType<Prisma.NucleosCreateManyAndReturnArgs> = z.object({
  data: z.union([ NucleosCreateManyInputSchema,NucleosCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const NucleosDeleteArgsSchema: z.ZodType<Prisma.NucleosDeleteArgs> = z.object({
  select: NucleosSelectSchema.optional(),
  include: NucleosIncludeSchema.optional(),
  where: NucleosWhereUniqueInputSchema,
}).strict() ;

export const NucleosUpdateArgsSchema: z.ZodType<Prisma.NucleosUpdateArgs> = z.object({
  select: NucleosSelectSchema.optional(),
  include: NucleosIncludeSchema.optional(),
  data: z.union([ NucleosUpdateInputSchema,NucleosUncheckedUpdateInputSchema ]),
  where: NucleosWhereUniqueInputSchema,
}).strict() ;

export const NucleosUpdateManyArgsSchema: z.ZodType<Prisma.NucleosUpdateManyArgs> = z.object({
  data: z.union([ NucleosUpdateManyMutationInputSchema,NucleosUncheckedUpdateManyInputSchema ]),
  where: NucleosWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NucleosUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.NucleosUpdateManyAndReturnArgs> = z.object({
  data: z.union([ NucleosUpdateManyMutationInputSchema,NucleosUncheckedUpdateManyInputSchema ]),
  where: NucleosWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const NucleosDeleteManyArgsSchema: z.ZodType<Prisma.NucleosDeleteManyArgs> = z.object({
  where: NucleosWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SessoesCreateArgsSchema: z.ZodType<Prisma.SessoesCreateArgs> = z.object({
  select: SessoesSelectSchema.optional(),
  data: z.union([ SessoesCreateInputSchema,SessoesUncheckedCreateInputSchema ]),
}).strict() ;

export const SessoesUpsertArgsSchema: z.ZodType<Prisma.SessoesUpsertArgs> = z.object({
  select: SessoesSelectSchema.optional(),
  where: SessoesWhereUniqueInputSchema,
  create: z.union([ SessoesCreateInputSchema,SessoesUncheckedCreateInputSchema ]),
  update: z.union([ SessoesUpdateInputSchema,SessoesUncheckedUpdateInputSchema ]),
}).strict() ;

export const SessoesCreateManyArgsSchema: z.ZodType<Prisma.SessoesCreateManyArgs> = z.object({
  data: z.union([ SessoesCreateManyInputSchema,SessoesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SessoesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SessoesCreateManyAndReturnArgs> = z.object({
  data: z.union([ SessoesCreateManyInputSchema,SessoesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SessoesDeleteArgsSchema: z.ZodType<Prisma.SessoesDeleteArgs> = z.object({
  select: SessoesSelectSchema.optional(),
  where: SessoesWhereUniqueInputSchema,
}).strict() ;

export const SessoesUpdateArgsSchema: z.ZodType<Prisma.SessoesUpdateArgs> = z.object({
  select: SessoesSelectSchema.optional(),
  data: z.union([ SessoesUpdateInputSchema,SessoesUncheckedUpdateInputSchema ]),
  where: SessoesWhereUniqueInputSchema,
}).strict() ;

export const SessoesUpdateManyArgsSchema: z.ZodType<Prisma.SessoesUpdateManyArgs> = z.object({
  data: z.union([ SessoesUpdateManyMutationInputSchema,SessoesUncheckedUpdateManyInputSchema ]),
  where: SessoesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SessoesUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SessoesUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SessoesUpdateManyMutationInputSchema,SessoesUncheckedUpdateManyInputSchema ]),
  where: SessoesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const SessoesDeleteManyArgsSchema: z.ZodType<Prisma.SessoesDeleteManyArgs> = z.object({
  where: SessoesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PreparosCreateArgsSchema: z.ZodType<Prisma.PreparosCreateArgs> = z.object({
  select: PreparosSelectSchema.optional(),
  include: PreparosIncludeSchema.optional(),
  data: z.union([ PreparosCreateInputSchema,PreparosUncheckedCreateInputSchema ]),
}).strict() ;

export const PreparosUpsertArgsSchema: z.ZodType<Prisma.PreparosUpsertArgs> = z.object({
  select: PreparosSelectSchema.optional(),
  include: PreparosIncludeSchema.optional(),
  where: PreparosWhereUniqueInputSchema,
  create: z.union([ PreparosCreateInputSchema,PreparosUncheckedCreateInputSchema ]),
  update: z.union([ PreparosUpdateInputSchema,PreparosUncheckedUpdateInputSchema ]),
}).strict() ;

export const PreparosCreateManyArgsSchema: z.ZodType<Prisma.PreparosCreateManyArgs> = z.object({
  data: z.union([ PreparosCreateManyInputSchema,PreparosCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PreparosCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PreparosCreateManyAndReturnArgs> = z.object({
  data: z.union([ PreparosCreateManyInputSchema,PreparosCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PreparosDeleteArgsSchema: z.ZodType<Prisma.PreparosDeleteArgs> = z.object({
  select: PreparosSelectSchema.optional(),
  include: PreparosIncludeSchema.optional(),
  where: PreparosWhereUniqueInputSchema,
}).strict() ;

export const PreparosUpdateArgsSchema: z.ZodType<Prisma.PreparosUpdateArgs> = z.object({
  select: PreparosSelectSchema.optional(),
  include: PreparosIncludeSchema.optional(),
  data: z.union([ PreparosUpdateInputSchema,PreparosUncheckedUpdateInputSchema ]),
  where: PreparosWhereUniqueInputSchema,
}).strict() ;

export const PreparosUpdateManyArgsSchema: z.ZodType<Prisma.PreparosUpdateManyArgs> = z.object({
  data: z.union([ PreparosUpdateManyMutationInputSchema,PreparosUncheckedUpdateManyInputSchema ]),
  where: PreparosWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PreparosUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PreparosUpdateManyAndReturnArgs> = z.object({
  data: z.union([ PreparosUpdateManyMutationInputSchema,PreparosUncheckedUpdateManyInputSchema ]),
  where: PreparosWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const PreparosDeleteManyArgsSchema: z.ZodType<Prisma.PreparosDeleteManyArgs> = z.object({
  where: PreparosWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const MaririCreateArgsSchema: z.ZodType<Prisma.MaririCreateArgs> = z.object({
  select: MaririSelectSchema.optional(),
  include: MaririIncludeSchema.optional(),
  data: z.union([ MaririCreateInputSchema,MaririUncheckedCreateInputSchema ]),
}).strict() ;

export const MaririUpsertArgsSchema: z.ZodType<Prisma.MaririUpsertArgs> = z.object({
  select: MaririSelectSchema.optional(),
  include: MaririIncludeSchema.optional(),
  where: MaririWhereUniqueInputSchema,
  create: z.union([ MaririCreateInputSchema,MaririUncheckedCreateInputSchema ]),
  update: z.union([ MaririUpdateInputSchema,MaririUncheckedUpdateInputSchema ]),
}).strict() ;

export const MaririCreateManyArgsSchema: z.ZodType<Prisma.MaririCreateManyArgs> = z.object({
  data: z.union([ MaririCreateManyInputSchema,MaririCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const MaririCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MaririCreateManyAndReturnArgs> = z.object({
  data: z.union([ MaririCreateManyInputSchema,MaririCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const MaririDeleteArgsSchema: z.ZodType<Prisma.MaririDeleteArgs> = z.object({
  select: MaririSelectSchema.optional(),
  include: MaririIncludeSchema.optional(),
  where: MaririWhereUniqueInputSchema,
}).strict() ;

export const MaririUpdateArgsSchema: z.ZodType<Prisma.MaririUpdateArgs> = z.object({
  select: MaririSelectSchema.optional(),
  include: MaririIncludeSchema.optional(),
  data: z.union([ MaririUpdateInputSchema,MaririUncheckedUpdateInputSchema ]),
  where: MaririWhereUniqueInputSchema,
}).strict() ;

export const MaririUpdateManyArgsSchema: z.ZodType<Prisma.MaririUpdateManyArgs> = z.object({
  data: z.union([ MaririUpdateManyMutationInputSchema,MaririUncheckedUpdateManyInputSchema ]),
  where: MaririWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const MaririUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.MaririUpdateManyAndReturnArgs> = z.object({
  data: z.union([ MaririUpdateManyMutationInputSchema,MaririUncheckedUpdateManyInputSchema ]),
  where: MaririWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const MaririDeleteManyArgsSchema: z.ZodType<Prisma.MaririDeleteManyArgs> = z.object({
  where: MaririWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ChacronaCreateArgsSchema: z.ZodType<Prisma.ChacronaCreateArgs> = z.object({
  select: ChacronaSelectSchema.optional(),
  include: ChacronaIncludeSchema.optional(),
  data: z.union([ ChacronaCreateInputSchema,ChacronaUncheckedCreateInputSchema ]),
}).strict() ;

export const ChacronaUpsertArgsSchema: z.ZodType<Prisma.ChacronaUpsertArgs> = z.object({
  select: ChacronaSelectSchema.optional(),
  include: ChacronaIncludeSchema.optional(),
  where: ChacronaWhereUniqueInputSchema,
  create: z.union([ ChacronaCreateInputSchema,ChacronaUncheckedCreateInputSchema ]),
  update: z.union([ ChacronaUpdateInputSchema,ChacronaUncheckedUpdateInputSchema ]),
}).strict() ;

export const ChacronaCreateManyArgsSchema: z.ZodType<Prisma.ChacronaCreateManyArgs> = z.object({
  data: z.union([ ChacronaCreateManyInputSchema,ChacronaCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ChacronaCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ChacronaCreateManyAndReturnArgs> = z.object({
  data: z.union([ ChacronaCreateManyInputSchema,ChacronaCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ChacronaDeleteArgsSchema: z.ZodType<Prisma.ChacronaDeleteArgs> = z.object({
  select: ChacronaSelectSchema.optional(),
  include: ChacronaIncludeSchema.optional(),
  where: ChacronaWhereUniqueInputSchema,
}).strict() ;

export const ChacronaUpdateArgsSchema: z.ZodType<Prisma.ChacronaUpdateArgs> = z.object({
  select: ChacronaSelectSchema.optional(),
  include: ChacronaIncludeSchema.optional(),
  data: z.union([ ChacronaUpdateInputSchema,ChacronaUncheckedUpdateInputSchema ]),
  where: ChacronaWhereUniqueInputSchema,
}).strict() ;

export const ChacronaUpdateManyArgsSchema: z.ZodType<Prisma.ChacronaUpdateManyArgs> = z.object({
  data: z.union([ ChacronaUpdateManyMutationInputSchema,ChacronaUncheckedUpdateManyInputSchema ]),
  where: ChacronaWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ChacronaUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ChacronaUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ChacronaUpdateManyMutationInputSchema,ChacronaUncheckedUpdateManyInputSchema ]),
  where: ChacronaWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const ChacronaDeleteManyArgsSchema: z.ZodType<Prisma.ChacronaDeleteManyArgs> = z.object({
  where: ChacronaWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const LenhaCreateArgsSchema: z.ZodType<Prisma.LenhaCreateArgs> = z.object({
  select: LenhaSelectSchema.optional(),
  include: LenhaIncludeSchema.optional(),
  data: z.union([ LenhaCreateInputSchema,LenhaUncheckedCreateInputSchema ]),
}).strict() ;

export const LenhaUpsertArgsSchema: z.ZodType<Prisma.LenhaUpsertArgs> = z.object({
  select: LenhaSelectSchema.optional(),
  include: LenhaIncludeSchema.optional(),
  where: LenhaWhereUniqueInputSchema,
  create: z.union([ LenhaCreateInputSchema,LenhaUncheckedCreateInputSchema ]),
  update: z.union([ LenhaUpdateInputSchema,LenhaUncheckedUpdateInputSchema ]),
}).strict() ;

export const LenhaCreateManyArgsSchema: z.ZodType<Prisma.LenhaCreateManyArgs> = z.object({
  data: z.union([ LenhaCreateManyInputSchema,LenhaCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LenhaCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LenhaCreateManyAndReturnArgs> = z.object({
  data: z.union([ LenhaCreateManyInputSchema,LenhaCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const LenhaDeleteArgsSchema: z.ZodType<Prisma.LenhaDeleteArgs> = z.object({
  select: LenhaSelectSchema.optional(),
  include: LenhaIncludeSchema.optional(),
  where: LenhaWhereUniqueInputSchema,
}).strict() ;

export const LenhaUpdateArgsSchema: z.ZodType<Prisma.LenhaUpdateArgs> = z.object({
  select: LenhaSelectSchema.optional(),
  include: LenhaIncludeSchema.optional(),
  data: z.union([ LenhaUpdateInputSchema,LenhaUncheckedUpdateInputSchema ]),
  where: LenhaWhereUniqueInputSchema,
}).strict() ;

export const LenhaUpdateManyArgsSchema: z.ZodType<Prisma.LenhaUpdateManyArgs> = z.object({
  data: z.union([ LenhaUpdateManyMutationInputSchema,LenhaUncheckedUpdateManyInputSchema ]),
  where: LenhaWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const LenhaUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.LenhaUpdateManyAndReturnArgs> = z.object({
  data: z.union([ LenhaUpdateManyMutationInputSchema,LenhaUncheckedUpdateManyInputSchema ]),
  where: LenhaWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export const LenhaDeleteManyArgsSchema: z.ZodType<Prisma.LenhaDeleteManyArgs> = z.object({
  where: LenhaWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;