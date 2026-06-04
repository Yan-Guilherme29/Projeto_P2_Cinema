-- CreateEnum
CREATE TYPE "Genero" AS ENUM ('ACAO', 'COMEDIA', 'DRAMA', 'TERROR', 'ROMANCE', 'ANIMACAO', 'DOCUMENTARIO', 'FICCAO_CIENTIFICA');

-- CreateTable
CREATE TABLE "LancheCombo" (
    "id" BIGSERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valorUnitario" DOUBLE PRECISION NOT NULL,
    "qtUnidade" INTEGER NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "LancheCombo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Filme" (
    "id" BIGSERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "sinopse" TEXT NOT NULL,
    "classificacao" TEXT NOT NULL,
    "duracao" TIMESTAMP(3) NOT NULL,
    "elenco" TEXT NOT NULL,
    "genero" "Genero" NOT NULL,
    "dataInicioExibicao" TIMESTAMP(3) NOT NULL,
    "dataFinalExibicao" TIMESTAMP(3) NOT NULL,
    "cinemaId" BIGINT NOT NULL,

    CONSTRAINT "Filme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sala" (
    "id" BIGSERIAL NOT NULL,
    "numero" INTEGER NOT NULL,
    "capacidade" INTEGER NOT NULL,
    "poltronas" INTEGER[],
    "cinemaId" BIGINT NOT NULL,

    CONSTRAINT "Sala_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sessao" (
    "id" BIGSERIAL NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "filmeId" BIGINT NOT NULL,
    "salaId" BIGINT NOT NULL,
    "cinemaId" BIGINT NOT NULL,

    CONSTRAINT "Sessao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingresso" (
    "id" BIGSERIAL NOT NULL,
    "valorInteira" DOUBLE PRECISION NOT NULL,
    "valorMeia" DOUBLE PRECISION NOT NULL,
    "sessaoId" BIGINT NOT NULL,

    CONSTRAINT "Ingresso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" BIGSERIAL NOT NULL,
    "qntInteira" INTEGER NOT NULL,
    "qntMeia" INTEGER NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cinema" (
    "id" BIGSERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,

    CONSTRAINT "Cinema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LancheComboToPedido" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_LancheComboToPedido_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_IngressoToPedido" (
    "A" BIGINT NOT NULL,
    "B" BIGINT NOT NULL,

    CONSTRAINT "_IngressoToPedido_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_LancheComboToPedido_B_index" ON "_LancheComboToPedido"("B");

-- CreateIndex
CREATE INDEX "_IngressoToPedido_B_index" ON "_IngressoToPedido"("B");

-- AddForeignKey
ALTER TABLE "Filme" ADD CONSTRAINT "Filme_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sala" ADD CONSTRAINT "Sala_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_filmeId_fkey" FOREIGN KEY ("filmeId") REFERENCES "Filme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_salaId_fkey" FOREIGN KEY ("salaId") REFERENCES "Sala"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sessao" ADD CONSTRAINT "Sessao_cinemaId_fkey" FOREIGN KEY ("cinemaId") REFERENCES "Cinema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingresso" ADD CONSTRAINT "Ingresso_sessaoId_fkey" FOREIGN KEY ("sessaoId") REFERENCES "Sessao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LancheComboToPedido" ADD CONSTRAINT "_LancheComboToPedido_A_fkey" FOREIGN KEY ("A") REFERENCES "LancheCombo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LancheComboToPedido" ADD CONSTRAINT "_LancheComboToPedido_B_fkey" FOREIGN KEY ("B") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngressoToPedido" ADD CONSTRAINT "_IngressoToPedido_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingresso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngressoToPedido" ADD CONSTRAINT "_IngressoToPedido_B_fkey" FOREIGN KEY ("B") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;
