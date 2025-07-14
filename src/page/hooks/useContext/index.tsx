"use client";
import Heading from "@/page/components/Heading/index"
import Section from "@/page/components/Section";
export default function UseContext() {
    return (
        <Section>
            <Heading >标题1</Heading>
            <Heading >标题1</Heading>
            <Section>
                <Heading >标题2</Heading>
                <Heading >标题2</Heading>
                <Heading >标题2</Heading>
                <Heading >标题2</Heading>
                <Section>
                    <Heading>标题3</Heading>
                    <Heading>标题3</Heading>
                    <Section>
                        <Heading>标题4</Heading>
                        <Heading>标题4</Heading>
                    </Section>
                </Section>
            </Section>
        </Section>

    )
}