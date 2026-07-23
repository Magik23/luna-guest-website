export type SiteLocale = "en" | "es";

export interface HomeContent {
    meta: {
        title: string;
        description: string;
    };

    header: {
        product: string;
        howItWorks: string;
        outcomes: string;
        contact: string;
        demo: string;
        menu: string;
        languageLabel: string;
    };

    hero: {
        eyebrow: string;
        title: string;
        body: string;
        primaryAction: string;
        secondaryAction: string;
        audience: string;

        visual: {
            status: string;
            guestLabel: string;
            guestMessage: string;
            responseLabel: string;
            responseMessage: string;
            chips: string[];
            opportunity: string;
            opportunityDetail: string;
            opportunityStatus: string;
        };
    };

    outcomes: {
        eyebrow: string;
        title: string;
        body: string;

        items: Array<{
            title: string;
            body: string;
        }>;
    };

    workflow: {
        eyebrow: string;
        title: string;
        body: string;

        items: Array<{
            label: string;
            title: string;
            body: string;
        }>;
    };

    product: {
        eyebrow: string;
        title: string;
        body: string;
        capabilities: string[];
        panelTitle: string;
        panelStatus: string;

        cards: Array<{
            title: string;
            body: string;
        }>;
    };

    cta: {
        title: string;
        body: string;
        action: string;
        emailSubject: string;
    };

    footer: {
        body: string;
        product: string;
        howItWorks: string;
        outcomes: string;
        contact: string;
        rights: string;
    };
}

export const homeContent: Record<SiteLocale, HomeContent> = {
    en: {
        meta: {
            title:
                "Luna Guest | Guest Operations, Simplified",
            description:
                "Luna Guest connects guest conversations with availability, reservations, staff routing, and operational follow-up for independent hospitality businesses."
        },

        header: {
            product: "Product",
            howItWorks: "How it works",
            outcomes: "Outcomes",
            contact: "Contact",
            demo: "Book a demo",
            menu: "Menu",
            languageLabel: "Español"
        },

        hero: {
            eyebrow:
                "Guest operations for independent hospitality",

            title:
                "Turn every guest message into faster service and fewer missed bookings.",

            body:
                "Luna Guest connects guest conversations with availability, reservations, staff routing, and follow-up—so your team responds faster without adding another operational maze.",

            primaryAction:
                "Book a demo",

            secondaryAction:
                "See how it works",

            audience:
                "Built for boutique hotels, guesthouses, hostels, eco-retreats, and small resorts.",

            visual: {
                status:
                    "Operations online",

                guestLabel:
                    "Guest message",

                guestMessage:
                    "Do you have a room for two guests next weekend?",

                responseLabel:
                    "Operational response",

                responseMessage:
                    "Availability checked. The booking opportunity is ready for staff confirmation.",

                chips: [
                    "Request qualified",
                    "Availability checked",
                    "Follow-up captured"
                ],

                opportunity:
                    "New booking opportunity",

                opportunityDetail:
                    "2 guests · Weekend stay",

                opportunityStatus:
                    "Pending confirmation"
            }
        },

        outcomes: {
            eyebrow:
                "Operational outcomes",

            title:
                "Better guest communication without more operational chaos.",

            body:
                "Luna Guest helps independent hospitality teams protect revenue, reduce repetitive work, and keep important requests visible.",

            items: [
                {
                    title:
                        "Capture more booking opportunities",

                    body:
                        "Qualify room requests, check availability, and preserve promising leads before they disappear inside busy messaging channels."
                },
                {
                    title:
                        "Reduce repetitive staff work",

                    body:
                        "Handle common guest questions and collect the information staff needs before interrupting a human."
                },
                {
                    title:
                        "Keep operations visible",

                    body:
                        "Give operators a clear record of requests, reservations, actions, follow-up, and responsibility."
                }
            ]
        },

        workflow: {
            eyebrow:
                "How it works",

            title:
                "One connected operating loop from message to action.",

            body:
                "Guests continue using familiar communication channels. Luna Guest organizes the operational work behind each conversation.",

            items: [
                {
                    label:
                        "Step 01",

                    title:
                        "The guest sends a message",

                    body:
                        "A guest asks about rooms, transportation, activities, services, or an urgent problem."
                },
                {
                    label:
                        "Step 02",

                    title:
                        "Luna Guest qualifies the request",

                    body:
                        "The platform gathers details, applies property rules, checks availability when needed, and records the conversation."
                },
                {
                    label:
                        "Step 03",

                    title:
                        "Staff handles what needs action",

                    body:
                        "Operators receive a clear work queue, safe reservation actions, and an operational history they can trust."
                }
            ]
        },

        product: {
            eyebrow:
                "The operational layer",

            title:
                "One operating loop—not another disconnected inbox.",

            body:
                "Luna Guest sits between guest communication and hospitality operations. It helps turn conversations into structured work while keeping staff in control.",

            capabilities: [
                "Guest conversations and multilingual replies",
                "Availability and room booking workflows",
                "Service requests, support, and staff routing",
                "Operator follow-up, attribution, and history"
            ],

            panelTitle:
                "Operator workspace",

            panelStatus:
                "Connected",

            cards: [
                {
                    title:
                        "Reservations",

                    body:
                        "Review, confirm, cancel, and recover room requests safely."
                },
                {
                    title:
                        "Operator Inbox",

                    body:
                        "See the requests that require human review or action."
                },
                {
                    title:
                        "Operational History",

                    body:
                        "Understand what happened, who acted, and what changed."
                },
                {
                    title:
                        "Guest Requests",

                    body:
                        "Route transport, activities, services, and support correctly."
                }
            ]
        },

        cta: {
            title:
                "Faster guest replies. Clearer operations. Fewer missed opportunities.",

            body:
                "See how Luna Guest can support the way your property already communicates and operates.",

            action:
                "Book a demo",

            emailSubject:
                "Luna Guest demo request"
        },

        footer: {
            body:
                "Guest communication and booking operations for independent hospitality businesses.",

            product:
                "Product",

            howItWorks:
                "How it works",

            outcomes:
                "Outcomes",

            contact:
                "Contact",

            rights:
                "All rights reserved."
        }
    },

    es: {
        meta: {
            title:
                "Luna Guest | Operaciones de Huéspedes Simplificadas",
            description:
                "Luna Guest conecta las conversaciones con disponibilidad, reservas, asignación al personal y seguimiento operativo para alojamientos independientes."
        },

        header: {
            product: "Producto",
            howItWorks: "Cómo funciona",
            outcomes: "Resultados",
            contact: "Contacto",
            demo: "Solicitar una demo",
            menu: "Menú",
            languageLabel: "English"
        },

        hero: {
            eyebrow:
                "Operaciones de huéspedes para alojamientos independientes",

            title:
                "Convierte cada mensaje en un servicio más rápido y menos reservas perdidas.",

            body:
                "Luna Guest conecta las conversaciones con disponibilidad, reservas, asignación al personal y seguimiento, para que tu equipo responda más rápido sin crear otro laberinto operativo.",

            primaryAction:
                "Solicitar una demo",

            secondaryAction:
                "Ver cómo funciona",

            audience:
                "Creado para hoteles boutique, casas de huéspedes, hostales, eco-retiros y pequeños resorts.",

            visual: {
                status:
                    "Operaciones activas",

                guestLabel:
                    "Mensaje del huésped",

                guestMessage:
                    "¿Tienen una habitación para dos personas el próximo fin de semana?",

                responseLabel:
                    "Respuesta operativa",

                responseMessage:
                    "Disponibilidad verificada. La oportunidad de reserva está lista para confirmación del personal.",

                chips: [
                    "Solicitud calificada",
                    "Disponibilidad verificada",
                    "Seguimiento registrado"
                ],

                opportunity:
                    "Nueva oportunidad de reserva",

                opportunityDetail:
                    "2 huéspedes · Fin de semana",

                opportunityStatus:
                    "Confirmación pendiente"
            }
        },

        outcomes: {
            eyebrow:
                "Resultados operativos",

            title:
                "Mejor comunicación sin crear más caos operativo.",

            body:
                "Luna Guest ayuda a los equipos de hospitalidad a proteger ingresos, reducir trabajo repetitivo y mantener visibles las solicitudes importantes.",

            items: [
                {
                    title:
                        "Captura más oportunidades de reserva",

                    body:
                        "Califica solicitudes, verifica disponibilidad y conserva oportunidades valiosas antes de que se pierdan entre mensajes."
                },
                {
                    title:
                        "Reduce el trabajo repetitivo",

                    body:
                        "Responde preguntas frecuentes y recopila la información necesaria antes de interrumpir al personal."
                },
                {
                    title:
                        "Mantén las operaciones visibles",

                    body:
                        "Ofrece un registro claro de solicitudes, reservas, acciones, seguimiento y responsabilidad."
                }
            ]
        },

        workflow: {
            eyebrow:
                "Cómo funciona",

            title:
                "Un flujo conectado desde el mensaje hasta la acción.",

            body:
                "Los huéspedes siguen utilizando canales conocidos. Luna Guest organiza el trabajo operativo detrás de cada conversación.",

            items: [
                {
                    label:
                        "Paso 01",

                    title:
                        "El huésped envía un mensaje",

                    body:
                        "Pregunta por habitaciones, transporte, actividades, servicios o un problema urgente."
                },
                {
                    label:
                        "Paso 02",

                    title:
                        "Luna Guest califica la solicitud",

                    body:
                        "La plataforma recopila detalles, aplica las reglas del alojamiento, verifica disponibilidad y registra la conversación."
                },
                {
                    label:
                        "Paso 03",

                    title:
                        "El personal atiende lo que requiere acción",

                    body:
                        "Los operadores reciben una cola clara de trabajo, acciones seguras de reserva y un historial operativo confiable."
                }
            ]
        },

        product: {
            eyebrow:
                "La capa operativa",

            title:
                "Un solo flujo operativo, no otra bandeja desconectada.",

            body:
                "Luna Guest se ubica entre la comunicación con huéspedes y las operaciones del alojamiento. Convierte conversaciones en trabajo estructurado sin quitar el control al personal.",

            capabilities: [
                "Conversaciones y respuestas multilingües",
                "Disponibilidad y flujos de reservas",
                "Servicios, soporte y asignación al personal",
                "Seguimiento, atribución e historial operativo"
            ],

            panelTitle:
                "Espacio del operador",

            panelStatus:
                "Conectado",

            cards: [
                {
                    title:
                        "Reservas",

                    body:
                        "Revisa, confirma, cancela y recupera solicitudes de habitaciones."
                },
                {
                    title:
                        "Bandeja operativa",

                    body:
                        "Visualiza las solicitudes que requieren revisión o acción humana."
                },
                {
                    title:
                        "Historial operativo",

                    body:
                        "Comprende qué ocurrió, quién actuó y qué cambió."
                },
                {
                    title:
                        "Solicitudes de huéspedes",

                    body:
                        "Asigna correctamente transporte, actividades, servicios y soporte."
                }
            ]
        },

        cta: {
            title:
                "Respuestas más rápidas. Operaciones más claras. Menos oportunidades perdidas.",

            body:
                "Descubre cómo Luna Guest puede apoyar la forma en que tu alojamiento ya se comunica y trabaja.",

            action:
                "Solicitar una demo",

            emailSubject:
                "Solicitud de demo de Luna Guest"
        },

        footer: {
            body:
                "Comunicación con huéspedes y operaciones de reservas para alojamientos independientes.",

            product:
                "Producto",

            howItWorks:
                "Cómo funciona",

            outcomes:
                "Resultados",

            contact:
                "Contacto",

            rights:
                "Todos los derechos reservados."
        }
    }
};
