#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Скрипт для оновлення JSON файлів перекладів з новим контентом
"""

import json
import sys

def update_de_faq():
    """Оновлює німецькі переклади для FAQ"""
    faq_de = {
        "title": "Häufig Gestellte Fragen",
        "subtitle": "Hier finden Sie Antworten auf häufige Fragen darüber, wie wir arbeiten, was wir tun und wie Sie mit uns zusammenarbeiten können.",
        "q1": "Was genau ist Ihre Rolle in einem Energieprojekt?",
        "a1p1": "Wir agieren als unabhängiger Energielösungs-Koordinator und Projektvermittler.",
        "a1p2": "Unsere Aufgabe ist es, das Projekt zu strukturieren, technische Lösungen abzustimmen, geeignete Lieferanten zu beschaffen und die Kommunikation zwischen allen beteiligten Parteien zu koordinieren.",
        "a1p3": "Wir verkaufen keine Ausrüstung direkt.",
        "q2": "Arbeiten Sie mit bestimmten Marken oder Herstellern?",
        "a2p1": "Nein. Wir arbeiten unabhängig und sind nicht an bestimmte Marken oder Hersteller gebunden.",
        "a2p2": "Dies ermöglicht uns, Lösungen basierend auf Projektanforderungen auszuwählen, nicht auf Produktverfügbarkeit.",
        "q3": "Wie können wir mit der Zusammenarbeit beginnen?",
        "a3p1": "Der Prozess beginnt normalerweise mit einer kurzen Besprechung Ihrer Anforderungen.",
        "a3p2": "Sie können uns über das Website-Formular oder direkt per E-Mail oder Messenger kontaktieren. Nach einer ersten Überprüfung definieren wir die nächsten Schritte und den Umfang der Koordination.",
        "q4": "Welche Informationen benötigen Sie von uns?",
        "a4p1": "In der Anfangsphase genügen grundlegende Informationen:",
        "a4li1": "Projektstandort",
        "a4li2": "Leistungs- oder Energieanforderungen",
        "a4li3": "Anwendungstyp (Backup, Dauerbetrieb, Hybrid usw.)",
        "a4li4": "Erwarteter Zeitrahmen",
        "a4p2": "Zusätzliche Details können Schritt für Schritt geklärt werden.",
        "q5": "In welchen Regionen sind Sie tätig?",
        "a5p1": "Wir koordinieren derzeit Projekte in Europa, der Ukraine und Afrika.",
        "a5p2": "Grenzüberschreitende und internationale Projekte sind ebenfalls möglich.",
        "q6": "Bieten Sie Installations- oder EPC-Dienstleistungen an?",
        "a6p1": "Wir führen die Installation nicht selbst durch.",
        "a6p2": "Bei Bedarf koordinieren und vermitteln wir geeignete EPC-Auftragnehmer oder lokale Partner im Rahmen des Projekts.",
        "q7": "Wie sind Ihre Dienstleistungen kommerziell strukturiert?",
        "a7p1": "Unsere Dienstleistungen sind typischerweise als Koordinations-, Beschaffungs- oder Beratungsengagements strukturiert.",
        "a7p2": "Die kommerzielle Struktur hängt vom Projektumfang ab und wird vor Beginn klar definiert.",
        "q8": "Können Sie frühe Machbarkeitsstudien unterstützen?",
        "a8": "Ja. Wir unterstützen Projekte oft in einer frühen Phase, indem wir Anforderungen klären, Lösungsoptionen vergleichen und potenzielle Risiken identifizieren.",
        "ctaTitle": "Haben Sie Noch Fragen?",
        "ctaText": "Wenn Ihre Frage hier nicht aufgeführt ist, kontaktieren Sie uns gerne direkt.",
        "ctaButton": "Kontaktieren Sie uns"
    }
    
    return faq_de

def update_fr_faq():
    """Оновлює французькі переклади для FAQ"""
    faq_fr = {
        "title": "Questions Fréquemment Posées",
        "subtitle": "Vous trouverez ci-dessous des réponses aux questions courantes sur notre façon de travailler, ce que nous faisons et comment démarrer une coopération.",
        "q1": "Quel est exactement votre rôle dans un projet énergétique ?",
        "a1p1": "Nous agissons en tant que coordinateur indépendant de solutions énergétiques et connecteur de projets.",
        "a1p2": "Notre rôle est de structurer le projet, d'aligner les solutions techniques, de trouver des fournisseurs appropriés et de coordonner la communication entre toutes les parties impliquées.",
        "a1p3": "Nous ne vendons pas d'équipement directement.",
        "q2": "Travaillez-vous avec des marques ou fabricants spécifiques ?",
        "a2p1": "Non. Nous opérons de manière indépendante et ne sommes pas liés à des marques ou fabricants spécifiques.",
        "a2p2": "Cela nous permet de sélectionner des solutions basées sur les exigences du projet plutôt que sur la disponibilité des produits.",
        "q3": "Comment pouvons-nous commencer à travailler ensemble ?",
        "a3p1": "Le processus commence généralement par une brève discussion de vos exigences.",
        "a3p2": "Vous pouvez nous contacter via le formulaire du site Web ou directement par e-mail ou messagerie. Après un examen initial, nous définissons les prochaines étapes et l'étendue de la coordination.",
        "q4": "De quelles informations avez-vous besoin de notre part ?",
        "a4p1": "Au stade initial, les informations de base sont suffisantes :",
        "a4li1": "Emplacement du projet",
        "a4li2": "Exigences en puissance ou en énergie",
        "a4li3": "Type d'application (secours, principal, hybride, etc.)",
        "a4li4": "Calendrier prévu",
        "a4p2": "Les détails supplémentaires peuvent être clarifiés étape par étape.",
        "q5": "Dans quelles régions opérez-vous ?",
        "a5p1": "Nous coordonnons actuellement des projets en Europe, en Ukraine et en Afrique.",
        "a5p2": "Les projets transfrontaliers et internationaux sont également possibles.",
        "q6": "Fournissez-vous des services d'installation ou EPC ?",
        "a6p1": "Nous n'effectuons pas l'installation nous-mêmes.",
        "a6p2": "Si nécessaire, nous coordonnons et alignons des contractants EPC appropriés ou des partenaires locaux dans le cadre du projet.",
        "q7": "Comment vos services sont-ils structurés commercialement ?",
        "a7p1": "Nos services sont généralement structurés comme des engagements de coordination, d'approvisionnement ou de conseil.",
        "a7p2": "La structure commerciale dépend de l'étendue du projet et est définie clairement avant de commencer.",
        "q8": "Pouvez-vous soutenir la faisabilité à un stade précoce ?",
        "a8": "Oui. Nous soutenons souvent des projets à un stade précoce en clarifiant les exigences, en comparant les options de solution et en identifiant les risques potentiels.",
        "ctaTitle": "Vous Avez Encore Des Questions ?",
        "ctaText": "Si votre question n'est pas listée ici, n'hésitez pas à nous contacter directement.",
        "ctaButton": "Contactez-nous"
    }
    
    return faq_fr

def main():
    # Оновлюємо de.json
    with open('js/translations/de.json', 'r', encoding='utf-8') as f:
        data_de = json.load(f)
    
    data_de['faq'] = update_de_faq()
    
    with open('js/translations/de.json', 'w', encoding='utf-8') as f:
        json.dump(data_de, f, ensure_ascii=False, indent=2)
    
    print("✓ Оновлено de.json")
    
    # Оновлюємо fr.json
    with open('js/translations/fr.json', 'r', encoding='utf-8') as f:
        data_fr = json.load(f)
    
    data_fr['faq'] = update_fr_faq()
    
    with open('js/translations/fr.json', 'w', encoding='utf-8') as f:
        json.dump(data_fr, f, ensure_ascii=False, indent=2)
    
    print("✓ Оновлено fr.json")
    print("\nFAQ переклади успішно додано!")

if __name__ == '__main__':
    main()
