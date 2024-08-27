import Link from "next/link"

export default function TermsAndConditions() {
    return(
        <main className="pt-10 px-5 md:p-36 space-y-5 text-justify md:text-base text-sm">
            <div className="w-full flex flex-col items-center space-y-10 text-center ">
                <h1 className="font-bold lg:text-3xl text-2xl">Termos e Condições</h1>
                <p className="font-semibold">Leia nossos termos abaixo para saber mais sobre seus direitos e responsabilidades como usuário do TemaCheck.</p>
            </div>
            <h2 className="font-semibold">Actualizado em 25 de agosto de 2024</h2>
            <h2 className="font-semibold">1. Aceitação de Termos</h2>
            <p>Bem vindo ao TemaCheck. Ao acessar o TemaCheck voce concorda em cumprir e estar legalmente vinculado aos Termos e Condições a seguir descritos. Se você não concorda com algum desses termos, por favor, não utilize nosso Site. <span className="font-semibold"> Ao usar os Serviços, criar uma conta e marcar a caixa "Eu concordo" (ou similar), ou de outra forma acessar ou usar os Serviços, você (1) concorda que leu, entendeu e concorda em se comprometer com os termos e condições destes Termos de Serviço (estes "Termos"), e (2) também que você leu e reconhece a coleta e o uso de suas informações conforme estabelecido em nossa <Link href={'/about/privacy-policy'} className="underline font-semibold">política de privacidade</Link> (a "Política de Privacidade"), seja ou não um usuário registrado dos Serviços.</span></p>
            <h2 className="font-semibold">LEIA ESTES TERMOS COM ATENÇÃO E TENHA CERTEZA DE QUE OS ENTENDEU COMPLETAMENTE, POIS ELES EXPLICAM E CONTROLAM SUA RELAÇÃO LEGAL CONOSCO E SEUS DIREITOS RELACIONADOS AO SEU USO DO SERVIÇO.</h2>
            <h2 className="font-semibold">2. Definições</h2>
            <ul className="list-disc list-inside">
                <li> <span className="font-semibold">Estudantes:</span> Usuários que submetem temas para avaliação.</li>
                <li><span className="font-semibold">Docentes:</span> que avaliam os temas submetidos pelos estudantes.</li>
                <li><span className="font-semibold">Usuarios: </span> Inclui tanto estudantes quanto docentes.</li>
            </ul>
            <div className="space-y-1">
                <h2 className="font-semibold">3. Registro de contas</h2>
                <p> Para utilizar certos serviços oferecidos pelo Site, os usuários devem registrar-se e criar uma conta.</p>
                <p>Os usuários devem fornecer informações precisas e completas durante o processo de registro e manter essas informações atualizadas.</p>
                <p>Cada usuário é responsável por manter a confidencialidade de sua conta e senha e por todas as atividades que ocorram sob sua conta.</p>
            </div>
            <div className="space-y-1">
                <h2 className="font-semibold">4. Submissão de Temas</h2>
                <p>Os estudantes podem submeter temas para avaliação através do Site.</p>
                <p>Cada submissão deve incluir obrigatoriamente:</p>
                <ul className="list-disc list-inside">
                    <li><span className="font-semibold">Titulo:</span> O título do tema.</li>
                    <li><span className="font-semibold">Objetivo Geral:</span> A descrição do objetivo principal do tema.</li>
                    <li><span className="font-semibold">Objetivos Específicos:</span> A descrição dos objetivos específicos que o estudante pretende alcançar com o tema.</li>
                    <li><span className="font-semibold">Problema:</span> A descrição do problema que o tema pretende abordar e resolver.</li>
                </ul>
                <p>Ao submeter um tema, o estudante concede ao Site e aos docentes o direito de revisar, avaliar e fornecer feedback sobre o tema.</p>
                <p>Os estudantes são responsáveis por garantir que seus temas não violam direitos autorais, patentes, segredos comerciais ou outros direitos de propriedade intelectual de terceiros.</p>
            </div>
            <div className="space-y-1">
                <h2 className="font-semibold">5. Avaliação de Temas</h2>
                <p>Os docentes são responsáveis por avaliar os temas submetidos pelos estudantes.</p>
                <p>As avaliações devem ser justas, imparciais e baseadas nos critérios fornecidos pelo Site.</p>
                <p>O feedback fornecido pelos docentes deve ser construtivo e respeitoso.</p>
                <p>Os docentes concordam em manter a confidencialidade das informações contidas nos temas submetidos, não divulgando ou utilizando tais informações para qualquer finalidade que não seja a avaliação.</p>
            </div>
            <div className="space-y-1">
                <h2 className="font-semibold">6. Uso Aceitavel</h2>
                <p>Os usuários concordam em não utilizar o Site para qualquer finalidade ilegal ou não autorizada.</p>
                <p>Os usuários não devem violar quaisquer leis em sua jurisdição ao utilizar o Site.</p>
                <p>Os usuários não devem transmitir qualquer conteúdo que seja ofensivo, difamatório, ou que infrinja os direitos de terceiros.</p>
                <p>Os usuários concordam em não utilizar o Site para distribuir vírus ou qualquer outro tipo de código malicioso que possa comprometer a segurança do Site ou de seus usuários.</p>
            </div>
            <div className="space-y-1">
                <h2 className="font-semibold">7. Propriedade Intelectual</h2>
                <p>Todo o conteúdo do Site, incluindo textos, gráficos, logotipos, ícones e imagens, é de propriedade do Site ou de seus licenciadores e é protegido por leis de direitos autorais.</p>
                <p>Os usuários não têm permissão para copiar, distribuir, modificar ou criar trabalhos derivados de qualquer conteúdo do Site sem autorização expressa.</p>
            </div>
            <div className="space-y-1">
                <h2 className="font-semibold">8. Privacidade</h2>
                <p>Nós valorizamos sua privacidade e estamos comprometidos em proteger suas informações pessoais. Consulte nossa <Link href={'/about/privacy-policy'} className="hover:underline text-blue-500">Política de Privacidade</Link> para mais detalhes.</p>
                <p> Ao utilizar o Site, você consente com a coleta e uso de informações conforme descrito na <Link href={'/about/privacy-policy'} className="hover:underline text-blue-500">Política de Privacidade</Link>.</p>
            </div>
            <div className="space-y-1">
                <h2 className="font-semibold">9. Limitação de Responsabilidade</h2>
                <p>O Site não será responsável por quaisquer danos diretos, indiretos, acidentais, especiais ou consequenciais resultantes do uso ou da incapacidade de usar o Site.</p>
                <p>O Site não garante que o serviço será ininterrupto, seguro ou livre de erros.</p>
                <p>O Site não se responsabiliza por qualquer conteúdo gerado por usuários, incluindo temas submetidos e avaliações.</p>
            </div>
            <div className="space-y-1">
                <h2 className="font-semibold">10. Indenização</h2>
                <p>Você concorda em indenizar, defender e isentar o Site, seus diretores, funcionários, agentes e licenciadores de e contra quaisquer reivindicações, responsabilidades, danos, perdas e despesas, incluindo honorários advocatícios razoáveis, decorrentes de ou de qualquer forma relacionados ao seu acesso ou uso do Site.</p>
            </div>
            <div className="space-y-1">
                <h2 className="font-semibold">11. Alterações de termos</h2>
                <p>O Site se reserva o direito de alterar estes Termos e Condições a qualquer momento. Quaisquer alterações serão publicadas nesta página e a data da última atualização será revisada.</p>
                <p>É responsabilidade do usuário revisar estes Termos e Condições periodicamente. O uso continuado do Site após quaisquer alterações constitui a aceitação dos novos termos.</p>
            </div>
            <div className="space-y-1">
                <h2 className="font-semibold">12. Encerramento</h2>
                <p>O Site pode encerrar ou suspender o acesso de um usuário ao Site, sem aviso prévio, por qualquer motivo, incluindo, entre outros, a violação destes Termos e Condições.</p>
            </div>
            <div className="space-y-1">
                <h2 className="font-semibold">13. Legislação Aplicável</h2>
                <p>Estes Termos e Condições serão regidos e interpretados de acordo com as leis do Moçambique, sem consideração a conflitos de princípios legais.</p>
            </div>
            <div className="space-y-1">
                <h2 className="font-semibold">14. Disposições Gerais</h2>
                <p>Se qualquer disposição destes Termos e Condições for considerada inválida ou inexequível, essa disposição será limitada ou eliminada na medida mínima necessária, e as demais disposições destes Termos e Condições permanecerão em pleno vigor e efeito.</p>
                <p>Estes Termos e Condições constituem o acordo integral entre você e o Site com relação ao uso do Site e substituem todos os entendimentos ou acordos anteriores, escritos ou orais, relativos a esse assunto.</p>
            </div>
            <div className="space-y-1">
                <h2 className="font-semibold">15. Contacto</h2>
                <p>Se você tiver qualquer dúvida sobre estes Termos e Condições, por favor, entre em contato conosco através de vitiliomartins2003@gmail.com.</p>
            </div>
        </main>
    )
}