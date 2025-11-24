localStorage.setItem(
  "demo_kb_d3d1ff50-3327-4ea0-9edc-56793e24d57b",
  JSON.stringify([
    {
      agentName: "Parent Orchestrator Agent",
      knowledgeBaseData: [
        {
          id: "kb-202",
          name: "SOV_Rule_Engine KB",
          description:
            "Defines how each SOV field should be validated and enriched to meet broker standards.",
          dataSourceType: "RAG",
          connector: "JIRA Cloud",
          language: "en",
          status: "enabled",
          lastIndexedAt: "2025-05-25T10:00:00Z",
          documentCount: 120,
          embeddingModel: "text-embedding-3-small",
          retrievalMode: "semantic",
          tags: ["intake", "rules", "policy"],
        },
        {
          id: "kb-203",
          name: "SOV_Data_Confidence KB",
          description:
            "Provides logic to assign confidence levels and route uncertain data to HITL.",
          dataSourceType: "RAG",
          connector: "JIRA Cloud",
          language: "en",
          status: "enabled",
          lastIndexedAt: "2025-05-25T10:00:00Z",
          documentCount: 120,
          embeddingModel: "text-embedding-3-small",
          retrievalMode: "semantic",
          tags: ["intake", "rules", "policy"],
        },
        {
          id: "kb-204",
          name: "SOV_Source_Mapping KB",
          description:
            "Maps each SOV attribute to its trusted external/internal data sources.",
          dataSourceType: "RAG",
          connector: "JIRA Cloud",
          language: "en",
          status: "enabled",
          lastIndexedAt: "2025-05-25T10:00:00Z",
          documentCount: 120,
          embeddingModel: "text-embedding-3-small",
          retrievalMode: "semantic",
          tags: ["intake", "rules", "policy"],
        },
        {
          id: "kb-205",
          name: "SOV_Match_Criteria KB",
          description:
            "Establishes criteria for merging duplicates and resolving entity conflicts.",
          dataSourceType: "RAG",
          connector: "JIRA Cloud",
          language: "en",
          status: "enabled",
          lastIndexedAt: "2025-05-25T10:00:00Z",
          documentCount: 120,
          embeddingModel: "text-embedding-3-small",
          retrievalMode: "semantic",
          tags: ["intake", "rules", "policy"],
        },
      ],
    },
  ])
);
