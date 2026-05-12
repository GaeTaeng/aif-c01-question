window.AWS_AI_QUIZ_DATA = {
  "generatedAt": "2026-05-12T00:10:29.000Z",
  "source": {
    "file": "/Users/gimtaehunegimtaehune/Downloads/AWS AI Prectitioner 정리/AWSAIPrectitioner.html",
    "totalQuestions": 409
  },
  "supportedCount": 409,
  "skippedCount": 0,
  "questions": [
    {
      "id": 1,
      "sourceNumber": 1,
      "title": "Question 1",
      "promptKo": "한 회사가 분기별로 예측을 수행하여 예상 수요를 충족하기 위해 운영을 최적화하려고 합니다.\n회사는 ML 모델을 사용하여 이러한 예측을 수행합니다.\nAI 실무자는 이해관계자에게 투명성과 설명 가능성을 제공하기 위해 학습된 ML 모델에 대한 보고서를 작성하고 있습니다.\n보고서에 포함해야 할 내용은 무엇입니까?",
      "promptEn": "A company makes forecasts each quarter to decide how to optimize operations to meet expected demand. The company uses ML models to make these forecasts.\nAn AI practitioner is writing a report about the trained ML models to provide transparency and explainability to company stakeholders.\nWhat should the AI practitioner include in the report to meet the transparency and explainability requirements?",
      "explanation": [
        "- PDP는 특정 Feature가 모델 출력에 미치는 영향을 시각적으로 보여주므로 설명 가능성(explainability) 제공.",
        "- 단순 코드나 데이터는 모델 설명에 충분하지 않음.",
        "- 모델 수렴표는 학습 상태 확인용이며 이해관계자 보고용 아님."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Partial Dependence Plots(PDPs): 특정 Feature가 모델 예측에 미치는 영향을 시각화하는 도구."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Code for model training",
          "textKo": "모델 학습 코드",
          "text": "Code for model training"
        },
        {
          "key": "B",
          "textEn": "Partial dependence plots (PDPs)",
          "textKo": "부분 의존성 플롯(PDPs)",
          "text": "Partial dependence plots (PDPs)"
        },
        {
          "key": "C",
          "textEn": "Sample data for training",
          "textKo": "학습용 샘플 데이터",
          "text": "Sample data for training"
        },
        {
          "key": "D",
          "textEn": "Model convergence tables",
          "textKo": "모델 수렴 표",
          "text": "Model convergence tables"
        }
      ],
      "answerKey": "B",
      "answerText": "Partial dependence plots (PDPs)"
    },
    {
      "id": 2,
      "sourceNumber": 2,
      "title": "Question 2",
      "promptKo": "한 로펌이 LLM(Large Language Model)을 사용하여 AI 애플리케이션을 구축하려고 합니다.\n이 애플리케이션은 법률 문서를 읽고 핵심 내용을 추출해야 합니다.\n어떤 솔루션이 이 요구사항을 충족합니까?",
      "promptEn": "A law firm wants to build an AI application by using large language models (LLMs). The application will read legal documents and extract key points from the documents.\nWhich solution meets these requirements?",
      "explanation": [
        "- 요약 챗봇은 문서의 핵심 내용을 추출하고 요약 가능.",
        "- 개체명 인식은 특정 엔티티 추출에 국한됨.",
        "- 추천 엔진과 번역 시스템은 요구사항과 관련 없음."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Summarization: 텍스트에서 핵심 내용을 추출하여 요약하는 기능.",
        "- LLM: 대규모 언어 모델, 자연어 처리에 사용됨."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Build an automatic named entity recognition system",
          "textKo": "자동 개체명 인식 시스템 구축",
          "text": "Build an automatic named entity recognition system"
        },
        {
          "key": "B",
          "textEn": "Create a recommendation engine",
          "textKo": "추천 엔진 생성",
          "text": "Create a recommendation engine"
        },
        {
          "key": "C",
          "textEn": "Develop a summarization chatbot",
          "textKo": "요약 챗봇 개발",
          "text": "Develop a summarization chatbot"
        },
        {
          "key": "D",
          "textEn": "Develop a multi-language translation system",
          "textKo": "다국어 번역 시스템 개발",
          "text": "Develop a multi-language translation system"
        }
      ],
      "answerKey": "C",
      "answerText": "Develop a summarization chatbot"
    },
    {
      "id": 3,
      "sourceNumber": 3,
      "title": "Question 3",
      "promptKo": "한 회사가 인간 유전자를 특성에 따라 20개 범주로 분류하려고 합니다.\n회사는 모델 내부 메커니즘이 출력에 어떻게 영향을 미치는지 문서화할 수 있는 ML 알고리즘이 필요합니다.\n어떤 ML 알고리즘이 요구사항을 충족합니까?",
      "promptEn": "A company wants to classify human genes into 20 categories based on gene characteristics. The company needs an ML algorithm to document how the inner mechanism of the model affects the output.\nWhich ML algorithm meets these requirements?",
      "explanation": [
        "- 결정 트리는 해석 가능하고, 각 결정 노드가 결과에 미치는 영향을 문서화 가능.",
        "- 선형/로지스틱 회귀는 일부 설명 가능하지만 다중 범주 분류에는 제한적.",
        "- 신경망은 블랙박스 형태로 설명 어려움."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Decision Trees: 의사결정 규칙을 트리 형태로 구성하여 해석 가능한 모델."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Decision trees",
          "textKo": "결정 트리",
          "text": "Decision trees"
        },
        {
          "key": "B",
          "textEn": "Linear regression",
          "textKo": "선형 회귀",
          "text": "Linear regression"
        },
        {
          "key": "C",
          "textEn": "Logistic regression",
          "textKo": "로지스틱 회귀",
          "text": "Logistic regression"
        },
        {
          "key": "D",
          "textEn": "Neural networks",
          "textKo": "신경망",
          "text": "Neural networks"
        }
      ],
      "answerKey": "A",
      "answerText": "Decision trees"
    },
    {
      "id": 4,
      "sourceNumber": 4,
      "title": "Question 4",
      "promptKo": "한 회사가 식물 잎 사진으로 식물 질병을 예측하는 이미지 분류 모델을 구축했습니다.\n회사는 모델이 정확하게 분류한 이미지 수를 평가하려고 합니다.\n어떤 평가 지표를 사용해야 합니까?",
      "promptEn": "A company has built an image classification model to predict plant diseases from photos of plant leaves. The company wants to evaluate how many images the model classified correctly.\nWhich evaluation metric should the company use to measure the model's performance?",
      "explanation": [
        "- Accuracy는 전체 데이터 중 올바르게 분류한 비율을 나타내므로 이미지 분류 모델 성능 평가 적합.",
        "- R-squared, RMSE는 회귀 모델용 지표.",
        "- Learning rate는 학습 하이퍼파라미터임."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Accuracy: 분류 문제에서 전체 샘플 중 올바르게 예측한 비율."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "R-squared score",
          "textKo": "결정 계수(R-squared)",
          "text": "R-squared score"
        },
        {
          "key": "B",
          "textEn": "Accuracy",
          "textKo": "정확도(Accuracy)",
          "text": "Accuracy"
        },
        {
          "key": "C",
          "textEn": "Root mean squared error (RMSE)",
          "textKo": "평균 제곱근 오차(RMSE)",
          "text": "Root mean squared error (RMSE)"
        },
        {
          "key": "D",
          "textEn": "Learning rate",
          "textKo": "학습률",
          "text": "Learning rate"
        }
      ],
      "answerKey": "B",
      "answerText": "Accuracy"
    },
    {
      "id": 5,
      "sourceNumber": 5,
      "title": "Question 5",
      "promptKo": "한 회사가 사전 학습된 LLM을 사용하여 제품 추천용 챗봇을 구축하고 있습니다.\nLLM 출력이 짧고 특정 언어로 작성되도록 해야 합니다.\n어떤 방법이 출력 품질을 회사 요구사항에 맞추는 방법입니까?",
      "promptEn": "A company is using a pre-trained large language model (LLM) to build a chatbot for product recommendations. The company needs the LLM outputs to be short and written in a specific language.\nWhich solution will align the LLM response quality with the company's expectations?",
      "explanation": [
        "- 프롬프트를 조정하여 출력 길이와 언어를 직접 제어 가능.",
        "- LLM 크기 변경, 온도/Top K 조정은 출력 스타일과 일부 다양성 조절에만 영향."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Prompt: 모델 입력 문장, 출력 특성 제어에 사용.",
        "- Temperature: 생성 결과의 무작위성 정도 조절.",
        "- Top K: 생성 후보 단어 수 제한."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Adjust the prompt",
          "textKo": "프롬프트 조정",
          "text": "Adjust the prompt"
        },
        {
          "key": "B",
          "textEn": "Choose an LLM of a different size",
          "textKo": "다른 크기의 LLM 선택",
          "text": "Choose an LLM of a different size"
        },
        {
          "key": "C",
          "textEn": "Increase the temperature",
          "textKo": "온도(temperature) 증가",
          "text": "Increase the temperature"
        },
        {
          "key": "D",
          "textEn": "Increase the Top K value",
          "textKo": "Top K 값 증가",
          "text": "Increase the Top K value"
        }
      ],
      "answerKey": "A",
      "answerText": "Adjust the prompt"
    },
    {
      "id": 6,
      "sourceNumber": 6,
      "title": "Question 6",
      "promptKo": "한 회사가 프로덕션 환경에서 ML 파이프라인에 Amazon SageMaker를 사용합니다.\n입력 데이터 크기는 최대 1GB이고 처리 시간은 최대 1시간입니다.\n거의 실시간(latency가 낮은) 추론이 필요합니다.\n어떤 SageMaker 추론 옵션이 적합합니까?",
      "promptEn": "A company uses Amazon SageMaker for its ML pipeline in a production environment. The company has large input data sizes up to 1 GB and processing times up to 1 hour. The company needs near real-time latency.\nWhich SageMaker inference option meets these requirements?",
      "explanation": [
        "- 실시간 추론은 요청 즉시 결과 반환, 낮은 지연 시간 필요 시 적합.",
        "- 서버리스/비동기/배치 변환은 지연 시간이 길거나 대량 데이터 처리용."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Real-time inference: 요청 즉시 모델 예측 반환.",
        "- Serverless inference: 인프라 관리 없이 자동 확장 추론.",
        "- Batch transform: 대량 데이터 배치 처리."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Real-time inference",
          "textKo": "실시간 추론(Real-time inference)",
          "text": "Real-time inference"
        },
        {
          "key": "B",
          "textEn": "Serverless inference",
          "textKo": "서버리스 추론(Serverless inference)",
          "text": "Serverless inference"
        },
        {
          "key": "C",
          "textEn": "Asynchronous inference",
          "textKo": "비동기 추론(Asynchronous inference)",
          "text": "Asynchronous inference"
        },
        {
          "key": "D",
          "textEn": "Batch transform",
          "textKo": "배치 변환(Batch transform)",
          "text": "Batch transform"
        }
      ],
      "answerKey": "A",
      "answerText": "Real-time inference"
    },
    {
      "id": 7,
      "sourceNumber": 7,
      "title": "Question 7",
      "promptKo": "한 회사가 도메인 특화 모델을 사용하고 있습니다.\n새 모델을 처음부터 만들지 않고, 기존 사전 학습 모델을 새로운 관련 작업에 맞게 조정하고자 합니다.\n어떤 ML 전략이 적합합니까?",
      "promptEn": "A company is using domain-specific models. The company wants to avoid creating new models from the beginning. The company instead wants to adapt pre-trained models to create models for new, related tasks.\nWhich ML strategy meets these requirements?",
      "explanation": [
        "- 전이 학습은 기존 모델 지식을 활용하여 새로운 작업에 적합하게 조정 가능.",
        "- 에폭 수 조정은 학습 반복 수 변경, 전략과는 무관.",
        "- 비지도 학습은 레이블 없는 데이터 학습용."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Transfer Learning: 사전 학습된 모델을 새로운 작업에 재사용하는 학습 전략."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Increase the number of epochs",
          "textKo": "에폭 수 증가",
          "text": "Increase the number of epochs"
        },
        {
          "key": "B",
          "textEn": "Use transfer learning",
          "textKo": "전이 학습(Transfer learning) 사용",
          "text": "Use transfer learning"
        },
        {
          "key": "C",
          "textEn": "Decrease the number of epochs",
          "textKo": "에폭 수 감소",
          "text": "Decrease the number of epochs"
        },
        {
          "key": "D",
          "textEn": "Use unsupervised learning",
          "textKo": "비지도 학습 사용",
          "text": "Use unsupervised learning"
        }
      ],
      "answerKey": "B",
      "answerText": "Use transfer learning"
    },
    {
      "id": 8,
      "sourceNumber": 8,
      "title": "Question 8",
      "promptKo": "한 회사가 보호용 안경 이미지를 생성하는 솔루션을 구축하고 있습니다.\n높은 정확도를 유지하고 잘못된 주석(annotation) 위험을 최소화해야 합니다.\n어떤 솔루션이 요구사항을 충족합니까?",
      "promptEn": "A company is building a solution to generate images for protective eyewear. The solution must have high accuracy and must minimize the risk of incorrect annotations.\nWhich solution will meet these requirements?",
      "explanation": [
        "- Human-in-the-loop 검증으로 정확한 레이블링과 검증 가능.",
        "- 단순 이미지 인식, 데이터 증강, 요약 도구는 주석 정확도 보장 불가."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Human-in-the-loop: 인간이 ML 프로세스에 참여하여 오류 최소화.",
        "- Ground Truth Plus: SageMaker 기반 데이터 라벨링 및 검증 서비스."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Human-in-the-loop validation by using Amazon SageMaker Ground Truth Plus",
          "textKo": "Amazon SageMaker Ground Truth Plus를 이용한 Human-in-the-loop 검증",
          "text": "Human-in-the-loop validation by using Amazon SageMaker Ground Truth Plus"
        },
        {
          "key": "B",
          "textEn": "Data augmentation by using an Amazon Bedrock knowledge base",
          "textKo": "Amazon Bedrock 지식 기반을 이용한 데이터 증강",
          "text": "Data augmentation by using an Amazon Bedrock knowledge base"
        },
        {
          "key": "C",
          "textEn": "Image recognition by using Amazon Rekognition",
          "textKo": "Amazon Rekognition을 이용한 이미지 인식",
          "text": "Image recognition by using Amazon Rekognition"
        },
        {
          "key": "D",
          "textEn": "Data summarization by using Amazon QuickSight Q",
          "textKo": "Amazon QuickSight Q를 이용한 데이터 요약",
          "text": "Data summarization by using Amazon QuickSight Q"
        }
      ],
      "answerKey": "A",
      "answerText": "Human-in-the-loop validation by using Amazon SageMaker Ground Truth Plus"
    },
    {
      "id": 9,
      "sourceNumber": 9,
      "title": "Question 9",
      "promptKo": "한 회사가 Amazon Bedrock의 FM(Fundation Model)을 사용하여 챗봇을 만들고자 합니다.\nFM은 Amazon S3 버킷에 저장된 암호화 데이터를 접근해야 합니다. 데이터는 S3 관리 키(SSE-S3)로 암호화되어 있습니다.\nFM이 S3 데이터 접근 시 실패했습니다.\n어떤 솔루션이 요구사항을 충족합니까?",
      "promptEn": "A company wants to create a chatbot by using a foundation model (FM) on Amazon Bedrock. The FM needs to access encrypted data that is stored in an Amazon S3 bucket. The data is encrypted with Amazon S3 managed keys (SSE-S3).\nThe FM encounters a failure when attempting to access the S3 bucket data.\nWhich solution will meet these requirements?",
      "explanation": [
        "- S3 SSE-S3 데이터는 권한 있는 역할만 접근 가능.",
        "- 공개 접근 설정은 보안 위험.",
        "- 프롬프트 조정은 권한 문제 해결 불가."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- SSE-S3: S3에서 제공하는 서버 측 암호화 관리 키.",
        "- IAM Role: AWS 서비스가 권한으로 리소스 접근 가능하도록 설정된 역할"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Ensure that the role that Amazon Bedrock assumes has permission to decrypt data with the correct encryption key",
          "textKo": "Bedrock 역할이 올바른 키로 데이터 복호화 권한을 갖도록 설정",
          "text": "Ensure that the role that Amazon Bedrock assumes has permission to decrypt data with the correct encryption key"
        },
        {
          "key": "B",
          "textEn": "Set the access permissions for the S3 buckets to allow public access to enable access over the internet",
          "textKo": "S3 버킷 접근 권한을 공개로 설정",
          "text": "Set the access permissions for the S3 buckets to allow public access to enable access over the internet"
        },
        {
          "key": "C",
          "textEn": "Use prompt engineering techniques to tell the model to look for information in Amazon S3",
          "textKo": "프롬프트 엔지니어링으로 모델에게 S3 접근 지시",
          "text": "Use prompt engineering techniques to tell the model to look for information in Amazon S3"
        },
        {
          "key": "D",
          "textEn": "Ensure that the S3 data does not contain sensitive information",
          "textKo": "S3 데이터에 민감한 정보가 없도록 보장",
          "text": "Ensure that the S3 data does not contain sensitive information"
        }
      ],
      "answerKey": "A",
      "answerText": "Ensure that the role that Amazon Bedrock assumes has permission to decrypt data with the correct encryption key"
    },
    {
      "id": 10,
      "sourceNumber": 10,
      "title": "Question 10",
      "promptKo": "한 회사가 엣지 디바이스에서 추론용 애플리케이션을 만들고자 합니다.\n추론은 가능한 한 낮은 지연(latency)으로 수행되어야 합니다.\n어떤 솔루션이 적합합니까?",
      "promptEn": "A company wants to use language models to create an application for inference on edge devices. The inference must have the lowest latency possible.\nWhich solution will meet these requirements?",
      "explanation": [
        "- 엣지 디바이스에서 작은 모델을 직접 배포하면 지연 시간 최소화 가능.",
        "- 대형 모델 또는 중앙 집중형 API는 통신 지연 발생."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- SLM: Small Language Model, 경량화된 언어 모델.",
        "- Edge devices: 데이터 생성 위치 근처에서 실행되는 디바이스."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Deploy optimized small language models (SLMs) on edge devices",
          "textKo": "최적화된 소형 언어 모델(SLM)을 엣지 디바이스에 배포",
          "text": "Deploy optimized small language models (SLMs) on edge devices"
        },
        {
          "key": "B",
          "textEn": "Deploy optimized large language models (LLMs) on edge devices",
          "textKo": "최적화된 대형 언어 모델(LLM)을 엣지 디바이스에 배포",
          "text": "Deploy optimized large language models (LLMs) on edge devices"
        },
        {
          "key": "C",
          "textEn": "Incorporate a centralized small language model (SLM) API for asynchronous communication with edge devices",
          "textKo": "중앙 집중형 SLM API로 비동기 통신",
          "text": "Incorporate a centralized small language model (SLM) API for asynchronous communication with edge devices"
        },
        {
          "key": "D",
          "textEn": "Incorporate a centralized large language model (LLM) API for asynchronous communication with edge devices",
          "textKo": "중앙 집중형 LLM API로 비동기 통신",
          "text": "Incorporate a centralized large language model (LLM) API for asynchronous communication with edge devices"
        }
      ],
      "answerKey": "A",
      "answerText": "Deploy optimized small language models (SLMs) on edge devices"
    },
    {
      "id": 11,
      "sourceNumber": 11,
      "title": "Question 11",
      "promptKo": "한 회사가 SageMaker를 사용하여 ML 모델을 만들고자 합니다.\n회사는 여러 팀에서 모델 개발을 위해 변수(Feature)를 공유하고 관리해야 합니다.\n이 요구사항을 충족하는 SageMaker 기능은 무엇입니까?",
      "promptEn": "A company wants to build an ML model by using Amazon SageMaker. The company needs to share and manage variables for model development across multiple teams.\nWhich SageMaker feature meets these requirements?",
      "explanation": [
        "- Feature Store는 Feature를 중앙 저장소에서 관리하고 공유 가능.",
        "- 팀 간 일관성 있는 Feature 사용 가능."
      ],
      "wrongExplanations": [
        "- B -> Data Wrangler: 데이터 전처리 도구, Feature 공유 목적 아님.",
        "- C -> Clarify: 편향 감지 및 설명 기능.",
        "- D -> Model Cards: 모델 설명 및 문서화 목적."
      ],
      "glossary": [
        "- Feature Store: ML 모델 Feature를 중앙에서 관리, 공유하는 저장소.",
        "- Feature: ML 모델 입력 변수."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker Feature Store",
          "textKo": "Amazon SageMaker Feature Store",
          "text": "Amazon SageMaker Feature Store"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker Data Wrangler",
          "textKo": "Amazon SageMaker Data Wrangler",
          "text": "Amazon SageMaker Data Wrangler"
        },
        {
          "key": "C",
          "textEn": "Amazon SageMaker Clarify",
          "textKo": "Amazon SageMaker Clarify",
          "text": "Amazon SageMaker Clarify"
        },
        {
          "key": "D",
          "textEn": "Amazon SageMaker Model Cards",
          "textKo": "Amazon SageMaker Model Cards",
          "text": "Amazon SageMaker Model Cards"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon SageMaker Feature Store"
    },
    {
      "id": 12,
      "sourceNumber": 12,
      "title": "Question 12",
      "promptKo": "한 회사가 **생성형 AI(Generative AI)**를 사용하여 개발자 생산성과 소프트웨어 개발 효율을 높이고자 합니다.\n회사는 Amazon Q Developer를 사용하려고 합니다.\nAmazon Q Developer가 이러한 요구사항을 충족하는 방법은 무엇입니까?",
      "promptEn": "A company wants to use generative AI to increase developer productivity and software development. The company wants to use Amazon Q Developer.\nWhat can Amazon Q Developer do to help the company meet these requirements?",
      "explanation": [
        "- Q Developer는 코드 생성, 참조 추적, 오픈소스 라이선스 관리 기능 제공.",
        "- 개발자 생산성 향상에 직접적으로 기여."
      ],
      "wrongExplanations": [
        "- B -> AWS Lambda 관련 기능, Q Developer 아님.",
        "- C -> 음성 명령/자연어 검색은 Alexa, Lex 기능에 가까움.",
        "- D -> 오디오->텍스트는 Amazon Transcribe 서비스."
      ],
      "glossary": [
        "- Generative AI: AI가 새로운 콘텐츠를 생성하는 기술.",
        "- Code Snippet: 코드 일부, 재사용 가능."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Create software snippets, reference tracking, and open source license tracking",
          "textKo": "소프트웨어 코드 스니펫 생성, 참조 추적, 오픈소스 라이선스 관리",
          "text": "Create software snippets, reference tracking, and open source license tracking"
        },
        {
          "key": "B",
          "textEn": "Run an application without provisioning or managing servers",
          "textKo": "서버 프로비저닝 없이 애플리케이션 실행",
          "text": "Run an application without provisioning or managing servers"
        },
        {
          "key": "C",
          "textEn": "Enable voice commands for coding and providing natural language search",
          "textKo": "음성 명령을 통한 코딩과 자연어 검색 지원",
          "text": "Enable voice commands for coding and providing natural language search"
        },
        {
          "key": "D",
          "textEn": "Convert audio files to text documents by using ML models",
          "textKo": "ML 모델을 사용하여 오디오 파일을 텍스트로 변환",
          "text": "Convert audio files to text documents by using ML models"
        }
      ],
      "answerKey": "A",
      "answerText": "Create software snippets, reference tracking, and open source license tracking"
    },
    {
      "id": 13,
      "sourceNumber": 13,
      "title": "Question 13",
      "promptKo": "한 금융 기관이 Amazon Bedrock을 사용하여 AI 애플리케이션을 개발하고 있습니다.\n애플리케이션은 VPC에 호스팅되어 있으며, 규제 준수를 위해 VPC에서 인터넷 트래픽 접근이 금지되어 있습니다.\n이 요구사항을 충족하는 AWS 서비스/기능은 무엇입니까?",
      "promptEn": "A financial institution is using Amazon Bedrock to develop an AI application. The application is hosted in a VPC. To meet regulatory compliance standards, the VPC is not allowed access to any internet traffic.\nWhich AWS service or feature will meet these requirements?",
      "explanation": [
        "- PrivateLink는 VPC에서 인터넷 없이 AWS 서비스 접근 가능.",
        "- 규제 환경에서 안전한 연결 제공."
      ],
      "wrongExplanations": [
        "- B -> Macie: 데이터 보안/민감 정보 검사 서비스.",
        "- C -> CloudFront: CDN, 인터넷 접근 필요.",
        "- D -> Internet Gateway: 인터넷 연결을 위한 게이트웨이, 금지 조건 위배."
      ],
      "glossary": [
        "- PrivateLink: 인터넷 없이 AWS 서비스 연결.",
        "- VPC: 가상 프라이빗 클라우드."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "AWS PrivateLink",
          "textKo": "AWS PrivateLink",
          "text": "AWS PrivateLink"
        },
        {
          "key": "B",
          "textEn": "Amazon Macie",
          "textKo": "Amazon Macie",
          "text": "Amazon Macie"
        },
        {
          "key": "C",
          "textEn": "Amazon CloudFront",
          "textKo": "Amazon CloudFront",
          "text": "Amazon CloudFront"
        },
        {
          "key": "D",
          "textEn": "Internet gateway",
          "textKo": "Internet gateway",
          "text": "Internet gateway"
        }
      ],
      "answerKey": "A",
      "answerText": "AWS PrivateLink"
    },
    {
      "id": 14,
      "sourceNumber": 14,
      "title": "Question 14",
      "promptKo": "한 회사가 교육용 게임을 개발하려고 합니다.\n사용자가 \"병 안에 빨간 구슬 6개, 초록 구슬 4개, 노란 구슬 3개가 있습니다. 초록 구슬을 뽑을 확률은?\"과 같은 문제를 풀도록 합니다.\n**가장 적은 운영 부담(operational overhead)**으로 요구사항을 충족하는 솔루션은 무엇입니까?",
      "promptEn": "A company wants to develop an educational game where users answer questions such as the following: \"A jar contains six red, four green, and three yellow marbles. What is the probability of choosing a green marble from the jar?\"\nWhich solution meets these requirements with the LEAST operational overhead?",
      "explanation": [
        "- 간단한 규칙 기반 계산으로 확률 산출 가능.",
        "- ML 모델 없이 가장 적은 운영 부담."
      ],
      "wrongExplanations": [
        "- A -> 과도한 ML 사용, 단순 문제에 불필요.",
        "- B -> 강화 학습 불필요, 문제 단순.",
        "- D -> 비지도 학습은 확률 산출과 무관."
      ],
      "glossary": [
        "- Supervised Learning: 레이블 있는 데이터로 모델 학습.",
        "- Reinforcement Learning: 보상 기반 학습.",
        "- Unsupervised Learning: 레이블 없는 데이터 학습."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use supervised learning to create a regression model that will predict probability",
          "textKo": "확률을 예측하는 회귀 모델(supervised learning) 사용",
          "text": "Use supervised learning to create a regression model that will predict probability"
        },
        {
          "key": "B",
          "textEn": "Use reinforcement learning to train a model to return the probability",
          "textKo": "확률을 반환하도록 강화 학습(reinforcement learning) 사용",
          "text": "Use reinforcement learning to train a model to return the probability"
        },
        {
          "key": "C",
          "textEn": "Use code that will calculate probability by using simple rules and computations",
          "textKo": "단순한 규칙과 계산을 사용한 코드 작성",
          "text": "Use code that will calculate probability by using simple rules and computations"
        },
        {
          "key": "D",
          "textEn": "Use unsupervised learning to create a model that will estimate probability density",
          "textKo": "확률 밀도를 추정하는 비지도 학습(unsupervised learning) 사용",
          "text": "Use unsupervised learning to create a model that will estimate probability density"
        }
      ],
      "answerKey": "C",
      "answerText": "Use code that will calculate probability by using simple rules and computations"
    },
    {
      "id": 15,
      "sourceNumber": 15,
      "title": "Question 15",
      "promptKo": "운영 중인 AI 모델의 실행(runtime) 효율성을 측정하는 지표는 무엇입니까?",
      "promptEn": "Which metric measures the runtime efficiency of operating AI models?",
      "explanation": [
        "- 평균 응답 시간(Average response time)은 모델이 입력을 처리하고 결과를 반환하는 시간.",
        "- 실시간 응용에서 효율성 평가 지표로 사용."
      ],
      "wrongExplanations": [
        "- A -> CSAT: 사용자 만족도, 기술적 효율 아님.",
        "- B -> Epoch 학습 시간: 학습 효율, 운영 효율 아님.",
        "- D -> 학습 인스턴스 수: 인프라 정보, 효율성 지표 아님."
      ],
      "glossary": [
        "- Runtime Efficiency: 운영 중 모델이 얼마나 빠르게 작동하는지.",
        "- Epoch: 전체 데이터셋 한 번 학습."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Customer satisfaction score (CSAT)",
          "textKo": "고객 만족도 점수(CSAT)",
          "text": "Customer satisfaction score (CSAT)"
        },
        {
          "key": "B",
          "textEn": "Training time for each epoch",
          "textKo": "학습 시 각 Epoch별 학습 시간",
          "text": "Training time for each epoch"
        },
        {
          "key": "C",
          "textEn": "Average response time",
          "textKo": "평균 응답 시간",
          "text": "Average response time"
        },
        {
          "key": "D",
          "textEn": "Number of training instances",
          "textKo": "학습 인스턴스 수",
          "text": "Number of training instances"
        }
      ],
      "answerKey": "C",
      "answerText": "Average response time"
    },
    {
      "id": 16,
      "sourceNumber": 16,
      "title": "Question 16",
      "promptKo": "한 회사가 컨택센터 애플리케이션을 구축하고 있으며, 고객 대화에서 **통찰(insights)**을 얻고자 합니다.\n회사는 고객 통화의 오디오에서 주요 정보를 분석하고 추출하고 싶습니다.\n이 요구사항을 충족하는 솔루션은 무엇입니까?",
      "promptEn": "A company is building a contact center application and wants to gain insights from customer conversations. The company wants to analyze and extract key information from the audio of the customer calls.\nWhich solution meets these requirements?",
      "explanation": [
        "- Transcribe는 오디오를 텍스트로 변환하여 분석 가능하게 함.",
        "- 통화 기록에서 정보를 추출하려면 먼저 텍스트 전사가 필요."
      ],
      "wrongExplanations": [
        "- A -> Lex: 챗봇 구축, 분석 목적 아님.",
        "- C -> Model Monitor: 모델 모니터링, 통화 분석과 무관.",
        "- D -> Comprehend: NLP 분석 가능하지만 오디오 전사 없으면 바로 사용 불가."
      ],
      "glossary": [
        "- Amazon Transcribe: 오디오를 텍스트로 변환하는 서비스.",
        "- Insight: 데이터를 분석하여 얻는 유용한 정보."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Build a conversational chatbot by using Amazon Lex.",
          "textKo": "Amazon Lex로 대화형 챗봇 구축",
          "text": "Build a conversational chatbot by using Amazon Lex."
        },
        {
          "key": "B",
          "textEn": "Transcribe call recordings by using Amazon Transcribe.",
          "textKo": "Amazon Transcribe로 통화 녹음 전사",
          "text": "Transcribe call recordings by using Amazon Transcribe."
        },
        {
          "key": "C",
          "textEn": "Extract information from call recordings by using Amazon SageMaker Model Monitor.",
          "textKo": "Amazon SageMaker Model Monitor로 통화 정보 추출",
          "text": "Extract information from call recordings by using Amazon SageMaker Model Monitor."
        },
        {
          "key": "D",
          "textEn": "Create classification labels by using Amazon Comprehend.",
          "textKo": "Amazon Comprehend로 분류 레이블 생성",
          "text": "Create classification labels by using Amazon Comprehend."
        }
      ],
      "answerKey": "B",
      "answerText": "Transcribe call recordings by using Amazon Transcribe."
    },
    {
      "id": 17,
      "sourceNumber": 17,
      "title": "Question 17",
      "promptKo": "한 회사가 광고 캠페인에 사용할 **레이블 없는 고객 데이터(페타바이트 규모)**를 보유하고 있습니다.\n회사는 고객을 계층별로 분류하여 제품을 홍보하고 싶습니다.\n이 요구사항을 충족하는 학습 방법론은 무엇입니까?",
      "promptEn": "A company has petabytes of unlabeled customer data to use for an advertisement campaign. The company wants to classify its customers into tiers to advertise and promote the company's products.\nWhich methodology should the company use to meet these requirements?",
      "explanation": [
        "- 레이블 없는 데이터에서 패턴과 군집을 찾는 데 비지도 학습 사용.",
        "- 클러스터링 기법(K-Means 등)으로 고객 계층 분류 가능."
      ],
      "wrongExplanations": [
        "- A -> 지도 학습: 레이블 필요, 현재 데이터 레이블 없음.",
        "- C -> 강화 학습: 보상 기반, 군집 분류와 무관.",
        "- D -> RLHF: 보상 학습 + 인간 피드백, 군집화 목적 아님."
      ],
      "glossary": [
        "- Unsupervised Learning(비지도 학습): 레이블 없는 데이터를 기반으로 패턴과 구조를 학습.",
        "- Clustering: 데이터를 유사한 그룹으로 묶는 기법."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Supervised learning",
          "textKo": "지도 학습",
          "text": "Supervised learning"
        },
        {
          "key": "B",
          "textEn": "Unsupervised learning",
          "textKo": "비지도 학습",
          "text": "Unsupervised learning"
        },
        {
          "key": "C",
          "textEn": "Reinforcement learning",
          "textKo": "강화 학습",
          "text": "Reinforcement learning"
        },
        {
          "key": "D",
          "textEn": "Reinforcement learning from human feedback (RLHF)",
          "textKo": "인간 피드백 기반 강화 학습(RLHF)",
          "text": "Reinforcement learning from human feedback (RLHF)"
        }
      ],
      "answerKey": "B",
      "answerText": "Unsupervised learning"
    },
    {
      "id": 18,
      "sourceNumber": 18,
      "title": "Question 18",
      "promptKo": "AI 실무자가 **파운데이션 모델(FM)**을 사용하여 검색 애플리케이션을 설계하려 합니다.\n검색 애플리케이션은 텍스트와 이미지가 포함된 쿼리를 처리해야 합니다.\n어떤 유형의 FM을 사용해야 합니까?",
      "promptEn": "An AI practitioner wants to use a foundation model (FM) to design a search application. The search application must handle queries that have text and images.\nWhich type of FM should the AI practitioner use to power the search application?",
      "explanation": [
        "- 멀티모달 임베딩 모델은 텍스트와 이미지를 동시에 처리 가능.",
        "- 검색용으로 적합하며, 입력 데이터를 공통 벡터 공간에 매핑."
      ],
      "wrongExplanations": [
        "- B -> 텍스트 전용, 이미지 처리 불가.",
        "- C -> 생성 목적, 검색 기능 아님.",
        "- D -> 이미지 생성 전용, 검색 기능 아님."
      ],
      "glossary": [
        "- Multi-modal Embedding Model: 다양한 유형 입력(텍스트+이미지)을 임베딩하여 검색/분류에 활용.",
        "- Embedding: 데이터를 벡터 공간으로 변환."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Multi-modal embedding model",
          "textKo": "멀티모달 임베딩 모델",
          "text": "Multi-modal embedding model"
        },
        {
          "key": "B",
          "textEn": "Text embedding model",
          "textKo": "텍스트 임베딩 모델",
          "text": "Text embedding model"
        },
        {
          "key": "C",
          "textEn": "Multi-modal generation model",
          "textKo": "멀티모달 생성 모델",
          "text": "Multi-modal generation model"
        },
        {
          "key": "D",
          "textEn": "Image generation model",
          "textKo": "이미지 생성 모델",
          "text": "Image generation model"
        }
      ],
      "answerKey": "A",
      "answerText": "Multi-modal embedding model"
    },
    {
      "id": 19,
      "sourceNumber": 19,
      "title": "Question 19",
      "promptKo": "한 회사가 Amazon Bedrock의 파운데이션 모델(FM)을 AI 검색 도구에 사용합니다.\n회사는 회사 데이터를 사용하여 모델을 더 정확하게 Fine-tuning하고 싶습니다.\n어떤 전략이 모델 Fine-tuning을 성공적으로 수행합니까?",
      "promptEn": "A company uses a foundation model (FM) from Amazon Bedrock for an AI search tool. The company wants to fine-tune the model to be more accurate by using the company's data.\nWhich strategy will successfully fine-tune the model?",
      "explanation": [
        "- Fine-tuning은 Prompt(입력)와 Completion(출력)으로 구성된 레이블 데이터 제공 필요.",
        "- 모델이 회사 특화 데이터와 패턴 학습 가능."
      ],
      "wrongExplanations": [
        "- B -> 단순 파일 형식 지정, fine-tuning 구조 필요.",
        "- C -> Throughput 구매는 배포/추론 관련, Fine-tuning에 필수 아님.",
        "- D -> 일반 자료 학습, 회사 데이터 특화 Fine-tuning 목적과 다름."
      ],
      "glossary": [
        "- Fine-tuning: 사전 학습된 모델을 특정 데이터/목적에 맞게 추가 학습.",
        "- Prompt: 모델 입력 데이터.",
        "- Completion: 모델 목표 출력 데이터."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Provide labeled data with the prompt field and the completion field.",
          "textKo": "Prompt 필드와 Completion 필드가 포함된 레이블 데이터 제공",
          "text": "Provide labeled data with the prompt field and the completion field."
        },
        {
          "key": "B",
          "textEn": "Prepare the training dataset by creating a .txt file that contains multiple lines in .csv format.",
          "textKo": ".csv 형식의 여러 줄이 있는 .txt 파일로 학습 데이터셋 준비",
          "text": "Prepare the training dataset by creating a .txt file that contains multiple lines in .csv format."
        },
        {
          "key": "C",
          "textEn": "Purchase Provisioned Throughput for Amazon Bedrock.",
          "textKo": "Amazon Bedrock용 Provisioned Throughput 구매",
          "text": "Purchase Provisioned Throughput for Amazon Bedrock."
        },
        {
          "key": "D",
          "textEn": "Train the model on journals and textbooks.",
          "textKo": "저널과 교과서를 학습 데이터로 사용",
          "text": "Train the model on journals and textbooks."
        }
      ],
      "answerKey": "A",
      "answerText": "Provide labeled data with the prompt field and the completion field."
    },
    {
      "id": 20,
      "sourceNumber": 20,
      "title": "Question 20",
      "promptKo": "한 회사가 AI를 사용하여 애플리케이션을 위협으로부터 보호하려 합니다.\nAI 솔루션은 IP 주소가 의심스러운 출처인지 확인해야 합니다.\n이 요구사항을 충족하는 솔루션은 무엇입니까?",
      "promptEn": "A company wants to use AI to protect its application from threats. The AI solution needs to check if an IP address is from a suspicious source.\nWhich solution meets these requirements?",
      "explanation": [
        "- 이상 탐지 시스템은 비정상 패턴 식별 가능.",
        "- IP 접근 패턴 분석으로 의심스러운 활동 감지 가능."
      ],
      "wrongExplanations": [
        "- A -> 음성 인식, 보안과 무관.",
        "- B -> NER: 텍스트 엔티티 추출, IP 탐지 목적 아님.",
        "- D -> 사기 예측: 일반적인 금융 사기 예측, 실시간 IP 탐지 목적과 다름."
      ],
      "glossary": [
        "- Anomaly Detection: 정상 패턴에서 벗어난 이상치 탐지.",
        "- Suspicious Source: 의심스러운 활동이나 출처."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Build a speech recognition system.",
          "textKo": "음성 인식 시스템 구축",
          "text": "Build a speech recognition system."
        },
        {
          "key": "B",
          "textEn": "Create a natural language processing (NLP) named entity recognition system.",
          "textKo": "NLP 기반 Named Entity Recognition 시스템 구축",
          "text": "Create a natural language processing (NLP) named entity recognition system."
        },
        {
          "key": "C",
          "textEn": "Develop an anomaly detection system.",
          "textKo": "이상 탐지(Anomaly Detection) 시스템 개발",
          "text": "Develop an anomaly detection system."
        },
        {
          "key": "D",
          "textEn": "Create a fraud forecasting system.",
          "textKo": "사기 예측(Fraud Forecasting) 시스템 구축",
          "text": "Create a fraud forecasting system."
        }
      ],
      "answerKey": "C",
      "answerText": "Develop an anomaly detection system."
    },
    {
      "id": 21,
      "sourceNumber": 21,
      "title": "Question 21",
      "promptKo": "Amazon OpenSearch Service의 어떤 기능이 회사가 벡터 데이터베이스 애플리케이션을 구축할 수 있도록 합니까?",
      "promptEn": "Which feature of Amazon OpenSearch Service gives companies the ability to build vector database applications?",
      "explanation": [
        "- 벡터 데이터베이스는 Nearest Neighbor Search(NNS) 기능을 필요로 함.",
        "- OpenSearch는 벡터 검색과 확장 가능한 인덱스를 지원하여 유사도 검색 가능."
      ],
      "wrongExplanations": [
        "- A -> S3 통합: 객체 저장용, 벡터 DB 목적 아님.",
        "- B -> 지리공간 기능: 위치 기반 검색, 벡터 DB와 직접 관련 없음.",
        "- D -> 실시간 분석: 스트리밍 데이터 처리, 벡터 DB 구축 목적과 다름."
      ],
      "glossary": [
        "- Vector Database: 데이터 포인트를 벡터 형태로 저장하고 유사도 검색 가능.",
        "- Nearest Neighbor Search(NNS): 가장 가까운 벡터(유사 데이터) 검색."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Integration with Amazon S3 for object storage",
          "textKo": "Amazon S3와 통합된 객체 스토리지",
          "text": "Integration with Amazon S3 for object storage"
        },
        {
          "key": "B",
          "textEn": "Support for geospatial indexing and queries",
          "textKo": "지리공간 인덱싱 및 쿼리 지원",
          "text": "Support for geospatial indexing and queries"
        },
        {
          "key": "C",
          "textEn": "Scalable index management and nearest neighbor search capability",
          "textKo": "확장 가능한 인덱스 관리 및 가장 가까운 이웃 검색(NNS) 기능",
          "text": "Scalable index management and nearest neighbor search capability"
        },
        {
          "key": "D",
          "textEn": "Ability to perform real-time analysis on streaming data",
          "textKo": "스트리밍 데이터 실시간 분석 기능",
          "text": "Ability to perform real-time analysis on streaming data"
        }
      ],
      "answerKey": "C",
      "answerText": "Scalable index management and nearest neighbor search capability"
    },
    {
      "id": 22,
      "sourceNumber": 22,
      "title": "Question 22",
      "promptKo": "생성형 AI 모델의 사용 사례는 무엇입니까?",
      "promptEn": "Which option is a use case for generative AI models?",
      "explanation": [
        "- 생성형 AI 모델은 새로운 콘텐츠 생성에 사용.",
        "- 텍스트 -> 이미지 변환(DALL&middot;E 등) 대표적 사례."
      ],
      "wrongExplanations": [
        "- A -> 보안 시스템: 탐지/분류, 생성과 무관.",
        "- C -> DB 최적화: 성능 향상 목적, 생성 아님.",
        "- D -> 데이터 분석: 예측/분류 목적, 생성 아님."
      ],
      "glossary": [
        "- Generative AI: 입력 데이터를 기반으로 새롭고 유용한 콘텐츠 생성.",
        "- Photorealistic Image Generation: 실제 사진과 유사한 이미지 생성."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Improving network security by using intrusion detection systems",
          "textKo": "침입 탐지 시스템으로 네트워크 보안 강화",
          "text": "Improving network security by using intrusion detection systems"
        },
        {
          "key": "B",
          "textEn": "Creating photorealistic images from text descriptions for digital marketing",
          "textKo": "텍스트 설명으로 사실적인 이미지를 생성하여 디지털 마케팅 활용",
          "text": "Creating photorealistic images from text descriptions for digital marketing"
        },
        {
          "key": "C",
          "textEn": "Enhancing database performance by using optimized indexing",
          "textKo": "최적화된 인덱싱으로 데이터베이스 성능 향상",
          "text": "Enhancing database performance by using optimized indexing"
        },
        {
          "key": "D",
          "textEn": "Analyzing financial data to forecast stock market trends",
          "textKo": "금융 데이터를 분석하여 주식 시장 예측",
          "text": "Analyzing financial data to forecast stock market trends"
        }
      ],
      "answerKey": "B",
      "answerText": "Creating photorealistic images from text descriptions for digital marketing"
    },
    {
      "id": 23,
      "sourceNumber": 23,
      "title": "Question 23",
      "promptKo": "한 회사가 Amazon Bedrock으로 생성형 AI 애플리케이션을 구축하려 합니다.\n회사는 한 프롬프트에 얼마나 많은 정보를 담을 수 있는지 알고 싶습니다.\n어떤 요소가 이 결정에 영향을 줍니까?",
      "promptEn": "A company wants to build a generative AI application by using Amazon Bedrock and needs to choose a foundation model (FM). The company wants to know how much information can fit into one prompt.\nWhich consideration will inform the company's decision?",
      "explanation": [
        "- Context window는 모델이 한 번에 처리 가능한 토큰 수를 의미.",
        "- 프롬프트 길이를 결정하는 핵심 요소."
      ],
      "wrongExplanations": [
        "- A -> Temperature: 출력 다양성 조절, 정보 용량과 무관.",
        "- C -> Batch size: 학습/추론 시 처리 단위, 한 프롬프트 길이와 무관.",
        "- D -> Model size: 모델 크기, context 제한과 직접 연결되지 않음."
      ],
      "glossary": [
        "- Context Window: 모델이 한 번에 참조할 수 있는 입력 토큰 범위.",
        "- Token: 모델이 처리하는 최소 단위(단어 또는 부분 단어)."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Temperature",
          "textKo": "Temperature",
          "text": "Temperature"
        },
        {
          "key": "B",
          "textEn": "Context window",
          "textKo": "Context window",
          "text": "Context window"
        },
        {
          "key": "C",
          "textEn": "Batch size",
          "textKo": "Batch size",
          "text": "Batch size"
        },
        {
          "key": "D",
          "textEn": "Model size",
          "textKo": "Model size",
          "text": "Model size"
        }
      ],
      "answerKey": "B",
      "answerText": "Context window"
    },
    {
      "id": 24,
      "sourceNumber": 24,
      "title": "Question 24",
      "promptKo": "회사가 고객 지원용 챗봇을 만들고자 합니다.\n챗봇은 사람 개입 없이 기술 문제 해결을 지원합니다.\n챗봇은 회사의 톤을 준수하는 응답을 생성해야 합니다.\n이 요구사항을 충족하는 방법은 무엇입니까?",
      "promptEn": "A company wants to make a chatbot to help customers. The chatbot will help solve technical problems without human intervention.\nThe company chose a foundation model (FM) for the chatbot. The chatbot needs to produce responses that adhere to company tone.\nWhich solution meets these requirements?",
      "explanation": [
        "- 프롬프트 엔지니어링을 통해 모델이 회사 톤에 맞는 답변을 출력하도록 조정."
      ],
      "wrongExplanations": [
        "- A -> 토큰 수 제한: 답변 길이 제한, 톤 조절 아님.",
        "- B -> 배치 추론: 다수 처리 효율, 톤/내용과 무관.",
        "- D -> Temperature 높임: 창의성 증가, 톤 제어 목적과 다름."
      ],
      "glossary": [
        "- Prompt Engineering: 모델 출력 품질/스타일을 제어하기 위해 프롬프트를 설계하고 수정하는 과정.",
        "- Temperature: 생성형 모델 출력의 랜덤성/다양성 조절."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Set a low limit on the number of tokens the FM can produce.",
          "textKo": "FM 출력 토큰 수 낮게 제한",
          "text": "Set a low limit on the number of tokens the FM can produce."
        },
        {
          "key": "B",
          "textEn": "Use batch inferencing to process detailed responses.",
          "textKo": "배치 추론으로 상세 응답 처리",
          "text": "Use batch inferencing to process detailed responses."
        },
        {
          "key": "C",
          "textEn": "Experiment and refine the prompt until the FM produces the desired responses.",
          "textKo": "프롬프트를 실험하고 수정하여 원하는 응답 생성",
          "text": "Experiment and refine the prompt until the FM produces the desired responses."
        },
        {
          "key": "D",
          "textEn": "Define a higher number for the temperature parameter.",
          "textKo": "Temperature 매개변수 높게 설정",
          "text": "Define a higher number for the temperature parameter."
        }
      ],
      "answerKey": "C",
      "answerText": "Experiment and refine the prompt until the FM produces the desired responses."
    },
    {
      "id": 25,
      "sourceNumber": 25,
      "title": "Question 25",
      "promptKo": "회사가 Amazon Bedrock의 **대형 언어 모델(LLM)**을 감정 분석에 사용하고자 합니다.\n회사는 텍스트 문단의 감정을 긍정/부정으로 분류하려 합니다.\n어떤 프롬프트 엔지니어링 전략이 요구사항을 충족합니까?",
      "promptEn": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company wants to classify the sentiment of text passages as positive or negative.\nWhich prompt engineering strategy meets these requirements?",
      "explanation": [
        "- Few-shot learning 방식으로 프롬프트에 예시 포함 -> 모델이 정확하게 분류."
      ],
      "wrongExplanations": [
        "- B -> 설명만 제공, 모델 학습 효과 제한.",
        "- C -> 컨텍스트 없음 -> 모델이 감정 분류 어려움.",
        "- D -> 관련 없는 예시 -> 혼동 가능, 목적과 불일치."
      ],
      "glossary": [
        "- Few-shot Learning: 프롬프트에 몇 가지 예시를 제공하여 모델이 새로운 입력을 올바르게 처리하도록 학습.",
        "- Sentiment Analysis: 텍스트에서 감정(긍정/부정 등)을 판별하는 작업."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Provide examples of text passages with corresponding positive or negative labels in the prompt followed by the new text passage to be classified.",
          "textKo": "긍정/부정 레이블이 포함된 예시 문단 제공 후 새 문단 분류",
          "text": "Provide examples of text passages with corresponding positive or negative labels in the prompt followed by the new text passage to be classified."
        },
        {
          "key": "B",
          "textEn": "Provide a detailed explanation of sentiment analysis and how LLMs work in the prompt.",
          "textKo": "감정 분석 및 LLM 작동 방식 자세히 설명",
          "text": "Provide a detailed explanation of sentiment analysis and how LLMs work in the prompt."
        },
        {
          "key": "C",
          "textEn": "Provide the new text passage to be classified without any additional context or examples.",
          "textKo": "새 문단만 제공, 추가 컨텍스트 없음",
          "text": "Provide the new text passage to be classified without any additional context or examples."
        },
        {
          "key": "D",
          "textEn": "Provide the new text passage with a few examples of unrelated tasks, such as text summarization or question answering.",
          "textKo": "새 문단과 관련 없는 예시 과제 제공",
          "text": "Provide the new text passage with a few examples of unrelated tasks, such as text summarization or question answering."
        }
      ],
      "answerKey": "A",
      "answerText": "Provide examples of text passages with corresponding positive or negative labels in the prompt followed by the new text passage to be classified."
    },
    {
      "id": 26,
      "sourceNumber": 26,
      "title": "Question 26",
      "promptKo": "보안 회사가 Amazon Bedrock에서 **파운데이션 모델(FM)**을 실행하고 있습니다.\n회사는 허가된 사용자만 모델을 호출하도록 하고 싶습니다.\n또한, FM의 다음 버전을 위해 적절한 IAM 정책과 역할을 설정할 수 있도록 무단 접근 시도를 식별해야 합니다.\n어떤 AWS 서비스가 이 요구사항을 충족합니까?",
      "promptEn": "A security company is using Amazon Bedrock to run foundation models (FMs). The company wants to ensure that only authorized users invoke the models. The company needs to identify any unauthorized access attempts to set appropriate AWS Identity and Access Management (IAM) policies and roles for future iterations of the FMs.\nWhich AWS service should the company use to identify unauthorized users that are trying to access Amazon Bedrock?",
      "explanation": [
        "- CloudTrail은 AWS 계정의 모든 API 호출 기록을 남김 -> 누가 Bedrock에 접근했는지, 무단 접근 시도를 추적 가능."
      ],
      "wrongExplanations": [
        "- A -> Audit Manager: 규정 준수 평가용, 실시간 접근 식별 아님.",
        "- C -> Fraud Detector: 사기 탐지용, IAM 접근 감시와 직접 관련 없음.",
        "- D -> Trusted Advisor: 모범 사례 권고, 접근 시도 추적 목적 아님."
      ],
      "glossary": [
        "- AWS CloudTrail: AWS 계정에서 일어나는 API 호출 기록 및 로그 관리 서비스.",
        "- IAM (Identity and Access Management): 사용자, 그룹, 역할별 AWS 리소스 접근 권한 관리."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "AWS Audit Manager",
          "textKo": "AWS Audit Manager",
          "text": "AWS Audit Manager"
        },
        {
          "key": "B",
          "textEn": "AWS CloudTrail",
          "textKo": "AWS CloudTrail",
          "text": "AWS CloudTrail"
        },
        {
          "key": "C",
          "textEn": "Amazon Fraud Detector",
          "textKo": "Amazon Fraud Detector",
          "text": "Amazon Fraud Detector"
        },
        {
          "key": "D",
          "textEn": "AWS Trusted Advisor",
          "textKo": "AWS Trusted Advisor",
          "text": "AWS Trusted Advisor"
        }
      ],
      "answerKey": "B",
      "answerText": "AWS CloudTrail"
    },
    {
      "id": 27,
      "sourceNumber": 27,
      "title": "Question 27",
      "promptKo": "회사가 이미지 분류 ML 모델을 개발했습니다.\n웹 애플리케이션에서 모델을 사용할 수 있도록 프로덕션에 배포하려고 합니다.\n기반 인프라를 직접 관리하지 않고 모델을 호스팅하고 예측을 제공하려면 어떤 솔루션을 사용해야 합니까?",
      "promptEn": "A company has developed an ML model for image classification. The company wants to deploy the model to production so that a web application can use the model.\nThe company needs to implement a solution to host the model and serve predictions without managing any of the underlying infrastructure.\nWhich solution will meet these requirements?",
      "explanation": [
        "- SageMaker Serverless Inference는 서버 관리 없이 모델 호스팅 및 실시간 추론 제공."
      ],
      "wrongExplanations": [
        "- B -> CloudFront: CDN, 모델 호스팅/추론 아님.",
        "- C -> API Gateway: API 노출만, 모델 추론 처리 불가.",
        "- D -> AWS Batch: 배치 작업 처리용, 실시간 예측용 아님."
      ],
      "glossary": [
        "- Serverless Inference: 서버 관리 없이 ML 모델 추론 수행.",
        "- Inference: 학습된 모델을 사용하여 입력 데이터에 대한 예측 수행."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use Amazon SageMaker Serverless Inference to deploy the model.",
          "textKo": "Amazon SageMaker Serverless Inference 사용",
          "text": "Use Amazon SageMaker Serverless Inference to deploy the model."
        },
        {
          "key": "B",
          "textEn": "Use Amazon CloudFront to deploy the model.",
          "textKo": "Amazon CloudFront 사용",
          "text": "Use Amazon CloudFront to deploy the model."
        },
        {
          "key": "C",
          "textEn": "Use Amazon API Gateway to host the model and serve predictions.",
          "textKo": "Amazon API Gateway 사용",
          "text": "Use Amazon API Gateway to host the model and serve predictions."
        },
        {
          "key": "D",
          "textEn": "Use AWS Batch to host the model and serve predictions.",
          "textKo": "AWS Batch 사용",
          "text": "Use AWS Batch to host the model and serve predictions."
        }
      ],
      "answerKey": "A",
      "answerText": "Use Amazon SageMaker Serverless Inference to deploy the model."
    },
    {
      "id": 28,
      "sourceNumber": 28,
      "title": "Question 28",
      "promptKo": "AI 회사가 주기적으로 **ISV(독립 소프트웨어 공급자)**의 도움을 받아 시스템과 프로세스를 평가합니다.\nISV의 규정 준수 보고서가 제공될 때 이메일 알림을 받고자 합니다.\n어떤 AWS 서비스를 사용해야 합니까?",
      "promptEn": "An AI company periodically evaluates its systems and processes with the help of independent software vendors (ISVs). The company needs to receive email message notifications when an ISV's compliance reports become available.\nWhich AWS service can the company use to meet this requirement?",
      "explanation": [
        "- AWS Artifact는 규정 준수 보고서 제공 서비스 -> 보고서 준비 시 이메일 알림 기능 지원."
      ],
      "wrongExplanations": [
        "- A -> Audit Manager: 내부 감사 및 규정 준수 평가용, 보고서 알림 전용 아님.",
        "- C -> Trusted Advisor: 모범 사례 권고, 보고서 알림 아님.",
        "- D -> Data Exchange: 데이터 공유 플랫폼, 규정 준수 보고서와 관련 없음."
      ],
      "glossary": [
        "- AWS Artifact: AWS에서 제공하는 규정 준수 문서, 보고서 및 계약 관리 서비스.",
        "- ISV (Independent Software Vendor): 독립적으로 소프트웨어 제품을 개발, 판매하는 회사."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "AWS Audit Manager",
          "textKo": "AWS Audit Manager",
          "text": "AWS Audit Manager"
        },
        {
          "key": "B",
          "textEn": "AWS Artifact",
          "textKo": "AWS Artifact",
          "text": "AWS Artifact"
        },
        {
          "key": "C",
          "textEn": "AWS Trusted Advisor",
          "textKo": "AWS Trusted Advisor",
          "text": "AWS Trusted Advisor"
        },
        {
          "key": "D",
          "textEn": "AWS Data Exchange",
          "textKo": "AWS Data Exchange",
          "text": "AWS Data Exchange"
        }
      ],
      "answerKey": "B",
      "answerText": "AWS Artifact"
    },
    {
      "id": 29,
      "sourceNumber": 29,
      "title": "Question 29",
      "promptKo": "회사가 **대형 언어 모델(LLM)**을 이용해 대화형 에이전트를 개발하려 합니다.\nLLM이 원하지 않는 행동을 수행하거나 민감한 정보를 노출하지 않도록 하려면 어떻게 해야 합니까?",
      "promptEn": "A company wants to use a large language model (LLM) to develop a conversational agent. The company needs to prevent the LLM from being manipulated with common prompt engineering techniques to perform undesirable actions or expose sensitive information.\nWhich action will reduce these risks?",
      "explanation": [
        "- 프롬프트를 설계하여 LLM이 공격 패턴을 인식하고 대응하도록 하면 안전성 향상."
      ],
      "wrongExplanations": [
        "- B -> Temperature 높임: 출력 무작위성 증가 -> 위험 증가 가능.",
        "- C -> SageMaker 등록 여부: 안전성 직접 보장 아님.",
        "- D -> 입력 토큰 수 감소: 프롬프트 공격 방지와 직접적 관계 없음."
      ],
      "glossary": [
        "- Prompt Injection Attack: 프롬프트를 악용해 LLM이 의도치 않은 행동을 수행하게 만드는 공격.",
        "- Temperature: 출력 다양성 조절, 안전성 조절과는 직접적 관계 없음."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Create a prompt template that teaches the LLM to detect attack patterns.",
          "textKo": "공격 패턴을 감지하도록 LLM을 학습시키는 프롬프트 템플릿 생성",
          "text": "Create a prompt template that teaches the LLM to detect attack patterns."
        },
        {
          "key": "B",
          "textEn": "Increase the temperature parameter on invocation requests to the LLM.",
          "textKo": "LLM 호출 시 Temperature 값 증가",
          "text": "Increase the temperature parameter on invocation requests to the LLM."
        },
        {
          "key": "C",
          "textEn": "Avoid using LLMs that are not listed in Amazon SageMaker.",
          "textKo": "Amazon SageMaker에 없는 LLM 사용 회피",
          "text": "Avoid using LLMs that are not listed in Amazon SageMaker."
        },
        {
          "key": "D",
          "textEn": "Decrease the number of input tokens on invocations of the LLM.",
          "textKo": "LLM 호출 시 입력 토큰 수 감소",
          "text": "Decrease the number of input tokens on invocations of the LLM."
        }
      ],
      "answerKey": "A",
      "answerText": "Create a prompt template that teaches the LLM to detect attack patterns."
    },
    {
      "id": 30,
      "sourceNumber": 30,
      "title": "Question 30",
      "promptKo": "회사가 Generative AI Security Scoping Matrix를 사용하여 솔루션의 보안 책임을 평가했습니다.\n회사는 매트릭스를 기반으로 4가지 솔루션 범위를 확인했습니다.\n어떤 솔루션 범위가 회사에 가장 높은 보안 책임 소유권을 제공합니까?",
      "promptEn": "A company is using the Generative AI Security Scoping Matrix to assess security responsibilities for its solutions. The company has identified four different solution scopes based on the matrix.\nWhich solution scope gives the company the MOST ownership of security responsibilities?",
      "explanation": [
        "- 모델을 처음부터 구축 및 학습하면 모든 보안 책임이 회사에 있음."
      ],
      "wrongExplanations": [
        "- A -> 서드파티 앱 사용: 대부분 보안 책임은 공급자에 있음.",
        "- B -> 기존 FM 사용: 책임 일부만 회사 소유.",
        "- C -> 파인튜닝: 모델 기반 책임은 여전히 서드파티에 있음, 일부 책임만 회사 소유."
      ],
      "glossary": [
        "- Generative AI Security Scoping Matrix: 생성형 AI 솔루션에서 보안 책임 범위를 정의하는 프레임워크.",
        "- Fine-tuning: 기존 모델을 특정 데이터로 추가 학습시켜 특정 목적에 맞게 조정."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Using a third-party enterprise application that has embedded generative AI features.",
          "textKo": "내장 생성형 AI 기능이 있는 서드파티 엔터프라이즈 애플리케이션 사용",
          "text": "Using a third-party enterprise application that has embedded generative AI features."
        },
        {
          "key": "B",
          "textEn": "Building an application by using an existing third-party generative AI foundation model (FM).",
          "textKo": "기존 서드파티 생성형 AI FM 사용하여 애플리케이션 구축",
          "text": "Building an application by using an existing third-party generative AI foundation model (FM)."
        },
        {
          "key": "C",
          "textEn": "Refining an existing third-party generative AI foundation model (FM) by fine-tuning the model by using data specific to the business.",
          "textKo": "기존 서드파티 FM을 비즈니스 데이터로 파인튜닝하여 개선",
          "text": "Refining an existing third-party generative AI foundation model (FM) by fine-tuning the model by using data specific to the business."
        },
        {
          "key": "D",
          "textEn": "Building and training a generative AI model from scratch by using specific data that a customer owns.",
          "textKo": "고객 소유 특정 데이터를 사용하여 AI 모델을 처음부터 구축 및 학습",
          "text": "Building and training a generative AI model from scratch by using specific data that a customer owns."
        }
      ],
      "answerKey": "D",
      "answerText": "Building and training a generative AI model from scratch by using specific data that a customer owns."
    },
    {
      "id": 31,
      "sourceNumber": 31,
      "title": "Question 31",
      "promptKo": "AI 실무자가 동물 사진 데이터베이스를 가지고 있습니다.\nAI 실무자는 사람의 수작업 없이 자동으로 사진 속 동물을 식별하고 분류하고자 합니다.\n어떤 전략이 요구사항을 충족합니까?",
      "promptEn": "An AI practitioner has a database of animal photos. The AI practitioner wants to automatically identify and categorize the animals in the photos without manual human effort.\nWhich strategy meets these requirements?",
      "explanation": [
        "- Object detection은 이미지 내에서 특정 객체(동물 등)를 찾아내고 분류 가능."
      ],
      "wrongExplanations": [
        "- B -> Anomaly detection: 정상과 다른 이상 패턴 식별 용도, 분류 목적 아님.",
        "- C -> Named entity recognition: 텍스트 기반 개체 식별, 이미지 분류와 관련 없음.",
        "- D -> Inpainting: 이미지 일부 복원/편집, 객체 식별과 관련 없음."
      ],
      "glossary": [
        "- Object Detection: 이미지에서 객체를 탐지하고 위치와 클래스 라벨을 지정하는 기술.",
        "- Inpainting: 이미지 손상 영역이나 일부를 자동으로 채워 넣는 기술."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Object detection",
          "textKo": "객체 탐지 (Object detection)",
          "text": "Object detection"
        },
        {
          "key": "B",
          "textEn": "Anomaly detection",
          "textKo": "이상 탐지 (Anomaly detection)",
          "text": "Anomaly detection"
        },
        {
          "key": "C",
          "textEn": "Named entity recognition",
          "textKo": "개체명 인식 (Named entity recognition)",
          "text": "Named entity recognition"
        },
        {
          "key": "D",
          "textEn": "Inpainting",
          "textKo": "이미지 보정 (Inpainting)",
          "text": "Inpainting"
        }
      ],
      "answerKey": "A",
      "answerText": "Object detection"
    },
    {
      "id": 32,
      "sourceNumber": 32,
      "title": "Question 32",
      "promptKo": "회사가 Amazon Bedrock을 사용하여 애플리케이션을 만들고자 합니다.\n회사는 예산이 제한적이고 장기 계약 없이 유연성을 선호합니다.\n어떤 Amazon Bedrock 요금제가 이 요구사항을 충족합니까?",
      "promptEn": "A company wants to create an application by using Amazon Bedrock. The company has a limited budget and prefers flexibility without long-term commitment.\nWhich Amazon Bedrock pricing model meets these requirements?",
      "explanation": [
        "- On-Demand 요금제: 사용한 만큼만 비용 지불 -> 장기 계약 없이 유연하게 사용 가능."
      ],
      "wrongExplanations": [
        "- B -> Model customization: 모델 수정/학습 관련, 요금 모델 아님.",
        "- C -> Provisioned Throughput: 일정 처리량 확보 요금제 -> 장기 비용 부담.",
        "- D -> Spot Instance: 일시적 용량, Bedrock에서는 지원하지 않음."
      ],
      "glossary": [
        "- On-Demand: 필요할 때 사용하고 비용 지불, 유연성 높음.",
        "- Provisioned Throughput: 미리 지정한 처리량 확보, 지속 사용 시 유리."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "On-Demand",
          "textKo": "온디맨드 (On-Demand)",
          "text": "On-Demand"
        },
        {
          "key": "B",
          "textEn": "Model customization",
          "textKo": "모델 커스터마이제이션 (Model customization)",
          "text": "Model customization"
        },
        {
          "key": "C",
          "textEn": "Provisioned Throughput",
          "textKo": "프로비저닝 처리량 (Provisioned Throughput)",
          "text": "Provisioned Throughput"
        },
        {
          "key": "D",
          "textEn": "Spot Instance",
          "textKo": "스팟 인스턴스 (Spot Instance)",
          "text": "Spot Instance"
        }
      ],
      "answerKey": "A",
      "answerText": "On-Demand"
    },
    {
      "id": 33,
      "sourceNumber": 33,
      "title": "Question 33",
      "promptKo": "AI 개발팀이 팀 VPC 내에서 파운데이션 모델(FM)을 빠르게 배포하고 사용할 수 있는 AWS 서비스 또는 기능은 무엇입니까?",
      "promptEn": "Which AWS service or feature can help an AI development team quickly deploy and consume a foundation model (FM) within the team's VPC?",
      "explanation": [
        "- SageMaker JumpStart: 사전 구축된 모델을 빠르게 배포 가능 -> VPC 내 사용 가능."
      ],
      "wrongExplanations": [
        "- A -> Personalize: 추천 시스템 구축용, FM 배포와 직접 관련 없음.",
        "- C -> PartyRock: 실제 서비스 존재하지 않음.",
        "- D -> SageMaker Endpoints: 배포용이지만, FM 사용을 바로 지원하는 JumpStart보다 초기 설정 필요."
      ],
      "glossary": [
        "- SageMaker JumpStart: 미리 준비된 ML 모델과 솔루션 템플릿을 제공하여 빠른 배포 가능.",
        "- VPC (Virtual Private Cloud): AWS 내 논리적 격리된 네트워크."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Personalize",
          "textKo": "Amazon Personalize",
          "text": "Amazon Personalize"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker JumpStart",
          "textKo": "Amazon SageMaker JumpStart",
          "text": "Amazon SageMaker JumpStart"
        },
        {
          "key": "C",
          "textEn": "PartyRock, an Amazon Bedrock Playground",
          "textKo": "PartyRock (Amazon Bedrock Playground)",
          "text": "PartyRock, an Amazon Bedrock Playground"
        },
        {
          "key": "D",
          "textEn": "Amazon SageMaker endpoints",
          "textKo": "Amazon SageMaker Endpoints",
          "text": "Amazon SageMaker endpoints"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon SageMaker JumpStart"
    },
    {
      "id": 34,
      "sourceNumber": 34,
      "title": "Question 34",
      "promptKo": "회사가 Amazon Bedrock에서 LLM을 안전하게 사용하려면 어떻게 해야 합니까?",
      "promptEn": "How can companies use large language models (LLMs) securely on Amazon Bedrock?",
      "explanation": [
        "- 최소 권한 IAM + 명확 프롬프트 -> 안전하게 LLM 사용 가능."
      ],
      "wrongExplanations": [
        "- B/C -> 자동 평가 기능은 보안 제어와 직접 관련 없음.",
        "- D -> CloudWatch Logs는 모니터링용, 안전성 보장 아님."
      ],
      "glossary": [
        "- Least Privilege Access: 필요한 최소 권한만 부여하여 보안 강화.",
        "- Prompt Engineering: LLM이 정확하고 안전하게 동작하도록 입력 설계."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Design clear and specific prompts. Configure AWS Identity and Access Management (IAM) roles and policies by using least privilege access.",
          "textKo": "명확하고 구체적인 프롬프트 설계. 최소 권한 원칙으로 IAM 역할과 정책 구성",
          "text": "Design clear and specific prompts. Configure AWS Identity and Access Management (IAM) roles and policies by using least privilege access."
        },
        {
          "key": "B",
          "textEn": "Enable AWS Audit Manager for automatic model evaluation jobs.",
          "textKo": "Audit Manager 활성화하여 자동 모델 평가",
          "text": "Enable AWS Audit Manager for automatic model evaluation jobs."
        },
        {
          "key": "C",
          "textEn": "Enable Amazon Bedrock automatic model evaluation jobs.",
          "textKo": "Bedrock 자동 모델 평가 활성화",
          "text": "Enable Amazon Bedrock automatic model evaluation jobs."
        },
        {
          "key": "D",
          "textEn": "Use Amazon CloudWatch Logs to make models explainable and to monitor for bias.",
          "textKo": "CloudWatch Logs를 사용하여 모델 설명 가능하게 하고 편향 모니터링",
          "text": "Use Amazon CloudWatch Logs to make models explainable and to monitor for bias."
        }
      ],
      "answerKey": "A",
      "answerText": "Design clear and specific prompts. Configure AWS Identity and Access Management (IAM) roles and policies by using least privilege access."
    },
    {
      "id": 35,
      "sourceNumber": 35,
      "title": "Question 35",
      "promptKo": "회사가 테라바이트 단위 데이터를 가지고 있으며 비즈니스 분석에 활용하고자 합니다.\n회사는 직원이 입력한 텍스트로부터 SQL 쿼리를 생성할 수 있는 AI 기반 애플리케이션을 만들고 싶습니다.\n직원들은 기술 경험이 거의 없습니다.\n어떤 솔루션이 요구사항을 충족합니까?",
      "promptEn": "A company has terabytes of data in a database that the company can use for business analysis. The company wants to build an AI-based application that can build a SQL query from input text that employees provide. The employees have minimal experience with technology.\nWhich solution meets these requirements?",
      "explanation": [
        "- GPT 같은 생성형 AI 모델은 자연어를 이해하고 SQL 쿼리를 생성 가능."
      ],
      "wrongExplanations": [
        "- B -> Residual NN: 이미지 분류용, 자연어 -> SQL 생성과 무관.",
        "- C -> SVM: 지도 학습 분류/회귀, 자연어 -> 쿼리 변환에 적합하지 않음.",
        "- D -> WaveNet: 음성 합성 모델, SQL 생성과 관련 없음."
      ],
      "glossary": [
        "- GPT (Generative Pre-trained Transformer): 자연어 이해 및 생성 모델.",
        "- Residual Neural Network (ResNet): 이미지 인식 등 심층 학습에서 층 깊이 문제 해결.",
        "- WaveNet: 음성 합성 및 오디오 생성 모델."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Generative pre-trained transformers (GPT)",
          "textKo": "Generative pre-trained transformers (GPT)",
          "text": "Generative pre-trained transformers (GPT)"
        },
        {
          "key": "B",
          "textEn": "Residual neural network",
          "textKo": "Residual neural network",
          "text": "Residual neural network"
        },
        {
          "key": "C",
          "textEn": "Support vector machine",
          "textKo": "Support vector machine",
          "text": "Support vector machine"
        },
        {
          "key": "D",
          "textEn": "WaveNet",
          "textKo": "WaveNet",
          "text": "WaveNet"
        }
      ],
      "answerKey": "A",
      "answerText": "Generative pre-trained transformers (GPT)"
    },
    {
      "id": 36,
      "sourceNumber": 36,
      "title": "Question 36",
      "promptKo": "회사가 객체 탐지를 위한 딥러닝 모델을 구축하고 프로덕션에 배포했습니다.\n모델이 새로운 이미지를 분석하여 객체를 식별할 때 어떤 AI 프로세스가 수행됩니까?",
      "promptEn": "A company built a deep learning model for object detection and deployed the model to production.\nWhich AI process occurs when the model analyzes a new image to identify objects?",
      "explanation": [
        "- Inference(추론): 학습이 완료된 모델을 사용하여 새로운 데이터에 대한 예측을 수행."
      ],
      "wrongExplanations": [
        "- A -> Training: 모델 학습 단계, 새로운 이미지 예측과 관련 없음.",
        "- C -> Model deployment: 모델 배포 단계, 실제 이미지 분석과 직접 관련 없음.",
        "- D -> Bias correction: 모델 편향 조정, 객체 식별과 직접 관련 없음."
      ],
      "glossary": [
        "- Inference: 학습된 모델을 사용하여 입력 데이터에 대한 결과를 생성하는 과정.",
        "- Deployment: 학습된 모델을 실제 서비스 환경에 배포하는 과정."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Training",
          "textKo": "학습 (Training)",
          "text": "Training"
        },
        {
          "key": "B",
          "textEn": "Inference",
          "textKo": "추론 (Inference)",
          "text": "Inference"
        },
        {
          "key": "C",
          "textEn": "Model deployment",
          "textKo": "모델 배포 (Model deployment)",
          "text": "Model deployment"
        },
        {
          "key": "D",
          "textEn": "Bias correction",
          "textKo": "편향 보정 (Bias correction)",
          "text": "Bias correction"
        }
      ],
      "answerKey": "B",
      "answerText": "Inference"
    },
    {
      "id": 37,
      "sourceNumber": 37,
      "title": "Question 37",
      "promptKo": "AI 실무자가 다양한 직업을 가진 인간 이미지 생성 모델을 만들고 있습니다.\n입력 데이터가 편향되어 있고 특정 속성이 이미지 생성에 영향을 미쳐 모델 편향을 유발함을 발견했습니다.\n어떤 기법이 문제를 해결할 수 있습니까?",
      "promptEn": "An AI practitioner is building a model to generate images of humans in various professions. The AI practitioner discovered that the input data is biased and that specific attributes affect the image generation and create bias in the model.\nWhich technique will solve the problem?",
      "explanation": [
        "- Data augmentation: 데이터 부족/편향 문제 해결 -> 다양한 샘플 생성 -> 모델 편향 감소."
      ],
      "wrongExplanations": [
        "- B -> 모니터링만으로 편향 제거 불가, 관찰용.",
        "- C -> RAG: 정보 검색 기반 텍스트 생성, 이미지 편향과 관련 없음.",
        "- D -> Watermark detection: 이미지 위변조 검출, 편향 해결과 관련 없음."
      ],
      "glossary": [
        "- Data Augmentation: 학습 데이터를 변형하여 다양성을 증가시키는 기법.",
        "- Bias: 모델이 특정 클래스나 속성에 대해 과도하게 편향되는 현상."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Data augmentation for imbalanced classes",
          "textKo": "불균형 클래스에 대한 데이터 증강",
          "text": "Data augmentation for imbalanced classes"
        },
        {
          "key": "B",
          "textEn": "Model monitoring for class distribution",
          "textKo": "클래스 분포 모니터링",
          "text": "Model monitoring for class distribution"
        },
        {
          "key": "C",
          "textEn": "Retrieval Augmented Generation (RAG)",
          "textKo": "RAG(정보 검색 기반 생성)",
          "text": "Retrieval Augmented Generation (RAG)"
        },
        {
          "key": "D",
          "textEn": "Watermark detection for images",
          "textKo": "이미지 워터마크 감지",
          "text": "Watermark detection for images"
        }
      ],
      "answerKey": "A",
      "answerText": "Data augmentation for imbalanced classes"
    },
    {
      "id": 38,
      "sourceNumber": 38,
      "title": "Question 38",
      "promptKo": "회사가 Amazon Bedrock에서 Amazon Titan FM을 구현하고 있습니다.\n회사 고유의 프라이빗 데이터를 사용해 모델을 보강해야 합니다.\n어떤 솔루션이 이 요구사항을 충족합니까?",
      "promptEn": "A company is implementing the Amazon Titan foundation model (FM) by using Amazon Bedrock. The company needs to supplement the model by using relevant data from the company's private data sources.\nWhich solution will meet this requirement?",
      "explanation": [
        "- Knowledge base를 사용하면 사내 데이터 기반으로 모델 보강 가능."
      ],
      "wrongExplanations": [
        "- A -> 다른 FM 사용: 기존 FM을 보강하는 해결책 아님.",
        "- B -> Temperature: 출력 다양성 제어, 데이터 보강과 관련 없음.",
        "- D -> Invocation logging: 호출 기록, 데이터 보강과 관련 없음."
      ],
      "glossary": [
        "- Knowledge Base: 모델이 참고할 수 있는 추가 데이터 저장소.",
        "- Temperature: 생성 모델 출력의 확률 분포 조정 파라미터."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use a different FM",
          "textKo": "다른 FM 사용",
          "text": "Use a different FM"
        },
        {
          "key": "B",
          "textEn": "Choose a lower temperature value",
          "textKo": "낮은 온도 값 선택",
          "text": "Choose a lower temperature value"
        },
        {
          "key": "C",
          "textEn": "Create an Amazon Bedrock knowledge base",
          "textKo": "Amazon Bedrock 지식 베이스 생성",
          "text": "Create an Amazon Bedrock knowledge base"
        },
        {
          "key": "D",
          "textEn": "Enable model invocation logging",
          "textKo": "모델 호출 로깅 활성화",
          "text": "Enable model invocation logging"
        }
      ],
      "answerKey": "C",
      "answerText": "Create an Amazon Bedrock knowledge base"
    },
    {
      "id": 39,
      "sourceNumber": 39,
      "title": "Question 39",
      "promptKo": "의료 회사가 진단 목적으로 FM을 커스터마이징하고 있습니다.\n규제 요구사항을 충족하기 위해 모델이 투명하고 설명 가능해야 합니다.\n어떤 솔루션이 이 요구사항을 충족합니까?",
      "promptEn": "A medical company is customizing a foundation model (FM) for diagnostic purposes. The company needs the model to be transparent and explainable to meet regulatory requirements.\nWhich solution will meet these requirements?",
      "explanation": [
        "- SageMaker Clarify: 모델 편향, 설명 가능성, 투명성 보고용 -> 규제 준수 가능."
      ],
      "wrongExplanations": [
        "- A -> Inspector: 보안 취약점 점검, 모델 설명과 관련 없음.",
        "- C -> Macie: 데이터 보호, 투명성/설명성 제공 아님.",
        "- D -> Rekognition: 이미지 라벨링, 규제 준수 설명과 직접 관련 없음."
      ],
      "glossary": [
        "- SageMaker Clarify: 모델 편향 모니터링 및 설명 가능성 제공 도구.",
        "- Transparency/Explainability: 모델이 어떻게 결론에 도달했는지 이해 가능하도록 만드는 능력."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Configure the security and compliance by using Amazon Inspector",
          "textKo": "Amazon Inspector로 보안/컴플라이언스 구성",
          "text": "Configure the security and compliance by using Amazon Inspector"
        },
        {
          "key": "B",
          "textEn": "Generate simple metrics, reports, and examples by using Amazon SageMaker Clarify",
          "textKo": "Amazon SageMaker Clarify로 지표, 보고서, 예제 생성",
          "text": "Generate simple metrics, reports, and examples by using Amazon SageMaker Clarify"
        },
        {
          "key": "C",
          "textEn": "Encrypt and secure training data by using Amazon Macie",
          "textKo": "Amazon Macie로 학습 데이터 암호화 및 보호",
          "text": "Encrypt and secure training data by using Amazon Macie"
        },
        {
          "key": "D",
          "textEn": "Gather more data. Use Amazon Rekognition to add custom labels to the data",
          "textKo": "Amazon Rekognition으로 데이터에 커스텀 라벨 추가",
          "text": "Gather more data. Use Amazon Rekognition to add custom labels to the data"
        }
      ],
      "answerKey": "B",
      "answerText": "Generate simple metrics, reports, and examples by using Amazon SageMaker Clarify"
    },
    {
      "id": 40,
      "sourceNumber": 40,
      "title": "Question 40",
      "promptKo": "회사가 고객 질문에 답하는 대화형 챗봇을 배포하려고 합니다.\n챗봇은 SageMaker JumpStart 파인튜닝 모델 기반이며, 애플리케이션은 여러 규제 프레임워크를 준수해야 합니다.\n어떤 기능에서 규제 준수를 증명할 수 있습니까? (두 가지 선택)",
      "promptEn": "A company wants to deploy a conversational chatbot to answer customer questions. The chatbot is based on a fine-tuned Amazon SageMaker JumpStart model. The application must comply with multiple regulatory frameworks.\nWhich capabilities can the company show compliance for? (Choose two.)",
      "explanation": [
        "- B: Threat detection -> 보안 규제 준수 가능.",
        "- C: Data protection -> 개인정보/데이터 보호 규제 준수 가능."
      ],
      "wrongExplanations": [
        "- A -> Auto scaling: 성능 향상, 규제 준수 아님.",
        "- D -> 비용 최적화: 경제적 효율성, 규제 준수와 직접 관련 없음.",
        "- E -> 마이크로서비스 아키텍처: 설계/유연성 관련, 규제 준수 아님."
      ],
      "glossary": [
        "- Threat Detection: 시스템 내 악성 행위/위협 탐지.",
        "- Data Protection: 개인정보 및 민감 데이터 보호, 규제 준수 핵심.",
        "- Auto Scaling: 필요에 따라 서버/모델 엔드포인트 확장."
      ],
      "type": "multi-select",
      "options": [
        {
          "key": "A",
          "textEn": "Auto scaling inference endpoints",
          "textKo": "자동 확장 추론 엔드포인트",
          "text": "Auto scaling inference endpoints"
        },
        {
          "key": "B",
          "textEn": "Threat detection",
          "textKo": "위협 탐지",
          "text": "Threat detection"
        },
        {
          "key": "C",
          "textEn": "Data protection",
          "textKo": "데이터 보호",
          "text": "Data protection"
        },
        {
          "key": "D",
          "textEn": "Cost optimization",
          "textKo": "비용 최적화",
          "text": "Cost optimization"
        },
        {
          "key": "E",
          "textEn": "Loosely coupled microservices",
          "textKo": "느슨하게 결합된 마이크로서비스",
          "text": "Loosely coupled microservices"
        }
      ],
      "answerKeys": [
        "B",
        "C"
      ],
      "requiredSelections": 2
    },
    {
      "id": 41,
      "sourceNumber": 41,
      "title": "Question 41",
      "promptKo": "회사가 **파운데이션 모델(FM)**을 학습하고 있습니다.\n회사는 모델의 정확도를 특정 허용 수준까지 높이길 원합니다.\n어떤 방법이 요구 사항을 충족합니까?",
      "promptEn": "A company is training a foundation model (FM). The company wants to increase the accuracy of the model up to a specific acceptance level.\nWhich solution will meet these requirements?",
      "explanation": [
        "- 에포크 수를 늘리면 모델이 데이터셋을 반복 학습하게 되어 정확도가 향상될 가능성이 높음."
      ],
      "wrongExplanations": [
        "- A -> 배치 크기 감소: 학습 안정성에는 영향이 있지만 정확도 향상과 직접적 관련 없음.",
        "- C -> 에포크 감소: 학습 횟수가 줄어 정확도 향상과 반대.",
        "- D -> Temperature: 생성 모델 출력 다양성 조절용, 정확도 향상과 무관."
      ],
      "glossary": [
        "- Epoch: 전체 학습 데이터셋을 모델이 한 번 학습하는 주기.",
        "- Batch size: 한 번에 모델로 전달되는 학습 데이터 샘플 수.",
        "- Temperature: 생성 모델에서 출력 확률 분포의 다양성을 조절하는 파라미터."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Decrease the batch size",
          "textKo": "배치 크기 감소",
          "text": "Decrease the batch size"
        },
        {
          "key": "B",
          "textEn": "Increase the epochs",
          "textKo": "에포크 증가",
          "text": "Increase the epochs"
        },
        {
          "key": "C",
          "textEn": "Decrease the epochs",
          "textKo": "에포크 감소",
          "text": "Decrease the epochs"
        },
        {
          "key": "D",
          "textEn": "Increase the temperature parameter",
          "textKo": "온도 파라미터 증가",
          "text": "Increase the temperature parameter"
        }
      ],
      "answerKey": "B",
      "answerText": "Increase the epochs"
    },
    {
      "id": 42,
      "sourceNumber": 42,
      "title": "Question 42",
      "promptKo": "회사가 대형 언어 모델(LLM) 기반 Q&A 챗봇을 구축하고 있습니다.\n회사는 고객 질문에 답변하는 과정에서 콜센터 직원이 수행해야 하는 작업 수를 줄이길 원합니다.\n이 챗봇의 효과를 평가할 때 어떤 비즈니스 목표를 사용해야 할까요?",
      "promptEn": "A company is building a large language model (LLM) question answering chatbot. The company wants to decrease the number of actions call center employees need to take to respond to customer questions.\nWhich business objective should the company use to evaluate the effect of the LLM chatbot?",
      "explanation": [
        "- Average call duration: 콜센터 직원의 작업을 줄이면 통화 시간 단축 -> LLM 챗봇 효과 평가에 적합."
      ],
      "wrongExplanations": [
        "- A -> 웹사이트 참여율: 콜센터 효율성과 관련 없음.",
        "- C -> CSR: 사회적 책임과 직접 관련 없음.",
        "- D -> 규제 준수: 규제 준수는 챗봇 성능과 직접적 평가 지표 아님."
      ],
      "glossary": [
        "- Average call duration: 고객 문의에 소요되는 평균 통화 시간.",
        "- LLM: 대형 언어 모델(Large Language Model)."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Website engagement rate",
          "textKo": "웹사이트 참여율",
          "text": "Website engagement rate"
        },
        {
          "key": "B",
          "textEn": "Average call duration",
          "textKo": "평균 통화 시간",
          "text": "Average call duration"
        },
        {
          "key": "C",
          "textEn": "Corporate social responsibility",
          "textKo": "기업의 사회적 책임",
          "text": "Corporate social responsibility"
        },
        {
          "key": "D",
          "textEn": "Regulatory compliance",
          "textKo": "규제 준수",
          "text": "Regulatory compliance"
        }
      ],
      "answerKey": "B",
      "answerText": "Average call duration"
    },
    {
      "id": 43,
      "sourceNumber": 43,
      "title": "Question 43",
      "promptKo": "Amazon SageMaker Clarify가 제공하는 기능은 무엇입니까?",
      "promptEn": "Which functionality does Amazon SageMaker Clarify provide?",
      "explanation": [
        "- SageMaker Clarify는 데이터 준비 및 모델 학습 단계에서 편향(Bias) 탐지 기능 제공."
      ],
      "wrongExplanations": [
        "- A -> RAG 통합: Clarify 기능 아님.",
        "- B -> 운영 품질 모니터링: Clarify는 모델 평가 전용이 아님.",
        "- C -> 모델 문서화: Clarify의 주 기능 아님."
      ],
      "glossary": [
        "- Bias(편향): 모델 학습 데이터가 특정 그룹이나 속성에 편중되어 학습 결과에 영향을 주는 현상.",
        "- SageMaker Clarify: ML 모델의 편향 탐지 및 설명 가능성을 지원하는 AWS 서비스."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Integrates a Retrieval Augmented Generation (RAG) workflow",
          "textKo": "RAG 워크플로 통합",
          "text": "Integrates a Retrieval Augmented Generation (RAG) workflow"
        },
        {
          "key": "B",
          "textEn": "Monitors the quality of ML models in production",
          "textKo": "ML 모델의 운영 품질 모니터링",
          "text": "Monitors the quality of ML models in production"
        },
        {
          "key": "C",
          "textEn": "Documents critical details about ML models",
          "textKo": "ML 모델의 중요 세부 정보 문서화",
          "text": "Documents critical details about ML models"
        },
        {
          "key": "D",
          "textEn": "Identifies potential bias during data preparation",
          "textKo": "데이터 준비 단계에서 잠재적 편향 식별",
          "text": "Identifies potential bias during data preparation"
        }
      ],
      "answerKey": "D",
      "answerText": "Identifies potential bias during data preparation"
    },
    {
      "id": 44,
      "sourceNumber": 44,
      "title": "Question 44",
      "promptKo": "회사가 특정 상품의 가격을 예측하는 새 모델을 개발하고 있습니다.\n모델은 학습 데이터셋에서 성능이 우수했지만, 운영 환경에 배포했을 때 성능이 크게 감소했습니다.\n이 문제를 완화하기 위해 무엇을 해야 합니까?",
      "promptEn": "A company is developing a new model to predict the prices of specific items. The model performed well on the training dataset. When the company deployed the model to production, the model's performance decreased significantly.\nWhat should the company do to mitigate this problem?",
      "explanation": [
        "- Increase training data -> 과적합(overfitting) 문제 완화, 일반화 성능 향상."
      ],
      "wrongExplanations": [
        "- A -> 데이터 양 감소: 과적합 심화, 성능 악화.",
        "- B -> 하이퍼파라미터 추가: 문제 해결 가능성 낮음, 데이터 부족이 핵심.",
        "- D -> 학습 시간 증가: 학습 데이터가 부족하면 과적합 문제만 심화됨."
      ],
      "glossary": [
        "- Overfitting(과적합): 모델이 학습 데이터에는 잘 맞지만, 새로운 데이터에서는 성능이 떨어지는 현상.",
        "- Generalization(일반화): 학습한 모델이 새로운 데이터에서도 잘 작동하는 능력."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Reduce the volume of data that is used in training",
          "textKo": "학습 데이터 양을 줄이기",
          "text": "Reduce the volume of data that is used in training"
        },
        {
          "key": "B",
          "textEn": "Add hyperparameters to the model",
          "textKo": "모델에 하이퍼파라미터 추가",
          "text": "Add hyperparameters to the model"
        },
        {
          "key": "C",
          "textEn": "Increase the volume of data that is used in training",
          "textKo": "학습 데이터 양을 늘리기",
          "text": "Increase the volume of data that is used in training"
        },
        {
          "key": "D",
          "textEn": "Increase the model training time",
          "textKo": "모델 학습 시간 늘리기",
          "text": "Increase the model training time"
        }
      ],
      "answerKey": "C",
      "answerText": "Increase the volume of data that is used in training"
    },
    {
      "id": 45,
      "sourceNumber": 45,
      "title": "Question 45",
      "promptKo": "전자상거래 회사가 상품에 대한 고객 리뷰를 기반으로 고객 감정을 분석하는 솔루션을 구축하고자 합니다.\n이 요구사항을 충족하는 AWS 서비스는 무엇입니까? (2개 선택)",
      "promptEn": "An ecommerce company wants to build a solution to determine customer sentiments based on written customer reviews of products.\nWhich AWS services meet these requirements? (Choose two.)",
      "explanation": [
        "- B -> Amazon Comprehend: 텍스트 기반 감정 분석, 자연어 처리(NLP) 기능 제공.",
        "- D -> Amazon Bedrock: LLM/AI 모델 사용 가능, 맞춤형 감정 분석 모델 구현 가능."
      ],
      "wrongExplanations": [
        "- A -> Lex: 대화형 챗봇 구축용, 감정 분석 전용 아님.",
        "- C -> Polly: 텍스트를 음성으로 변환, 감정 분석 기능 없음.",
        "- E -> Rekognition: 이미지/영상 분석, 텍스트 감정 분석 불가."
      ],
      "glossary": [
        "- Sentiment Analysis(감정 분석): 텍스트에서 긍정, 부정, 중립 등의 감정을 식별하는 기술.",
        "- Amazon Comprehend: AWS NLP 서비스, 감정 분석, 개체 인식, 언어 감지 등 제공.",
        "- Amazon Bedrock: AWS에서 제공하는 Foundation Model 서비스, 맞춤형 AI 모델 구축 가능."
      ],
      "type": "multi-select",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Lex",
          "textKo": "Amazon Lex",
          "text": "Amazon Lex"
        },
        {
          "key": "B",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        },
        {
          "key": "C",
          "textEn": "Amazon Polly",
          "textKo": "Amazon Polly",
          "text": "Amazon Polly"
        },
        {
          "key": "D",
          "textEn": "Amazon Bedrock",
          "textKo": "Amazon Bedrock",
          "text": "Amazon Bedrock"
        },
        {
          "key": "E",
          "textEn": "Amazon Rekognition",
          "textKo": "Amazon Rekognition",
          "text": "Amazon Rekognition"
        }
      ],
      "answerKeys": [
        "B",
        "D"
      ],
      "requiredSelections": 2
    },
    {
      "id": 46,
      "sourceNumber": 46,
      "title": "Question 46",
      "promptKo": "회사가 PDF로 저장된 제품 매뉴얼을 기반으로 Amazon Bedrock LLM 챗봇을 개발하고자 합니다.\n가장 비용 효율적인 솔루션은 무엇입니까?",
      "promptEn": "A company wants to use large language models (LLMs) with Amazon Bedrock to develop a chat interface for the company's product manuals. The manuals are stored as PDF files.\nWhich solution meets these requirements MOST cost-effectively?",
      "explanation": [
        "- Bedrock Knowledge Base를 사용하면 PDF 문서를 참조로 활용 가능 -> 비용 효율적"
      ],
      "wrongExplanations": [
        "- A -> 단일 PDF만 사용, 정보 제한적",
        "- B -> 모든 PDF를 프롬프트에 추가 -> 비용 및 처리 시간 증가",
        "- C -> 모든 문서로 Fine-tuning -> 시간&middot;비용 과다",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Knowledge Base: LLM이 참조 가능한 외부 데이터 저장소",
        "- Prompt Engineering: 원하는 LLM 출력 생성 위해 입력 설계"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use prompt engineering to add one PDF file as context to the user prompt when the prompt is submitted to Amazon Bedrock.",
          "textKo": "프롬프트 엔지니어링을 사용하여 단일 PDF를 사용자 프롬프트 컨텍스트로 추가",
          "text": "Use prompt engineering to add one PDF file as context to the user prompt when the prompt is submitted to Amazon Bedrock."
        },
        {
          "key": "B",
          "textEn": "Use prompt engineering to add all the PDF files as context to the user prompt when the prompt is submitted to Amazon Bedrock.",
          "textKo": "프롬프트 엔지니어링을 사용하여 모든 PDF를 사용자 프롬프트 컨텍스트로 추가",
          "text": "Use prompt engineering to add all the PDF files as context to the user prompt when the prompt is submitted to Amazon Bedrock."
        },
        {
          "key": "C",
          "textEn": "Use all the PDF documents to fine-tune a model with Amazon Bedrock. Use the fine-tuned model to process user prompts.",
          "textKo": "모든 PDF로 모델을 파인튜닝 후 프롬프트 처리",
          "text": "Use all the PDF documents to fine-tune a model with Amazon Bedrock. Use the fine-tuned model to process user prompts."
        },
        {
          "key": "D",
          "textEn": "Upload PDF documents to an Amazon Bedrock knowledge base. Use the knowledge base to provide context when users submit prompts to Amazon Bedrock.",
          "textKo": "PDF 문서를 Amazon Bedrock 지식 베이스에 업로드하여 사용자 프롬프트 시 참조",
          "text": "Upload PDF documents to an Amazon Bedrock knowledge base. Use the knowledge base to provide context when users submit prompts to Amazon Bedrock."
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "D",
      "answerText": "Upload PDF documents to an Amazon Bedrock knowledge base. Use the knowledge base to provide context when users submit prompts to Amazon Bedrock."
    },
    {
      "id": 47,
      "sourceNumber": 47,
      "title": "Question 47",
      "promptKo": "소셜 미디어 회사가 LLM을 콘텐츠 모더레이션에 사용하고자 합니다.\nLLM 출력에서 특정 그룹이나 개인에 대한 편향/차별 여부를 최소한의 관리 노력으로 평가하려면 어떤 데이터 소스를 사용해야 할까요?",
      "promptEn": "A social media company wants to use a large language model (LLM) for content moderation. The company wants to evaluate the LLM outputs for bias and potential discrimination against specific groups or individuals.\nWhich data source should the company use to evaluate the LLM outputs with the LEAST administrative effort?",
      "explanation": [
        "- Benchmark Dataset: 이미 검증된 데이터셋 -> 평가 자동화 가능, 행정 부담 최소"
      ],
      "wrongExplanations": [
        "- A -> 실제 사용자 콘텐츠 -> 전처리 필요, 부담 큼",
        "- B -> 로그 -> 제한적, 편향 분석 어렵고 행정 부담 &uarr;",
        "- C -> 가이드라인 -> 데이터 아님, 직접 평가 불가",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Benchmark Dataset: 성능 평가용 사전 검증 데이터",
        "- Bias Evaluation: 모델 출력에서 편향 평가"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "User-generated content",
          "textKo": "사용자 생성 콘텐츠",
          "text": "User-generated content"
        },
        {
          "key": "B",
          "textEn": "Moderation logs",
          "textKo": "모더레이션 로그",
          "text": "Moderation logs"
        },
        {
          "key": "C",
          "textEn": "Content moderation guidelines",
          "textKo": "콘텐츠 모더레이션 가이드라인",
          "text": "Content moderation guidelines"
        },
        {
          "key": "D",
          "textEn": "Benchmark datasets",
          "textKo": "벤치마크 데이터셋",
          "text": "Benchmark datasets"
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "D",
      "answerText": "Benchmark datasets"
    },
    {
      "id": 48,
      "sourceNumber": 48,
      "title": "Question 48",
      "promptKo": "회사가 사전 학습된 생성형 AI 모델을 마케팅 캠페인 콘텐츠 생성에 사용하려 합니다.\n생성된 콘텐츠가 브랜드 톤과 메시지 요구사항에 부합하도록 하는 방법은 무엇입니까?",
      "promptEn": "A company wants to use a pre-trained generative AI model to generate content for its marketing campaigns. The company needs to ensure that the generated content aligns with the company's brand voice and messaging requirements.",
      "explanation": [
        "- 효과적인 프롬프트 설계 -> 브랜드 톤 준수"
      ],
      "wrongExplanations": [
        "- A/B/D -> 구조/데이터 변경, 브랜드 톤과 직접적 연관 없음",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Prompt Engineering: 원하는 출력 유도 위해 LLM 입력 설계",
        "- Brand Voice: 기업의 일관된 커뮤니케이션 스타일"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Optimize the model's architecture and hyperparameters to improve the model's overall performance.",
          "textKo": "모델 아키텍처 및 하이퍼파라미터 최적화",
          "text": "Optimize the model's architecture and hyperparameters to improve the model's overall performance."
        },
        {
          "key": "B",
          "textEn": "Increase the model's complexity by adding more layers to the model's architecture.",
          "textKo": "모델에 레이어 추가하여 복잡도 증가",
          "text": "Increase the model's complexity by adding more layers to the model's architecture."
        },
        {
          "key": "C",
          "textEn": "Create effective prompts that provide clear instructions and context to guide the model's generation.",
          "textKo": "명확한 지침과 컨텍스트를 제공하는 효과적인 프롬프트 생성",
          "text": "Create effective prompts that provide clear instructions and context to guide the model's generation."
        },
        {
          "key": "D",
          "textEn": "Select a large, diverse dataset to pre-train a new generative model.",
          "textKo": "대규모 다양 데이터셋으로 새로운 모델 사전 학습",
          "text": "Select a large, diverse dataset to pre-train a new generative model."
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "C",
      "answerText": "Create effective prompts that provide clear instructions and context to guide the model's generation."
    },
    {
      "id": 49,
      "sourceNumber": 49,
      "title": "Question 49",
      "promptKo": "대출 회사가 생성형 AI를 이용해 신규 신청자에게 비즈니스 기준에 따른 할인 혜택을 제공하고자 합니다.\n편향 최소화 및 책임 있는 AI 사용을 위해 어떤 조치를 취해야 합니까? (2개 선택)",
      "promptEn": "A loan company is building a generative AI-based solution to offer new applicants discounts based on specific business criteria. The company wants to build and use an AI model responsibly to minimize bias that could negatively affect some customers.\nWhich actions should the company take to meet these requirements? (Choose two.)",
      "explanation": [
        "- A -> 데이터 불균형/격차 감지 -> 편향 최소화",
        "- C -> 모델 평가 -> 투명성 확보"
      ],
      "wrongExplanations": [
        "- B -> 실행 빈도 -> 편향과 직접 관련 없음",
        "- D -> ROUGE -> 텍스트 요약 평가용, 정확도 100% 불가",
        "- E -> 추론 시간 -> 성능 기준, 편향과 무관"
      ],
      "glossary": [
        "- Bias Detection: 데이터/모델 출력에서 편향 식별",
        "- Transparency: 모델 의사결정 과정 공개 및 이해 가능성"
      ],
      "type": "multi-select",
      "options": [
        {
          "key": "A",
          "textEn": "Detect imbalances or disparities in the data.",
          "textKo": "데이터 불균형/격차 감지",
          "text": "Detect imbalances or disparities in the data."
        },
        {
          "key": "B",
          "textEn": "Ensure that the model runs frequently.",
          "textKo": "모델 실행 빈도 증가",
          "text": "Ensure that the model runs frequently."
        },
        {
          "key": "C",
          "textEn": "Evaluate the model's behavior so that the company can provide transparency to stakeholders.",
          "textKo": "모델 동작 평가 및 투명성 제공",
          "text": "Evaluate the model's behavior so that the company can provide transparency to stakeholders."
        },
        {
          "key": "D",
          "textEn": "Use the Recall-Oriented Understudy for Gisting Evaluation (ROUGE) technique to ensure that the model is 100% accurate.",
          "textKo": "ROUGE 기법 사용하여 정확도 100% 보장",
          "text": "Use the Recall-Oriented Understudy for Gisting Evaluation (ROUGE) technique to ensure that the model is 100% accurate."
        },
        {
          "key": "E",
          "textEn": "Ensure that the model's inference time is within the accepted limits.",
          "textKo": "추론 시간 제한 준수",
          "text": "Ensure that the model's inference time is within the accepted limits."
        }
      ],
      "answerKeys": [
        "A",
        "C"
      ],
      "requiredSelections": 2
    },
    {
      "id": 50,
      "sourceNumber": 50,
      "title": "Question 50",
      "promptKo": "회사가 내부 문서 요약을 위해 Bedrock 기본 모델을 사용 중이며, 요약 품질 향상을 위해 커스텀 모델을 학습했습니다.\n커스텀 모델을 Bedrock을 통해 사용하려면 어떤 조치를 취해야 합니까?",
      "promptEn": "A company is using an Amazon Bedrock base model to summarize documents for an internal use case. The company trained a custom model to improve the summarization quality.\nWhich action must the company take to use the custom model through Amazon Bedrock?",
      "explanation": [
        "- Bedrock에서 커스텀 모델 사용 시 -> 접근 권한 부여 필요"
      ],
      "wrongExplanations": [
        "- A -> 성능 관련 옵션, 필수 아님",
        "- B/C -> SageMaker 관련, Bedrock 직접 사용과 무관",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Amazon Bedrock: AWS에서 제공하는 사전 학습 모델 기반 AI 서비스",
        "- Provisioned Throughput: 예측 처리 속도 보장 서비스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Purchase Provisioned Throughput for the custom model.",
          "textKo": "Provisioned Throughput 구매",
          "text": "Purchase Provisioned Throughput for the custom model."
        },
        {
          "key": "B",
          "textEn": "Deploy the custom model in an Amazon SageMaker endpoint for real-time inference.",
          "textKo": "SageMaker Endpoint에 배포",
          "text": "Deploy the custom model in an Amazon SageMaker endpoint for real-time inference."
        },
        {
          "key": "C",
          "textEn": "Register the model with the Amazon SageMaker Model Registry.",
          "textKo": "SageMaker Model Registry 등록",
          "text": "Register the model with the Amazon SageMaker Model Registry."
        },
        {
          "key": "D",
          "textEn": "Grant access to the custom model in Amazon Bedrock.",
          "textKo": "Bedrock에서 모델 접근 권한 부여",
          "text": "Grant access to the custom model in Amazon Bedrock."
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "D",
      "answerText": "Grant access to the custom model in Amazon Bedrock."
    },
    {
      "id": 51,
      "sourceNumber": 51,
      "title": "Question 51",
      "promptKo": "회사가 내부 사용을 위해 Amazon Bedrock 모델을 선택해야 합니다.\n직원들이 선호하는 스타일로 응답을 생성하는 모델을 식별해야 합니다.\n이 요구사항을 충족하려면 무엇을 해야 합니까?",
      "promptEn": "A company needs to choose a model from Amazon Bedrock to use internally. The company must identify a model that generates responses in a style that the company's employees prefer.\nWhat should the company do to meet these requirements?",
      "explanation": [
        "- 인간 평가자(Human-in-the-loop) + 커스텀 프롬프트 -> 실제 직원 선호 스타일 평가 가능"
      ],
      "wrongExplanations": [
        "- A -> 내장 데이터셋 -> 회사 특화 스타일 평가 불가",
        "- C -> 공개 리더보드 -> 스타일과 무관",
        "- D -> 실행 속도 측정 -> 스타일 평가와 무관",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Human-in-the-loop(HITL): 사람 평가자를 포함한 모델 검증 프로세스",
        "- Custom Prompt Dataset: 조직 특화 평가용 입력 데이터셋"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Evaluate the models by using built-in prompt datasets.",
          "textKo": "내장 프롬프트 데이터셋 사용 평가",
          "text": "Evaluate the models by using built-in prompt datasets."
        },
        {
          "key": "B",
          "textEn": "Evaluate the models by using a human workforce and custom prompt datasets.",
          "textKo": "인간 평가자와 커스텀 프롬프트 데이터셋 사용 평가",
          "text": "Evaluate the models by using a human workforce and custom prompt datasets."
        },
        {
          "key": "C",
          "textEn": "Use public model leaderboards to identify the model.",
          "textKo": "공개 모델 리더보드 확인",
          "text": "Use public model leaderboards to identify the model."
        },
        {
          "key": "D",
          "textEn": "Use the model InvocationLatency runtime metrics in Amazon CloudWatch when trying models.",
          "textKo": "CloudWatch InvocationLatency 메트릭 사용",
          "text": "Use the model InvocationLatency runtime metrics in Amazon CloudWatch when trying models."
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "B",
      "answerText": "Evaluate the models by using a human workforce and custom prompt datasets."
    },
    {
      "id": 52,
      "sourceNumber": 52,
      "title": "Question 52",
      "promptKo": "대학생이 생성형 AI 콘텐츠를 복사하여 에세이를 작성하고 있습니다.\n책임 있는 생성형 AI의 어떤 문제와 관련이 있습니까?",
      "promptEn": "A student at a university is copying content from generative AI to write essays.\nWhich challenge of responsible generative AI does this scenario represent?",
      "explanation": [
        "- AI 생성 콘텐츠 무단 복제 -> 표절 문제"
      ],
      "wrongExplanations": [
        "- A -> 콘텐츠 유해성 문제",
        "- B -> 허위 정보 생성 문제",
        "- D -> 개인정보 침해 문제",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Plagiarism: 타인의 콘텐츠를 무단 복제하거나 표절하는 행위",
        "- Responsible AI: 윤리적&middot;책임 있는 AI 개발 및 사용"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Toxicity",
          "textKo": "유해 콘텐츠(Toxicity)",
          "text": "Toxicity"
        },
        {
          "key": "B",
          "textEn": "Hallucinations",
          "textKo": "환각(Hallucinations)",
          "text": "Hallucinations"
        },
        {
          "key": "C",
          "textEn": "Plagiarism",
          "textKo": "표절(Plagiarism)",
          "text": "Plagiarism"
        },
        {
          "key": "D",
          "textEn": "Privacy",
          "textKo": "개인정보 보호(Privacy)",
          "text": "Privacy"
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "C",
      "answerText": "Plagiarism"
    },
    {
      "id": 53,
      "sourceNumber": 53,
      "title": "Question 53",
      "promptKo": "회사가 자체 LLM을 구축하려고 합니다. 훈련 데이터는 회사의 사내 데이터만 사용하며, 학습 과정의 환경 영향을 최소화하고자 합니다.\nLLM 학습 시 환경 영향이 가장 적은 EC2 인스턴스 유형은 무엇입니까?",
      "promptEn": "A company needs to build its own large language model (LLM) based on only the company's private data. The company is concerned about the environmental effect of the training process.\nWhich Amazon EC2 instance type has the LEAST environmental effect when training LLMs?",
      "explanation": [
        "- EC2 Trn 시리즈 -> LLM 학습 전용, 전력 효율 및 환경 영향 최소화 설계"
      ],
      "wrongExplanations": [
        "- A/B/C -> 일반 컴퓨팅/그래픽/딥러닝 GPU 인스턴스, Trn 대비 에너지 효율 낮음",
        "- E -> 부적절"
      ],
      "glossary": [
        "- EC2 Trn Series: LLM 학습 최적화, 전력 효율 높은 AWS 인스턴스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon EC2 C series",
          "textKo": "C 시리즈",
          "text": "Amazon EC2 C series"
        },
        {
          "key": "B",
          "textEn": "Amazon EC2 G series",
          "textKo": "G 시리즈",
          "text": "Amazon EC2 G series"
        },
        {
          "key": "C",
          "textEn": "Amazon EC2 P series",
          "textKo": "P 시리즈",
          "text": "Amazon EC2 P series"
        },
        {
          "key": "D",
          "textEn": "Amazon EC2 Trn series",
          "textKo": "Trn 시리즈",
          "text": "Amazon EC2 Trn series"
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "D",
      "answerText": "Amazon EC2 Trn series"
    },
    {
      "id": 54,
      "sourceNumber": 54,
      "title": "Question 54",
      "promptKo": "회사가 어린이용 인터랙티브 애플리케이션을 개발하고자 합니다.\n클래식 스토리를 기반으로 새로운 이야기를 생성하며, Bedrock 사용 시 결과와 주제가 어린이에게 적합해야 합니다.\n어떤 서비스/기능이 요구사항을 충족합니까?",
      "promptEn": "A company wants to build an interactive application for children that generates new stories based on classic stories. The company wants to use Amazon Bedrock and needs to ensure that the results and topics are appropriate for children.\nWhich AWS service or feature will meet these requirements?",
      "explanation": [
        "- Guardrails -> 출력 제약, 안전/적합한 콘텐츠 보장"
      ],
      "wrongExplanations": [
        "- A -> 이미지 분석 서비스, 텍스트 적합성 평가 불가",
        "- B -> 실험용 인터페이스, 안전 보장 아님",
        "- D -> 작업 자동화용, 안전성 관련 아님",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Guardrails: LLM 출력 안전성과 규칙 준수를 보장하는 기능",
        "- Amazon Bedrock: 사전 학습 모델 기반 AI 서비스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Rekognition",
          "textKo": "Rekognition",
          "text": "Amazon Rekognition"
        },
        {
          "key": "B",
          "textEn": "Amazon Bedrock playgrounds",
          "textKo": "Bedrock Playgrounds",
          "text": "Amazon Bedrock playgrounds"
        },
        {
          "key": "C",
          "textEn": "Guardrails for Amazon Bedrock",
          "textKo": "Bedrock Guardrails",
          "text": "Guardrails for Amazon Bedrock"
        },
        {
          "key": "D",
          "textEn": "Agents for Amazon Bedrock",
          "textKo": "Bedrock Agents",
          "text": "Agents for Amazon Bedrock"
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "C",
      "answerText": "Guardrails for Amazon Bedrock"
    },
    {
      "id": 55,
      "sourceNumber": 55,
      "title": "Question 55",
      "promptKo": "회사가 기존 데이터를 기반으로 합성 데이터를 생성하는 애플리케이션을 개발하고 있습니다.\n이 요구사항을 충족하는 모델 유형은 무엇입니까?",
      "promptEn": "A company is building an application that needs to generate synthetic data that is based on existing data.\nWhich type of model can the company use to meet this requirement?",
      "explanation": [
        "- GAN -> 기존 데이터 기반 합성 데이터 생성 가능"
      ],
      "wrongExplanations": [
        "- B -> XGBoost -> 결정 트리 기반, 생성 불가",
        "- C -> ResNet -> 이미지 분류용",
        "- D -> WaveNet -> 오디오 생성용",
        "- E -> 부적절"
      ],
      "glossary": [
        "- GAN: Generator와 Discriminator를 경쟁적으로 학습시켜 합성 데이터 생성",
        "- Synthetic Data: 실제 데이터와 유사하지만 인공적으로 생성된 데이터"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Generative adversarial network (GAN)",
          "textKo": "생성적 적대 신경망(GAN)",
          "text": "Generative adversarial network (GAN)"
        },
        {
          "key": "B",
          "textEn": "XGBoost",
          "textKo": "XGBoost",
          "text": "XGBoost"
        },
        {
          "key": "C",
          "textEn": "Residual neural network",
          "textKo": "잔차 신경망(ResNet)",
          "text": "Residual neural network"
        },
        {
          "key": "D",
          "textEn": "WaveNet",
          "textKo": "WaveNet",
          "text": "WaveNet"
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "A",
      "answerText": "Generative adversarial network (GAN)"
    },
    {
      "id": 56,
      "sourceNumber": 56,
      "title": "Question 56",
      "promptKo": "디지털 기기 회사가 메모리 하드웨어에 대한 고객 수요를 예측하고자 합니다.\n회사는 코딩 경험이나 ML 알고리즘 지식이 없으며, 데이터 기반 예측 모델을 개발해야 합니다.\n내부 데이터와 외부 데이터를 분석해야 합니다.\n이 요구사항을 충족하는 솔루션은 무엇입니까?",
      "promptEn": "A digital devices company wants to predict customer demand for memory hardware. The company does not have coding experience or knowledge of ML algorithms and needs to develop a data-driven predictive model. The company needs to perform analysis on internal data and external data.\nWhich solution will meet these requirements?",
      "explanation": [
        "- SageMaker Canvas -> 코딩 필요 없이 GUI로 데이터 선택 및 예측 모델 생성 가능"
      ],
      "wrongExplanations": [
        "- A/B -> 코딩 또는 알고리즘 지식 필요, 비전문가에 적합하지 않음",
        "- C -> Personalize -> 추천 모델 전용, 수요 예측과 무관",
        "- E -> 부적절"
      ],
      "glossary": [
        "- SageMaker Canvas: 코딩 없이 데이터 기반 ML 모델 구축 가능 GUI 툴",
        "- Demand Forecasting: 과거 데이터를 기반으로 미래 수요 예측"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Store the data in Amazon S3. Create ML models and demand forecast predictions by using Amazon SageMaker built-in algorithms that use the data from Amazon S3.",
          "textKo": "S3에 데이터 저장 후 SageMaker 내장 알고리즘 사용",
          "text": "Store the data in Amazon S3. Create ML models and demand forecast predictions by using Amazon SageMaker built-in algorithms that use the data from Amazon S3."
        },
        {
          "key": "B",
          "textEn": "Import the data into Amazon SageMaker Data Wrangler. Create ML models and demand forecast predictions by using SageMaker built-in algorithms.",
          "textKo": "SageMaker Data Wrangler로 데이터 가져오기 후 내장 알고리즘 사용",
          "text": "Import the data into Amazon SageMaker Data Wrangler. Create ML models and demand forecast predictions by using SageMaker built-in algorithms."
        },
        {
          "key": "C",
          "textEn": "Import the data into Amazon SageMaker Data Wrangler. Build ML models and demand forecast predictions by using an Amazon Personalize Trending-Now recipe.",
          "textKo": "Data Wrangler -> Amazon Personalize Trending-Now 사용",
          "text": "Import the data into Amazon SageMaker Data Wrangler. Build ML models and demand forecast predictions by using an Amazon Personalize Trending-Now recipe."
        },
        {
          "key": "D",
          "textEn": "Import the data into Amazon SageMaker Canvas. Build ML models and demand forecast predictions by selecting the values in the data from SageMaker Canvas.",
          "textKo": "SageMaker Canvas -> 데이터 선택하여 모델 구축",
          "text": "Import the data into Amazon SageMaker Canvas. Build ML models and demand forecast predictions by selecting the values in the data from SageMaker Canvas."
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "D",
      "answerText": "Import the data into Amazon SageMaker Canvas. Build ML models and demand forecast predictions by selecting the values in the data from SageMaker Canvas."
    },
    {
      "id": 57,
      "sourceNumber": 57,
      "title": "Question 57",
      "promptKo": "회사가 보안 카메라를 설치하고, ML 모델로 절도 가능성을 평가합니다.\n모델이 특정 인종 그룹의 사람들을 불공정하게 자주 표시한다는 사실을 발견했습니다.\n이 모델 출력에 영향을 주는 편향 유형은 무엇입니까?",
      "promptEn": "A company has installed a security camera. The company uses an ML model to evaluate the security camera footage for potential thefts. The company has discovered that the model disproportionately flags people who are members of a specific ethnic group.\nWhich type of bias is affecting the model output?",
      "explanation": [
        "- 샘플링 편향 -> 데이터 수집 단계에서 특정 그룹이 과대/과소 대표되어 모델 학습에 편향 발생"
      ],
      "wrongExplanations": [
        "- A -> 측정 편향: 측정 도구 오류와 관련",
        "- C -> 관찰자 편향: 관찰자의 주관적 판단으로 발생",
        "- D -> 확증 편향: 기존 믿음에 맞는 데이터만 선택",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Sampling Bias: 학습 데이터가 현실 집단을 공정하게 대표하지 못하는 현상",
        "- Fairness in AI: 모든 그룹에 대해 공정하게 예측하도록 모델 설계"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Measurement bias",
          "textKo": "측정 편향",
          "text": "Measurement bias"
        },
        {
          "key": "B",
          "textEn": "Sampling bias",
          "textKo": "샘플링 편향",
          "text": "Sampling bias"
        },
        {
          "key": "C",
          "textEn": "Observer bias",
          "textKo": "관찰자 편향",
          "text": "Observer bias"
        },
        {
          "key": "D",
          "textEn": "Confirmation bias",
          "textKo": "확증 편향",
          "text": "Confirmation bias"
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "B",
      "answerText": "Sampling bias"
    },
    {
      "id": 58,
      "sourceNumber": 58,
      "title": "Question 58",
      "promptKo": "회사가 고객 서비스 챗봇을 구축하고 있습니다.\n챗봇이 과거 상호작용과 온라인 자료를 학습하여 스스로 응답을 개선하길 원합니다.\n어떤 AI 학습 전략이 이러한 자기 개선(Self-improvement) 능력을 제공합니까?",
      "promptEn": "A company is building a customer service chatbot. The company wants the chatbot to improve its responses by learning from past interactions and online resources.\nWhich AI learning strategy provides this self-improvement capability?",
      "explanation": [
        "- 강화 학습 -> 보상 신호를 기반으로 모델이 행동을 개선하며, 자기 학습 가능"
      ],
      "wrongExplanations": [
        "- A/D -> 지도 학습, 지속적 자기 개선은 제한적",
        "- C -> 군집 분석, 자기 개선 목적 아님",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Reinforcement Learning: 행동에 대해 보상/벌점을 통해 학습",
        "- Self-improvement: 모델이 과거 경험을 활용해 성능 향상"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Supervised learning with a manually curated dataset of good responses and bad responses",
          "textKo": "수동으로 구성된 좋은/나쁜 응답 데이터셋으로 지도 학습",
          "text": "Supervised learning with a manually curated dataset of good responses and bad responses"
        },
        {
          "key": "B",
          "textEn": "Reinforcement learning with rewards for positive customer feedback",
          "textKo": "고객 피드백 기반 보상을 통한 강화 학습",
          "text": "Reinforcement learning with rewards for positive customer feedback"
        },
        {
          "key": "C",
          "textEn": "Unsupervised learning to find clusters of similar customer inquiries",
          "textKo": "유사 문의 클러스터를 찾는 비지도 학습",
          "text": "Unsupervised learning to find clusters of similar customer inquiries"
        },
        {
          "key": "D",
          "textEn": "Supervised learning with a continuously updated FAQ database",
          "textKo": "FAQ 데이터베이스 업데이트 기반 지도 학습",
          "text": "Supervised learning with a continuously updated FAQ database"
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "B",
      "answerText": "Reinforcement learning with rewards for positive customer feedback"
    },
    {
      "id": 59,
      "sourceNumber": 59,
      "title": "Question 59",
      "promptKo": "AI 실무자가 이미지 내 재료 종류를 분류하는 딥러닝 모델을 구축했습니다.\n모델 성능을 측정하려고 합니다.\n어떤 지표가 모델 성능 평가에 적합합니까?",
      "promptEn": "An AI practitioner has built a deep learning model to classify the types of materials in images. The AI practitioner now wants to measure the model performance.\nWhich metric will help the AI practitioner evaluate the performance of the model?",
      "explanation": [
        "- Confusion Matrix -> 분류 모델의 True Positive, False Positive 등 성능 평가 가능"
      ],
      "wrongExplanations": [
        "- B -> Correlation -> 변수 상관 관계, 분류 성능 평가 아님",
        "- C -> R&sup2; -> 회귀 모델 평가 지표",
        "- D -> MSE -> 회귀 모델 오차 지표",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Confusion Matrix: 분류 모델에서 예측 vs 실제 분류 비교 표",
        "- Classification Metrics: Accuracy, Precision, Recall 등 계산 기반"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Confusion matrix",
          "textKo": "혼동 행렬",
          "text": "Confusion matrix"
        },
        {
          "key": "B",
          "textEn": "Correlation matrix",
          "textKo": "상관 행렬",
          "text": "Correlation matrix"
        },
        {
          "key": "C",
          "textEn": "R2 score",
          "textKo": "R&sup2; 점수",
          "text": "R2 score"
        },
        {
          "key": "D",
          "textEn": "Mean squared error (MSE)",
          "textKo": "평균 제곱 오차(MSE)",
          "text": "Mean squared error (MSE)"
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "A",
      "answerText": "Confusion matrix"
    },
    {
      "id": 60,
      "sourceNumber": 60,
      "title": "Question 60",
      "promptKo": "회사가 자연어 질문에 이미지로 응답하는 챗봇을 구축했습니다.\n챗봇이 부적절하거나 원하지 않는 이미지를 반환하지 않도록 보장하고자 합니다.\n어떤 솔루션이 요구사항을 충족합니까?",
      "promptEn": "A company has built a chatbot that can respond to natural language questions with images. The company wants to ensure that the chatbot does not return inappropriate or unwanted images.\nWhich solution will meet these requirements?",
      "explanation": [
        "- Moderation API -> 이미지 및 콘텐츠 안전성, 부적절 여부 필터링 가능"
      ],
      "wrongExplanations": [
        "- B -> 데이터셋 재학습만으로 부적절 이미지 완전 차단 어려움",
        "- C -> 모델 검증 -> 사후 평가, 실시간 방지 불가",
        "- D -> 피드백 -> 반복 학습 가능하지만 즉각적 차단 불가",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Moderation API: 이미지&middot;텍스트 콘텐츠 안전성 검증 및 필터링 서비스",
        "- Content Safety: 부적절, 민감한 콘텐츠 방지 체계"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Implement moderation APIs.",
          "textKo": "콘텐츠 모더레이션 API 구현",
          "text": "Implement moderation APIs."
        },
        {
          "key": "B",
          "textEn": "Retrain the model with a general public dataset.",
          "textKo": "일반 공개 데이터셋으로 모델 재학습",
          "text": "Retrain the model with a general public dataset."
        },
        {
          "key": "C",
          "textEn": "Perform model validation.",
          "textKo": "모델 검증 수행",
          "text": "Perform model validation."
        },
        {
          "key": "D",
          "textEn": "Automate user feedback integration.",
          "textKo": "사용자 피드백 자동 통합",
          "text": "Automate user feedback integration."
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "A",
      "answerText": "Implement moderation APIs."
    },
    {
      "id": 61,
      "sourceNumber": 61,
      "title": "Question 61",
      "promptKo": "AI 실무자가 Amazon Bedrock 기본 모델을 사용하여 고객 서비스 부서의 세션 채팅을 요약하고 있습니다.\n모델 입력 및 출력 데이터를 모니터링하기 위해 **호출 로그(invocation logs)**를 저장하고자 합니다.\n어떤 전략이 적합합니까?",
      "promptEn": "An AI practitioner is using an Amazon Bedrock base model to summarize session chats from the customer service department. The AI practitioner wants to store invocation logs to monitor model input and output data.\nWhich strategy should the AI practitioner use?",
      "explanation": [
        "- Bedrock은 invocation logging 기능을 제공 -> 모델 입력/출력 기록 가능"
      ],
      "wrongExplanations": [
        "- A -> CloudTrail: API 호출 기록, 모델 입력/출력 데이터 저장 불가",
        "- C -> Audit Manager: 감사용, 데이터 모니터링 목적 아님",
        "- D -> EventBridge: 이벤트 트리거 용도, 직접 로그 저장 아님",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Invocation Logs: 모델에 요청을 보낸 입력과 모델이 반환한 출력을 기록한 로그",
        "- Amazon Bedrock: AWS Foundation Model 서비스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Configure AWS CloudTrail as the logs destination for the model.",
          "textKo": "CloudTrail을 로그 대상으로 구성",
          "text": "Configure AWS CloudTrail as the logs destination for the model."
        },
        {
          "key": "B",
          "textEn": "Enable invocation logging in Amazon Bedrock.",
          "textKo": "Amazon Bedrock에서 호출 로깅 활성화",
          "text": "Enable invocation logging in Amazon Bedrock."
        },
        {
          "key": "C",
          "textEn": "Configure AWS Audit Manager as the logs destination for the model.",
          "textKo": "AWS Audit Manager를 로그 대상으로 구성",
          "text": "Configure AWS Audit Manager as the logs destination for the model."
        },
        {
          "key": "D",
          "textEn": "Configure model invocation logging in Amazon EventBridge.",
          "textKo": "EventBridge에서 모델 호출 로깅 구성",
          "text": "Configure model invocation logging in Amazon EventBridge."
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "B",
      "answerText": "Enable invocation logging in Amazon Bedrock."
    },
    {
      "id": 62,
      "sourceNumber": 62,
      "title": "Question 62",
      "promptKo": "회사가 아카이브 데이터를 분석하는 ML 모델을 구축하고 있습니다.\n데이터셋이 수 GB 단위로 크며, 모델 예측 결과를 즉시 확인할 필요는 없습니다.\n어떤 SageMaker 추론 옵션이 적합합니까?",
      "promptEn": "A company is building an ML model to analyze archived data. The company must perform inference on large datasets that are multiple GBs in size. The company does not need to access the model predictions immediately.\nWhich Amazon SageMaker inference option will meet these requirements?",
      "explanation": [
        "- Batch Transform -> 대용량 데이터셋 처리, 즉시 응답 필요 없는 경우 적합"
      ],
      "wrongExplanations": [
        "- B -> Real-time -> 즉시 응답 요구 시 사용, GB 단위 처리 비효율",
        "- C -> Serverless -> 소규모 요청, 대규모 배치 처리 비효율",
        "- D -> Asynchronous -> 실시간 요청 대기, 배치 처리와 목적 다름",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Batch Transform: 한 번에 대규모 데이터셋에 대해 모델 추론 수행",
        "- Inference: 학습된 모델로 입력 데이터에 대한 예측 수행"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Batch transform",
          "textKo": "배치 변환(Batch Transform)",
          "text": "Batch transform"
        },
        {
          "key": "B",
          "textEn": "Real-time inference",
          "textKo": "실시간 추론(Real-time inference)",
          "text": "Real-time inference"
        },
        {
          "key": "C",
          "textEn": "Serverless inference",
          "textKo": "서버리스 추론(Serverless inference)",
          "text": "Serverless inference"
        },
        {
          "key": "D",
          "textEn": "Asynchronous inference",
          "textKo": "비동기 추론(Asynchronous inference)",
          "text": "Asynchronous inference"
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "A",
      "answerText": "Batch transform"
    },
    {
      "id": 63,
      "sourceNumber": 63,
      "title": "Question 63",
      "promptKo": "AI 및 NLP 모델이 텍스트 정보를 더 잘 이해하기 위해 사용하는, 현실 세계 객체와 개념의 수치적 표현을 무엇이라고 합니까?",
      "promptEn": "Which term describes the numerical representations of real-world objects and concepts that AI and natural language processing (NLP) models use to improve understanding of textual information?",
      "explanation": [
        "- Embeddings -> 단어, 문장, 개념을 고차원 벡터로 표현 -> 의미 이해에 도움"
      ],
      "wrongExplanations": [
        "- B -> Tokens -> 단어/문장 단위 분리, 수치 표현 자체 아님",
        "- C -> Models -> 학습된 AI 모델, 수치 표현과 직접 관계 없음",
        "- D -> Binaries -> 컴퓨터 파일 형식",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Embeddings: 단어/문장/개념을 벡터로 표현하여 의미적 유사성 계산 가능",
        "- Tokenization: 텍스트를 모델 입력 단위(토큰)로 분리하는 과정"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Embeddings",
          "textKo": "임베딩(Embeddings)",
          "text": "Embeddings"
        },
        {
          "key": "B",
          "textEn": "Tokens",
          "textKo": "토큰(Tokens)",
          "text": "Tokens"
        },
        {
          "key": "C",
          "textEn": "Models",
          "textKo": "모델(Models)",
          "text": "Models"
        },
        {
          "key": "D",
          "textEn": "Binaries",
          "textKo": "바이너리(Binaries)",
          "text": "Binaries"
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "A",
      "answerText": "Embeddings"
    },
    {
      "id": 64,
      "sourceNumber": 64,
      "title": "Question 64",
      "promptKo": "연구 회사가 Amazon Bedrock FM을 이용해 챗봇을 구현했습니다.\n챗봇은 연구 논문 데이터베이스에서 질문에 대한 답을 검색합니다.\n여러 번 프롬프트 엔지니어링을 시도했지만, 복잡한 과학 용어 때문에 성능이 저하되었습니다.\n챗봇 성능을 향상시키려면 어떻게 해야 합니까?",
      "promptEn": "A research company implemented a chatbot by using a foundation model (FM) from Amazon Bedrock. The chatbot searches for answers to questions from a large database of research papers.\nAfter multiple prompt engineering attempts, the company notices that the FM is performing poorly because of the complex scientific terms in the research papers.\nHow can the company improve the performance of the chatbot?",
      "explanation": [
        "- Domain adaptation -> FM을 특정 전문 용어에 맞게 미세 조정 -> 성능 향상"
      ],
      "wrongExplanations": [
        "- A -> Few-shot -> 프롬프트 기반, 복잡 용어 해결 한계",
        "- C -> 파라미터 변경 -> 근본적 이해 문제 해결 불가",
        "- D -> 데이터 제거 -> 정보 손실, 의미 감소",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Domain Adaptation: 모델을 특정 도메인 데이터에 맞게 미세 조정",
        "- Fine-tuning: 사전 학습된 모델을 특정 태스크/도메인에 맞춰 재학습"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use few-shot prompting to define how the FM can answer the questions.",
          "textKo": "Few-shot 프롬프트 사용",
          "text": "Use few-shot prompting to define how the FM can answer the questions."
        },
        {
          "key": "B",
          "textEn": "Use domain adaptation fine-tuning to adapt the FM to complex scientific terms.",
          "textKo": "도메인 적응(Domain adaptation) 파인튜닝",
          "text": "Use domain adaptation fine-tuning to adapt the FM to complex scientific terms."
        },
        {
          "key": "C",
          "textEn": "Change the FM inference parameters.",
          "textKo": "FM 추론 파라미터 변경",
          "text": "Change the FM inference parameters."
        },
        {
          "key": "D",
          "textEn": "Clean the research paper data to remove complex scientific terms.",
          "textKo": "연구 데이터에서 복잡한 용어 제거",
          "text": "Clean the research paper data to remove complex scientific terms."
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "B",
      "answerText": "Use domain adaptation fine-tuning to adapt the FM to complex scientific terms."
    },
    {
      "id": 65,
      "sourceNumber": 65,
      "title": "Question 65",
      "promptKo": "회사가 Amazon Bedrock에서 LLM을 사용해 감정 분석을 수행하고자 합니다.\n동일한 입력 프롬프트에 대해 일관된 응답을 얻고자 합니다.\n어떤 추론 파라미터 조정이 적합합니까?",
      "promptEn": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company needs the LLM to produce more consistent responses to the same input prompt.\nWhich adjustment to an inference parameter should the company make to meet these requirements?",
      "explanation": [
        "- Temperature -> 확률적 다양성 조절, 낮추면 출력 일관성 증가"
      ],
      "wrongExplanations": [
        "- B -> 높이면 다양성 &uarr;, 일관성 &darr;",
        "- C/D -> 길이 조절, 일관성 직접 영향 없음",
        "- E -> 부적절"
      ],
      "glossary": [
        "- Temperature: LLM 생성 시 샘플링 확률 분포 조정",
        "- Consistency: 동일 입력에 대해 유사한 출력 생성"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Decrease the temperature value.",
          "textKo": "온도 값 감소",
          "text": "Decrease the temperature value."
        },
        {
          "key": "B",
          "textEn": "Increase the temperature value.",
          "textKo": "온도 값 증가",
          "text": "Increase the temperature value."
        },
        {
          "key": "C",
          "textEn": "Decrease the length of output tokens.",
          "textKo": "출력 토큰 길이 감소",
          "text": "Decrease the length of output tokens."
        },
        {
          "key": "D",
          "textEn": "Increase the maximum generation length.",
          "textKo": "최대 생성 길이 증가",
          "text": "Increase the maximum generation length."
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "A",
      "answerText": "Decrease the temperature value."
    },
    {
      "id": 66,
      "sourceNumber": 66,
      "title": "Question 66",
      "promptKo": "회사가 Amazon Bedrock과 Amazon S3에 업로드된 고객 데이터를 사용하여 LLM 애플리케이션을 개발하려고 합니다.\n보안 정책상 각 팀은 자신 팀 고객 데이터만 접근할 수 있습니다.\n어떤 솔루션이 요구사항을 충족합니까?",
      "promptEn": "A company wants to develop a large language model (LLM) application by using Amazon Bedrock and customer data that is uploaded to Amazon S3. The company's security policy states that each team can access data for only the team's own customers.\nWhich solution will meet these requirements?",
      "explanation": [
        "- Bedrock 역할 하나로 모델 사용 가능, 팀별 IAM 폴더 권한으로 최소 권한 준수"
      ],
      "wrongExplanations": [
        "- A -> 역할 다수 관리 복잡",
        "- B -> 요청마다 팀 지정 필요, 보안 취약",
        "- C -> 데이터 삭제 후 접근 -> 불필요한 데이터 처리 발생",
        "- E -> 부적절"
      ],
      "glossary": [
        "- IAM Role: AWS 서비스에 권한을 부여하는 역할",
        "- Principle of Least Privilege: 최소 권한 원칙"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Create an Amazon Bedrock custom service role for each team that has access to only the team's customer data.",
          "textKo": "각 팀별로 Amazon Bedrock 맞춤 서비스 역할 생성, 팀 고객 데이터만 접근 가능",
          "text": "Create an Amazon Bedrock custom service role for each team that has access to only the team's customer data."
        },
        {
          "key": "B",
          "textEn": "Create a custom service role that has Amazon S3 access. Ask teams to specify the customer name on each Amazon Bedrock request.",
          "textKo": "Amazon S3 접근 권한이 있는 단일 맞춤 서비스 역할 생성, Bedrock 요청 시 팀별 고객명 지정",
          "text": "Create a custom service role that has Amazon S3 access. Ask teams to specify the customer name on each Amazon Bedrock request."
        },
        {
          "key": "C",
          "textEn": "Redact personal data in Amazon S3. Update the S3 bucket policy to allow team access to customer data.",
          "textKo": "S3에서 개인정보 삭제, 버킷 정책을 업데이트하여 팀별 데이터 접근 허용",
          "text": "Redact personal data in Amazon S3. Update the S3 bucket policy to allow team access to customer data."
        },
        {
          "key": "D",
          "textEn": "Create one Amazon Bedrock role that has full Amazon S3 access. Create IAM roles for each team that have access to only each team's customer folders.",
          "textKo": "Amazon Bedrock 역할 하나 생성 후 전체 S3 접근, 각 팀별 IAM 역할로 팀 폴더만 접근 허용",
          "text": "Create one Amazon Bedrock role that has full Amazon S3 access. Create IAM roles for each team that have access to only each team's customer folders."
        },
        {
          "key": "E",
          "textEn": "None of the above",
          "textKo": "해당 없음",
          "text": "None of the above"
        }
      ],
      "answerKey": "D",
      "answerText": "Create one Amazon Bedrock role that has full Amazon S3 access. Create IAM roles for each team that have access to only each team's customer folders."
    },
    {
      "id": 67,
      "sourceNumber": 67,
      "title": "Question 67",
      "promptKo": "의료 회사가 Amazon Bedrock에 질병 감지 모델을 배포했습니다.\n- 개인정보 보호 정책 준수를 위해 모델이 응답에 개인 환자 정보를 포함하지 않도록 해야 함\n- 정책 위반 발생 시 알림을 받고 싶음\n어떤 솔루션이 이 요구 사항을 충족합니까?",
      "promptEn": "A medical company deployed a disease detection model on Amazon Bedrock. To comply with privacy policies, the company wants to prevent the model from including personal patient information in its responses. The company also wants to receive notification when policy violations occur.\nWhich solution meets these requirements?",
      "explanation": [
        "- Guardrails -> Bedrock에서 안전한 콘텐츠 제공, 정책 위반 필터링",
        "- CloudWatch 알람 -> 알림 기능 제공"
      ],
      "wrongExplanations": [
        "- A -> Macie는 S3 데이터용, 모델 출력 모니터링에는 부적합",
        "- B -> CloudTrail은 API 호출 기록용, 실시간 필터링 불가",
        "- D -> Model Monitor는 데이터 변화 감지, 민감 데이터 필터링 아님"
      ],
      "glossary": [
        "- Guardrails: LLM 응답 안전성 및 정책 준수 기능",
        "- CloudWatch Alarm: 지정 조건 발생 시 알림"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use Amazon Macie to scan the model's output for sensitive data and set up alerts for potential violations.",
          "textKo": "Amazon Macie를 사용하여 모델 출력의 민감 데이터를 스캔하고 잠재적 위반 알림 설정",
          "text": "Use Amazon Macie to scan the model's output for sensitive data and set up alerts for potential violations."
        },
        {
          "key": "B",
          "textEn": "Configure AWS CloudTrail to monitor the model's responses and create alerts for any detected personal information.",
          "textKo": "AWS CloudTrail을 구성하여 모델 응답 모니터링 및 개인정보 감지 시 알림 생성",
          "text": "Configure AWS CloudTrail to monitor the model's responses and create alerts for any detected personal information."
        },
        {
          "key": "C",
          "textEn": "Use Guardrails for Amazon Bedrock to filter content. Set up Amazon CloudWatch alarms for notification of policy violations.",
          "textKo": "Amazon Bedrock Guardrails를 사용하여 콘텐츠 필터링, CloudWatch 알람으로 정책 위반 알림",
          "text": "Use Guardrails for Amazon Bedrock to filter content. Set up Amazon CloudWatch alarms for notification of policy violations."
        },
        {
          "key": "D",
          "textEn": "Implement Amazon SageMaker Model Monitor to detect data drift and receive alerts when model quality degrades.",
          "textKo": "Amazon SageMaker Model Monitor를 구현하여 데이터 변화 감지 및 모델 품질 저하 시 알림",
          "text": "Implement Amazon SageMaker Model Monitor to detect data drift and receive alerts when model quality degrades."
        }
      ],
      "answerKey": "C",
      "answerText": "Use Guardrails for Amazon Bedrock to filter content. Set up Amazon CloudWatch alarms for notification of policy violations."
    },
    {
      "id": 68,
      "sourceNumber": 68,
      "title": "Question 68",
      "promptKo": "회사는 제출된 모든 이력서를 PDF 형식으로 수동 검토하고 있습니다\n회사가 성장함에 따라 이력서 양이 검토 용량을 초과할 것으로 예상됩니다\n추가 처리를 위해 PDF 이력서를 자동으로 일반 텍스트 형식으로 변환할 시스템이 필요합니다\n어떤 AWS 서비스가 이 요구 사항을 충족합니까",
      "promptEn": "A company manually reviews all submitted resumes in PDF format. As the company grows, the company expects the volume of resumes to exceed the company's review capacity. The company needs an automated system to convert the PDF resumes into plain text format for additional processing.\nWhich AWS service meets this requirement?",
      "explanation": [
        "- Amazon Textract는 PDF, 이미지 등의 문서에서 텍스트와 데이터 추출 가능"
      ],
      "wrongExplanations": [
        "- B -> Personalize: 추천 시스템용, 문서 처리 불가",
        "- C -> Lex: 챗봇 구축용, 문서 처리 불가",
        "- D -> Transcribe: 음성-텍스트 변환용, PDF 처리 불가"
      ],
      "glossary": [
        "- Amazon Textract: 문서에서 텍스트, 표, 양식 데이터를 추출하는 AWS 서비스",
        "- OCR: Optical Character Recognition"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Textract",
          "textKo": "Amazon Textract",
          "text": "Amazon Textract"
        },
        {
          "key": "B",
          "textEn": "Amazon Personalize",
          "textKo": "Amazon Personalize",
          "text": "Amazon Personalize"
        },
        {
          "key": "C",
          "textEn": "Amazon Lex",
          "textKo": "Amazon Lex",
          "text": "Amazon Lex"
        },
        {
          "key": "D",
          "textEn": "Amazon Transcribe",
          "textKo": "Amazon Transcribe",
          "text": "Amazon Transcribe"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon Textract"
    },
    {
      "id": 69,
      "sourceNumber": 69,
      "title": "Question 69",
      "promptKo": "교육 제공자가 복잡한 개념을 설명하는 생성 AI 모델 기반 Q&A 애플리케이션을 구축하고 있습니다\n질문하는 사람에 따라 모델 응답의 스타일을 자동으로 변경하고자 합니다\n모델에 질문자의 연령대를 제공할 예정입니다\n가장 적은 구현 노력으로 요구 사항을 충족하는 솔루션은 무엇입니까",
      "promptEn": "An education provider is building a question and answer application that uses a generative AI model to explain complex concepts. The education provider wants to automatically change the style of the model response depending on who is asking the question. The education provider will give the model the age range of the user who has asked the question.\nWhich solution meets these requirements with the LEAST implementation effort?",
      "explanation": [
        "- 프롬프트 컨텍스트에 연령 정보를 포함하면 최소한의 노력으로 모델 응답 스타일을 제어 가능"
      ],
      "wrongExplanations": [
        "- A -> 파인튜닝은 데이터 준비와 학습 시간이 필요하여 구현 비용이 높음",
        "- C -> 체인 오브 사고는 복잡하고 구현 비용이 큼",
        "- D -> 사후 요약은 추가 처리 단계가 필요함"
      ],
      "glossary": [
        "- Prompt Engineering: 모델 입력(프롬프트)을 조작하여 원하는 출력 결과를 얻는 기법",
        "- Few-shot/Zero-shot: 소수 예시 또는 예시 없이 모델에 특정 태스크 수행",
        "- Role Description: 모델에 지시사항을 주어 특정 스타일/행동 유도"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Fine-tune the model by using additional training data that is representative of the various age ranges that the application will support",
          "textKo": "다양한 연령대를 대표하는 추가 학습 데이터를 사용하여 모델을 파인튜닝",
          "text": "Fine-tune the model by using additional training data that is representative of the various age ranges that the application will support"
        },
        {
          "key": "B",
          "textEn": "Add a role description to the prompt context that instructs the model of the age range that the response should target",
          "textKo": "프롬프트 컨텍스트에 역할 설명을 추가하여 응답 대상 연령대를 모델에 지시",
          "text": "Add a role description to the prompt context that instructs the model of the age range that the response should target"
        },
        {
          "key": "C",
          "textEn": "Use chain-of-thought reasoning to deduce the correct style and complexity for a response suitable for that user",
          "textKo": "체인 오브 사고(chain-of-thought) 추론을 사용하여 사용자에게 적합한 스타일과 복잡성 결정",
          "text": "Use chain-of-thought reasoning to deduce the correct style and complexity for a response suitable for that user"
        },
        {
          "key": "D",
          "textEn": "Summarize the response text depending on the age of the user so that younger users receive shorter responses",
          "textKo": "연령에 따라 응답 텍스트를 요약하여 어린 사용자에게는 짧은 응답 제공",
          "text": "Summarize the response text depending on the age of the user so that younger users receive shorter responses"
        }
      ],
      "answerKey": "B",
      "answerText": "Add a role description to the prompt context that instructs the model of the age range that the response should target"
    },
    {
      "id": 70,
      "sourceNumber": 70,
      "title": "Question 70",
      "promptKo": "이미지 분류 작업에 사용되는 파운데이션 모델(FM)의 정확도를 평가하는 전략은 무엇입니까",
      "promptEn": "Which strategy evaluates the accuracy of a foundation model (FM) that is used in image classification tasks?",
      "explanation": [
        "- 벤치마크 데이터셋과 비교하여 모델 정확도를 측정하는 것이 일반적"
      ],
      "wrongExplanations": [
        "- A -> 비용 계산은 정확도 평가와 관련 없음",
        "- C -> 레이어 수는 모델 구조 정보일 뿐 성능 평가 아님",
        "- D -> 색상 정확도는 특정 이미지 처리 품질 평가용, 전체 분류 정확도와 관련 없음"
      ],
      "glossary": [
        "- Benchmark Dataset: 모델 성능 평가를 위해 미리 정의된 데이터셋",
        "- Accuracy: 모델이 올바르게 예측한 비율"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Calculate the total cost of resources used by the model",
          "textKo": "모델 사용에 따른 총 리소스 비용 계산",
          "text": "Calculate the total cost of resources used by the model"
        },
        {
          "key": "B",
          "textEn": "Measure the model's accuracy against a predefined benchmark dataset",
          "textKo": "사전 정의된 벤치마크 데이터셋을 기준으로 모델 정확도 측정",
          "text": "Measure the model's accuracy against a predefined benchmark dataset"
        },
        {
          "key": "C",
          "textEn": "Count the number of layers in the neural network",
          "textKo": "신경망의 레이어 수 계산",
          "text": "Count the number of layers in the neural network"
        },
        {
          "key": "D",
          "textEn": "Assess the color accuracy of images processed by the model",
          "textKo": "모델이 처리한 이미지의 색상 정확도 평가",
          "text": "Assess the color accuracy of images processed by the model"
        }
      ],
      "answerKey": "B",
      "answerText": "Measure the model's accuracy against a predefined benchmark dataset"
    },
    {
      "id": 71,
      "sourceNumber": 71,
      "title": "Question 71",
      "promptKo": "회계 회사가 문서 처리를 자동화하기 위해 대형 언어 모델(LLM)을 구현하고자 합니다\n잠재적 위험을 피하기 위해 책임감 있게 진행해야 합니다\nLLM을 개발하고 배포할 때 무엇을 해야 합니까 (2개 선택)",
      "promptEn": "An accounting firm wants to implement a large language model (LLM) to automate document processing. The firm must proceed responsibly to avoid potential harms.\nWhat should the firm do when developing and deploying the LLM? (Choose two.)",
      "explanation": [
        "- A -> 공정성 지표를 포함하면 모델 편향 및 위험 평가 가능",
        "- C -> 학습 데이터 수정으로 편향 완화 가능"
      ],
      "wrongExplanations": [
        "- B -> 온도 파라미터는 생성 다양성 조절용, 책임감 있는 배포와 직접 관련 없음",
        "- D -> 과적합 방지는 성능 관련, 책임 배포와 직접 관련 없음",
        "- E -> 프롬프트 엔지니어링은 성능 향상용, 편향/책임 관련 아님"
      ],
      "glossary": [
        "- Fairness Metric: 모델이 특정 그룹에 불공정하지 않음을 평가하는 지표",
        "- Bias Mitigation: 학습 데이터나 모델 설계를 통해 편향을 최소화하는 방법"
      ],
      "type": "multi-select",
      "options": [
        {
          "key": "A",
          "textEn": "Include fairness metrics for model evaluation",
          "textKo": "모델 평가를 위한 공정성 지표 포함",
          "text": "Include fairness metrics for model evaluation"
        },
        {
          "key": "B",
          "textEn": "Adjust the temperature parameter of the model",
          "textKo": "모델의 온도 파라미터 조정",
          "text": "Adjust the temperature parameter of the model"
        },
        {
          "key": "C",
          "textEn": "Modify the training data to mitigate bias",
          "textKo": "편향 완화를 위해 학습 데이터 수정",
          "text": "Modify the training data to mitigate bias"
        },
        {
          "key": "D",
          "textEn": "Avoid overfitting on the training data",
          "textKo": "학습 데이터에 대한 과적합 방지",
          "text": "Avoid overfitting on the training data"
        },
        {
          "key": "E",
          "textEn": "Apply prompt engineering techniques",
          "textKo": "프롬프트 엔지니어링 기법 적용",
          "text": "Apply prompt engineering techniques"
        }
      ],
      "answerKeys": [
        "A",
        "C"
      ],
      "requiredSelections": 2
    },
    {
      "id": 72,
      "sourceNumber": 72,
      "title": "Question 72",
      "promptKo": "회사가 ML 모델을 구축하고 있습니다\n새로운 데이터를 수집하고 상관 행렬 작성, 통계 계산, 시각화를 통해 데이터를 분석했습니다\n회사는 ML 파이프라인의 어떤 단계에 있습니까",
      "promptEn": "A company is building an ML model. The company collected new data and analyzed the data by creating a correlation matrix, calculating statistics, and visualizing the data.\nWhich stage of the ML pipeline is the company currently in?",
      "explanation": [
        "- 상관 분석, 통계 계산, 데이터 시각화는 탐색적 데이터 분석(EDA) 단계"
      ],
      "wrongExplanations": [
        "- A -> 전처리는 결측값 처리, 스케일링 등",
        "- B -> 특성 엔지니어링은 모델 학습용 입력 생성",
        "- D -> 하이퍼파라미터 튜닝은 학습 성능 최적화 단계"
      ],
      "glossary": [
        "- Exploratory Data Analysis (EDA): 데이터 이해 및 패턴 탐색 과정",
        "- Feature Engineering: 모델 성능 향상을 위해 입력 데이터 변환/생성"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Data pre-processing",
          "textKo": "데이터 전처리",
          "text": "Data pre-processing"
        },
        {
          "key": "B",
          "textEn": "Feature engineering",
          "textKo": "특성 엔지니어링",
          "text": "Feature engineering"
        },
        {
          "key": "C",
          "textEn": "Exploratory data analysis",
          "textKo": "탐색적 데이터 분석",
          "text": "Exploratory data analysis"
        },
        {
          "key": "D",
          "textEn": "Hyperparameter tuning",
          "textKo": "하이퍼파라미터 튜닝",
          "text": "Hyperparameter tuning"
        }
      ],
      "answerKey": "C",
      "answerText": "Exploratory data analysis"
    },
    {
      "id": 73,
      "sourceNumber": 73,
      "title": "Question 73",
      "promptKo": "회사는 데이터베이스 오류로 일부 단어가 누락된 문서를 가지고 있습니다\n누락된 텍스트를 채울 잠재적 단어를 제안하는 ML 모델을 구축하고자 합니다\n어떤 유형의 모델이 이 요구 사항을 충족합니까",
      "promptEn": "A company has documents that are missing some words because of a database error. The company wants to build an ML model that can suggest potential words to fill in the missing text.\nWhich type of model meets this requirement?",
      "explanation": [
        "- BERT 기반 모델은 문맥 이해와 마스킹된 단어 예측(Masked Language Modeling) 가능"
      ],
      "wrongExplanations": [
        "- A -> 토픽 모델링은 문서 주제 분석용",
        "- B -> 클러스터링은 유사 문서 그룹화용",
        "- C -> 처방적 모델은 의사결정 추천용"
      ],
      "glossary": [
        "- BERT: 트랜스포머 기반 언어 모델, 문맥 이해 및 마스킹된 단어 예측 가능",
        "- Masked Language Modeling: 일부 단어를 마스크하고 예측하도록 학습하는 방법"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Topic modeling",
          "textKo": "토픽 모델링",
          "text": "Topic modeling"
        },
        {
          "key": "B",
          "textEn": "Clustering models",
          "textKo": "클러스터링 모델",
          "text": "Clustering models"
        },
        {
          "key": "C",
          "textEn": "Prescriptive ML models",
          "textKo": "처방적 ML 모델",
          "text": "Prescriptive ML models"
        },
        {
          "key": "D",
          "textEn": "BERT-based models",
          "textKo": "BERT 기반 모델",
          "text": "BERT-based models"
        }
      ],
      "answerKey": "D",
      "answerText": "BERT-based models"
    },
    {
      "id": 74,
      "sourceNumber": 74,
      "title": "Question 74",
      "promptKo": "회사는 지난 12개월 동안 다양한 소매 지점에서 가장 많이 팔린 제품의 총 판매량을 표시하고자 합니다\n그래프 생성 자동화를 위해 어떤 AWS 솔루션을 사용해야 합니까",
      "promptEn": "A company wants to display the total sales for its top-selling products across various retail locations in the past 12 months.\nWhich AWS solution should the company use to automate the generation of graphs?",
      "explanation": [
        "- Amazon QuickSight 내 Amazon Q를 사용하면 자연어 쿼리로 시각화 자동 생성 가능"
      ],
      "wrongExplanations": [
        "- A -> EC2는 인프라 서비스, Q 자동화 불가",
        "- B -> Q Developer는 개발 도구, 자동화 기능과 직접적 관련 없음",
        "- D -> Chatbot은 상호작용용, 그래프 생성 자동화 아님"
      ],
      "glossary": [
        "- Amazon QuickSight: AWS의 BI/시각화 서비스",
        "- Amazon Q: 자연어 쿼리로 데이터를 분석하고 시각화 생성"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Q in Amazon EC2",
          "textKo": "Amazon EC2 내 Amazon Q",
          "text": "Amazon Q in Amazon EC2"
        },
        {
          "key": "B",
          "textEn": "Amazon Q Developer",
          "textKo": "Amazon Q Developer",
          "text": "Amazon Q Developer"
        },
        {
          "key": "C",
          "textEn": "Amazon Q in Amazon QuickSight",
          "textKo": "Amazon QuickSight 내 Amazon Q",
          "text": "Amazon Q in Amazon QuickSight"
        },
        {
          "key": "D",
          "textEn": "Amazon Q in AWS Chatbot",
          "textKo": "AWS Chatbot 내 Amazon Q",
          "text": "Amazon Q in AWS Chatbot"
        }
      ],
      "answerKey": "C",
      "answerText": "Amazon Q in Amazon QuickSight"
    },
    {
      "id": 75,
      "sourceNumber": 75,
      "title": "Question 75",
      "promptKo": "회사는 사용자 경험 향상을 위해 챗봇을 구축하고 있습니다\n의도 감지에 Amazon Bedrock의 LLM을 사용하고 있습니다\nfew-shot 학습을 통해 의도 감지 정확도를 향상하고자 합니다\n이 요구 사항을 충족하기 위해 추가로 필요한 데이터는 무엇입니까",
      "promptEn": "A company is building a chatbot to improve user experience. The company is using a large language model (LLM) from Amazon Bedrock for intent detection. The company wants to use few-shot learning to improve intent detection accuracy.\nWhich additional data does the company need to meet these requirements?",
      "explanation": [
        "- Few-shot 학습에서는 입력(사용자 메시지)과 정답(사용자 의도) 쌍이 필요"
      ],
      "wrongExplanations": [
        "- A/B/D -> 올바른 의도 정보 없이 LLM 학습 불가"
      ],
      "glossary": [
        "- Few-shot Learning: 소량의 예시 데이터로 모델이 태스크를 학습하도록 하는 기법",
        "- Intent Detection: 사용자의 입력으로부터 의도를 식별하는 기능"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Pairs of chatbot responses and correct user intents",
          "textKo": "챗봇 응답과 올바른 사용자 의도 쌍",
          "text": "Pairs of chatbot responses and correct user intents"
        },
        {
          "key": "B",
          "textEn": "Pairs of user messages and correct chatbot responses",
          "textKo": "사용자 메시지와 올바른 챗봇 응답 쌍",
          "text": "Pairs of user messages and correct chatbot responses"
        },
        {
          "key": "C",
          "textEn": "Pairs of user messages and correct user intents",
          "textKo": "사용자 메시지와 올바른 사용자 의도 쌍",
          "text": "Pairs of user messages and correct user intents"
        },
        {
          "key": "D",
          "textEn": "Pairs of user intents and correct chatbot responses",
          "textKo": "사용자 의도와 올바른 챗봇 응답 쌍",
          "text": "Pairs of user intents and correct chatbot responses"
        }
      ],
      "answerKey": "C",
      "answerText": "Pairs of user messages and correct user intents"
    },
    {
      "id": 76,
      "sourceNumber": 76,
      "title": "Question 76",
      "promptKo": "회사는 Amazon Bedrock에 호스팅된 기본 모델에서 few-shot 프롬프트를 사용하고 있습니다\n현재 모델은 프롬프트에 10개의 예시를 사용하고 있으며, 하루에 한 번 호출되고 있습니다\n모델은 잘 작동하고 있으며, 월간 비용을 낮추고자 합니다\n이 요구 사항을 충족하는 솔루션은 무엇입니까",
      "promptEn": "A company is using few-shot prompting on a base model that is hosted on Amazon Bedrock. The model currently uses 10 examples in the prompt. The model is invoked once daily and is performing well. The company wants to lower the monthly cost.\nWhich solution will meet these requirements?",
      "explanation": [
        "- 프롬프트 토큰 수를 줄이면 호출당 비용이 감소 -> 월간 비용 절감"
      ],
      "wrongExplanations": [
        "- A -> 파인튜닝은 비용과 시간 증가",
        "- C -> 토큰 수 증가 -> 비용 증가",
        "- D -> Provisioned Throughput -> 사용량 기반 비용 절감 아님"
      ],
      "glossary": [
        "- Few-shot Prompting: 소수 예시를 제공해 모델이 태스크 수행하도록 유도하는 방법",
        "- Token: 텍스트를 모델이 처리하는 단위"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Customize the model by using fine-tuning",
          "textKo": "파인튜닝을 통해 모델 맞춤화",
          "text": "Customize the model by using fine-tuning"
        },
        {
          "key": "B",
          "textEn": "Decrease the number of tokens in the prompt",
          "textKo": "프롬프트 내 토큰 수 감소",
          "text": "Decrease the number of tokens in the prompt"
        },
        {
          "key": "C",
          "textEn": "Increase the number of tokens in the prompt",
          "textKo": "프롬프트 내 토큰 수 증가",
          "text": "Increase the number of tokens in the prompt"
        },
        {
          "key": "D",
          "textEn": "Use Provisioned Throughput",
          "textKo": "Provisioned Throughput 사용",
          "text": "Use Provisioned Throughput"
        }
      ],
      "answerKey": "B",
      "answerText": "Decrease the number of tokens in the prompt"
    },
    {
      "id": 77,
      "sourceNumber": 77,
      "title": "Question 77",
      "promptKo": "AI 실무자가 마케팅 캠페인용 콘텐츠를 생성하기 위해 LLM을 사용하고 있습니다\n생성된 콘텐츠는 그럴듯하고 사실처럼 들리지만 실제로는 틀립니다\n이 LLM이 겪고 있는 문제는 무엇입니까",
      "promptEn": "An AI practitioner is using a large language model (LLM) to create content for marketing campaigns. The generated content sounds plausible and factual but is incorrect.\nWhich problem is the LLM having?",
      "explanation": [
        "- Hallucination: 모델이 그럴듯하지만 잘못된 정보를 생성하는 현상"
      ],
      "wrongExplanations": [
        "- A -> Data leakage: 학습 데이터 노출",
        "- C -> Overfitting: 학습 데이터에 과도하게 적합",
        "- D -> Underfitting: 학습 데이터도 잘 학습 못함"
      ],
      "glossary": [
        "- Hallucination: 생성 모델이 사실과 다른 출력을 내는 현상"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Data leakage",
          "textKo": "데이터 누출",
          "text": "Data leakage"
        },
        {
          "key": "B",
          "textEn": "Hallucination",
          "textKo": "환각(Hallucination)",
          "text": "Hallucination"
        },
        {
          "key": "C",
          "textEn": "Overfitting",
          "textKo": "과적합",
          "text": "Overfitting"
        },
        {
          "key": "D",
          "textEn": "Underfitting",
          "textKo": "과소적합",
          "text": "Underfitting"
        }
      ],
      "answerKey": "B",
      "answerText": "Hallucination"
    },
    {
      "id": 78,
      "sourceNumber": 78,
      "title": "Question 78",
      "promptKo": "AI 실무자가 기밀 데이터를 포함한 학습 데이터셋으로 Amazon Bedrock에서 맞춤형 모델을 학습했습니다\n맞춤형 모델이 기밀 데이터를 기반으로 추론 응답을 생성하지 않도록 보장하고자 합니다\n기밀 데이터를 기반으로 응답을 생성하지 않도록 하려면 어떻게 해야 합니까",
      "promptEn": "An AI practitioner trained a custom model on Amazon Bedrock by using a training dataset that contains confidential data. The AI practitioner wants to ensure that the custom model does not generate inference responses based on confidential data.\nHow should the AI practitioner prevent responses based on confidential data?",
      "explanation": [
        "- 모델 학습 시 기밀 데이터가 포함되었으므로 제거 후 재학습이 안전한 방법"
      ],
      "wrongExplanations": [
        "- B/C/D -> 응답에서 마스킹/암호화는 이미 학습된 모델이 기밀 정보를 기억하는 문제 해결 불가"
      ],
      "glossary": [
        "- Dynamic Data Masking: 응답 시 민감 데이터 숨기기",
        "- AWS KMS: 키 관리 및 데이터 암호화 서비스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Delete the custom model. Remove the confidential data from the training dataset. Retrain the custom model",
          "textKo": "맞춤형 모델 삭제, 학습 데이터에서 기밀 데이터 제거, 모델 재학습",
          "text": "Delete the custom model. Remove the confidential data from the training dataset. Retrain the custom model"
        },
        {
          "key": "B",
          "textEn": "Mask the confidential data in the inference responses by using dynamic data masking",
          "textKo": "동적 데이터 마스킹을 사용하여 추론 응답에서 기밀 데이터 마스킹",
          "text": "Mask the confidential data in the inference responses by using dynamic data masking"
        },
        {
          "key": "C",
          "textEn": "Encrypt the confidential data in the inference responses by using Amazon SageMaker",
          "textKo": "Amazon SageMaker를 사용하여 추론 응답에서 기밀 데이터 암호화",
          "text": "Encrypt the confidential data in the inference responses by using Amazon SageMaker"
        },
        {
          "key": "D",
          "textEn": "Encrypt the confidential data in the custom model by using AWS Key Management Service (AWS KMS)",
          "textKo": "AWS KMS를 사용하여 맞춤형 모델 내 기밀 데이터 암호화",
          "text": "Encrypt the confidential data in the custom model by using AWS Key Management Service (AWS KMS)"
        }
      ],
      "answerKey": "A",
      "answerText": "Delete the custom model. Remove the confidential data from the training dataset. Retrain the custom model"
    },
    {
      "id": 79,
      "sourceNumber": 79,
      "title": "Question 79",
      "promptKo": "회사는 생성 AI를 사용하여 솔루션을 구축했습니다\n이 솔루션은 LLM을 사용하여 영어 교육 매뉴얼을 다른 언어로 번역합니다\n생성된 매뉴얼 텍스트를 검토하여 솔루션의 정확도를 평가하고자 합니다\n어떤 모델 평가 전략이 이 요구 사항을 충족합니까",
      "promptEn": "A company has built a solution by using generative AI. The solution uses large language models (LLMs) to translate training manuals from English into other languages. The company wants to evaluate the accuracy of the solution by examining the text generated for the manuals.\nWhich model evaluation strategy meets these requirements?",
      "explanation": [
        "- BLEU: 기계 번역의 정확도를 평가하는 지표"
      ],
      "wrongExplanations": [
        "- B -> RMSE: 회귀 모델 평가용",
        "- C -> ROUGE: 요약문 평가용",
        "- D -> F1: 분류 모델 평가용"
      ],
      "glossary": [
        "- BLEU: 기계 번역과 참조 번역 간 유사도를 계산하는 지표",
        "- ROUGE: 텍스트 요약 평가 지표"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Bilingual Evaluation Understudy (BLEU)",
          "textKo": "BLEU",
          "text": "Bilingual Evaluation Understudy (BLEU)"
        },
        {
          "key": "B",
          "textEn": "Root mean squared error (RMSE)",
          "textKo": "RMSE",
          "text": "Root mean squared error (RMSE)"
        },
        {
          "key": "C",
          "textEn": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)",
          "textKo": "ROUGE",
          "text": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)"
        },
        {
          "key": "D",
          "textEn": "F1 score",
          "textKo": "F1 점수",
          "text": "F1 score"
        }
      ],
      "answerKey": "A",
      "answerText": "Bilingual Evaluation Understudy (BLEU)"
    },
    {
      "id": 80,
      "sourceNumber": 80,
      "title": "Question 80",
      "promptKo": "대형 소매업체는 매일 수천 건의 고객 지원 문의를 받습니다\n고객 지원 문의를 신속하게 처리하고 응답해야 합니다\n회사는 Amazon Bedrock용 Agents를 구현하고자 합니다\n이 소매업체에 도움이 될 Amazon Bedrock Agents의 주요 장점은 무엇입니까",
      "promptEn": "A large retailer receives thousands of customer support inquiries about products every day. The customer support inquiries need to be processed and responded to quickly. The company wants to implement Agents for Amazon Bedrock.\nWhat are the key benefits of using Amazon Bedrock agents that could help this retailer?",
      "explanation": [
        "- B -> 반복적인 작업 자동화 및 복잡한 워크플로 조정 가능",
        "- C -> 여러 FM 호출 및 결과 통합으로 신속 대응 가능"
      ],
      "wrongExplanations": [
        "- A -> FM 생성은 Agents의 기능 아님",
        "- D -> FM 선택은 Agents의 핵심 장점과 직접 관련 없음"
      ],
      "glossary": [
        "- Agent for Amazon Bedrock: FM 호출 및 워크플로 자동화를 수행하는 에이전트",
        "- Workflow Orchestration: 여러 작업을 순서대로 자동 수행하는 과정"
      ],
      "type": "multi-select",
      "options": [
        {
          "key": "A",
          "textEn": "Generation of custom foundation models (FMs) to predict customer needs",
          "textKo": "고객 요구 예측을 위한 맞춤형 FM 생성",
          "text": "Generation of custom foundation models (FMs) to predict customer needs"
        },
        {
          "key": "B",
          "textEn": "Automation of repetitive tasks and orchestration of complex workflows",
          "textKo": "반복 작업 자동화 및 복잡한 워크플로 조정",
          "text": "Automation of repetitive tasks and orchestration of complex workflows"
        },
        {
          "key": "C",
          "textEn": "Automatically calling multiple foundation models (FMs) and consolidating the results",
          "textKo": "여러 FM을 자동 호출하고 결과 통합",
          "text": "Automatically calling multiple foundation models (FMs) and consolidating the results"
        },
        {
          "key": "D",
          "textEn": "Selecting the foundation model (FM) based on predefined criteria and metrics",
          "textKo": "사전 정의된 기준과 지표에 따라 FM 선택",
          "text": "Selecting the foundation model (FM) based on predefined criteria and metrics"
        }
      ],
      "answerKeys": [
        "B",
        "C"
      ],
      "requiredSelections": 2
    },
    {
      "id": 81,
      "sourceNumber": 81,
      "title": "Question 81",
      "promptKo": "파운데이션 모델(FM)을 파인튜닝할 때, 지속적인 사전 학습(ongoing pre-training)의 장점은 무엇입니까?",
      "promptEn": "Which option is a benefit of ongoing pre-training when fine-tuning a foundation model (FM)?",
      "explanation": [
        "- 지속적 사전 학습은 모델이 점점 더 많은 데이터와 패턴을 학습하여 성능 향상에 도움"
      ],
      "wrongExplanations": [
        "- A -> 복잡도 감소와 직접적 관련 없음",
        "- C -> 학습 시간 단축 효과 없음",
        "- D -> 추론 시간 최적화와 직접적 관련 없음"
      ],
      "glossary": [
        "- Ongoing Pre-training: 모델 학습 후에도 지속적으로 추가 데이터로 사전 학습을 진행하는 과정"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Helps decrease the model's complexity",
          "textKo": "모델 복잡도 감소",
          "text": "Helps decrease the model's complexity"
        },
        {
          "key": "B",
          "textEn": "Improves model performance over time",
          "textKo": "시간이 지남에 따라 모델 성능 향상",
          "text": "Improves model performance over time"
        },
        {
          "key": "C",
          "textEn": "Decreases the training time requirement",
          "textKo": "학습 시간 단축",
          "text": "Decreases the training time requirement"
        },
        {
          "key": "D",
          "textEn": "Optimizes model inference time",
          "textKo": "모델 추론 시간 최적화",
          "text": "Optimizes model inference time"
        }
      ],
      "answerKey": "B",
      "answerText": "Improves model performance over time"
    },
    {
      "id": 82,
      "sourceNumber": 82,
      "title": "Question 82",
      "promptKo": "생성 AI 모델에서 토큰(tokens)이란 무엇입니까?",
      "promptEn": "What are tokens in the context of generative AI models?",
      "explanation": [
        "- 토큰은 모델이 실제로 처리하는 텍스트 단위 (단어, 부분 단어 등)"
      ],
      "wrongExplanations": [
        "- B -> 단어/개념의 임베딩은 토큰이 아님",
        "- C -> 가중치는 토큰이 아님",
        "- D -> 프롬프트는 토큰을 포함할 수 있지만 토큰 자체 아님"
      ],
      "glossary": [
        "- Token: 모델이 텍스트를 나누어 처리하는 기본 단위",
        "- Subword: 단어를 쪼갠 작은 단위 토큰"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Tokens are the basic units of input and output that a generative AI model operates on, representing words, subwords, or other linguistic units.",
          "textKo": "토큰은 단어, 하위 단어, 기타 언어 단위를 나타내며, 생성 AI 모델이 처리하는 입력 및 출력의 기본 단위입니다",
          "text": "Tokens are the basic units of input and output that a generative AI model operates on, representing words, subwords, or other linguistic units."
        },
        {
          "key": "B",
          "textEn": "Tokens are the mathematical representations of words or concepts used in generative AI models.",
          "textKo": "토큰은 생성 AI 모델에서 사용되는 단어 또는 개념의 수치적 표현입니다",
          "text": "Tokens are the mathematical representations of words or concepts used in generative AI models."
        },
        {
          "key": "C",
          "textEn": "Tokens are the pre-trained weights of a generative AI model that are fine-tuned for specific tasks.",
          "textKo": "토큰은 특정 작업을 위해 파인튜닝된 생성 AI 모델의 사전 학습된 가중치입니다",
          "text": "Tokens are the pre-trained weights of a generative AI model that are fine-tuned for specific tasks."
        },
        {
          "key": "D",
          "textEn": "Tokens are the specific prompts or instructions given to a generative AI model to generate output.",
          "textKo": "토큰은 생성 AI 모델에 출력 생성을 지시하는 특정 프롬프트 또는 명령입니다",
          "text": "Tokens are the specific prompts or instructions given to a generative AI model to generate output."
        }
      ],
      "answerKey": "A",
      "answerText": "Tokens are the basic units of input and output that a generative AI model operates on, representing words, subwords, or other linguistic units."
    },
    {
      "id": 83,
      "sourceNumber": 83,
      "title": "Question 83",
      "promptKo": "회사는 LLM을 사용하여 추론을 수행할 때 발생하는 비용을 평가하고자 합니다\n회사는 Amazon Bedrock을 사용하여 생성 AI 애플리케이션을 구축하려고 합니다\n어떤 요소가 추론 비용을 결정합니까?",
      "promptEn": "A company wants to assess the costs that are associated with using a large language model (LLM) to generate inferences. The company wants to use Amazon Bedrock to build generative AI applications.\nWhich factor will drive the inference costs?",
      "explanation": [
        "- LLM 추론 비용은 모델 호출 시 사용된 토큰 수에 비례"
      ],
      "wrongExplanations": [
        "- B -> 온도는 출력 다양성 조절, 비용과 직접 연관 없음",
        "- C/D -> 학습 비용 관련, 추론 비용 아님"
      ],
      "glossary": [
        "- Token: 추론 시 비용 계산의 기본 단위",
        "- Temperature: 생성 모델에서 출력 다양성을 조절하는 파라미터"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Number of tokens consumed",
          "textKo": "사용된 토큰 수",
          "text": "Number of tokens consumed"
        },
        {
          "key": "B",
          "textEn": "Temperature value",
          "textKo": "온도(Temperature) 값",
          "text": "Temperature value"
        },
        {
          "key": "C",
          "textEn": "Amount of data used to train the LLM",
          "textKo": "LLM 학습에 사용된 데이터 양",
          "text": "Amount of data used to train the LLM"
        },
        {
          "key": "D",
          "textEn": "Total training time",
          "textKo": "총 학습 시간",
          "text": "Total training time"
        }
      ],
      "answerKey": "A",
      "answerText": "Number of tokens consumed"
    },
    {
      "id": 84,
      "sourceNumber": 84,
      "title": "Question 84",
      "promptKo": "회사는 Amazon SageMaker Studio 노트북을 사용하여 ML 모델을 구축하고 학습하고 있습니다\n데이터는 Amazon S3 버킷에 저장되어 있습니다\nS3에서 SageMaker Studio 노트북으로의 데이터 흐름을 관리해야 합니다\n어떤 솔루션이 이 요구 사항을 충족합니까?",
      "promptEn": "A company is using Amazon SageMaker Studio notebooks to build and train ML models. The company stores the data in an Amazon S3 bucket. The company needs to manage the flow of data from Amazon S3 to SageMaker Studio notebooks.\nWhich solution will meet this requirement?",
      "explanation": [
        "- S3 엔드포인트를 사용하면 VPC 내에서 안전하게 S3 데이터를 SageMaker로 전달 가능"
      ],
      "wrongExplanations": [
        "- A/B -> 보안/모니터링 관련 서비스",
        "- D -> 아카이브 스토리지, 데이터 흐름 관리 목적 아님"
      ],
      "glossary": [
        "- VPC Endpoint for S3: VPC 내부에서 안전하게 S3에 접근할 수 있는 네트워크 경로"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use Amazon Inspector to monitor SageMaker Studio",
          "textKo": "Amazon Inspector를 사용하여 SageMaker Studio 모니터링",
          "text": "Use Amazon Inspector to monitor SageMaker Studio"
        },
        {
          "key": "B",
          "textEn": "Use Amazon Macie to monitor SageMaker Studio",
          "textKo": "Amazon Macie를 사용하여 SageMaker Studio 모니터링",
          "text": "Use Amazon Macie to monitor SageMaker Studio"
        },
        {
          "key": "C",
          "textEn": "Configure SageMaker to use a VPC with an S3 endpoint",
          "textKo": "SageMaker를 VPC 및 S3 엔드포인트와 함께 구성",
          "text": "Configure SageMaker to use a VPC with an S3 endpoint"
        },
        {
          "key": "D",
          "textEn": "Configure SageMaker to use S3 Glacier Deep Archive",
          "textKo": "SageMaker를 S3 Glacier Deep Archive와 함께 구성",
          "text": "Configure SageMaker to use S3 Glacier Deep Archive"
        }
      ],
      "answerKey": "C",
      "answerText": "Configure SageMaker to use a VPC with an S3 endpoint"
    },
    {
      "id": 85,
      "sourceNumber": 85,
      "title": "Question 85",
      "promptKo": "회사는 Amazon Bedrock을 사용하여 고객의 제품 관련 문의에 답변하도록 맞춤화된 FM을 보유하고 있습니다\n회사는 새로운 유형의 문의에 대한 모델 응답을 검증하고자 합니다\n검증에 사용할 새로운 데이터셋을 업로드해야 합니다\n어떤 AWS 서비스가 이 요구 사항을 충족합니까?",
      "promptEn": "A company has a foundation model (FM) that was customized by using Amazon Bedrock to answer customer queries about products. The company wants to validate the model's responses to new types of queries. The company needs to upload a new dataset that Amazon Bedrock can use for validation.\nWhich AWS service meets these requirements?",
      "explanation": [
        "- Amazon S3는 Bedrock 검증용 데이터 업로드 및 저장에 가장 적합"
      ],
      "wrongExplanations": [
        "- B -> 단일 인스턴스용 블록 스토리지",
        "- C -> NFS 방식 파일 시스템",
        "- D -> 엣지 장치용 스토리지, 검증용 데이터셋 용도 아님"
      ],
      "glossary": [
        "- Amazon S3: 객체 스토리지, 데이터 업로드 및 저장에 적합",
        "- FM Validation Dataset: 새로운 데이터로 모델 응답 평가용 데이터셋"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon S3",
          "textKo": "Amazon S3",
          "text": "Amazon S3"
        },
        {
          "key": "B",
          "textEn": "Amazon Elastic Block Store (Amazon EBS)",
          "textKo": "Amazon EBS",
          "text": "Amazon Elastic Block Store (Amazon EBS)"
        },
        {
          "key": "C",
          "textEn": "Amazon Elastic File System (Amazon EFS)",
          "textKo": "Amazon EFS",
          "text": "Amazon Elastic File System (Amazon EFS)"
        },
        {
          "key": "D",
          "textEn": "AWS Snowcone",
          "textKo": "AWS Snowcone",
          "text": "AWS Snowcone"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon S3"
    },
    {
      "id": 86,
      "sourceNumber": 86,
      "title": "Question 86",
      "promptKo": "어떤 프롬프트 공격이 LLM의 구성된 동작(behavior)을 직접적으로 노출합니까?",
      "promptEn": "Which prompting attack directly exposes the configured behavior of a large language model (LLM)?",
      "explanation": [
        "- Prompt template을 추출하면 모델의 설정된 행동이나 안전 제한 조건이 노출됨"
      ],
      "wrongExplanations": [
        "- A -> 모델의 응답 스타일을 바꾸는 공격",
        "- B -> 사회적 공학 기법에 가까움",
        "- C -> 단순히 프롬프트 무시, 설정 노출 아님"
      ],
      "glossary": [
        "- Prompt Injection Attack: LLM의 의도된 동작을 우회하거나 악용하는 공격",
        "- Prompt Template: LLM이 따르는 초기 지침이나 안전 정책"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Prompted persona switches",
          "textKo": "프롬프트 인물(Persona) 전환",
          "text": "Prompted persona switches"
        },
        {
          "key": "B",
          "textEn": "Exploiting friendliness and trust",
          "textKo": "친근함과 신뢰를 악용",
          "text": "Exploiting friendliness and trust"
        },
        {
          "key": "C",
          "textEn": "Ignoring the prompt template",
          "textKo": "프롬프트 템플릿 무시",
          "text": "Ignoring the prompt template"
        },
        {
          "key": "D",
          "textEn": "Extracting the prompt template",
          "textKo": "프롬프트 템플릿 추출",
          "text": "Extracting the prompt template"
        }
      ],
      "answerKey": "D",
      "answerText": "Extracting the prompt template"
    },
    {
      "id": 87,
      "sourceNumber": 87,
      "title": "Question 87",
      "promptKo": "회사가 Amazon Bedrock을 사용하려고 합니다.\n사용 시 회사가 책임져야 하는 보안 측면은 무엇입니까?",
      "promptEn": "A company wants to use Amazon Bedrock. The company needs to review which security aspects the company is responsible for when using Amazon Bedrock.\nWhich security aspect will the company be responsible for?",
      "explanation": [
        "- AWS는 인프라 및 서비스 보안 책임을 지지만, 고객 데이터 보호는 사용자가 책임짐"
      ],
      "wrongExplanations": [
        "- A/B/D -> AWS가 관리하는 영역, 고객 책임 아님"
      ],
      "glossary": [
        "- Shared Responsibility Model: AWS와 고객 간 보안 책임 분담 모델",
        "- Data in Transit / at Rest: 이동 중 데이터 / 저장 데이터"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Patching and updating the versions of Amazon Bedrock",
          "textKo": "Amazon Bedrock 버전 패치 및 업데이트",
          "text": "Patching and updating the versions of Amazon Bedrock"
        },
        {
          "key": "B",
          "textEn": "Protecting the infrastructure that hosts Amazon Bedrock",
          "textKo": "Amazon Bedrock를 호스팅하는 인프라 보호",
          "text": "Protecting the infrastructure that hosts Amazon Bedrock"
        },
        {
          "key": "C",
          "textEn": "Securing the company's data in transit and at rest",
          "textKo": "회사 데이터의 전송 중 및 저장 중 보안 확보",
          "text": "Securing the company's data in transit and at rest"
        },
        {
          "key": "D",
          "textEn": "Provisioning Amazon Bedrock within the company network",
          "textKo": "회사 네트워크 내 Amazon Bedrock 프로비저닝",
          "text": "Provisioning Amazon Bedrock within the company network"
        }
      ],
      "answerKey": "C",
      "answerText": "Securing the company's data in transit and at rest"
    },
    {
      "id": 88,
      "sourceNumber": 88,
      "title": "Question 88",
      "promptKo": "한 소셜 미디어 회사가 LLM을 사용하여 메시지를 요약하려고 합니다.\nSageMaker JumpStart에서 사용할 수 있는 LLM 몇 가지를 선택했습니다.\n회사는 생성된 출력의 유해성(toxicity)을 비교하고 싶습니다.\n운영 부담이 가장 적은 평가 전략은 무엇입니까?",
      "promptEn": "A social media company wants to use a large language model (LLM) to summarize messages. The company has chosen a few LLMs that are available on Amazon SageMaker JumpStart. The company wants to compare the generated output toxicity of these models.\nWhich strategy gives the company the ability to evaluate the LLMs with the LEAST operational overhead?",
      "explanation": [
        "- 자동 평가를 사용하면 운영 부담 최소화"
      ],
      "wrongExplanations": [
        "- A/C -> 사람을 사용하여 평가하므로 운영 부담 큼",
        "- D -> 학습 과정에 사람 개입 필요, 평가용 아님"
      ],
      "glossary": [
        "- Toxicity: 모델 출력의 부적절하거나 공격적인 내용",
        "- Automatic Model Evaluation: 사전 정의된 규칙 또는 평가 모델로 자동 평가"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Crowd-sourced evaluation",
          "textKo": "크라우드 소싱 평가",
          "text": "Crowd-sourced evaluation"
        },
        {
          "key": "B",
          "textEn": "Automatic model evaluation",
          "textKo": "자동 모델 평가",
          "text": "Automatic model evaluation"
        },
        {
          "key": "C",
          "textEn": "Model evaluation with human workers",
          "textKo": "인간 평가자와 함께 모델 평가",
          "text": "Model evaluation with human workers"
        },
        {
          "key": "D",
          "textEn": "Reinforcement learning from human feedback (RLHF)",
          "textKo": "인간 피드백 기반 강화 학습(RLHF)",
          "text": "Reinforcement learning from human feedback (RLHF)"
        }
      ],
      "answerKey": "B",
      "answerText": "Automatic model evaluation"
    },
    {
      "id": 89,
      "sourceNumber": 89,
      "title": "Question 89",
      "promptKo": "회사가 FM의 보안을 테스트하고 있습니다.\n테스트 중 모델의 안전 기능을 우회하여 유해한 콘텐츠를 생성하고자 합니다.\n이러한 보안 기술은 무엇의 예시입니까?",
      "promptEn": "A company is testing the security of a foundation model (FM). During testing, the company wants to get around the safety features and make harmful content.\nWhich security technique is this an example of?",
      "explanation": [
        "- Jailbreak는 LLM의 안전 정책을 우회하여 제한된 동작을 벗어나도록 하는 공격"
      ],
      "wrongExplanations": [
        "- A -> 데이터 기반 취약점 탐색",
        "- B -> 서비스 거부 공격, 내용 생성과 무관",
        "- C -> 일반적 승인 침투 테스트, LLM 안전 우회와 다름"
      ],
      "glossary": [
        "- Jailbreak: LLM의 내장 안전 제한을 우회하는 공격"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Fuzzing training data to find vulnerabilities",
          "textKo": "취약점 찾기 위해 학습 데이터 퍼징",
          "text": "Fuzzing training data to find vulnerabilities"
        },
        {
          "key": "B",
          "textEn": "Denial of service (DoS)",
          "textKo": "서비스 거부(DoS) 공격",
          "text": "Denial of service (DoS)"
        },
        {
          "key": "C",
          "textEn": "Penetration testing with authorization",
          "textKo": "권한 있는 침투 테스트",
          "text": "Penetration testing with authorization"
        },
        {
          "key": "D",
          "textEn": "Jailbreak",
          "textKo": "Jailbreak",
          "text": "Jailbreak"
        }
      ],
      "answerKey": "D",
      "answerText": "Jailbreak"
    },
    {
      "id": 90,
      "sourceNumber": 90,
      "title": "Question 90",
      "promptKo": "회사는 모델 학습과 추론을 위해 Amazon SageMaker를 사용해야 합니다.\n규제 요구사항을 준수하여 인터넷 없이 격리된 환경에서 SageMaker 작업을 실행해야 합니다.\n어떤 솔루션이 이 요구 사항을 충족합니까?",
      "promptEn": "A company needs to use Amazon SageMaker for model training and inference. The company must comply with regulatory requirements to run SageMaker jobs in an isolated environment without internet access.\nWhich solution will meet these requirements?",
      "explanation": [
        "- Network Isolation을 통해 인터넷 없이 격리된 환경에서 안전하게 학습 및 추론 가능"
      ],
      "wrongExplanations": [
        "- A -> 실험 관리 기능, 격리 환경과 무관",
        "- C -> 데이터 암호화만, 네트워크 격리 아님",
        "- D -> 권한 관리, 격리 환경과 무관"
      ],
      "glossary": [
        "- Network Isolation: SageMaker 작업을 인터넷 접속 없이 VPC 내에서 격리 실행",
        "- Regulatory Compliance: 법규 및 규제 요구사항 준수"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Run SageMaker training and inference by using SageMaker Experiments",
          "textKo": "SageMaker Experiments를 사용하여 학습 및 추론 실행",
          "text": "Run SageMaker training and inference by using SageMaker Experiments"
        },
        {
          "key": "B",
          "textEn": "Run SageMaker training and Inference by using network Isolation",
          "textKo": "네트워크 격리(Network Isolation)를 사용하여 학습 및 추론 실행",
          "text": "Run SageMaker training and Inference by using network Isolation"
        },
        {
          "key": "C",
          "textEn": "Encrypt the data at rest by using encryption for SageMaker geospatial capabilities",
          "textKo": "SageMaker 지리공간 기능 데이터 암호화",
          "text": "Encrypt the data at rest by using encryption for SageMaker geospatial capabilities"
        },
        {
          "key": "D",
          "textEn": "Associate appropriate AWS Identity and Access Management (IAM) roles with the SageMaker jobs",
          "textKo": "적절한 IAM 역할을 SageMaker 작업에 연결",
          "text": "Associate appropriate AWS Identity and Access Management (IAM) roles with the SageMaker jobs"
        }
      ],
      "answerKey": "B",
      "answerText": "Run SageMaker training and Inference by using network Isolation"
    },
    {
      "id": 91,
      "sourceNumber": 91,
      "title": "Question 91",
      "promptKo": "ML 연구팀이 커스텀 ML 모델을 개발했습니다.\n모델 산출물(artifacts)은 다른 팀과 공유되어 제품 및 서비스에 통합됩니다.\nML 팀은 모델 학습 코드와 데이터를 보유하고 있습니다.\nML 팀은 모델을 감사(audit)할 수 있는 메커니즘을 구축하려고 합니다.\n커스텀 ML 모델을 배포할 때 사용할 솔루션은 무엇입니까?",
      "promptEn": "An ML research team develops custom ML models. The model artifacts are shared with other teams for integration into products and services. The ML team retains the model training code and data. The ML team wants to build a mechanism that the ML team can use to audit models.\nWhich solution should the ML team use when publishing the custom ML models?",
      "explanation": [
        "- SageMaker Model Cards는 모델의 의도된 사용, 학습/추론 데이터, 평가 지표 등을 포함해 모델 감사와 투명성을 제공"
      ],
      "wrongExplanations": [
        "- A -> 단순 문서, 구조화되지 않아 감사 용도로 부적합",
        "- B -> AI Service Cards는 AWS 내부 서비스용, 사용자 정의 모델과는 관련 낮음",
        "- D -> 코드만 관리, 모델 사용 및 의도 정보 부족"
      ],
      "glossary": [
        "- Model Card: ML 모델의 목적, 성능, 한계, 사용 제한 등을 문서화한 표준화된 보고서",
        "- Audit: 모델의 투명성, 책임성, 준수 여부를 검증하는 과정"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Create documents with the relevant information. Store the documents in Amazon S3.",
          "textKo": "관련 정보를 문서로 작성하고 Amazon S3에 저장",
          "text": "Create documents with the relevant information. Store the documents in Amazon S3."
        },
        {
          "key": "B",
          "textEn": "Use AWS AI Service Cards for transparency and understanding models.",
          "textKo": "AWS AI Service Cards를 사용하여 모델 투명성 확보",
          "text": "Use AWS AI Service Cards for transparency and understanding models."
        },
        {
          "key": "C",
          "textEn": "Create Amazon SageMaker Model Cards with intended uses and training and inference details.",
          "textKo": "Amazon SageMaker Model Cards를 만들어 의도된 사용과 학습/추론 상세 정보 포함",
          "text": "Create Amazon SageMaker Model Cards with intended uses and training and inference details."
        },
        {
          "key": "D",
          "textEn": "Create model training scripts. Commit the model training scripts to a Git repository.",
          "textKo": "모델 학습 스크립트를 작성하고 Git 저장소에 커밋",
          "text": "Create model training scripts. Commit the model training scripts to a Git repository."
        }
      ],
      "answerKey": "C",
      "answerText": "Create Amazon SageMaker Model Cards with intended uses and training and inference details."
    },
    {
      "id": 92,
      "sourceNumber": 92,
      "title": "Question 92",
      "promptKo": "한 소프트웨어 회사가 고객용 개발 도구를 제작합니다.\nAI를 사용해 소프트웨어 개발 생산성을 높이려고 합니다.\n어떤 솔루션이 요구사항을 충족합니까?",
      "promptEn": "A software company builds tools for customers. The company wants to use AI to increase software development productivity.\nWhich solution will meet these requirements?",
      "explanation": [
        "- 개발 환경 내 코드 추천 AI를 설치하면 개발자 생산성을 직접 향상"
      ],
      "wrongExplanations": [
        "- A -> 코드 리뷰 생성은 제한적, 생산성 향상에 직접적 영향 적음",
        "- C -> 예측 도구는 문제 예방 중심, 개발 속도 향상 직접적 아님",
        "- D -> 코드 생성은 가능하지만 구현 난이도 높음, 바로 생산성 향상과 다름"
      ],
      "glossary": [
        "- Code Recommendation: 개발 중 자동으로 코드 작성 제안",
        "- NLP in Code: 자연어 입력을 코드로 변환하는 AI"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use a binary classification model to generate code reviews.",
          "textKo": "이진 분류 모델로 코드 리뷰 생성",
          "text": "Use a binary classification model to generate code reviews."
        },
        {
          "key": "B",
          "textEn": "Install code recommendation software in the company's developer tools.",
          "textKo": "회사 개발 도구에 코드 추천 소프트웨어 설치",
          "text": "Install code recommendation software in the company's developer tools."
        },
        {
          "key": "C",
          "textEn": "Install a code forecasting tool to predict potential code issues.",
          "textKo": "코드 문제를 예측하는 코드 예측 도구 설치",
          "text": "Install a code forecasting tool to predict potential code issues."
        },
        {
          "key": "D",
          "textEn": "Use a natural language processing (NLP) tool to generate code.",
          "textKo": "자연어 처리(NLP) 도구를 사용하여 코드 생성",
          "text": "Use a natural language processing (NLP) tool to generate code."
        }
      ],
      "answerKey": "B",
      "answerText": "Install code recommendation software in the company's developer tools."
    },
    {
      "id": 93,
      "sourceNumber": 93,
      "title": "Question 93",
      "promptKo": "한 소매점이 Amazon SageMaker DeepAR 예측 알고리즘을 사용하여 특정 제품의 향후 몇 주 수요를 예측하려고 합니다.\n어떤 유형의 데이터가 이 요구사항을 충족합니까?",
      "promptEn": "A retail store wants to predict the demand for a specific product for the next few weeks by using the Amazon SageMaker DeepAR forecasting algorithm.\nWhich type of data will meet this requirement?",
      "explanation": [
        "- DeepAR는 시계열(time series) 데이터를 기반으로 미래 값을 예측하는 알고리즘"
      ],
      "wrongExplanations": [
        "- A/B/D -> 시계열 예측에 적합하지 않음"
      ],
      "glossary": [
        "- Time Series Data: 시간 순서에 따라 수집된 데이터 (예: 매출, 온도, 재고)",
        "- DeepAR: Amazon SageMaker에서 제공하는 시계열 예측 딥러닝 모델"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Text data",
          "textKo": "텍스트 데이터",
          "text": "Text data"
        },
        {
          "key": "B",
          "textEn": "Image data",
          "textKo": "이미지 데이터",
          "text": "Image data"
        },
        {
          "key": "C",
          "textEn": "Time series data",
          "textKo": "시계열 데이터",
          "text": "Time series data"
        },
        {
          "key": "D",
          "textEn": "Binary data",
          "textKo": "이진 데이터",
          "text": "Binary data"
        }
      ],
      "answerKey": "C",
      "answerText": "Time series data"
    },
    {
      "id": 94,
      "sourceNumber": 94,
      "title": "Question 94",
      "promptKo": "한 대형 소매 은행이 ML 시스템을 개발하여 위험 관리팀이 다양한 인구 집단(demographics)에 대한 대출 할당을 결정하는 데 도움을 주려고 합니다.\n편향 없는(unbiased) ML 모델을 개발하려면 은행은 무엇을 해야 합니까?",
      "promptEn": "A large retail bank wants to develop an ML system to help the risk management team decide on loan allocations for different demographics.\nWhat must the bank do to develop an unbiased ML model?",
      "explanation": [
        "- 데이터 클래스 불균형을 확인하고 학습 과정에서 가중치 조정 등으로 편향 완화"
      ],
      "wrongExplanations": [
        "- A -> 데이터 축소는 모델 성능 저하 가능",
        "- B -> 역사적 결과 기준은 편향을 강화할 수 있음",
        "- C -> 그룹별 모델 생성은 복잡도 증가, 공정성 보장 아님"
      ],
      "glossary": [
        "- Class Imbalance: 특정 클래스 데이터가 다른 클래스에 비해 현저히 적거나 많은 상태",
        "- Unbiased ML Model: 특정 집단에 대해 편향되지 않은 예측을 하는 모델"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Reduce the size of the training dataset.",
          "textKo": "학습 데이터셋 크기 줄이기",
          "text": "Reduce the size of the training dataset."
        },
        {
          "key": "B",
          "textEn": "Ensure that the ML model predictions are consistent with historical results.",
          "textKo": "모델 예측을 과거 결과와 일치시키기",
          "text": "Ensure that the ML model predictions are consistent with historical results."
        },
        {
          "key": "C",
          "textEn": "Create a different ML model for each demographic group.",
          "textKo": "인구 집단별로 다른 ML 모델 생성",
          "text": "Create a different ML model for each demographic group."
        },
        {
          "key": "D",
          "textEn": "Measure class imbalance on the training dataset. Adapt the training process accordingly.",
          "textKo": "학습 데이터셋에서 클래스 불균형(class imbalance) 측정 후 학습 과정 조정",
          "text": "Measure class imbalance on the training dataset. Adapt the training process accordingly."
        }
      ],
      "answerKey": "D",
      "answerText": "Measure class imbalance on the training dataset. Adapt the training process accordingly."
    },
    {
      "id": 95,
      "sourceNumber": 95,
      "title": "Question 95",
      "promptKo": "어떤 프롬프트 기술이 prompt injection 공격으로부터 보호할 수 있습니까?",
      "promptEn": "Which prompting technique can protect against prompt injection attacks?",
      "explanation": [
        "- Zero-shot prompting은 모델이 추가 프롬프트를 신뢰하지 않고 처음 지침만 따르게 하여 공격 방지 가능"
      ],
      "wrongExplanations": [
        "- A -> 공격 목적의 기법",
        "- C/D -> 문제 해결 전략, 공격 방어와 직접적 관련 없음"
      ],
      "glossary": [
        "- Prompt Injection Attack: 외부 입력을 이용해 LLM 지침을 우회 또는 악용하는 공격",
        "- Zero-shot Prompting: 사전 예시 없이 모델에게 직접 지시"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Adversarial prompting",
          "textKo": "적대적 프롬프트(Adversarial prompting)",
          "text": "Adversarial prompting"
        },
        {
          "key": "B",
          "textEn": "Zero-shot prompting",
          "textKo": "제로샷 프롬프트(Zero-shot prompting)",
          "text": "Zero-shot prompting"
        },
        {
          "key": "C",
          "textEn": "Least-to-most prompting",
          "textKo": "최소-최대 프롬프트(Least-to-most prompting)",
          "text": "Least-to-most prompting"
        },
        {
          "key": "D",
          "textEn": "Chain-of-thought prompting",
          "textKo": "사고 과정 프롬프트(Chain-of-thought prompting)",
          "text": "Chain-of-thought prompting"
        }
      ],
      "answerKey": "B",
      "answerText": "Zero-shot prompting"
    },
    {
      "id": 96,
      "sourceNumber": 96,
      "title": "Question 96",
      "promptKo": "한 회사가 헬프데스크 질문에 답하기 위해 LLM을 파인튜닝했습니다.\n회사에서는 파인튜닝이 모델의 정확도를 향상시켰는지 확인하려고 합니다.\n평가에 사용할 지표는 무엇입니까?",
      "promptEn": "A company has fine-tuned a large language model (LLM) to answer questions for a help desk. The company wants to determine if the fine-tuning has enhanced the model's accuracy.\nWhich metric should the company use for the evaluation?",
      "explanation": [
        "- F1 점수는 정밀도와 재현율을 종합한 지표로, 분류 정확도 평가에 적합"
      ],
      "wrongExplanations": [
        "- A -> 정밀도만 고려, 재현율 무시",
        "- B -> 응답 속도, 정확도 평가와 관련 없음",
        "- D -> 음성 인식 등에서 사용, 텍스트 QA 정확도와 직접 관련 없음"
      ],
      "glossary": [
        "- Precision: 모델이 맞다고 예측한 항목 중 실제로 맞는 비율",
        "- Recall: 실제 정답 중 모델이 맞다고 예측한 비율",
        "- F1 Score: Precision과 Recall의 조화 평균"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Precision",
          "textKo": "정밀도(Precision)",
          "text": "Precision"
        },
        {
          "key": "B",
          "textEn": "Time to first token",
          "textKo": "첫 토큰 응답 시간(Time to first token)",
          "text": "Time to first token"
        },
        {
          "key": "C",
          "textEn": "F1 score",
          "textKo": "F1 점수(F1 score)",
          "text": "F1 score"
        },
        {
          "key": "D",
          "textEn": "Word error rate",
          "textKo": "단어 오류율(Word error rate)",
          "text": "Word error rate"
        }
      ],
      "answerKey": "C",
      "answerText": "F1 score"
    },
    {
      "id": 97,
      "sourceNumber": 97,
      "title": "Question 97",
      "promptKo": "한 회사가 Amazon Bedrock과 Stable Diffusion을 사용하여 RAG 기반으로 텍스트 설명을 바탕으로 제품 이미지를 생성합니다.\n결과물이 종종 랜덤하며 구체적인 세부 정보가 부족합니다.\n생성 이미지의 구체성을 높이려면 어떤 솔루션을 적용해야 합니까?",
      "promptEn": "A company is using Retrieval Augmented Generation (RAG) with Amazon Bedrock and Stable Diffusion to generate product images based on text descriptions. The results are often random and lack specific details. The company wants to increase the specificity of the generated images.\nWhich solution meets these requirements?",
      "explanation": [
        "- CFG 스케일을 높이면 모델이 프롬프트를 더 충실히 따르게 되어 구체적인 이미지 생성 가능"
      ],
      "wrongExplanations": [
        "- A -> 세부 정보 향상보다는 품질/수렴 안정화",
        "- B -> 특정 마스크 옵션으로 구체성 직접 향상 X",
        "- D -> 프롬프트 강도만으로 구체성 제한적"
      ],
      "glossary": [
        "- RAG: Retrieval Augmented Generation, 외부 지식 기반 검색 + 생성 모델 결합",
        "- CFG Scale: 모델이 프롬프트를 얼마나 따를지 조절하는 값"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Increase the number of generation steps.",
          "textKo": "생성 단계 수 증가",
          "text": "Increase the number of generation steps."
        },
        {
          "key": "B",
          "textEn": "Use the MASK_IMAGE_BLACK mask source option.",
          "textKo": "MASK_IMAGE_BLACK 마스크 옵션 사용",
          "text": "Use the MASK_IMAGE_BLACK mask source option."
        },
        {
          "key": "C",
          "textEn": "Increase the classifier-free guidance (CFG) scale.",
          "textKo": "Classifier-free guidance (CFG) 스케일 증가",
          "text": "Increase the classifier-free guidance (CFG) scale."
        },
        {
          "key": "D",
          "textEn": "Increase the prompt strength.",
          "textKo": "프롬프트 강도 증가",
          "text": "Increase the prompt strength."
        }
      ],
      "answerKey": "C",
      "answerText": "Increase the classifier-free guidance (CFG) scale."
    },
    {
      "id": 98,
      "sourceNumber": 98,
      "title": "Question 98",
      "promptKo": "한 회사가 고객 서비스 상담원에게 고객 문의에 대한 실시간 컨텍스트 응답을 제공하기 위해 LLM 기반 챗봇을 구현하려고 합니다.\n회사의 정책을 지식 기반으로 사용합니다.\n이 요구사항을 가장 비용 효율적으로 충족할 솔루션은 무엇입니까?",
      "promptEn": "A company wants to implement a large language model (LLM) based chatbot to provide customer service agents with real-time contextual responses to customers' inquiries. The company will use the company's policies as the knowledge base.\nWhich solution will meet these requirements MOST cost-effectively?",
      "explanation": [
        "- RAG는 기존 LLM을 그대로 두고 지식 기반에서 필요한 정보를 검색하여 실시간 응답 가능, 비용 효율적"
      ],
      "wrongExplanations": [
        "- A/B -> 모델 재학습/파인튜닝 비용 높음",
        "- D -> 사전 학습/증강 필요, 비용 효율성 낮음"
      ],
      "glossary": [
        "- RAG: 외부 데이터 검색 기반으로 모델 생성 결과를 보강",
        "- Knowledge Base: 정책, FAQ 등 참조용 데이터 저장소"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Retrain the LLM on the company policy data.",
          "textKo": "회사 정책 데이터로 LLM 재학습(Retrain)",
          "text": "Retrain the LLM on the company policy data."
        },
        {
          "key": "B",
          "textEn": "Fine-tune the LLM on the company policy data.",
          "textKo": "회사 정책 데이터로 LLM 파인튜닝(Fine-tune)",
          "text": "Fine-tune the LLM on the company policy data."
        },
        {
          "key": "C",
          "textEn": "Implement Retrieval Augmented Generation (RAG) for in-context responses.",
          "textKo": "RAG(Retrieval Augmented Generation) 구현",
          "text": "Implement Retrieval Augmented Generation (RAG) for in-context responses."
        },
        {
          "key": "D",
          "textEn": "Use pre-training and data augmentation on the company policy data.",
          "textKo": "회사 정책 데이터로 사전 학습 및 데이터 증강",
          "text": "Use pre-training and data augmentation on the company policy data."
        }
      ],
      "answerKey": "C",
      "answerText": "Implement Retrieval Augmented Generation (RAG) for in-context responses."
    },
    {
      "id": 99,
      "sourceNumber": 99,
      "title": "Question 99",
      "promptKo": "한 회사가 AWS Glue를 사용하여 새로운 솔루션을 만들고 싶습니다.\n회사는 AWS Glue 사용 경험이 거의 없습니다.\n회사가 AWS Glue를 사용할 수 있도록 도와줄 AWS 서비스는 무엇입니까?",
      "promptEn": "A company wants to create a new solution by using AWS Glue. The company has minimal programming experience with AWS Glue.\nWhich AWS service can help the company use AWS Glue?",
      "explanation": [
        "- Amazon Q Developer는 AWS 서비스를 시각적 인터페이스로 사용하여 프로그래밍 경험이 적어도 Glue를 쉽게 활용 가능"
      ],
      "wrongExplanations": [
        "- B/C/D -> 각각 다른 목적 서비스로 Glue 사용 보조 X"
      ],
      "glossary": [
        "- AWS Glue: 데이터 추출, 변환, 적재(ETL) 서비스",
        "- Amazon Q Developer: 코딩 없이 AWS 리소스를 활용할 수 있는 시각적 도구"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Q Developer",
          "textKo": "Amazon Q Developer",
          "text": "Amazon Q Developer"
        },
        {
          "key": "B",
          "textEn": "AWS Config",
          "textKo": "AWS Config",
          "text": "AWS Config"
        },
        {
          "key": "C",
          "textEn": "Amazon Personalize",
          "textKo": "Amazon Personalize",
          "text": "Amazon Personalize"
        },
        {
          "key": "D",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon Q Developer"
    },
    {
      "id": 100,
      "sourceNumber": 100,
      "title": "Question 100",
      "promptKo": "한 회사가 모바일 ML 앱을 개발 중입니다.\n휴대폰 카메라를 이용해 벌레 물린 자국을 진단하고 치료하는 앱입니다.\n회사는 다양한 성별, 인종, 지리적 위치에서 수집한 벌레 물린 사진 데이터셋으로 이미지 분류 모델을 학습하려고 합니다.\n이 시나리오에서 회사가 보여주는 책임 있는 AI 원칙은 무엇입니까?",
      "promptEn": "A company is developing a mobile ML app that uses a phone's camera to diagnose and treat insect bites. The company wants to train an image classification model by using a diverse dataset of insect bite photos from different genders, ethnicities, and geographic locations around the world.\nWhich principle of responsible AI does the company demonstrate in this scenario?",
      "explanation": [
        "- 다양한 데이터 확보로 특정 집단 편향을 방지 -> 공정성(Fairness)"
      ],
      "wrongExplanations": [
        "- B -> 모델 설명 가능성과 관련",
        "- C -> 정책, 관리 체계 관련",
        "- D -> 모델 및 프로세스 공개 관련"
      ],
      "glossary": [
        "- Fairness: 모델이 특정 집단에 대해 편향되지 않도록 학습 및 평가",
        "- Responsible AI: 윤리적이고 신뢰할 수 있는 AI 개발 및 운영"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Fairness",
          "textKo": "공정성(Fairness)",
          "text": "Fairness"
        },
        {
          "key": "B",
          "textEn": "Explainability",
          "textKo": "설명 가능성(Explainability)",
          "text": "Explainability"
        },
        {
          "key": "C",
          "textEn": "Governance",
          "textKo": "거버넌스(Governance)",
          "text": "Governance"
        },
        {
          "key": "D",
          "textEn": "Transparency",
          "textKo": "투명성(Transparency)",
          "text": "Transparency"
        }
      ],
      "answerKey": "A",
      "answerText": "Fairness"
    },
    {
      "id": 101,
      "sourceNumber": 101,
      "title": "Question 101",
      "promptKo": "한 회사가 대출 승인을 위한 ML 모델을 개발하고 있습니다.\n회사는 모델 내 편향을 탐지하고, 예측 결과에 대한 설명이 가능해야 합니다.\n이 요구사항을 충족할 수 있는 솔루션은 무엇입니까?",
      "promptEn": "A company is developing an ML model to make loan approvals. The company must implement a solution to detect bias in the model. The company must also be able to explain the model's predictions.\nWhich solution will meet these requirements?",
      "explanation": [
        "- SageMaker Clarify는 모델 편향을 탐지하고 예측 결과의 설명 가능성을 제공합니다."
      ],
      "wrongExplanations": [
        "- B -> 데이터 전처리 도구로 편향 감지나 설명 가능성과 직접적인 관련이 없음",
        "- C -> 모델 문서화용 도구로 분석 기능은 제한적",
        "- D -> 서비스별 고지 카드로 분석 기능 제공 X"
      ],
      "glossary": [
        "- SageMaker Clarify: ML 모델의 편향 및 설명 가능성을 분석하는 도구"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker Clarify",
          "textKo": "Amazon SageMaker Clarify",
          "text": "Amazon SageMaker Clarify"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker Data Wrangler",
          "textKo": "Amazon SageMaker Data Wrangler",
          "text": "Amazon SageMaker Data Wrangler"
        },
        {
          "key": "C",
          "textEn": "Amazon SageMaker Model Cards",
          "textKo": "Amazon SageMaker Model Cards",
          "text": "Amazon SageMaker Model Cards"
        },
        {
          "key": "D",
          "textEn": "AWS AI Service Cards",
          "textKo": "AWS AI Service Cards",
          "text": "AWS AI Service Cards"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon SageMaker Clarify"
    },
    {
      "id": 102,
      "sourceNumber": 102,
      "title": "Question 102",
      "promptKo": "회사는 Amazon Bedrock을 사용하여 텍스트 요약 생성 모델을 개발했습니다.\n자동 모델 평가 기능을 사용할 예정입니다.\n모델의 정확도를 평가하는 데 적절한 지표는 무엇입니까?",
      "promptEn": "A company has developed a generative text summarization model by using Amazon Bedrock. The company will use Amazon Bedrock automatic model evaluation capabilities.\nWhich metric should the company use to evaluate the accuracy of the model?",
      "explanation": [
        "- BERTScore는 생성된 텍스트와 참조 텍스트 간 의미 유사도를 측정하는 데 효과적입니다."
      ],
      "wrongExplanations": [
        "- A/B -> 분류 문제에 적합",
        "- D -> 널리 사용되지 않는 지표"
      ],
      "glossary": [
        "- BERTScore: 텍스트 생성 모델의 의미 유사도 평가 지표"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Area Under the ROC Curve (AUC) score",
          "textKo": "ROC 곡선 아래 면적 (AUC)",
          "text": "Area Under the ROC Curve (AUC) score"
        },
        {
          "key": "B",
          "textEn": "F1 score",
          "textKo": "F1 점수",
          "text": "F1 score"
        },
        {
          "key": "C",
          "textEn": "BERTScore",
          "textKo": "BERTScore",
          "text": "BERTScore"
        },
        {
          "key": "D",
          "textEn": "Real world knowledge (RWK) score",
          "textKo": "실제 세계 지식 점수 (RWK)",
          "text": "Real world knowledge (RWK) score"
        }
      ],
      "answerKey": "C",
      "answerText": "BERTScore"
    },
    {
      "id": 103,
      "sourceNumber": 103,
      "title": "Question 103",
      "promptKo": "AI 실무자가 꽃잎 길이, 꽃잎 너비, 꽃받침 길이, 꽃받침 너비를 기반으로 꽃의 종류를 분류하고자 합니다.\n적합한 알고리즘은 무엇입니까?",
      "promptEn": "An AI practitioner wants to predict the classification of flowers based on petal length, petal width, sepal length, and sepal width.\nWhich algorithm meets these requirements?",
      "explanation": [
        "- k-NN은 지도 학습 분류 알고리즘으로, 꽃 데이터 분류에 적합합니다."
      ],
      "wrongExplanations": [
        "- B -> 비지도 클러스터링",
        "- C -> 시계열 예측",
        "- D -> 연속형 예측"
      ],
      "glossary": [
        "- k-NN: 입력 데이터와 가장 가까운 k개의 이웃을 기반으로 분류하는 지도 학습 알고리즘"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "K-nearest neighbors (k-NN)",
          "textKo": "K-최근접 이웃 (k-NN)",
          "text": "K-nearest neighbors (k-NN)"
        },
        {
          "key": "B",
          "textEn": "K-means",
          "textKo": "K-평균 (K-means)",
          "text": "K-means"
        },
        {
          "key": "C",
          "textEn": "Autoregressive Integrated Moving Average (ARIMA)",
          "textKo": "ARIMA",
          "text": "Autoregressive Integrated Moving Average (ARIMA)"
        },
        {
          "key": "D",
          "textEn": "Linear regression",
          "textKo": "선형 회귀",
          "text": "Linear regression"
        }
      ],
      "answerKey": "A",
      "answerText": "K-nearest neighbors (k-NN)"
    },
    {
      "id": 104,
      "sourceNumber": 104,
      "title": "Question 104",
      "promptKo": "회사는 Amazon Bedrock에서 생성형 AI 애플리케이션용 사용자 정의 모델을 사용하고 있습니다.\n모델 커스터마이징 작업에서 생성된 아티팩트를 회사 관리 암호화 키로 암호화하려고 합니다.\n어떤 서비스가 적합합니까?",
      "promptEn": "A company is using custom models in Amazon Bedrock for a generative AI application. The company wants to use a company managed encryption key to encrypt the model artifacts that the model customization jobs create.\nWhich AWS service meets these requirements?",
      "explanation": [
        "- AWS KMS는 사용자 정의 키를 관리하고 암호화하는 데 사용됩니다."
      ],
      "wrongExplanations": [
        "- B -> 보안 취약점 분석",
        "- C -> 민감 정보 탐지",
        "- D -> 비밀 정보 저장"
      ],
      "glossary": [
        "- AWS KMS: 암호화 키 관리 서비스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "AWS Key Management Service (AWS KMS)",
          "textKo": "AWS KMS",
          "text": "AWS Key Management Service (AWS KMS)"
        },
        {
          "key": "B",
          "textEn": "Amazon Inspector",
          "textKo": "Amazon Inspector",
          "text": "Amazon Inspector"
        },
        {
          "key": "C",
          "textEn": "Amazon Macie",
          "textKo": "Amazon Macie",
          "text": "Amazon Macie"
        },
        {
          "key": "D",
          "textEn": "AWS Secrets Manager",
          "textKo": "AWS Secrets Manager",
          "text": "AWS Secrets Manager"
        }
      ],
      "answerKey": "A",
      "answerText": "AWS Key Management Service (AWS KMS)"
    },
    {
      "id": 105,
      "sourceNumber": 105,
      "title": "Question 105",
      "promptKo": "한 회사가 자연어로 작성된 코드 주석을 기반으로 코드를 생성하기 위해 대형 언어 모델(LLM)을 사용하려고 합니다.\n이 요구사항을 충족하는 LLM 기능은 무엇입니까?",
      "promptEn": "A company wants to use large language models (LLMs) to produce code from natural language code comments.\nWhich LLM feature meets these requirements?",
      "explanation": [
        "- 텍스트 생성은 LLM이 주어진 입력(예: 주석)을 바탕으로 새로운 코드를 생성하는 기능입니다."
      ],
      "wrongExplanations": [
        "- A -> 요약을 위한 기능",
        "- C -> 기존 문장의 일부를 채우는 데 초점",
        "- D -> 입력 텍스트 분류용"
      ],
      "glossary": [
        "- Text Generation: 자연어 또는 코드 생성 등 창의적인 출력 생성"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Text summarization",
          "textKo": "텍스트 요약",
          "text": "Text summarization"
        },
        {
          "key": "B",
          "textEn": "Text generation",
          "textKo": "텍스트 생성",
          "text": "Text generation"
        },
        {
          "key": "C",
          "textEn": "Text completion",
          "textKo": "텍스트 완성",
          "text": "Text completion"
        },
        {
          "key": "D",
          "textEn": "Text classification",
          "textKo": "텍스트 분류",
          "text": "Text classification"
        }
      ],
      "answerKey": "B",
      "answerText": "Text generation"
    },
    {
      "id": 106,
      "sourceNumber": 106,
      "title": "Question 106",
      "promptKo": "회사는 외국어 학습을 돕는 모바일 앱을 출시하고 있습니다.\n이 앱은 LLM을 활용해 텍스트를 더 읽기 쉽게 만들어 줍니다.\n회사는 다양한 텍스트 데이터와 함께 가독성이 높은 예시도 수집했습니다.\nLLM이 이러한 예시와 유사한 출력을 생성하는지 평가하려고 합니다.\n어떤 지표를 사용하는 것이 가장 적절합니까?",
      "promptEn": "A company is introducing a mobile app that helps users learn foreign languages.\nThe app makes text more coherent by calling a large language model (LLM).\nThe company collected a diverse dataset of text and supplemented the dataset with examples of more readable versions.\nThe company wants the LLM output to resemble the provided examples.\nWhich metric should the company use to assess whether the LLM meets these requirements?",
      "explanation": [
        "- ROUGE는 생성된 요약 또는 재작성 결과가 참조 텍스트와 얼마나 유사한지를 측정합니다."
      ],
      "wrongExplanations": [
        "- A -> 모델 학습 중 사용되는 지표",
        "- B -> 입력에 대한 의미 보존과는 다른 개념",
        "- D -> 성능 지표이지 품질 지표는 아님"
      ],
      "glossary": [
        "- ROUGE Score: 텍스트 생성 품질 평가 지표 (요약, 재작성 등에서 사용)"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Value of the loss function",
          "textKo": "손실 함수 값",
          "text": "Value of the loss function"
        },
        {
          "key": "B",
          "textEn": "Semantic robustness",
          "textKo": "의미적 강건성",
          "text": "Semantic robustness"
        },
        {
          "key": "C",
          "textEn": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE) score",
          "textKo": "ROUGE 점수",
          "text": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE) score"
        },
        {
          "key": "D",
          "textEn": "Latency of the text generation",
          "textKo": "텍스트 생성 지연 시간",
          "text": "Latency of the text generation"
        }
      ],
      "answerKey": "C",
      "answerText": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE) score"
    },
    {
      "id": 107,
      "sourceNumber": 107,
      "title": "Question 107",
      "promptKo": "회사는 파운데이션 모델(FM)이 프롬프트와 관련 없는 이미지를 생성한다는 점을 발견했습니다.\n이 문제를 줄이기 위해 프롬프트 기법을 수정하고자 합니다.\n어떤 기법이 가장 적절합니까?",
      "promptEn": "A company notices that its foundation model (FM) generates images that are unrelated to the prompts.\nThe company wants to modify the prompt techniques to decrease unrelated images.\nWhich solution meets these requirements?",
      "explanation": [
        "- 네거티브 프롬프트는 생성에서 제외하고 싶은 요소를 명시함으로써, 관련 없는 이미지를 줄이는 데 효과적입니다."
      ],
      "wrongExplanations": [
        "- A -> 맥락 없이 단순 요청",
        "- C -> 기본 설명만 포함",
        "- D -> 관련 없는 결과 유도 가능"
      ],
      "glossary": [
        "- Negative Prompt: 원하지 않는 요소를 명시하여 출력에서 제외시키는 프롬프트 구성 방식"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use zero-shot prompts.",
          "textKo": "제로샷 프롬프트 사용",
          "text": "Use zero-shot prompts."
        },
        {
          "key": "B",
          "textEn": "Use negative prompts.",
          "textKo": "네거티브 프롬프트 사용",
          "text": "Use negative prompts."
        },
        {
          "key": "C",
          "textEn": "Use positive prompts.",
          "textKo": "포지티브 프롬프트 사용",
          "text": "Use positive prompts."
        },
        {
          "key": "D",
          "textEn": "Use ambiguous prompts.",
          "textKo": "모호한 프롬프트 사용",
          "text": "Use ambiguous prompts."
        }
      ],
      "answerKey": "B",
      "answerText": "Use negative prompts."
    },
    {
      "id": 108,
      "sourceNumber": 108,
      "title": "Question 108",
      "promptKo": "회사는 LLM을 사용해 각 제품의 특징에 맞는 간결하고 구체적인 설명을 생성하려고 합니다.\n이 요구사항에 가장 적합한 프롬프트 엔지니어링 기법은 무엇입니까?",
      "promptEn": "A company wants to use a large language model (LLM) to generate concise, feature-specific descriptions for the company's products.\nWhich prompt engineering technique meets these requirements?",
      "explanation": [
        "- 제품별로 상세한 프롬프트를 제공하면 정확하고 맞춤형 설명을 생성할 수 있습니다."
      ],
      "wrongExplanations": [
        "- A -> 비효율적이고 정확도 낮음",
        "- B -> 일반화된 결과 가능성",
        "- C -> 창의성은 높지만 정확도 떨어질 수 있음"
      ],
      "glossary": [
        "- Prompt Engineering: 원하는 출력 결과를 유도하기 위해 프롬프트를 구조화하는 기술"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Create one prompt that covers all products. Edit the responses to make the responses more specific, concise, and tailored to each product.",
          "textKo": "하나의 프롬프트로 모든 제품을 커버하고 결과를 수동 수정",
          "text": "Create one prompt that covers all products. Edit the responses to make the responses more specific, concise, and tailored to each product."
        },
        {
          "key": "B",
          "textEn": "Create prompts for each product category that highlight the key features. Include the desired output format and length for each prompt response.",
          "textKo": "카테고리별 프롬프트 생성, 출력 포맷 및 길이 명시",
          "text": "Create prompts for each product category that highlight the key features. Include the desired output format and length for each prompt response."
        },
        {
          "key": "C",
          "textEn": "Include a diverse range of product features in each prompt to generate creative and unique descriptions.",
          "textKo": "다양한 특징을 포함해 창의적 설명 생성",
          "text": "Include a diverse range of product features in each prompt to generate creative and unique descriptions."
        },
        {
          "key": "D",
          "textEn": "Provide detailed, product-specific prompts to ensure precise and customized descriptions.",
          "textKo": "상세하고 제품별 맞춤 프롬프트 작성",
          "text": "Provide detailed, product-specific prompts to ensure precise and customized descriptions."
        }
      ],
      "answerKey": "D",
      "answerText": "Provide detailed, product-specific prompts to ensure precise and customized descriptions."
    },
    {
      "id": 109,
      "sourceNumber": 109,
      "title": "Question 109",
      "promptKo": "회사는 고객 이탈 예측을 위한 ML 모델을 개발 중입니다.\n모델은 학습 데이터에서는 좋은 성능을 보이나, 새로운 데이터에서는 정확도가 낮습니다.\n이 문제를 해결할 수 있는 방법은 무엇입니까?",
      "promptEn": "A company is developing an ML model to predict customer churn.\nThe model performs well on the training dataset but does not accurately predict churn for new data.\nWhich solution will resolve this issue?",
      "explanation": [
        "- 모델이 과적합되었을 가능성이 높으며, 복잡도를 줄이면 일반화 성능이 향상됩니다."
      ],
      "wrongExplanations": [
        "- A -> 과적합 심화",
        "- C -> 오히려 노이즈 증가 가능",
        "- D -> 과적합 위험 증가"
      ],
      "glossary": [
        "- Regularization: 모델의 복잡도를 제어하여 과적합 방지하는 기법"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Decrease the regularization parameter to increase model complexity.",
          "textKo": "정규화 파라미터 감소하여 모델 복잡도 증가",
          "text": "Decrease the regularization parameter to increase model complexity."
        },
        {
          "key": "B",
          "textEn": "Increase the regularization parameter to decrease model complexity.",
          "textKo": "정규화 파라미터 증가하여 모델 복잡도 감소",
          "text": "Increase the regularization parameter to decrease model complexity."
        },
        {
          "key": "C",
          "textEn": "Add more features to the input data.",
          "textKo": "입력 데이터에 더 많은 피처 추가",
          "text": "Add more features to the input data."
        },
        {
          "key": "D",
          "textEn": "Train the model for more epochs.",
          "textKo": "더 많은 에폭으로 모델 학습",
          "text": "Train the model for more epochs."
        }
      ],
      "answerKey": "B",
      "answerText": "Increase the regularization parameter to decrease model complexity."
    },
    {
      "id": 110,
      "sourceNumber": 110,
      "title": "Question 110",
      "promptKo": "회사는 고객에게 대화형 검색 경험을 제공하기 위해 지능형 에이전트를 구현하고 있습니다.\n생성형 AI 모델에서 나온 임베딩을 벡터 형태로 저장하고 쿼리할 수 있는 데이터베이스 서비스가 필요합니다.\n어떤 AWS 서비스가 적합합니까?",
      "promptEn": "A company is implementing intelligent agents to provide conversational search experiences for its customers.\nThe company needs a database service that will support storage and queries of embeddings from a generative AI model as vectors in the database.\nWhich AWS service will meet these requirements?",
      "explanation": [
        "- Amazon Aurora PostgreSQL은 벡터 검색 기능(pgvector)을 지원하며, 생성형 AI와의 연동에 적합합니다."
      ],
      "wrongExplanations": [
        "- A -> 정형 데이터 쿼리 전용",
        "- C -> 분석 중심",
        "- D -> 분산 처리용 빅데이터 플랫폼"
      ],
      "glossary": [
        "- pgvector: PostgreSQL에서 벡터 데이터를 저장"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Athena",
          "textKo": "Amazon Athena",
          "text": "Amazon Athena"
        },
        {
          "key": "B",
          "textEn": "Amazon Aurora PostgreSQL",
          "textKo": "Amazon Aurora PostgreSQL",
          "text": "Amazon Aurora PostgreSQL"
        },
        {
          "key": "C",
          "textEn": "Amazon Redshift",
          "textKo": "Amazon Redshift",
          "text": "Amazon Redshift"
        },
        {
          "key": "D",
          "textEn": "Amazon EMR",
          "textKo": "Amazon EMR",
          "text": "Amazon EMR"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon Aurora PostgreSQL"
    },
    {
      "id": 111,
      "sourceNumber": 111,
      "title": "Question 111",
      "promptKo": "한 금융기관이 파운데이션 모델(FM)을 사용하여 대출 승인 결정을 내리는 AI 솔루션을 구축하고 있습니다.\n보안 및 감사 목적상, AI의 결정은 설명 가능해야 합니다.\nAI의 결정 설명 가능성과 관련된 요소는 무엇입니까?",
      "promptEn": "A financial institution is building an AI solution to make loan approval decisions by using a foundation model (FM). For security and audit purposes, the company needs the AI solution's decisions to be explainable.\nWhich factor relates to the explainability of the AI solution's decisions?",
      "explanation": [
        "- 모델의 복잡도가 높을수록 내부 작동 방식이 불투명해질 수 있어, 설명 가능성에 직접적인 영향을 미칩니다."
      ],
      "wrongExplanations": [
        "- B -> 학습 시간은 설명성과 직접적인 관련이 없음",
        "- C -> 하이퍼파라미터 수는 모델 튜닝과 관련",
        "- D -> 배포 시간은 시스템 운영과 관련"
      ],
      "glossary": [
        "- Explainability (설명 가능성): AI 모델이 어떻게 특정 결정을 내렸는지 사람이 이해할 수 있도록 설명할 수 있는 능력"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Model complexity",
          "textKo": "모델 복잡도",
          "text": "Model complexity"
        },
        {
          "key": "B",
          "textEn": "Training time",
          "textKo": "학습 시간",
          "text": "Training time"
        },
        {
          "key": "C",
          "textEn": "Number of hyperparameters",
          "textKo": "하이퍼파라미터 수",
          "text": "Number of hyperparameters"
        },
        {
          "key": "D",
          "textEn": "Deployment time",
          "textKo": "배포 시간",
          "text": "Deployment time"
        }
      ],
      "answerKey": "A",
      "answerText": "Model complexity"
    },
    {
      "id": 112,
      "sourceNumber": 112,
      "title": "Question 112",
      "promptKo": "한 제약회사가 신약에 대한 사용자 리뷰를 분석하고, 각 약물에 대한 간결한 요약을 제공하고자 합니다.\n어떤 솔루션이 이 요구사항을 충족합니까?",
      "promptEn": "A pharmaceutical company wants to analyze user reviews of new medications and provide a concise overview for each medication.\nWhich solution meets these requirements?",
      "explanation": [
        "- Amazon Bedrock의 대형 언어 모델(LLM)은 텍스트 데이터를 요약하고 문맥을 이해하는 데 적합합니다."
      ],
      "wrongExplanations": [
        "- A -> 시계열 분석은 리뷰 요약과 무관",
        "- C -> 분류는 요약이 아님",
        "- D -> Rekognition은 이미지 분석 도구"
      ],
      "glossary": [
        "- LLM (Large Language Model): 대규모 데이터로 훈련된 자연어 처리 모델로, 텍스트 요약 및 생성에 적합"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Create a time-series forecasting model to analyze the medication reviews by using Amazon Personalize.",
          "textKo": "Amazon Personalize로 시계열 예측 모델 생성",
          "text": "Create a time-series forecasting model to analyze the medication reviews by using Amazon Personalize."
        },
        {
          "key": "B",
          "textEn": "Create medication review summaries by using Amazon Bedrock large language models (LLMs).",
          "textKo": "Amazon Bedrock LLM을 사용해 리뷰 요약",
          "text": "Create medication review summaries by using Amazon Bedrock large language models (LLMs)."
        },
        {
          "key": "C",
          "textEn": "Create a classification model that categorizes medications into different groups by using Amazon SageMaker.",
          "textKo": "Amazon SageMaker로 분류 모델 생성",
          "text": "Create a classification model that categorizes medications into different groups by using Amazon SageMaker."
        },
        {
          "key": "D",
          "textEn": "Create medication review summaries by using Amazon Rekognition.",
          "textKo": "Amazon Rekognition을 사용해 리뷰 요약",
          "text": "Create medication review summaries by using Amazon Rekognition."
        }
      ],
      "answerKey": "B",
      "answerText": "Create medication review summaries by using Amazon Bedrock large language models (LLMs)."
    },
    {
      "id": 113,
      "sourceNumber": 113,
      "title": "Question 113",
      "promptKo": "회사는 직원들이 잠재 고객에게 연락할 수 있도록 리드 우선순위 지정 애플리케이션을 만들고자 합니다.\n이 애플리케이션은 직원들이 모델에 사용된 변수의 가중치를 도메인 지식에 따라 조정할 수 있어야 합니다.\n이 요구를 충족하는 모델 유형은 무엇입니까?",
      "promptEn": "A company wants to build a lead prioritization application for its employees to contact potential customers. The application must give employees the ability to view and adjust the weights assigned to different variables in the model based on domain knowledge and expertise.\nWhich ML model type meets these requirements?",
      "explanation": [
        "- 로지스틱 회귀는 해석 가능성이 높으며 가중치를 쉽게 조정할 수 있어 도메인 전문가가 직접 개입하기 용이합니다."
      ],
      "wrongExplanations": [
        "- B, D -> 딥러닝 기반 모델은 설명력 낮고 조정 어려움",
        "- C -> k-NN은 가중치 조정 개념이 없음"
      ],
      "glossary": [
        "- Logistic Regression: 이진 분류를 위해 사용되며 변수 중요도를 쉽게 해석하고 조정 가능"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Logistic regression model",
          "textKo": "로지스틱 회귀 모델",
          "text": "Logistic regression model"
        },
        {
          "key": "B",
          "textEn": "Deep learning model built on principal components",
          "textKo": "주성분 기반 딥러닝 모델",
          "text": "Deep learning model built on principal components"
        },
        {
          "key": "C",
          "textEn": "K-nearest neighbors (k-NN) model",
          "textKo": "k-NN 모델",
          "text": "K-nearest neighbors (k-NN) model"
        },
        {
          "key": "D",
          "textEn": "Neural network",
          "textKo": "신경망",
          "text": "Neural network"
        }
      ],
      "answerKey": "A",
      "answerText": "Logistic regression model"
    },
    {
      "id": 114,
      "sourceNumber": 114,
      "title": "Question 114",
      "promptKo": "HOTSPOT - 회사는 ML 애플리케이션을 개발하려고 합니다.\n다음 단계 중 올바른 순서를 선택하여 잘 구성된 ML 워크로드를 개발하세요.\n각 단계는 한 번씩만 선택됩니다.",
      "promptEn": "HOTSPOT - A company wants to build an ML application.\nSelect and order the correct steps from the following list to develop a well-architected ML workload.\nEach step should be selected one time.",
      "explanation": [
        "- 문제 정의",
        "- 데이터 수집",
        "- 데이터 전처리",
        "- 모델 학습",
        "- 모델 평가",
        "- 배포 및 모니터링"
      ],
      "wrongExplanations": [],
      "glossary": [
        "- ML Lifecycle: 머신러닝 모델을 설계, 개발, 배포, 유지하는 전체 단계"
      ],
      "type": "ordering",
      "sequenceItems": [
        "문제 정의",
        "데이터 수집",
        "데이터 전처리",
        "모델 학습",
        "모델 평가",
        "배포 및 모니터링"
      ]
    },
    {
      "id": 115,
      "sourceNumber": 115,
      "title": "Question 115",
      "promptKo": "파운데이션 모델(FM)이 비즈니스 목표를 효과적으로 달성하는지 판단하려면 어떤 전략이 필요합니까?",
      "promptEn": "Which strategy will determine if a foundation model (FM) effectively meets business objectives?",
      "explanation": [
        "- 비즈니스 목표 달성 여부는 모델이 특정 사용 사례와 얼마나 잘 정렬되는지에 따라 평가됩니다."
      ],
      "wrongExplanations": [
        "- A -> 일반 성능 평가지표일 뿐 비즈니스 목표와 직접적 연관 없음",
        "- B -> 구조 분석은 성능 튜닝 목적",
        "- D -> 효율성 측정일 뿐 목표 달성과는 무관"
      ],
      "glossary": [
        "- Use Case Alignment: 실제 비즈니스 요구사항에 모델이 얼마나 적합한지 평가하는 과정"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Evaluate the model's performance on benchmark datasets.",
          "textKo": "벤치마크 데이터셋에서 모델 성능 평가",
          "text": "Evaluate the model's performance on benchmark datasets."
        },
        {
          "key": "B",
          "textEn": "Analyze the model's architecture and hyperparameters.",
          "textKo": "모델 구조 및 하이퍼파라미터 분석",
          "text": "Analyze the model's architecture and hyperparameters."
        },
        {
          "key": "C",
          "textEn": "Assess the model's alignment with specific use cases.",
          "textKo": "특정 사용 사례와의 정렬 여부 평가",
          "text": "Assess the model's alignment with specific use cases."
        },
        {
          "key": "D",
          "textEn": "Measure the computational resources required for model deployment.",
          "textKo": "모델 배포 시 필요한 컴퓨팅 자원 측정",
          "text": "Measure the computational resources required for model deployment."
        }
      ],
      "answerKey": "C",
      "answerText": "Assess the model's alignment with specific use cases."
    },
    {
      "id": 116,
      "sourceNumber": 116,
      "title": "Question 116",
      "promptKo": "회사는 다양한 동물 이미지를 분류하는 ML 모델을 훈련시키려 합니다.\n이미 라벨이 지정된 대규모 데이터셋이 있으며, 추가 라벨링은 하지 않을 예정입니다.\n이 경우 어떤 학습 방식이 적절합니까?",
      "promptEn": "A company needs to train an ML model to classify images of different types of animals. The company has a large dataset of labeled images and will not label more data.\nWhich type of learning should the company use to train the model?",
      "explanation": [
        "- 라벨이 지정된 데이터가 있다면, 지도 학습(supervised learning)을 통해 정확한 분류 모델을 훈련시킬 수 있습니다."
      ],
      "wrongExplanations": [
        "- B -> 비지도 학습은 라벨이 없는 경우 사용",
        "- C -> 행동 기반 최적화 학습으로 이미지 분류와는 부적합",
        "- D -> 추가 라벨링이 필요한 경우에 사용"
      ],
      "glossary": [
        "- Supervised Learning: 입력과 정답(label)을 포함하는 데이터로 학습하는 방법"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Supervised learning",
          "textKo": "지도 학습",
          "text": "Supervised learning"
        },
        {
          "key": "B",
          "textEn": "Unsupervised learning",
          "textKo": "비지도 학습",
          "text": "Unsupervised learning"
        },
        {
          "key": "C",
          "textEn": "Reinforcement learning",
          "textKo": "강화 학습",
          "text": "Reinforcement learning"
        },
        {
          "key": "D",
          "textEn": "Active learning",
          "textKo": "능동 학습",
          "text": "Active learning"
        }
      ],
      "answerKey": "A",
      "answerText": "Supervised learning"
    },
    {
      "id": 117,
      "sourceNumber": 117,
      "title": "Question 117",
      "promptKo": "ML 라이프사이클의 어떤 단계에서 규정 준수 및 법적 요구사항을 정의합니까?",
      "promptEn": "Which phase of the ML lifecycle determines compliance and regulatory requirements?",
      "explanation": [
        "- 규정 준수 요구사항은 비즈니스 목표를 설정할 때부터 고려되어야 합니다."
      ],
      "wrongExplanations": [
        "- A -> 데이터 처리 기술로 규정과 무관",
        "- B -> 기술적 훈련 과정",
        "- C -> 수집 시 법적 고려가 있지만, 정의는 아님"
      ],
      "glossary": [
        "- Compliance Requirements: 데이터와 모델이 법적&middot;윤리적 기준을 충족해야 하는 요구사항"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Feature engineering",
          "textKo": "피처 엔지니어링",
          "text": "Feature engineering"
        },
        {
          "key": "B",
          "textEn": "Model training",
          "textKo": "모델 학습",
          "text": "Model training"
        },
        {
          "key": "C",
          "textEn": "Data collection",
          "textKo": "데이터 수집",
          "text": "Data collection"
        },
        {
          "key": "D",
          "textEn": "Business goal identification",
          "textKo": "비즈니스 목표 식별",
          "text": "Business goal identification"
        }
      ],
      "answerKey": "D",
      "answerText": "Business goal identification"
    },
    {
      "id": 118,
      "sourceNumber": 118,
      "title": "Question 118",
      "promptKo": "한 외식 업체가 일일 음식 낭비를 줄이고 매출을 증가시키기 위해 ML 모델을 개발하고자 합니다.\n모델 정확도를 지속적으로 개선해야 합니다.\n이 목적에 가장 적합한 솔루션은 무엇입니까?",
      "promptEn": "A food service company wants to develop an ML model to help decrease daily food waste and increase sales revenue.\nThe company needs to continuously improve the model's accuracy.\nWhich solution meets these requirements?",
      "explanation": [
        "- SageMaker는 최신 데이터를 지속적으로 반영하여 모델 정확도를 개선하는 데 적합한 플랫폼입니다."
      ],
      "wrongExplanations": [
        "- B -> Personalize는 추천 엔진용",
        "- C -> 모니터링 도구이지 ML 훈련 도구는 아님",
        "- D -> 이미지 인식 용도"
      ],
      "glossary": [
        "- Iterative Training: 모델을 지속적으로 개선하기 위해 반복적으로 새 데이터로 학습하는 방식"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use Amazon SageMaker and iterate with newer data.",
          "textKo": "Amazon SageMaker 사용 및 최신 데이터로 반복 학습",
          "text": "Use Amazon SageMaker and iterate with newer data."
        },
        {
          "key": "B",
          "textEn": "Use Amazon Personalize and iterate with historical data.",
          "textKo": "Amazon Personalize 사용 및 과거 데이터로 반복",
          "text": "Use Amazon Personalize and iterate with historical data."
        },
        {
          "key": "C",
          "textEn": "Use Amazon CloudWatch to analyze customer orders.",
          "textKo": "Amazon CloudWatch로 주문 데이터 분석",
          "text": "Use Amazon CloudWatch to analyze customer orders."
        },
        {
          "key": "D",
          "textEn": "Use Amazon Rekognition to optimize the model.",
          "textKo": "Amazon Rekognition으로 모델 최적화",
          "text": "Use Amazon Rekognition to optimize the model."
        }
      ],
      "answerKey": "A",
      "answerText": "Use Amazon SageMaker and iterate with newer data."
    },
    {
      "id": 119,
      "sourceNumber": 119,
      "title": "Question 119",
      "promptKo": "회사는 부동산 판매 가격을 예측하는 ML 모델을 개발했습니다.\n서버나 인프라를 직접 관리하지 않고 예측 기능을 제공하려고 합니다.\n가장 적합한 솔루션은 무엇입니까?",
      "promptEn": "A company has developed an ML model to predict real estate sale prices.\nThe company wants to deploy the model to make predictions without managing servers or infrastructure.\nWhich solution meets these requirements?",
      "explanation": [
        "- SageMaker 엔드포인트는 서버리스 방식으로 모델을 배포하고 운영할 수 있는 기능을 제공합니다."
      ],
      "wrongExplanations": [
        "- A -> 서버 관리 필요",
        "- B -> 클러스터 관리 필요",
        "- C -> 정적 콘텐츠 배포용"
      ],
      "glossary": [
        "- SageMaker Endpoint: 실시간 추론을 위한 서버리스 ML 모델 배포 방식"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Deploy the model on an Amazon EC2 instance.",
          "textKo": "Amazon EC2 인스턴스에 모델 배포",
          "text": "Deploy the model on an Amazon EC2 instance."
        },
        {
          "key": "B",
          "textEn": "Deploy the model on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster.",
          "textKo": "Amazon EKS 클러스터에 모델 배포",
          "text": "Deploy the model on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster."
        },
        {
          "key": "C",
          "textEn": "Deploy the model by using Amazon CloudFront with an Amazon S3 integration.",
          "textKo": "Amazon CloudFront + S3로 배포",
          "text": "Deploy the model by using Amazon CloudFront with an Amazon S3 integration."
        },
        {
          "key": "D",
          "textEn": "Deploy the model by using an Amazon SageMaker endpoint.",
          "textKo": "Amazon SageMaker 엔드포인트로 배포",
          "text": "Deploy the model by using an Amazon SageMaker endpoint."
        }
      ],
      "answerKey": "D",
      "answerText": "Deploy the model by using an Amazon SageMaker endpoint."
    },
    {
      "id": 120,
      "sourceNumber": 120,
      "title": "Question 120",
      "promptKo": "회사는 직원들이 고객 클레임을 조회하고, 특정 클레임의 세부정보를 식별하고, 관련 문서를 확인할 수 있도록 하는 AI 애플리케이션을 개발하려고 합니다.\n이 목적에 가장 적합한 솔루션은 무엇입니까?",
      "promptEn": "A company wants to develop an AI application to help its employees check open customer claims, identify details for a specific claim, and access documents for a claim.\nWhich solution meets these requirements?",
      "explanation": [
        "- Bedrock의 에이전트와 지식베이스를 활용하면 자연어로 질의하고 관련 문서를 검색하는 기능을 쉽게 구현할 수 있습니다."
      ],
      "wrongExplanations": [
        "- A -> 부정 행위 감지용",
        "- C -> 추천 엔진으로 부적합",
        "- D -> 새 모델 개발은 과도한 접근"
      ],
      "glossary": [
        "- Amazon Bedrock Agent: 자연어 질의에 대해 지식 기반 정보 검색과 액션 수행이 가능한 AI 에이전트"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use Agents for Amazon Bedrock with Amazon Fraud Detector to build the application.",
          "textKo": "Amazon Fraud Detector와 Bedrock Agent 사용",
          "text": "Use Agents for Amazon Bedrock with Amazon Fraud Detector to build the application."
        },
        {
          "key": "B",
          "textEn": "Use Agents for Amazon Bedrock with Amazon Bedrock knowledge bases to build the application.",
          "textKo": "Bedrock Agent와 Bedrock Knowledge Base 사용",
          "text": "Use Agents for Amazon Bedrock with Amazon Bedrock knowledge bases to build the application."
        },
        {
          "key": "C",
          "textEn": "Use Amazon Personalize with Amazon Bedrock knowledge bases to build the application.",
          "textKo": "Personalize와 Bedrock Knowledge Base 사용",
          "text": "Use Amazon Personalize with Amazon Bedrock knowledge bases to build the application."
        },
        {
          "key": "D",
          "textEn": "Use Amazon SageMaker to build the application by training a new ML model.",
          "textKo": "SageMaker로 새로운 ML 모델 훈련",
          "text": "Use Amazon SageMaker to build the application by training a new ML model."
        }
      ],
      "answerKey": "B",
      "answerText": "Use Agents for Amazon Bedrock with Amazon Bedrock knowledge bases to build the application."
    },
    {
      "id": 121,
      "sourceNumber": 121,
      "title": "Question 121",
      "promptKo": "한 제조 회사가 제품을 검사하고 손상이나 결함을 찾기 위해 AI를 사용하고 있습니다.\n이 회사는 어떤 유형의 AI 애플리케이션을 사용하고 있습니까?",
      "promptEn": "A manufacturing company uses AI to inspect products and find any damages or defects.\nWhich type of AI application is the company using?",
      "explanation": [
        "- 컴퓨터 비전은 이미지나 비디오에서 객체를 인식하거나 이상을 탐지하는 데 사용됩니다."
      ],
      "wrongExplanations": [
        "- A -> 사용자 행동 분석 기반",
        "- B -> 텍스트나 음성 기반의 자연어 처리",
        "- D -> 저수준의 필터링 및 변환 작업, 분석보다는 전처리에 가깝다"
      ],
      "glossary": [
        "- Computer Vision: 이미지나 영상에서 객체, 패턴, 특징 등을 자동으로 인식하고 분석하는 기술"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Recommendation system",
          "textKo": "추천 시스템",
          "text": "Recommendation system"
        },
        {
          "key": "B",
          "textEn": "Natural language processing (NLP)",
          "textKo": "자연어 처리 (NLP)",
          "text": "Natural language processing (NLP)"
        },
        {
          "key": "C",
          "textEn": "Computer vision",
          "textKo": "컴퓨터 비전",
          "text": "Computer vision"
        },
        {
          "key": "D",
          "textEn": "Image processing",
          "textKo": "이미지 처리",
          "text": "Image processing"
        }
      ],
      "answerKey": "C",
      "answerText": "Computer vision"
    },
    {
      "id": 122,
      "sourceNumber": 122,
      "title": "Question 122",
      "promptKo": "회사는 고객 만족도를 예측하는 ML 모델을 만들고자 합니다.\n완전 자동화된 모델 튜닝 기능이 필요합니다.\n어떤 AWS 서비스가 적합합니까?",
      "promptEn": "A company wants to create an ML model to predict customer satisfaction. The company needs fully automated model tuning.\nWhich AWS service meets these requirements?",
      "explanation": [
        "- SageMaker의 자동 모델 튜닝(Automatic Model Tuning)은 하이퍼파라미터 최적화를 자동으로 수행합니다."
      ],
      "wrongExplanations": [
        "- A -> 추천 시스템 전용",
        "- C -> 쿼리 분석 도구",
        "- D -> NLP 전용 서비스"
      ],
      "glossary": [
        "- Automatic Model Tuning: ML 모델의 하이퍼파라미터를 자동으로 최적화하는 기능 (SageMaker 기능 중 하나)"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Personalize",
          "textKo": "Amazon Personalize",
          "text": "Amazon Personalize"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker",
          "textKo": "Amazon SageMaker",
          "text": "Amazon SageMaker"
        },
        {
          "key": "C",
          "textEn": "Amazon Athena",
          "textKo": "Amazon Athena",
          "text": "Amazon Athena"
        },
        {
          "key": "D",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon SageMaker"
    },
    {
      "id": 123,
      "sourceNumber": 123,
      "title": "Question 123",
      "promptKo": "생성형 AI 애플리케이션에서 후처리 단계에서 편향과 유해성을 줄이기 위해 사용할 수 있는 기법은 무엇입니까?",
      "promptEn": "Which technique can a company use to lower bias and toxicity in generative AI applications during the post-processing ML lifecycle?",
      "explanation": [
        "- Human-in-the-loop는 AI 결과에 대해 사람이 개입하여 오류나 편향을 줄이는 방식입니다."
      ],
      "wrongExplanations": [
        "- B -> 데이터 다양성 확보에는 유용하지만 후처리와는 무관",
        "- C -> 학습 전 처리 단계",
        "- D -> 모델 견고성 확보에는 유리하나 편향 제어는 아님"
      ],
      "glossary": [
        "- Human-in-the-loop: 모델 예측 결과를 사람이 직접 검토하거나 수정하여 신뢰성과 윤리성을 확보하는 방식"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Human-in-the-loop",
          "textKo": "인간 검토 프로세스(Human-in-the-loop)",
          "text": "Human-in-the-loop"
        },
        {
          "key": "B",
          "textEn": "Data augmentation",
          "textKo": "데이터 증강",
          "text": "Data augmentation"
        },
        {
          "key": "C",
          "textEn": "Feature engineering",
          "textKo": "피처 엔지니어링",
          "text": "Feature engineering"
        },
        {
          "key": "D",
          "textEn": "Adversarial training",
          "textKo": "적대적 학습",
          "text": "Adversarial training"
        }
      ],
      "answerKey": "A",
      "answerText": "Human-in-the-loop"
    },
    {
      "id": 124,
      "sourceNumber": 124,
      "title": "Question 124",
      "promptKo": "은행은 대출 승인 속도를 높이기 위해 LLM을 파인튜닝했습니다.\n하지만 외부 감사에서 특정 인구 집단에 대해 더 빠르게 대출을 승인한다는 편향 문제가 발견되었습니다.\n이 문제를 가장 비용 효율적으로 해결하려면 어떻게 해야 합니까?",
      "promptEn": "A bank has fine-tuned a large language model (LLM) to expedite the loan approval process. During an external audit of the model, the company discovered that the model was approving loans at a faster pace for a specific demographic than for other demographics.\nHow should the bank fix this issue MOST cost-effectively?",
      "explanation": [
        "- 기존 모델을 버리지 않고 데이터만 보강하여 재학습하는 것이 가장 비용 효율적입니다."
      ],
      "wrongExplanations": [
        "- B -> 검색 기반 보완 방식으로 편향 해결에는 부적절",
        "- C -> Trusted Advisor는 리소스 최적화 도구",
        "- D -> 비용이 많이 드는 방법"
      ],
      "glossary": [
        "- Bias Mitigation: 모델이 특정 집단에 편향되지 않도록 조정하는 프로세스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Include more diverse training data. Fine-tune the model again by using the new data.",
          "textKo": "다양한 학습 데이터를 추가하고 다시 파인튜닝",
          "text": "Include more diverse training data. Fine-tune the model again by using the new data."
        },
        {
          "key": "B",
          "textEn": "Use Retrieval Augmented Generation (RAG) with the fine-tuned model.",
          "textKo": "RAG 사용",
          "text": "Use Retrieval Augmented Generation (RAG) with the fine-tuned model."
        },
        {
          "key": "C",
          "textEn": "Use AWS Trusted Advisor checks to eliminate bias.",
          "textKo": "AWS Trusted Advisor 사용",
          "text": "Use AWS Trusted Advisor checks to eliminate bias."
        },
        {
          "key": "D",
          "textEn": "Pre-train a new LLM with more diverse training data.",
          "textKo": "새 LLM을 사전 학습",
          "text": "Pre-train a new LLM with more diverse training data."
        }
      ],
      "answerKey": "A",
      "answerText": "Include more diverse training data. Fine-tune the model again by using the new data."
    },
    {
      "id": 125,
      "sourceNumber": 125,
      "title": "Question 125",
      "promptKo": "HOTSPOT\n회사는 LLM을 개발하였고 여러 내부 팀이 이를 사용할 수 있도록 배포하려고 합니다.\n각 팀의 사용 사례에 맞는 적절한 추론 모드를 선택하세요.\n각 추론 모드는 하나 이상 선택될 수 있습니다.",
      "promptEn": "HOTSPOT\nA company has developed a large language model (LLM) and wants to make the LLM available to multiple internal teams. The company needs to select the appropriate inference mode for each team.\nSelect the correct inference mode from the following list for each use case. Each inference mode should be selected one or more times.",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Inference Mode: 모델이 예측을 수행하는 방식 (실시간, 비동기, 배치 등)"
      ],
      "type": "matching",
      "choicePool": [
        "실시간 추론 (Real-time inference)",
        "비동기 추론 (Asynchronous inference)",
        "배치 추론 (Batch inference)"
      ],
      "allowRepeat": true,
      "rows": [
        {
          "id": "125-row-1",
          "prompt": "실시간 응답",
          "answer": "실시간 추론 (Real-time inference)"
        },
        {
          "id": "125-row-2",
          "prompt": "대규모 요청 처리",
          "answer": "비동기 추론 (Asynchronous inference)"
        },
        {
          "id": "125-row-3",
          "prompt": "개발 및 테스트 목적",
          "answer": "배치 추론 (Batch inference)"
        }
      ]
    },
    {
      "id": 126,
      "sourceNumber": 126,
      "title": "Question 126",
      "promptKo": "회사는 Amazon Bedrock API에 대한 모든 요청을 기록하고 이를 5년간 안전하게 저장해야 합니다.\n가장 비용 효율적인 AWS 서비스와 스토리지 조합은 무엇입니까? (2개 선택)",
      "promptEn": "A company needs to log all requests made to its Amazon Bedrock API. The company must retain the logs securely for 5 years at the lowest possible cost.\nWhich combination of AWS service and storage class meets these requirements? (Choose two.)",
      "explanation": [
        "- CloudTrail은 API 요청 로그를 수집하며, Intelligent-Tiering은 장기 보관에 적합한 저비용 스토리지입니다."
      ],
      "wrongExplanations": [
        "- B -> 실시간 모니터링 중심",
        "- C -> 컴플라이언스 평가 도구",
        "- E -> 장기 저장에는 비효율적"
      ],
      "glossary": [
        "- CloudTrail: AWS API 호출을 기록하고 저장하는 서비스",
        "- S3 Intelligent-Tiering: 액세스 패턴에 따라 자동으로 스토리지 비용 최적화"
      ],
      "type": "multi-select",
      "options": [
        {
          "key": "A",
          "textEn": "AWS CloudTrail",
          "textKo": "AWS CloudTrail",
          "text": "AWS CloudTrail"
        },
        {
          "key": "B",
          "textEn": "Amazon CloudWatch",
          "textKo": "Amazon CloudWatch",
          "text": "Amazon CloudWatch"
        },
        {
          "key": "C",
          "textEn": "AWS Audit Manager",
          "textKo": "AWS Audit Manager",
          "text": "AWS Audit Manager"
        },
        {
          "key": "D",
          "textEn": "Amazon S3 Intelligent-Tiering",
          "textKo": "Amazon S3 Intelligent-Tiering",
          "text": "Amazon S3 Intelligent-Tiering"
        },
        {
          "key": "E",
          "textEn": "Amazon S3 Standard",
          "textKo": "Amazon S3 Standard",
          "text": "Amazon S3 Standard"
        }
      ],
      "answerKeys": [
        "A",
        "D"
      ],
      "requiredSelections": 2
    },
    {
      "id": 127,
      "sourceNumber": 127,
      "title": "Question 127",
      "promptKo": "한 이커머스 회사가 사용자 맞춤 검색 추천 기능을 개선하려고 합니다.\n이 요구사항에 가장 적합한 AWS 서비스는 무엇입니까?",
      "promptEn": "An ecommerce company wants to improve search engine recommendations by customizing the results for each user of the company's ecommerce platform.\nWhich AWS service meets these requirements?",
      "explanation": [
        "- Amazon Personalize는 사용자 행동 및 선호도를 분석하여 개인화된 추천을 제공하는 서비스입니다."
      ],
      "wrongExplanations": [
        "- B -> 정적 문서 검색 및 FAQ 검색",
        "- C -> 이미지 및 영상 인식",
        "- D -> 음성-텍스트 변환 서비스"
      ],
      "glossary": [
        "- Amazon Personalize: 실시간 맞춤형 추천을 제공하기 위해 사용자 데이터를 기반으로 ML 모델을 학습시키는 AWS 서비스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Personalize",
          "textKo": "Amazon Personalize",
          "text": "Amazon Personalize"
        },
        {
          "key": "B",
          "textEn": "Amazon Kendra",
          "textKo": "Amazon Kendra",
          "text": "Amazon Kendra"
        },
        {
          "key": "C",
          "textEn": "Amazon Rekognition",
          "textKo": "Amazon Rekognition",
          "text": "Amazon Rekognition"
        },
        {
          "key": "D",
          "textEn": "Amazon Transcribe",
          "textKo": "Amazon Transcribe",
          "text": "Amazon Transcribe"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon Personalize"
    },
    {
      "id": 128,
      "sourceNumber": 128,
      "title": "Question 128",
      "promptKo": "한 병원이 환자의 기록과 의료 이미지를 기반으로 질병 진단을 돕는 AI 시스템을 개발 중입니다.\n규제 준수를 위해 민감한 환자 데이터는 해당 국가를 벗어나서는 안 됩니다.\n이 경우 적절한 데이터 거버넌스 전략은 무엇입니까?",
      "promptEn": "A hospital is developing an AI system to assist doctors in diagnosing diseases based on patient records and medical images. To comply with regulations, the sensitive patient data must not leave the country the data is located in.\nWhich data governance strategy will ensure compliance and protect patient privacy?",
      "explanation": [
        "- Data residency는 데이터를 특정 지리적 위치(국가) 내에 보관하도록 요구하는 정책입니다."
      ],
      "wrongExplanations": [
        "- B -> 데이터 정확성과 신뢰도에 관련",
        "- C -> 메타데이터 기반 데이터 검색",
        "- D -> 데이터에 부가 정보를 추가하는 과정"
      ],
      "glossary": [
        "- Data Residency: 데이터가 저장 및 처리되는 물리적 위치가 특정 지역 또는 국가에 국한되도록 하는 정책"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Data residency",
          "textKo": "데이터 레지던시",
          "text": "Data residency"
        },
        {
          "key": "B",
          "textEn": "Data quality",
          "textKo": "데이터 품질",
          "text": "Data quality"
        },
        {
          "key": "C",
          "textEn": "Data discoverability",
          "textKo": "데이터 검색 가능성",
          "text": "Data discoverability"
        },
        {
          "key": "D",
          "textEn": "Data enrichment",
          "textKo": "데이터 강화",
          "text": "Data enrichment"
        }
      ],
      "answerKey": "A",
      "answerText": "Data residency"
    },
    {
      "id": 129,
      "sourceNumber": 129,
      "title": "Question 129",
      "promptKo": "회사는 ML 시스템의 성능을 모니터링하기 위해 고도로 확장 가능한 AWS 서비스를 사용하고자 합니다.\n어떤 AWS 서비스가 적합합니까?",
      "promptEn": "A company needs to monitor the performance of its ML systems by using a highly scalable AWS service.\nWhich AWS service meets these requirements?",
      "explanation": [
        "- CloudWatch는 로그, 지표, 이벤트를 통해 리소스 성능을 실시간으로 모니터링할 수 있습니다."
      ],
      "wrongExplanations": [
        "- B -> API 호출 기록 추적",
        "- C -> 비용 및 보안 등 최적화 제안",
        "- D -> 리소스 구성 변경 추적"
      ],
      "glossary": [
        "- Amazon CloudWatch: AWS 리소스와 애플리케이션을 모니터링하고 경보를 설정할 수 있는 서비스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon CloudWatch",
          "textKo": "Amazon CloudWatch",
          "text": "Amazon CloudWatch"
        },
        {
          "key": "B",
          "textEn": "AWS CloudTrail",
          "textKo": "AWS CloudTrail",
          "text": "AWS CloudTrail"
        },
        {
          "key": "C",
          "textEn": "AWS Trusted Advisor",
          "textKo": "AWS Trusted Advisor",
          "text": "AWS Trusted Advisor"
        },
        {
          "key": "D",
          "textEn": "AWS Config",
          "textKo": "AWS Config",
          "text": "AWS Config"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon CloudWatch"
    },
    {
      "id": 130,
      "sourceNumber": 130,
      "title": "Question 130",
      "promptKo": "AI 전문가가 Amazon Bedrock에서 호스팅되는 Amazon Titan 모델에 사용할 프롬프트를 개발 중입니다.\n이 전문가는 수치적 추론 문제 해결을 위해 프롬프트 끝에 다음과 같은 문구를 추가했습니다:\n\"모델이 그 이유를 단계별로 설명하도록 하세요.\"\n이 프롬프트 엔지니어링 기법은 무엇입니까?",
      "promptEn": "An AI practitioner is developing a prompt for an Amazon Titan model. The model is hosted on Amazon Bedrock. The AI practitioner is using the model to solve numerical reasoning challenges. The AI practitioner adds the following phrase to the end of the prompt:\n\"Ask the model to show its work by explaining its reasoning step by step.\"\nWhich prompt engineering technique is the AI practitioner using?",
      "explanation": [
        "- Chain-of-thought prompting은 모델이 복잡한 문제를 단계별로 사고하도록 유도하여 정확한 결과를 얻는 기법입니다."
      ],
      "wrongExplanations": [
        "- B -> 악의적 입력 삽입 (보안 문제)",
        "- C -> 예시를 포함한 프롬프트",
        "- D -> 템플릿 기반 구조화"
      ],
      "glossary": [
        "- Chain-of-Thought Prompting: 모델이 추론 과정을 단계별로 설명하게 하여 더 정확한 결과를 유도하는 프롬프트 기법"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Chain-of-thought prompting",
          "textKo": "Chain-of-thought prompting",
          "text": "Chain-of-thought prompting"
        },
        {
          "key": "B",
          "textEn": "Prompt injection",
          "textKo": "프롬프트 인젝션",
          "text": "Prompt injection"
        },
        {
          "key": "C",
          "textEn": "Few-shot prompting",
          "textKo": "Few-shot prompting",
          "text": "Few-shot prompting"
        },
        {
          "key": "D",
          "textEn": "Prompt templating",
          "textKo": "프롬프트 템플릿 사용",
          "text": "Prompt templating"
        }
      ],
      "answerKey": "A",
      "answerText": "Chain-of-thought prompting"
    },
    {
      "id": 131,
      "sourceNumber": 131,
      "title": "Question 131",
      "promptKo": "사용자가 생성형 AI 애플리케이션을 구축하고 확장할 수 있도록 파운데이션 모델(FM)을 제공하는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service makes foundation models (FMs) available to help users build and scale generative AI applications?",
      "explanation": [
        "Amazon Bedrock은 **여러 파트너의 파운데이션 모델(FM)**을 API 형태로 사용할 수 있도록 제공하는 생성형 AI 플랫폼입니다.",
        "코드를 작성하거나 인프라를 관리하지 않고도 다양한 모델을 선택하고, 애플리케이션에 통합할 수 있도록 돕습니다.",
        "Anthropic, Meta, Stability AI, AI21 Labs 등의 모델을 직접 사용 가능하며, RAG, 에이전트, 지식베이스 연결 등 고급 기능도 제공합니다."
      ],
      "wrongExplanations": [
        "- A. Amazon Q Developer",
        "- 생성형 AI 기반의 개발자 지원 도우미로, 코딩 자동화나 문서 요약 등을 돕지만 FM 제공 플랫폼은 아님.",
        "- C. Amazon Kendra",
        "- 기업 검색 서비스로, 비정형 문서에서 답을 추출하는 기능은 있지만 FM을 직접 제공하지는 않음.",
        "- D. Amazon Comprehend",
        "- 자연어 처리(NLP) 서비스로, 감정 분석, 엔터티 추출 등은 가능하지만 FM 기반은 아님."
      ],
      "glossary": [
        "- Foundation Model (FM):",
        "대규모 데이터로 사전 학습되어 다양한 다운스트림 작업(예: 요약, 번역, 이미지 생성 등)에 활용 가능한 범용 모델.",
        "예: Claude, Llama, Titan, Jurassic 등",
        "- Amazon Bedrock:",
        "다양한 FM을 통합 제공하고, 사용자 정의 프롬프트 및 애플리케이션 구축을 지원하는 AWS 서비스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Q Developer",
          "textKo": "Amazon Q Developer",
          "text": "Amazon Q Developer"
        },
        {
          "key": "B",
          "textEn": "Amazon Bedrock",
          "textKo": "Amazon Bedrock",
          "text": "Amazon Bedrock"
        },
        {
          "key": "C",
          "textEn": "Amazon Kendra",
          "textKo": "Amazon Kendra",
          "text": "Amazon Kendra"
        },
        {
          "key": "D",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        }
      ],
      "answerKey": "B",
      "answerText": "(Amazon Bedrock)"
    },
    {
      "id": 132,
      "sourceNumber": 132,
      "title": "Question 132",
      "promptKo": "시각 장애인을 위한 모바일 앱을 개발 중인 회사가 있습니다.\n이 앱은 사용자의 말을 듣고 음성으로 응답할 수 있어야 합니다.\n어떤 솔루션이 이 요구사항을 충족합니까?",
      "promptEn": "A company is building a mobile app for users who have a visual impairment. The app must be able to hear what users say and provide voice responses.\nWhich solution will meet these requirements?",
      "explanation": [
        "시각 장애인을 위한 앱은 음성 기반 입출력이 필수이며,",
        "이를 위해서는 **딥러닝 기반 음성 인식 모델(ASR, Automatic Speech Recognition)**이 필요합니다.",
        "이 모델은 사용자의 음성을 텍스트로 변환하고, 이어서 **TTS(Text-to-Speech)**로 음성 응답을 제공할 수 있습니다.",
        "딥러닝 모델은 특히 복잡한 음성 패턴 인식에 강점을 가지며, 실시간 반응도 가능합니다."
      ],
      "wrongExplanations": [
        "- B -> 수치 데이터와 관련된 문제로, 음성 입출력 요구와 무관",
        "- C -> 요약은 텍스트 중심이며, 음성 인터페이스를 포함하지 않음",
        "- D -> 이미지 처리로, 시각 정보 활용이 필요할 때 사용하는 기술"
      ],
      "glossary": [
        "- Speech Recognition (ASR):",
        "사람의 음성을 텍스트로 변환하는 기술. 시각 장애인용 앱에서 사용자 음성 명령을 이해하기 위해 사용됨.",
        "- TTS (Text-to-Speech):",
        "텍스트 데이터를 음성으로 변환하는 기술. 사용자 응답 제공에 활용됨."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use a deep learning neural network to perform speech recognition.",
          "textKo": "딥러닝 신경망으로 음성 인식 수행",
          "text": "Use a deep learning neural network to perform speech recognition."
        },
        {
          "key": "B",
          "textEn": "Build ML models to search for patterns in numeric data.",
          "textKo": "수치 데이터 패턴 분석용 ML 모델 구축",
          "text": "Build ML models to search for patterns in numeric data."
        },
        {
          "key": "C",
          "textEn": "Use generative AI summarization to generate human-like text.",
          "textKo": "생성형 AI 요약으로 사람 같은 텍스트 생성",
          "text": "Use generative AI summarization to generate human-like text."
        },
        {
          "key": "D",
          "textEn": "Build custom models for image classification and recognition.",
          "textKo": "이미지 분류 및 인식을 위한 커스텀 모델 구축",
          "text": "Build custom models for image classification and recognition."
        }
      ],
      "answerKey": "A",
      "answerText": "(Use a deep learning neural network to perform speech recognition)"
    },
    {
      "id": 133,
      "sourceNumber": 133,
      "title": "Question 133",
      "promptKo": "복잡한 문제 해결을 위한 LLM의 응답 품질을 높이려는 회사가 있습니다.\n세부적인 추론과 단계별 설명이 필요합니다.\n어떤 프롬프트 기법이 적합합니까?",
      "promptEn": "A company wants to enhance response quality for a large language model (LLM) for complex problem-solving tasks. The tasks require detailed reasoning and a step-by-step explanation process.\nWhich prompt engineering technique meets these requirements?",
      "explanation": [
        "Chain-of-thought는 모델이 복잡한 문제를 논리적으로 단계별로 설명하며 추론하도록 유도해, 정밀하고 신뢰도 높은 답변을 도출합니다."
      ],
      "wrongExplanations": [
        "- A -> Few-shot은 예시를 보여주는 방식, 자세한 추론 유도와는 다름",
        "- B -> Zero-shot은 예시 없이 바로 질문하는 방식",
        "- C -> Directional stimulus는 방향성을 주는 자극 제공, 추론 기법 아님"
      ],
      "glossary": [
        "- Chain-of-thought prompting: 복잡한 문제를 단계별로 풀도록 유도하는 프롬프트 기법"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Few-shot prompting",
          "textKo": "퓨샷 프롬프트 (Few-shot prompting)",
          "text": "Few-shot prompting"
        },
        {
          "key": "B",
          "textEn": "Zero-shot prompting",
          "textKo": "제로샷 프롬프트 (Zero-shot prompting)",
          "text": "Zero-shot prompting"
        },
        {
          "key": "C",
          "textEn": "Directional stimulus prompting",
          "textKo": "방향성 자극 프롬프트 (Directional stimulus prompting)",
          "text": "Directional stimulus prompting"
        },
        {
          "key": "D",
          "textEn": "Chain-of-thought prompting",
          "textKo": "체인 오브 쏘트 프롬프트 (Chain-of-thought prompting)",
          "text": "Chain-of-thought prompting"
        }
      ],
      "answerKey": "D",
      "answerText": "(Chain-of-thought prompting)"
    },
    {
      "id": 134,
      "sourceNumber": 134,
      "title": "Question 134",
      "promptKo": "최신 데이터를 활용해 FM을 지속적으로 최신 상태로 유지하고자 합니다.\n정기 업데이트가 가능한 학습 전략은 무엇입니까?",
      "promptEn": "A company wants to keep its foundation model (FM) relevant by using the most recent data. The company wants to implement a model training strategy that includes regular updates to the FM.\nWhich solution meets these requirements?",
      "explanation": [
        "기존 모델을 정기적으로 최신 데이터로 재학습(연속 사전학습)하여 모델 성능과 최신성을 유지할 수 있습니다."
      ],
      "wrongExplanations": [
        "- A -> Batch learning은 주기적 일괄 학습이지만 실시간 또는 연속 업데이트 아님",
        "- C -> Static training은 한 번만 학습하는 방식",
        "- D -> Latent training은 일반적인 용어가 아님"
      ],
      "glossary": [
        "- Continuous pre-training: 모델을 최신 데이터로 주기적 재학습하는 방법"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Batch learning",
          "textKo": "배치 학습 (Batch learning)",
          "text": "Batch learning"
        },
        {
          "key": "B",
          "textEn": "Continuous pre-training",
          "textKo": "연속 사전 학습 (Continuous pre-training)",
          "text": "Continuous pre-training"
        },
        {
          "key": "C",
          "textEn": "Static training",
          "textKo": "정적 학습 (Static training)",
          "text": "Static training"
        },
        {
          "key": "D",
          "textEn": "Latent training",
          "textKo": "잠재 학습 (Latent training)",
          "text": "Latent training"
        }
      ],
      "answerKey": "B",
      "answerText": "(Continuous pre-training)"
    },
    {
      "id": 135,
      "sourceNumber": 135,
      "title": "Question 135",
      "promptKo": "회사는 비즈니스 운영과 효율성을 개선하기 위한 ML 애플리케이션을 개발하려고 합니다.\n각 사용 사례에 맞는 적절한 ML 패러다임을 아래 목록에서 선택하세요. 각 ML 패러다임은 하나 이상 선택될 수 있습니다.\n- 회사의 챗봇은 최소 지연 시간으로 사용자 의도를 이해하기 위해 LLM 예측이 필요합니다.\n- 데이터 처리 작업은 주말에 수 기가바이트의 텍스트 파일을 처리하기 위해 LLM을 쿼리해야 합니다.\n- 회사 엔지니어링 팀은 작은 텍스트 조각을 처리하고 낮은 지연 시간으로 예측을 제공하는 API를 만들어야 합니다.\n선택지:\nBatch transform (배치 변환)\nReal-time inference (실시간 추론)",
      "promptEn": "A company wants to develop ML applications to improve business operations and efficiency.\nSelect the correct ML paradigm from the following list for each use case. Each ML paradigm should be selected one or more times.\n- The company's chatbot needs predictions from the LLM to understand users' intent with minimal latency.\n- A data processing job needs to query the LLM to process gigabytes of text files on weekends.\n- The company's engineering team needs to create an API that can process small pieces of text content and provide low-latency predictions.\n선택지:\n- Batch transform\n- Real-time inference",
      "explanation": [
        "- Real-time inference는 짧은 응답 시간이 필요한 대화형 애플리케이션이나 API에 적합합니다.",
        "- Batch transform은 대량 데이터를 일괄 처리하는 데 적합하며, 지연 시간이 상대적으로 긴 작업에 사용됩니다.",
        "- 따라서 챗봇과 API는 Real-time inference를, 대량 텍스트 처리 작업은 Batch transform을 사용하는 것이 올바릅니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Real-time inference: 모델이 실시간으로 예측을 수행해 빠른 응답을 제공하는 추론 방식",
        "- Batch transform: 대규모 데이터를 일괄 처리하는 추론 방식으로, 지연 시간이 길어도 무방한 경우 사용"
      ],
      "type": "matching",
      "choicePool": [
        "Batch transform (배치 변환)",
        "Real-time inference (실시간 추론)",
        "Real-time inference",
        "Batch transform"
      ],
      "allowRepeat": true,
      "rows": [
        {
          "id": "135-row-1",
          "prompt": "챗봇",
          "answer": "Real-time inference"
        },
        {
          "id": "135-row-2",
          "prompt": "데이터 처리 작업",
          "answer": "Batch transform"
        },
        {
          "id": "135-row-3",
          "prompt": "API",
          "answer": "Real-time inference"
        }
      ]
    },
    {
      "id": 136,
      "sourceNumber": 136,
      "title": "Question 136",
      "promptKo": "신뢰 구축과 인간 중심 AI 기술 배포를 위한 AI 거버넌스 프레임워크의 특징은?",
      "promptEn": "Which option is a characteristic of AI governance frameworks for building trust and deploying human-centered AI technologies?",
      "explanation": [
        "AI 거버넌스는 데이터 관리, 투명성 확보, 책임 있는 AI 운영, 규정 준수 정책 등을 개발하여 신뢰와 윤리적 AI 배포를 보장합니다."
      ],
      "wrongExplanations": [
        "- A -> 장기적 비즈니스 가치에 집중하지만 거버넌스 핵심 아님",
        "- B -> 비즈니스 정렬 중요하나 거버넌스 본질은 아님",
        "- C -> 비즈니스 변혁 목표지향, 거버넌스 특징과는 차이"
      ],
      "glossary": [
        "- AI Governance: AI 시스템의 투명성, 윤리성, 책임성을 확보하기 위한 정책과 절차"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Expanding initiatives across business units to create long-term business value",
          "textKo": "장기적인 비즈니스 가치를 창출하기 위해 여러 부서에 걸쳐 이니셔티브 확장",
          "text": "Expanding initiatives across business units to create long-term business value"
        },
        {
          "key": "B",
          "textEn": "Ensuring alignment with business standards, revenue goals, and stakeholder expectations",
          "textKo": "비즈니스 표준, 수익 목표, 이해관계자의 기대치와 정렬 보장",
          "text": "Ensuring alignment with business standards, revenue goals, and stakeholder expectations"
        },
        {
          "key": "C",
          "textEn": "Overcoming challenges to drive business transformation and growth",
          "textKo": "도전 과제를 극복하여 비즈니스 혁신과 성장을 주도",
          "text": "Overcoming challenges to drive business transformation and growth"
        },
        {
          "key": "D",
          "textEn": "Developing policies and guidelines for data, transparency, responsible AI, and compliance",
          "textKo": "데이터, 투명성, 책임 있는 AI, 규정 준수를 위한 정책 및 가이드라인 개발",
          "text": "Developing policies and guidelines for data, transparency, responsible AI, and compliance"
        }
      ],
      "answerKey": "D",
      "answerText": "(정책 및 가이드라인 개발)"
    },
    {
      "id": 137,
      "sourceNumber": 137,
      "title": "Question 137",
      "promptKo": "이커머스 회사가 AI 챗봇의 재무적 영향을 측정하려 합니다.\n어떤 지표를 사용해야 합니까?",
      "promptEn": "An ecommerce company is using a generative AI chatbot to respond to customer inquiries. The company wants to measure the financial effect of the chatbot on the company's operations.\nWhich metric should the company use?",
      "explanation": [
        "비용 효율성을 직접적으로 반영하는 지표로, 챗봇 도입 전후의 비용 변화를 명확히 평가할 수 있습니다."
      ],
      "wrongExplanations": [
        "- A -> 단순 처리 건수로 비용 효과 평가 어려움",
        "- B -> 모델 학습 비용은 간접적",
        "- D -> 처리 시간은 효율성 일부지만 비용과 일대일 매칭 안 됨"
      ],
      "glossary": [
        "- Cost per Conversation: 고객 대화 한 건 처리에 드는 비용을 측정하는 지표"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Number of customer inquiries handled",
          "textKo": "처리된 고객 문의 수",
          "text": "Number of customer inquiries handled"
        },
        {
          "key": "B",
          "textEn": "Cost of training AI models",
          "textKo": "AI 모델 학습 비용",
          "text": "Cost of training AI models"
        },
        {
          "key": "C",
          "textEn": "Cost for each customer conversation",
          "textKo": "고객 대화 한 건당 비용",
          "text": "Cost for each customer conversation"
        },
        {
          "key": "D",
          "textEn": "Average handled time (AHT)",
          "textKo": "평균 처리 시간 (AHT)",
          "text": "Average handled time (AHT)"
        }
      ],
      "answerKey": "C",
      "answerText": "(고객 대화당 비용)"
    },
    {
      "id": 138,
      "sourceNumber": 138,
      "title": "Question 138",
      "promptKo": "고객의 인구통계와 구매 패턴을 기반으로 고객 그룹을 찾고자 할 때 적합한 알고리즘은?",
      "promptEn": "A company wants to find groups for its customers based on the customers' demographics and buying patterns.\nWhich algorithm should the company use?",
      "explanation": [
        "비지도 학습 중 군집화 알고리즘으로, 고객들을 비슷한 특성을 가진 그룹으로 나누는 데 효과적입니다."
      ],
      "wrongExplanations": [
        "- A -> k-NN은 분류에 주로 사용",
        "- C -> 결정 트리는 지도 학습 분류 알고리즘",
        "- D -> SVM 역시 분류용 알고리즘"
      ],
      "glossary": [
        "- K-means clustering: 데이터 포인트를 K개의 클러스터로 나누는 비지도 학습 알고리즘"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "K-nearest neighbors (k-NN)",
          "textKo": "K-최근접 이웃 (K-nearest neighbors, k-NN)",
          "text": "K-nearest neighbors (k-NN)"
        },
        {
          "key": "B",
          "textEn": "K-means",
          "textKo": "K-평균 군집화 (K-means)",
          "text": "K-means"
        },
        {
          "key": "C",
          "textEn": "Decision tree",
          "textKo": "의사결정 트리 (Decision tree)",
          "text": "Decision tree"
        },
        {
          "key": "D",
          "textEn": "Support vector machine",
          "textKo": "서포트 벡터 머신 (Support vector machine)",
          "text": "Support vector machine"
        }
      ],
      "answerKey": "B",
      "answerText": "(K-means)"
    },
    {
      "id": 139,
      "sourceNumber": 139,
      "title": "Question 139",
      "promptKo": "회사 LLM에서 환각 현상(hallucination)이 발생하고 있습니다.\n이를 줄이려면 어떻게 해야 할까요?",
      "promptEn": "A company's large language model (LLM) is experiencing hallucinations.\nHow can the company decrease hallucinations?",
      "explanation": [
        "생성 모델의 온도(temperature)를 낮추면 출력의 불확실성과 무작위성이 줄어들어 환각 현상이 감소합니다."
      ],
      "wrongExplanations": [
        "- A -> Agents 설정은 감독이지만 환각 직접 억제 아님",
        "- B -> 데이터 전처리는 중요하나 모든 환각 원인 제거 불가",
        "- D -> 환각이 없는 FM은 아직 일반적이지 않음"
      ],
      "glossary": [
        "- Hallucination: LLM이 사실과 다른 내용을 생성하는 현상",
        "- Temperature: 생성 모델 출력의 다양성과 무작위성 조절 파라미터"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Set up Agents for Amazon Bedrock to supervise the model training.",
          "textKo": "모델 학습을 감독하기 위해 Amazon Bedrock의 에이전트를 설정합니다.",
          "text": "Set up Agents for Amazon Bedrock to supervise the model training."
        },
        {
          "key": "B",
          "textEn": "Use data pre-processing and remove any data that causes hallucinations.",
          "textKo": "환각을 유발하는 데이터를 제거하기 위해 데이터 전처리를 사용합니다.",
          "text": "Use data pre-processing and remove any data that causes hallucinations."
        },
        {
          "key": "C",
          "textEn": "Decrease the temperature inference parameter for the model.",
          "textKo": "모델의 추론 파라미터인 temperature 값을 낮춥니다.",
          "text": "Decrease the temperature inference parameter for the model."
        },
        {
          "key": "D",
          "textEn": "Use a foundation model (FM) that is trained to not hallucinate.",
          "textKo": "환각이 발생하지 않도록 학습된 파운데이션 모델(FM)을 사용합니다.",
          "text": "Use a foundation model (FM) that is trained to not hallucinate."
        }
      ],
      "answerKey": "C",
      "answerText": "(온도 파라미터 낮추기)"
    },
    {
      "id": 140,
      "sourceNumber": 140,
      "title": "Question 140",
      "promptKo": "회사에서 Amazon Bedrock의 LLM으로 챗봇을 만듭니다.\n고객 요청 해결을 위해 여러 차례 대화가 필요합니다.\nLLM이 이전 메시지 내용을 활용하도록 하려면?",
      "promptEn": "A company is using a large language model (LLM) on Amazon Bedrock to build a chatbot. The chatbot processes customer support requests. To resolve a request, the customer and the chatbot must interact a few times.\nWhich solution gives the LLM the ability to use content from previous customer messages?",
      "explanation": [
        "LLM은 상태 저장 기능이 없으므로, 이전 대화 내용을 프롬프트에 포함시켜 컨텍스트를 제공해야 합니다."
      ],
      "wrongExplanations": [
        "- A -> 로그 기록은 저장용이며 모델 학습이나 대화 상태 유지와 다름",
        "- C -> Personalize는 추천 시스템, 대화 히스토리 저장과는 무관",
        "- D -> Provisioned Throughput은 성능 관련 설정"
      ],
      "glossary": [
        "- Context window: LLM에 입력되는 프롬프트 내 텍스트 범위",
        "- Stateless model: 대화 상태를 기억하지 않는 모델 특성"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Turn on model invocation logging to collect messages.",
          "textKo": "메시지를 수집하기 위해 모델 호출 로깅을 활성화합니다.",
          "text": "Turn on model invocation logging to collect messages."
        },
        {
          "key": "B",
          "textEn": "Add messages to the model prompt.",
          "textKo": "이전 메시지를 모델 프롬프트에 추가합니다.",
          "text": "Add messages to the model prompt."
        },
        {
          "key": "C",
          "textEn": "Use Amazon Personalize to save conversation history.",
          "textKo": "Amazon Personalize를 사용하여 대화 내역을 저장합니다.",
          "text": "Use Amazon Personalize to save conversation history."
        },
        {
          "key": "D",
          "textEn": "Use Provisioned Throughput for the LLM.",
          "textKo": "LLM에 대해 사전 할당 처리량(Provisioned Throughput)을 사용합니다.",
          "text": "Use Provisioned Throughput for the LLM."
        }
      ],
      "answerKey": "B",
      "answerText": "(이전 메시지를 프롬프트에 추가)"
    },
    {
      "id": 141,
      "sourceNumber": 141,
      "title": "Question 141",
      "promptKo": "회사의 직원들이 고객센터에 전화하는 고객에게 제품 설명과 추천을 제공합니다. 추천은 고객 위치 기반입니다.\n회사는 이 프로세스를 자동화하기 위해 Foundation Model(FM)을 사용하려고 합니다.\n어떤 AWS 서비스가 이 요구사항을 충족합니까?",
      "promptEn": "A company's employees provide product descriptions and recommendations to customers when customers call the customer service center. These recommendations are based on where the customers are located. The company wants to use foundation models (FMs) to automate this process.\nWhich AWS service meets these requirements?",
      "explanation": [
        "Amazon Bedrock은 다양한 Foundation Models(FM)을 API 형태로 사용할 수 있게 해주어, 맞춤형 AI 애플리케이션 개발에 적합합니다."
      ],
      "wrongExplanations": [
        "- A -> Amazon Macie는 데이터 보안 및 개인정보 보호에 초점",
        "- B -> Amazon Transcribe는 음성 인식 서비스",
        "- D -> Amazon Textract는 문서에서 텍스트 추출"
      ],
      "glossary": [
        "- Foundation Models (FM): 대규모 데이터로 사전 학습된 AI 모델",
        "- Amazon Bedrock: FM을 API로 손쉽게 활용하는 AWS 서비스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Macie",
          "textKo": "Amazon Macie -> 데이터 보안 및 개인정보 보호 서비스",
          "text": "Amazon Macie"
        },
        {
          "key": "B",
          "textEn": "Amazon Transcribe",
          "textKo": "Amazon Transcribe -> 음성을 텍스트로 변환하는 서비스",
          "text": "Amazon Transcribe"
        },
        {
          "key": "C",
          "textEn": "Amazon Bedrock",
          "textKo": "Amazon Bedrock -> Foundation Model을 API로 활용할 수 있는 서비스",
          "text": "Amazon Bedrock"
        },
        {
          "key": "D",
          "textEn": "Amazon Textract",
          "textKo": "Amazon Textract -> 문서에서 텍스트를 추출하는 서비스",
          "text": "Amazon Textract"
        }
      ],
      "answerKey": "C",
      "answerText": "(Amazon Bedrock)"
    },
    {
      "id": 142,
      "sourceNumber": 142,
      "title": "Question 142",
      "promptKo": "회사는 고객 서비스 이메일 메시지를 Amazon S3에 업로드하여 비즈니스 분석 애플리케이션을 개발하려고 합니다. 메시지에는 민감한 데이터가 포함될 수 있습니다.\n민감한 정보가 발견될 때마다 알림을 받고 싶습니다.\n개발 노력이 가장 적으면서 민감한 정보 탐지 프로세스를 완전 자동화하는 솔루션은 무엇입니까?",
      "promptEn": "A company wants to upload customer service email messages to Amazon S3 to develop a business analysis application. The messages sometimes contain sensitive data. The company wants to receive an alert every time sensitive information is found.\nWhich solution fully automates the sensitive information detection process with the LEAST development effort?",
      "explanation": [
        "Amazon Macie는 S3에 저장된 데이터에서 민감 정보를 자동 탐지하고, 알림을 제공합니다. 가장 적은 개발 노력으로 완전 자동화 가능."
      ],
      "wrongExplanations": [
        "- B -> LLM 배포는 복잡하고 비용이 많이 듬",
        "- C -> 정규식 패턴 개발은 수동 작업 및 유지보수 필요",
        "- D -> 고객에게 정보를 제한하는 것은 현실적으로 어렵고 완전하지 않음"
      ],
      "glossary": [
        "- Amazon Macie: 데이터 보안 서비스, 민감 정보 자동 탐지",
        "- Amazon S3: AWS의 클라우드 스토리지 서비스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Configure Amazon Macie to detect sensitive information in the documents that are uploaded to Amazon S3.",
          "textKo": "Amazon Macie를 구성하여 S3에 업로드된 문서에서 민감 정보 탐지",
          "text": "Configure Amazon Macie to detect sensitive information in the documents that are uploaded to Amazon S3."
        },
        {
          "key": "B",
          "textEn": "Use Amazon SageMaker endpoints to deploy a large language model (LLM) to redact sensitive data.",
          "textKo": "Amazon SageMaker 엔드포인트로 LLM 배포 후 민감 데이터 마스킹",
          "text": "Use Amazon SageMaker endpoints to deploy a large language model (LLM) to redact sensitive data."
        },
        {
          "key": "C",
          "textEn": "Develop multiple regex patterns to detect sensitive data. Expose the regex patterns on an Amazon SageMaker notebook.",
          "textKo": "정규식 패턴을 개발하여 SageMaker 노트북에서 탐지",
          "text": "Develop multiple regex patterns to detect sensitive data. Expose the regex patterns on an Amazon SageMaker notebook."
        },
        {
          "key": "D",
          "textEn": "Ask the customers to avoid sharing sensitive information in their email messages.",
          "textKo": "고객에게 민감 정보를 이메일에 쓰지 말라고 요청",
          "text": "Ask the customers to avoid sharing sensitive information in their email messages."
        }
      ],
      "answerKey": "A",
      "answerText": "(Amazon Macie 구성)"
    },
    {
      "id": 143,
      "sourceNumber": 143,
      "title": "Question 143 (HOTSPOT)",
      "promptKo": "회사가 직원들에게 Foundation Models에 사용할 프롬프트 구조화 방법을 교육하고 있습니다.\n각 프롬프트 템플릿에 맞는 프롬프트 엔지니어링 기법을 선택하세요. 각 기법은 한 번만 선택 가능합니다.\nChain-of-thought reasoning -> 단계별 사고 과정 유도 기법\nFew-shot learning -> 몇 개의 예시를 주고 학습시키는 기법\nZero-shot learning -> 예시 없이 요청만으로 학습 수행",
      "promptEn": "A company is training its employees on how to structure prompts for foundation models.\nSelect the correct prompt engineering technique from the following list for each prompt template. Each prompt engineering technique should be selected one time.\n- \"Classify the following text as either sports, politics, or entertainment: [input text].\"\n- \"A [image 1], [image 2], and [image 3] are examples of [target class]. Classify the following image as [target class].\"\n- \"[Question.] [Instructions to follow.] Think step by step and walk me through your thinking.\"\nOptions:\n- Chain-of-thought reasoning\n- Few-shot learning\n- Zero-shot learning",
      "explanation": [
        "- \"Classify the following text...\" -> Zero-shot learning (예시 없이 분류 요청)",
        "- \"A [image 1], ...\" -> Few-shot learning (예시를 보여준 후 분류 요청)",
        "- \"[Question.] Think step by step...\" -> Chain-of-thought reasoning (단계별 사고 과정 요구)"
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Zero-shot learning: 예시 없이 작업 수행",
        "- Few-shot learning: 몇 개의 예시를 제공하여 학습",
        "- Chain-of-thought reasoning: 단계별 사고 과정 유도"
      ],
      "type": "matching",
      "choicePool": [
        "Chain-of-thought reasoning",
        "Few-shot learning",
        "Zero-shot learning",
        "Zero-shot learning (예시 없이 분류 요청)",
        "Few-shot learning (예시를 보여준 후 분류 요청)",
        "Chain-of-thought reasoning (단계별 사고 과정 요구)"
      ],
      "allowRepeat": false,
      "rows": [
        {
          "id": "143-row-1",
          "prompt": "\"Classify the following text...\"",
          "answer": "Zero-shot learning (예시 없이 분류 요청)"
        },
        {
          "id": "143-row-2",
          "prompt": "\"A [image 1], ...\"",
          "answer": "Few-shot learning (예시를 보여준 후 분류 요청)"
        },
        {
          "id": "143-row-3",
          "prompt": "\"[Question.] Think step by step...\"",
          "answer": "Chain-of-thought reasoning (단계별 사고 과정 요구)"
        }
      ]
    },
    {
      "id": 144,
      "sourceNumber": 144,
      "title": "Question 144 (HOTSPOT)",
      "promptKo": "회사가 생성형 AI 모델로 디지털 어시스턴트를 개발 중입니다. 모델의 응답에 가끔 바람직하지 않거나 해로운 내용이 포함됩니다.\n각 완화 조치에 적합한 Amazon Bedrock 필터 정책을 선택하세요. 각 정책은 한 번만 선택 가능합니다.\n- 사용자 입력이나 모델의 응답 중 혐오, 모욕, 폭력, 부적절한 행위 같은 유해한 내용을 차단한다.\n- 불법적인 투자 조언이나 법률 자문과 관련된 주제를 피한다.\n- 특정한 모욕적이거나 공격적인 단어를 탐지하고 차단한다.\n- 모델의 응답에서 제공된 출처 정보에 근거하지 않은 내용을 탐지하고 걸러낸다.\n- Content filters -> 혐오, 욕설, 폭력 등 유해 콘텐츠 차단\n- Contextual grounding check -> 출처에 근거하지 않은 응답 차단\n- Denied topics -> 특정 주제(예: 불법 투자/법률 조언) 차단\n- Word filters -> 특정 공격적 단어 차단",
      "promptEn": "A company is using a generative AI model to develop a digital assistant. The model's responses occasionally include undesirable and potentially harmful content.\nSelect the correct Amazon Bedrock filter policy from the following list for each mitigation action. Each filter policy should be selected one time.\n- Block input prompts or model responses that contain harmful content such as hate, insults, violence, or misconduct\n- Avoid subjects related to illegal investment advice or legal advice\n- Detect and block specific offensive terms\n- Detect and filter out information in the model's responses that is not grounded in the provided source information\nOptions:\n- Content filters\n- Contextual grounding check\n- Denied topics\n- Word filters",
      "explanation": [
        "- 유해 내용 차단 -> Content filters",
        "- 불법 투자/법률 조언 회피 -> Denied topics",
        "- 특정 공격적 용어 차단 -> Word filters",
        "- 출처에 근거 없는 정보 필터링 -> Contextual grounding check"
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Content filters: 유해 콘텐츠 차단 필터",
        "- Contextual grounding check: 출처 근거 검증",
        "- Denied topics: 금지 주제 목록",
        "- Word filters: 특정 단어 필터"
      ],
      "type": "matching",
      "choicePool": [
        "Content filters",
        "Contextual grounding check",
        "Denied topics",
        "Word filters"
      ],
      "allowRepeat": false,
      "rows": [
        {
          "id": "144-row-1",
          "prompt": "유해 내용 차단",
          "answer": "Content filters"
        },
        {
          "id": "144-row-2",
          "prompt": "불법 투자/법률 조언 회피",
          "answer": "Denied topics"
        },
        {
          "id": "144-row-3",
          "prompt": "특정 공격적 용어 차단",
          "answer": "Word filters"
        },
        {
          "id": "144-row-4",
          "prompt": "출처에 근거 없는 정보 필터링",
          "answer": "Contextual grounding check"
        }
      ]
    },
    {
      "id": 145,
      "sourceNumber": 145,
      "title": "Question 145",
      "promptKo": "Amazon SageMaker Model Cards를 사용하여 AI 모델을 문서화하는 이점은 무엇입니까?",
      "promptEn": "Which option is a benefit of using Amazon SageMaker Model Cards to document AI models?",
      "explanation": [
        "Model Cards는 모델 목적, 성능, 한계 등 정보를 표준화하여 투명성을 높이고 신뢰를 구축합니다."
      ],
      "wrongExplanations": [
        "- A -> 시각적 요약 제공은 주 목적이 아님",
        "- C -> 계산 요구량 감소와 관련 없음",
        "- D -> 물리적 저장 기능 아님"
      ],
      "glossary": [
        "- SageMaker Model Cards: 모델 문서화 및 관리 도구"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Providing a visually appealing summary of a model's capabilities.",
          "textKo": "모델 기능을 시각적으로 보기 좋게 요약",
          "text": "Providing a visually appealing summary of a model's capabilities."
        },
        {
          "key": "B",
          "textEn": "Standardizing information about a model's purpose, performance, and limitations.",
          "textKo": "모델 목적, 성능, 한계에 대한 정보를 표준화",
          "text": "Standardizing information about a model's purpose, performance, and limitations."
        },
        {
          "key": "C",
          "textEn": "Reducing the overall computational requirements of a model.",
          "textKo": "모델의 연산 요구량 감소",
          "text": "Reducing the overall computational requirements of a model."
        },
        {
          "key": "D",
          "textEn": "Physically storing models for archival purposes.",
          "textKo": "모델을 물리적으로 보관",
          "text": "Physically storing models for archival purposes."
        }
      ],
      "answerKey": "B",
      "answerText": "Standardizing information about a model's purpose, performance, and limitations."
    },
    {
      "id": 146,
      "sourceNumber": 146,
      "title": "Question 146",
      "promptKo": "Foundation Model(FM) 성능 평가에서 F1 점수는 무엇을 측정합니까?",
      "promptEn": "What does an F1 score measure in the context of foundation model (FM) performance?",
      "explanation": [
        "F1 점수는 모델의 정밀도(precision)와 재현율(recall)의 조화평균으로, 분류 성능 지표입니다."
      ],
      "wrongExplanations": [
        "- B, C, D -> 성능이나 비용, 에너지 효율과는 관련 없음"
      ],
      "glossary": [
        "- F1 score: precision과 recall의 조화 평균"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Model precision and recall",
          "textKo": "모델의 정밀도(precision)와 재현율(recall)",
          "text": "Model precision and recall"
        },
        {
          "key": "B",
          "textEn": "Model speed in generating responses",
          "textKo": "응답 생성 속도",
          "text": "Model speed in generating responses"
        },
        {
          "key": "C",
          "textEn": "Financial cost of operating the model",
          "textKo": "모델 운영 비용",
          "text": "Financial cost of operating the model"
        },
        {
          "key": "D",
          "textEn": "Energy efficiency of the model's computations",
          "textKo": "연산 에너지 효율",
          "text": "Energy efficiency of the model's computations"
        }
      ],
      "answerKey": "A",
      "answerText": "Model precision and recall"
    },
    {
      "id": 147,
      "sourceNumber": 147,
      "title": "Question 147",
      "promptKo": "회사는 고객 서비스 상담원이 자주 묻는 질문에 대응할 수 있도록 AI/ML 솔루션을 배포했습니다. 질문은 시간이 지남에 따라 변할 수 있습니다.\n상담원이 질문을 하고 자동 생성된 답변을 받을 수 있도록 하려면 가장 비용 효율적인 전략은 무엇입니까?",
      "promptEn": "A company deployed an AI/ML solution to help customer service agents respond to frequently asked questions. The questions can change over time. The company wants to give customer service agents the ability to ask questions and receive automatically generated answers to common customer questions.\nWhich strategy will meet these requirements MOST cost-effectively?",
      "explanation": [
        "RAG는 외부 지식을 검색하여 LLM 답변에 포함시키므로, 자주 변하는 질문에 적응 가능하며 비용 효율적입니다."
      ],
      "wrongExplanations": [
        "- A, B, C -> 모델 재학습이나 사전 학습은 비용과 시간이 더 많이 듬"
      ],
      "glossary": [
        "- RAG (Retrieval Augmented Generation): 검색 기반 응답 생성"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Fine-tune the model regularly.",
          "textKo": "모델을 주기적으로 파인튜닝",
          "text": "Fine-tune the model regularly."
        },
        {
          "key": "B",
          "textEn": "Train the model by using context data.",
          "textKo": "컨텍스트 데이터를 이용해 모델 학습",
          "text": "Train the model by using context data."
        },
        {
          "key": "C",
          "textEn": "Pre-train and benchmark the model by using context data.",
          "textKo": "컨텍스트 데이터로 사전 학습 및 벤치마킹",
          "text": "Pre-train and benchmark the model by using context data."
        },
        {
          "key": "D",
          "textEn": "Use Retrieval Augmented Generation (RAG) with prompt engineering techniques.",
          "textKo": "검색 기반 RAG + 프롬프트 엔지니어링 사용",
          "text": "Use Retrieval Augmented Generation (RAG) with prompt engineering techniques."
        }
      ],
      "answerKey": "D",
      "answerText": "(RAG 사용)"
    },
    {
      "id": 148,
      "sourceNumber": 148,
      "title": "Question 148",
      "promptKo": "회사가 AI 기반 이력서 심사 시스템을 구축했습니다. 대규모 데이터셋으로 모델을 학습했으나, 데이터셋은 모든 인구 통계를 대표하지 못했습니다.\n책임 있는 AI의 어떤 핵심 차원에 해당합니까?",
      "promptEn": "A company built an AI-powered resume screening system. The company used a large dataset to train the model. The dataset contained resumes that were not representative of all demographics.\nWhich core dimension of responsible AI does this scenario present?",
      "explanation": [
        "대표성 부족은 편향 문제로 공정성 문제를 일으킵니다."
      ],
      "wrongExplanations": [
        "- B, C, D -> 설명력, 개인정보, 투명성과는 다른 문제"
      ],
      "glossary": [
        "- Fairness: AI 편향성 및 공정성 문제"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Fairness",
          "textKo": "공정성 (Fairness)",
          "text": "Fairness"
        },
        {
          "key": "B",
          "textEn": "Explainability",
          "textKo": "설명 가능성 (Explainability)",
          "text": "Explainability"
        },
        {
          "key": "C",
          "textEn": "Privacy and security",
          "textKo": "개인정보 및 보안 (Privacy and security)",
          "text": "Privacy and security"
        },
        {
          "key": "D",
          "textEn": "Transparency",
          "textKo": "투명성 (Transparency)",
          "text": "Transparency"
        }
      ],
      "answerKey": "A",
      "answerText": "(Fairness, 공정성)"
    },
    {
      "id": 149,
      "sourceNumber": 149,
      "title": "Question 149",
      "promptKo": "글로벌 금융회사는 주식 시장 데이터를 분석하는 ML 애플리케이션을 개발했습니다. 개발 단계 전반에 대해 지속적으로 모니터링하고, 회사 정책과 업계 규정을 준수하는지 확인하려 합니다.\n컴플라이언스 평가에 도움 되는 AWS 서비스는 무엇입니까? (2개 선택)",
      "promptEn": "A global financial company has developed an ML application to analyze stock market data and provide stock market trends. The company wants to continuously monitor the application development phases and to ensure that company policies and industry regulations are followed.\nWhich AWS services will help the company assess compliance requirements? (Choose two.)",
      "explanation": [
        "AWS Audit Manager와 AWS Config는 규정 준수 모니터링과 평가에 특화된 서비스입니다."
      ],
      "wrongExplanations": [
        "- C -> 보안 취약점 검사 도구",
        "- D -> 운영 모니터링 도구",
        "- E -> 감사 로그 기록 서비스"
      ],
      "glossary": [
        "- AWS Audit Manager: 규정 준수 관리 서비스",
        "- AWS Config: 리소스 구성 및 규정 준수 모니터링"
      ],
      "type": "multi-select",
      "options": [
        {
          "key": "A",
          "textEn": "AWS Audit Manager",
          "textKo": "AWS Audit Manager",
          "text": "AWS Audit Manager"
        },
        {
          "key": "B",
          "textEn": "AWS Config",
          "textKo": "AWS Config",
          "text": "AWS Config"
        },
        {
          "key": "C",
          "textEn": "Amazon Inspector",
          "textKo": "Amazon Inspector",
          "text": "Amazon Inspector"
        },
        {
          "key": "D",
          "textEn": "Amazon CloudWatch",
          "textKo": "Amazon CloudWatch",
          "text": "Amazon CloudWatch"
        },
        {
          "key": "E",
          "textEn": "AWS CloudTrail",
          "textKo": "AWS CloudTrail",
          "text": "AWS CloudTrail"
        }
      ],
      "answerKeys": [
        "A",
        "B"
      ],
      "requiredSelections": 2
    },
    {
      "id": 150,
      "sourceNumber": 150,
      "title": "Question 150",
      "promptKo": "회사는 생성형 AI 애플리케이션의 응답 정확도를 개선하려 합니다. 이 애플리케이션은 Amazon Bedrock의 Foundation Model(FM)을 사용합니다.\n가장 비용 효율적인 해결책은 무엇입니까?",
      "promptEn": "A company wants to improve the accuracy of the responses from a generative AI application. The application uses a foundation model (FM) on Amazon Bedrock.\nWhich solution meets these requirements MOST cost-effectively?",
      "explanation": [
        "FM을 새로 학습하거나 미세 조정하는 것보다 프롬프트 엔지니어링이 비용 효율적이고 빠른 개선을 제공합니다."
      ],
      "wrongExplanations": [
        "- A, B, C -> 모델 재학습 관련으로 비용과 시간이 더 많이 듬"
      ],
      "glossary": [
        "- Prompt engineering: 모델 입력 최적화 기법"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Fine-tune the FM.",
          "textKo": "FM 파인튜닝",
          "text": "Fine-tune the FM."
        },
        {
          "key": "B",
          "textEn": "Retrain the FM.",
          "textKo": "FM 재학습",
          "text": "Retrain the FM."
        },
        {
          "key": "C",
          "textEn": "Train a new FM.",
          "textKo": "새 FM 학습",
          "text": "Train a new FM."
        },
        {
          "key": "D",
          "textEn": "Use prompt engineering.",
          "textKo": "프롬프트 엔지니어링",
          "text": "Use prompt engineering."
        }
      ],
      "answerKey": "D",
      "answerText": "(프롬프트 엔지니어링 사용)"
    },
    {
      "id": 151,
      "sourceNumber": 151,
      "title": "Question 151",
      "promptKo": "회사가 소셜 미디어 게시물의 댓글에서 유해한 언어를 식별하려고 합니다. 레이블이 지정된 데이터를 사용하여 모델을 학습하지는 않습니다.\n유해 언어를 식별하려면 어떤 전략을 사용해야 합니까?",
      "promptEn": "A company wants to identify harmful language in the comments section of social media posts by using an ML model. The company will not use labeled data to train the model.\nWhich strategy should the company use to identify harmful language?",
      "explanation": [
        "레이블 없는 상태에서도 사전 학습된 Amazon Comprehend의 유해성 감지 기능을 활용하면 유해 언어를 탐지할 수 있습니다."
      ],
      "wrongExplanations": [
        "- A -> Rekognition은 이미지/비디오에 대한 콘텐츠 분석",
        "- C -> SageMaker 알고리즘은 학습 데이터 필요",
        "- D -> Polly는 텍스트를 음성으로 변환"
      ],
      "glossary": [
        "- Amazon Comprehend: 자연어 처리(NLP) 서비스",
        "- Toxicity detection: 유해 언어 감지 기능"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use Amazon Rekognition moderation.",
          "textKo": "Use Amazon Rekognition moderation.",
          "text": "Use Amazon Rekognition moderation."
        },
        {
          "key": "B",
          "textEn": "Use Amazon Comprehend toxicity detection.",
          "textKo": "Use Amazon Comprehend toxicity detection.",
          "text": "Use Amazon Comprehend toxicity detection."
        },
        {
          "key": "C",
          "textEn": "Use Amazon SageMaker built-in algorithms to train the model.",
          "textKo": "Use Amazon SageMaker built-in algorithms to train the model.",
          "text": "Use Amazon SageMaker built-in algorithms to train the model."
        },
        {
          "key": "D",
          "textEn": "Use Amazon Polly to monitor comments.",
          "textKo": "Use Amazon Polly to monitor comments.",
          "text": "Use Amazon Polly to monitor comments."
        }
      ],
      "answerKey": "B",
      "answerText": "(Amazon Comprehend toxicity detection)"
    },
    {
      "id": 152,
      "sourceNumber": 152,
      "title": "Question 152",
      "promptKo": "미디어 회사는 시청자 행동과 인구 통계를 분석하여 개인화된 콘텐츠를 추천하고자 합니다.\n회사는 커스텀 ML 모델을 배포하고, 시간이 지나면서 모델 품질이 변하는지도 모니터링하고자 합니다.\n어떤 AWS 서비스가 이 요구사항을 충족합니까?",
      "promptEn": "A media company wants to analyze viewer behavior and demographics to recommend personalized content. The company wants to deploy a customized ML model in its production environment. The company also wants to observe if the model quality drifts over time.\nWhich AWS service or feature meets these requirements?",
      "explanation": [
        "Model Monitor는 모델의 품질 저하(데이터 드리프트, 성능 저하 등)를 모니터링하고 경고할 수 있습니다."
      ],
      "wrongExplanations": [
        "- A -> 영상 분석 도구",
        "- B -> 모델의 편향 및 설명성 분석 도구",
        "- C -> 자연어 처리 도구"
      ],
      "glossary": [
        "- Model Drift: 모델 성능이 시간이 지나면서 저하되는 현상",
        "- SageMaker Model Monitor: ML 모델의 품질 지속 모니터링 도구"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Rekognition",
          "textKo": "Amazon Rekognition",
          "text": "Amazon Rekognition"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker Clarify",
          "textKo": "Amazon SageMaker Clarify",
          "text": "Amazon SageMaker Clarify"
        },
        {
          "key": "C",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        },
        {
          "key": "D",
          "textEn": "Amazon SageMaker Model Monitor",
          "textKo": "Amazon SageMaker Model Monitor",
          "text": "Amazon SageMaker Model Monitor"
        }
      ],
      "answerKey": "D",
      "answerText": "(Amazon SageMaker Model Monitor)"
    },
    {
      "id": 153,
      "sourceNumber": 153,
      "title": "Question 153",
      "promptKo": "회사는 AWS를 사용해 AI/ML 모델을 배포하고 있습니다.\n모델의 의사 결정 과정에 대한 투명성과 설명을 제공하고자 합니다.\n어떤 서비스가 이 요구를 충족합니까?",
      "promptEn": "A company is deploying AI/ML models by using AWS services. The company wants to offer transparency into the models' decision-making processes and provide explanations for the model outputs.\nWhich AWS service or feature meets these requirements?",
      "explanation": [
        "Model Cards는 모델의 목적, 성능, 제한사항을 문서화하여 설명 가능성과 투명성을 제공합니다."
      ],
      "wrongExplanations": [
        "- B -> 영상 분석",
        "- C -> NLP",
        "- D -> 대화형 챗봇 서비스"
      ],
      "glossary": [
        "- Model Cards: AI 모델 정보의 문서화 도구 (투명성 확보)"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker Model Cards",
          "textKo": "Amazon SageMaker Model Cards",
          "text": "Amazon SageMaker Model Cards"
        },
        {
          "key": "B",
          "textEn": "Amazon Rekognition",
          "textKo": "Amazon Rekognition",
          "text": "Amazon Rekognition"
        },
        {
          "key": "C",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        },
        {
          "key": "D",
          "textEn": "Amazon Lex",
          "textKo": "Amazon Lex",
          "text": "Amazon Lex"
        }
      ],
      "answerKey": "A",
      "answerText": "(Amazon SageMaker Model Cards)"
    },
    {
      "id": 154,
      "sourceNumber": 154,
      "title": "Question 154",
      "promptKo": "제조 회사가 여러 언어로 제품 설명을 작성하려고 합니다.\n이 작업을 자동화할 수 있는 AWS 서비스는 무엇입니까?",
      "promptEn": "A manufacturing company wants to create product descriptions in multiple languages.\nWhich AWS service will automate this task?",
      "explanation": [
        "Amazon Translate는 텍스트를 다양한 언어로 자동 번역하는 서비스입니다."
      ],
      "wrongExplanations": [
        "- B -> 음성 -> 텍스트 변환",
        "- C -> 엔터프라이즈 검색 서비스",
        "- D -> 텍스트 -> 음성 변환"
      ],
      "glossary": [
        "- Amazon Translate: 자동 번역 서비스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Translate",
          "textKo": "Amazon Translate",
          "text": "Amazon Translate"
        },
        {
          "key": "B",
          "textEn": "Amazon Transcribe",
          "textKo": "Amazon Transcribe",
          "text": "Amazon Transcribe"
        },
        {
          "key": "C",
          "textEn": "Amazon Kendra",
          "textKo": "Amazon Kendra",
          "text": "Amazon Kendra"
        },
        {
          "key": "D",
          "textEn": "Amazon Polly",
          "textKo": "Amazon Polly",
          "text": "Amazon Polly"
        }
      ],
      "answerKey": "A",
      "answerText": "(Amazon Translate)"
    },
    {
      "id": 155,
      "sourceNumber": 155,
      "title": "Question 155 (HOTSPOT)",
      "promptKo": "회사는 생성형 AI 모델이 보다 맞춤화된 응답을 하길 원합니다.\n각 상황에 가장 적합한 커스터마이징 방법론을 선택하세요.\n모델은 새로운 도메인 특화(task) 를 학습해야 한다.\n라벨이 달린 데이터는 제한적으로만 있으며, 더 많은 데이터가 필요하다.\n라벨이 없는 데이터만 사용 가능하다.\nModel fine-tuning -> 특정 도메인 작업 학습\nData augmentation -> 라벨 데이터 증강\nContinued pre-training -> 비지도 데이터로 추가 사전 학습",
      "promptEn": "A company wants more customized responses to its generative AI models' prompts.\nSelect the correct customization methodology from the following list for each use case.\nPrompt:\n- The models must be taught a new domain-specific task\n- A limited amount of labeled data is available and more data is needed\n- Only unlabeled data is available\nOptions:\n- Continued pre-training\n- Data augmentation\n- Model fine-tuning",
      "explanation": [
        "- The models must be taught a new domain-specific task -> Model fine-tuning",
        "- A limited amount of labeled data is available and more data is needed -> Data augmentation",
        "- Only unlabeled data is available -> Continued pre-training"
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Model fine-tuning: 도메인 특정 작업에 모델을 미세 조정",
        "- Data augmentation: 데이터 증강으로 라벨 데이터 보완",
        "- Continued pre-training: 비지도 학습 기반 추가 학습"
      ],
      "type": "matching",
      "choicePool": [
        "Continued pre-training",
        "Data augmentation",
        "Model fine-tuning"
      ],
      "allowRepeat": false,
      "rows": [
        {
          "id": "155-row-1",
          "prompt": "The models must be taught a new domain-specific task",
          "answer": "Model fine-tuning"
        },
        {
          "id": "155-row-2",
          "prompt": "A limited amount of labeled data is available and more data is needed",
          "answer": "Data augmentation"
        },
        {
          "id": "155-row-3",
          "prompt": "Only unlabeled data is available",
          "answer": "Continued pre-training"
        }
      ]
    },
    {
      "id": 156,
      "sourceNumber": 156,
      "title": "Question 156",
      "promptKo": "ML 인스턴스 데이터에 대한 정보를 기록하여 거버넌스와 리포팅을 지원하는 AWS 기능은 무엇입니까?",
      "promptEn": "Which AWS feature records details about ML instance data for governance and reporting?",
      "explanation": [
        "Model Cards는 모델 개발 및 배포 과정에서 메타데이터와 정보를 문서화합니다."
      ],
      "wrongExplanations": [
        "- B -> 학습 중 이상 탐지",
        "- C -> 운영 중 품질 모니터링",
        "- D -> 미리 구축된 모델 및 예제 제공"
      ],
      "glossary": [
        "- Governance: 컴플라이언스 및 책임 관리 프레임워크"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker Model Cards",
          "textKo": "Amazon SageMaker Model Cards",
          "text": "Amazon SageMaker Model Cards"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker Debugger",
          "textKo": "Amazon SageMaker Debugger",
          "text": "Amazon SageMaker Debugger"
        },
        {
          "key": "C",
          "textEn": "Amazon SageMaker Model Monitor",
          "textKo": "Amazon SageMaker Model Monitor",
          "text": "Amazon SageMaker Model Monitor"
        },
        {
          "key": "D",
          "textEn": "Amazon SageMaker JumpStart",
          "textKo": "Amazon SageMaker JumpStart",
          "text": "Amazon SageMaker JumpStart"
        }
      ],
      "answerKey": "A",
      "answerText": "(Amazon SageMaker Model Cards)"
    },
    {
      "id": 157,
      "sourceNumber": 157,
      "title": "Question 157",
      "promptKo": "금융회사가 일부 업무를 ML로 처리하고 있습니다.\n다음 중 생성형 AI 모델의 활용 사례는 무엇입니까?",
      "promptEn": "A financial company is using ML to help with some of the company's tasks.\nWhich option is a use of generative AI models?",
      "explanation": [
        "텍스트 요약은 생성형 AI의 전형적 활용 사례입니다."
      ],
      "wrongExplanations": [
        "- B, C, D -> 전통적 ML 분석 또는 예측 기법"
      ],
      "glossary": [
        "- Generative AI: 새로운 텍스트, 이미지 등을 생성하는 AI"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Summarizing customer complaints",
          "textKo": "고객 불만 요약하기",
          "text": "Summarizing customer complaints"
        },
        {
          "key": "B",
          "textEn": "Classifying customers based on product usage",
          "textKo": "제품 사용 기반 고객 분류",
          "text": "Classifying customers based on product usage"
        },
        {
          "key": "C",
          "textEn": "Segmenting customers based on type of investments",
          "textKo": "투자 유형별 고객 세분화",
          "text": "Segmenting customers based on type of investments"
        },
        {
          "key": "D",
          "textEn": "Forecasting revenue for certain products",
          "textKo": "특정 제품 매출 예측",
          "text": "Forecasting revenue for certain products"
        }
      ],
      "answerKey": "A",
      "answerText": "(Summarizing customer complaints)"
    },
    {
      "id": 158,
      "sourceNumber": 158,
      "title": "Question 158",
      "promptKo": "의료 회사가 환자 기록에서 관련 정보를 추출하고 요약하는 AI 애플리케이션을 개발하려 합니다.\n어떤 솔루션이 이 요구사항을 충족합니까?",
      "promptEn": "A medical company wants to develop an AI application that can access structured patient records, extract relevant information, and generate concise summaries.\nWhich solution will meet these requirements?",
      "explanation": [
        "Comprehend Medical은 의료 데이터에서 개체, 관계 추출에 특화되어 있으며 요약을 위한 규칙 기반 로직도 적용 가능합니다."
      ],
      "wrongExplanations": [
        "- B -> Personalize는 추천용",
        "- C -> Textract는 비정형 문서 처리",
        "- D -> Kendra는 검색용"
      ],
      "glossary": [
        "- Comprehend Medical: 의료 전용 NLP 서비스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use Amazon Comprehend Medical to extract relevant medical entities and relationships. Apply rule-based logic to structure and format summaries.",
          "textKo": "Amazon Comprehend Medical -> 의료 개체/관계 추출 후 요약",
          "text": "Use Amazon Comprehend Medical to extract relevant medical entities and relationships. Apply rule-based logic to structure and format summaries."
        },
        {
          "key": "B",
          "textEn": "Use Amazon Personalize to analyze patient engagement patterns. Integrate the output with a general purpose text summarization tool.",
          "textKo": "Amazon Personalize -> 환자 패턴 분석 및 추천",
          "text": "Use Amazon Personalize to analyze patient engagement patterns. Integrate the output with a general purpose text summarization tool."
        },
        {
          "key": "C",
          "textEn": "Use Amazon Textract to convert scanned documents into digital text. Design a keyword extraction system to generate summaries.",
          "textKo": "Amazon Textract -> 스캔 문서 텍스트화",
          "text": "Use Amazon Textract to convert scanned documents into digital text. Design a keyword extraction system to generate summaries."
        },
        {
          "key": "D",
          "textEn": "Implement Amazon Kendra to provide a searchable index for medical records. Use a template-based system to format summaries.",
          "textKo": "Amazon Kendra -> 검색 인덱스 구축",
          "text": "Implement Amazon Kendra to provide a searchable index for medical records. Use a template-based system to format summaries."
        }
      ],
      "answerKey": "A",
      "answerText": "Use Amazon Comprehend Medical to extract relevant medical entities and relationships. Apply rule-based logic to structure and format summaries."
    },
    {
      "id": 159,
      "sourceNumber": 159,
      "title": "Question 159",
      "promptKo": "AI에서 임베딩(Embedding)은 어떤 개념입니까?",
      "promptEn": "Which option describes embeddings in the context of AI?",
      "explanation": [
        "임베딩은 텍스트, 이미지 등 고차원 데이터를 저차원 벡터로 표현하는 방식입니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Embedding: 의미 보존된 벡터 표현 (예: Word2Vec, BERT embeddings)"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "A method for compressing large datasets",
          "textKo": "대규모 데이터셋 압축 방식",
          "text": "A method for compressing large datasets"
        },
        {
          "key": "B",
          "textEn": "An encryption method for securing sensitive data",
          "textKo": "민감 데이터 암호화 방식",
          "text": "An encryption method for securing sensitive data"
        },
        {
          "key": "C",
          "textEn": "A method for visualizing high-dimensional data",
          "textKo": "고차원 데이터 시각화 기법",
          "text": "A method for visualizing high-dimensional data"
        },
        {
          "key": "D",
          "textEn": "A numerical method for data representation in a reduced dimensionality space",
          "textKo": "차원 축소된 수치 표현 방식",
          "text": "A numerical method for data representation in a reduced dimensionality space"
        }
      ],
      "answerKey": "D",
      "answerText": "A numerical method for data representation in a reduced dimensionality space"
    },
    {
      "id": 160,
      "sourceNumber": 160,
      "title": "Question 160",
      "promptKo": "회사가 책 요약 AI 애플리케이션을 개발하고 있습니다. 일부 책은 요약에 실패합니다.\n그 이유는 무엇입니까?",
      "promptEn": "A company is building an AI application to summarize books of varying lengths. During testing, the application fails to summarize some books.\nWhy does the application fail to summarize some books?",
      "explanation": [
        "일부 책이 너무 길어 모델의 context window(입력 토큰 수)를 초과했기 때문입니다.",
        "A (Temperature): 출력의 창의성/랜덤성을 조절하는 값으로, 실패 원인이 아님.",
        "B (Fine-tuning 지원 여부): 모델이 요약 실패하는 원인과 직접적 관련 없음.",
        "C (Top P): 확률 분포를 조절하는 샘플링 전략. 품질에 영향은 줄 수 있어도 입력 초과로 인한 실패와 무관."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Context size(문맥 크기): 모델이 한 번에 처리할 수 있는 입력 토큰(단어 단위 조각)의 최대 길이.",
        "- Temperature: 출력의 무작위성을 제어하는 값 (높으면 다양성&uarr;, 낮으면 보수적).",
        "- Top P: 확률 누적 분포 기반 샘플링 방식, 낮을수록 보수적이고 일관적 답변."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "The temperature is set too high.",
          "textKo": "Temperature 값이 너무 높음",
          "text": "The temperature is set too high."
        },
        {
          "key": "B",
          "textEn": "The selected model does not support fine-tuning.",
          "textKo": "선택한 모델이 파인튜닝을 지원하지 않음",
          "text": "The selected model does not support fine-tuning."
        },
        {
          "key": "C",
          "textEn": "The Top P value is too high.",
          "textKo": "Top P 값이 너무 높음",
          "text": "The Top P value is too high."
        },
        {
          "key": "D",
          "textEn": "The input tokens exceed the model's context size.",
          "textKo": "입력 토큰 수가 모델의 context 크기를 초과",
          "text": "The input tokens exceed the model's context size."
        }
      ],
      "answerKey": "D",
      "answerText": "The input tokens exceed the model's context size."
    },
    {
      "id": 161,
      "sourceNumber": 161,
      "title": "Question 161",
      "promptKo": "항공사가 항공편 일정, 예약, 결제 관련 질문에 응답할 수 있는 대화형 AI 챗봇을 만들고자 합니다.\nLLM과 지식 베이스를 활용한 텍스트 기반 인터페이스를 만들고자 합니다.\n가장 적은 개발 노력으로 요구사항을 충족할 수 있는 솔루션은 무엇입니까?",
      "promptEn": "An airline company wants to build a conversational AI assistant to answer customer questions about flight schedules, booking, and payments. The company wants to use large language models (LLMs) and a knowledge base to create a text-based chatbot interface.\nWhich solution will meet these requirements with the LEAST development effort?",
      "explanation": [
        "RAG 기반의 Amazon Bedrock 에이전트를 활용하면 최소한의 개발로 LLM + 지식 베이스 기반 챗봇을 쉽게 구성할 수 있습니다."
      ],
      "wrongExplanations": [
        "- A -> Autopilot은 자동 ML, 챗봇 구축엔 적합하지 않음",
        "- C -> Q Developer는 개발 지원 도구이며 챗봇 구축용 아님",
        "- D -> Jumpstart는 사전 훈련된 모델 사용에 적합하지만 지식 통합 기능은 제한적"
      ],
      "glossary": [
        "- RAG (Retrieval Augmented Generation): 외부 지식 베이스를 기반으로 LLM에 정보 제공"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Train models on Amazon SageMaker Autopilot",
          "textKo": "Amazon SageMaker Autopilot -> 자동 ML 모델 생성 서비스",
          "text": "Train models on Amazon SageMaker Autopilot"
        },
        {
          "key": "B",
          "textEn": "Develop a Retrieval Augmented Generation (RAG) agent by using Amazon Bedrock",
          "textKo": "Amazon Bedrock의 RAG 에이전트 -> 검색 + 생성 기반 챗봇 구성",
          "text": "Develop a Retrieval Augmented Generation (RAG) agent by using Amazon Bedrock"
        },
        {
          "key": "C",
          "textEn": "Create a Python application by using Amazon Q Developer",
          "textKo": "Amazon Q Developer -> 개발 지원 AI 도구",
          "text": "Create a Python application by using Amazon Q Developer"
        },
        {
          "key": "D",
          "textEn": "Fine-tune models on Amazon SageMaker Jumpstart",
          "textKo": "Amazon SageMaker JumpStart -> 사전 학습 모델 활용 서비스",
          "text": "Fine-tune models on Amazon SageMaker Jumpstart"
        }
      ],
      "answerKey": "B",
      "answerText": "(Amazon Bedrock의 RAG 에이전트 사용)"
    },
    {
      "id": 162,
      "sourceNumber": 162,
      "title": "Question 162",
      "promptKo": "자연어 처리(NLP)에서 토크나이제이션(tokenization)은 어떤 용도로 사용됩니까?",
      "promptEn": "What is tokenization used for in natural language processing (NLP)?",
      "explanation": [
        "토크나이제이션은 문장을 단어, 서브워드 또는 문자 단위로 나누어 모델이 처리할 수 있게 하는 전처리 작업입니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Token: NLP에서 처리 가능한 최소 단위 (예: 단어, subword)"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "To encrypt text data",
          "textKo": "텍스트 데이터를 암호화하기 위해",
          "text": "To encrypt text data"
        },
        {
          "key": "B",
          "textEn": "To compress text files",
          "textKo": "텍스트 파일을 압축하기 위해",
          "text": "To compress text files"
        },
        {
          "key": "C",
          "textEn": "To break text into smaller units for processing",
          "textKo": "텍스트를 작은 단위로 나누어 처리하기 위해",
          "text": "To break text into smaller units for processing"
        },
        {
          "key": "D",
          "textEn": "To translate text between languages",
          "textKo": "텍스트를 다른 언어로 번역하기 위해",
          "text": "To translate text between languages"
        }
      ],
      "answerKey": "C",
      "answerText": "(텍스트를 작은 단위로 분할)"
    },
    {
      "id": 163,
      "sourceNumber": 163,
      "title": "Question 163",
      "promptKo": "Transformer 기반 언어 모델의 특징은 무엇입니까?",
      "promptEn": "Which option is a characteristic of transformer-based language models?",
      "explanation": [
        "Transformer는 단순히 단어를 순서대로 보는 게 아니라,",
        "입력된 모든 단어(토큰) 가 서로 얼마나 중요한지(=연관성)를 계산합니다.",
        "- 예:",
        "문장 \"The cat sat on the mat\" 에서",
        "\"cat\"이라는 단어는 \"sat\"와 긴밀한 관계를 가지고, \"mat\"와도 어느 정도 관련이 있습니다.",
        "Self-attention은 이런 단어 간 상호 연관성을 가중치로 반영합니다.",
        "- 이 때문에 긴 문맥도 잘 이해할 수 있고, 병렬 처리도 가능해집니다."
      ],
      "wrongExplanations": [
        "- A. Use convolutional layers to apply filters across an input",
        "-> 이건 CNN(합성곱 신경망) 방식입니다.",
        "이미지 처리나 특정 NLP 태스크(텍스트 분류)에도 CNN이 쓰였지만, Transformer는 convolution을 사용하지 않습니다.",
        "- B. Can process only text data",
        "-> Transformer는 원래 텍스트 기반으로 시작했지만, 지금은 멀티모달로 발전했습니다.",
        "(예: Vision Transformer -> 이미지 처리, CLIP -> 텍스트+이미지, Audio Transformer -> 음성 처리 등)",
        "따라서 \"텍스트만 처리 가능\"은 틀린 설명입니다.",
        "- D. Process data sequences one element at a time in cyclic iterations",
        "-> 이건 RNN(Recurrent Neural Network) 의 특징입니다.",
        "RNN은 순차적으로 데이터를 처리하기 때문에 병렬 처리가 어렵고 긴 문맥을 다루기 힘든 단점이 있습니다.",
        "Transformer는 이런 한계를 극복하기 위해 병렬 처리 + Self-attention을 도입했습니다."
      ],
      "glossary": [
        "- Self-Attention (자기 주의 메커니즘)",
        "-> 입력된 모든 토큰(단어)이 서로 얼마나 중요한지 가중치를 부여하는 방법.",
        "예: \"He went to the bank\" -> \"bank\"이 \"river\"와 관련 있나? \"money\"와 관련 있나? -> 앞뒤 문맥을 보고 판단 가능.",
        "- Contextual Relationships (문맥적 관계)",
        "-> 단어의 의미가 주변 단어에 따라 달라지는 현상.",
        "Transformer는 이 관계를 더 정확히 파악할 수 있음.",
        "- 병렬 처리(Parallelization)",
        "-> RNN과 달리 Transformer는 전체 입력을 동시에 학습할 수 있어 학습 속도가 매우 빠름."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use convolutional layers to apply filters across an input",
          "textKo": "합성곱 층(convolutional layers)을 사용해 입력 전체에 필터 적용",
          "text": "Use convolutional layers to apply filters across an input"
        },
        {
          "key": "B",
          "textEn": "Can process only text data",
          "textKo": "텍스트 데이터만 처리 가능",
          "text": "Can process only text data"
        },
        {
          "key": "C",
          "textEn": "Use self-attention mechanisms to capture contextual relationships",
          "textKo": "Self-attention 메커니즘을 사용해 문맥적 관계를 학습",
          "text": "Use self-attention mechanisms to capture contextual relationships"
        },
        {
          "key": "D",
          "textEn": "Process data sequences one element at a time in cyclic iterations",
          "textKo": "데이터를 순차적으로 한 요소씩 반복(iteration) 처리",
          "text": "Process data sequences one element at a time in cyclic iterations"
        }
      ],
      "answerKey": "C",
      "answerText": "(Self-attention을 활용한 컨텍스트 이해)"
    },
    {
      "id": 164,
      "sourceNumber": 164,
      "title": "Question 164",
      "promptKo": "금융회사가 고객 신용 점수를 산출하는 AI 시스템을 사용하고 있습니다.\n새로운 지역으로 진출하려고 할 때 검토해야 할 규제는 무엇입니까?",
      "promptEn": "A financial company is using AI systems to obtain customer credit scores. The company wants to expand to a new geographic area.\nWhich compliance laws should the company review?",
      "explanation": [
        "신용 점수 산정에 사용하는 AI는 편향, 투명성 등 책임 있는 알고리즘 운용이 필요합니다."
      ],
      "wrongExplanations": [
        "- A -> 건강 정보 관련",
        "- B -> 결제 시스템 관련",
        "- C -> 교육 데이터 관련"
      ],
      "glossary": [
        "- Algorithm accountability: AI가 공정하고 책임 있게 작동하도록 요구하는 법적 기준"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Local health data protection laws",
          "textKo": "현지 보건 데이터 보호법",
          "text": "Local health data protection laws"
        },
        {
          "key": "B",
          "textEn": "Local payment card data protection laws",
          "textKo": "현지 결제 카드 데이터 보호법",
          "text": "Local payment card data protection laws"
        },
        {
          "key": "C",
          "textEn": "Local education privacy laws",
          "textKo": "현지 교육 개인정보 보호법",
          "text": "Local education privacy laws"
        },
        {
          "key": "D",
          "textEn": "Local algorithm accountability laws",
          "textKo": "현지 알고리즘 책임 관련 법률",
          "text": "Local algorithm accountability laws"
        }
      ],
      "answerKey": "D",
      "answerText": "(알고리즘 책임 관련 법률)"
    },
    {
      "id": 165,
      "sourceNumber": 165,
      "title": "Question 165",
      "promptKo": "회사에서 Amazon Bedrock의 Guardrails 기능으로 유해한 입력/출력을 필터링하려고 합니다.\n필터링 가능한 콘텐츠 카테고리는? (2개 선택)",
      "promptEn": "A company uses Amazon Bedrock for generative AI. It wants to use Guardrails to detect and filter harmful content.\nWhich content categories can Guardrails filter? (2개 선택)",
      "explanation": [
        "Bedrock Guardrails는 혐오, 폭력, 음란 등의 유해 콘텐츠를 필터링합니다."
      ],
      "wrongExplanations": [
        "- B, D, E -> 가이드라인 설정에 따라 허용되나 기본 필터 카테고리는 아님"
      ],
      "glossary": [
        "- Guardrails: 생성형 AI에서 콘텐츠 안전성을 제어하는 기능"
      ],
      "type": "multi-select",
      "options": [
        {
          "key": "A",
          "textEn": "Hate",
          "textKo": "혐오(Hate)",
          "text": "Hate"
        },
        {
          "key": "B",
          "textEn": "Politics",
          "textKo": "정치(Politics)",
          "text": "Politics"
        },
        {
          "key": "C",
          "textEn": "Violence",
          "textKo": "폭력(Violence)",
          "text": "Violence"
        },
        {
          "key": "D",
          "textEn": "Gambling",
          "textKo": "도박(Gambling)",
          "text": "Gambling"
        },
        {
          "key": "E",
          "textEn": "Religion",
          "textKo": "종교(Religion)",
          "text": "Religion"
        }
      ],
      "answerKeys": [
        "A",
        "C"
      ],
      "requiredSelections": 2
    },
    {
      "id": 166,
      "sourceNumber": 166,
      "title": "Question 166",
      "promptKo": "프롬프트 엔지니어링의 위험 또는 한계를 설명하는 시나리오는 무엇입니까?",
      "promptEn": "Which scenario describes a potential risk and limitation of prompt engineering?",
      "explanation": [
        "프롬프트가 외부 사용자 입력과 혼합되면 보안상 위협이 발생할 수 있음."
      ],
      "wrongExplanations": [
        "- A -> 여전히 검증 필요",
        "- C -> 데이터 포이즈닝은 모델 훈련 이슈",
        "- D -> 프롬프트만으로 항상 정확도 보장 불가"
      ],
      "glossary": [
        "- Prompt injection: 사용자 입력으로 프롬프트를 악용하는 공격"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Prompt engineering removes need for validation",
          "textKo": "프롬프트 엔지니어링은 검증 필요성을 제거한다",
          "text": "Prompt engineering removes need for validation"
        },
        {
          "key": "B",
          "textEn": "Vulnerability to prompt injection attacks",
          "textKo": "프롬프트 인젝션 공격에 취약하다",
          "text": "Vulnerability to prompt injection attacks"
        },
        {
          "key": "C",
          "textEn": "Proper prompts eliminate data poisoning",
          "textKo": "올바른 프롬프트는 데이터 포이즈닝을 제거한다",
          "text": "Proper prompts eliminate data poisoning"
        },
        {
          "key": "D",
          "textEn": "Prompts always generate reliable output",
          "textKo": "프롬프트는 항상 신뢰할 수 있는 출력을 생성한다",
          "text": "Prompts always generate reliable output"
        }
      ],
      "answerKey": "B",
      "answerText": "(프롬프트 인젝션 공격에 취약)"
    },
    {
      "id": 167,
      "sourceNumber": 167,
      "title": "Question 167",
      "promptKo": "RAG 기반 솔루션에서 새로운 콘텐츠가 매일 추가됩니다.\n어떤 단계는 배치 처리를 사용해야 합니까? (2개 선택)",
      "promptEn": "A company uses RAG for published content. New content is added daily. Which steps in the RAG pipeline should use batch processing? (2개 선택)",
      "explanation": [
        "콘텐츠 자체는 주기적으로 업데이트되므로, 해당 임베딩 및 인덱싱 작업은 오프라인 배치 처리에 적합합니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Batch Processing: 대량 데이터를 한꺼번에 처리하는 방식"
      ],
      "type": "multi-select",
      "options": [
        {
          "key": "A",
          "textEn": "Generation of content embeddings",
          "textKo": "콘텐츠 임베딩 생성",
          "text": "Generation of content embeddings"
        },
        {
          "key": "B",
          "textEn": "Generation of embeddings for user queries",
          "textKo": "사용자 쿼리 임베딩 생성",
          "text": "Generation of embeddings for user queries"
        },
        {
          "key": "C",
          "textEn": "Creation of the search index",
          "textKo": "검색 인덱스 생성",
          "text": "Creation of the search index"
        },
        {
          "key": "D",
          "textEn": "Retrieval of relevant content",
          "textKo": "관련 콘텐츠 검색",
          "text": "Retrieval of relevant content"
        },
        {
          "key": "E",
          "textEn": "Response generation for the user",
          "textKo": "사용자 응답 생성",
          "text": "Response generation for the user"
        }
      ],
      "answerKeys": [
        "C",
        "A"
      ],
      "requiredSelections": 2
    },
    {
      "id": 168,
      "sourceNumber": 168,
      "title": "Question 168",
      "promptKo": "복잡한 작업을 작은 단위로 나눠 LLM에 순차적으로 보내는 기법은 무엇입니까?",
      "promptEn": "Which technique breaks a complex task into subtasks sent sequentially to LLM?",
      "explanation": [
        "프롬프트 체이닝은 여러 단계를 거쳐 문제를 순차적으로 해결하는 방식입니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Prompt chaining: 이전 출력 결과를 다음 입력으로 사용하는 프롬프트 연결 방식"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "One-shot prompting",
          "textKo": "원샷 프롬프트(One-shot prompting)",
          "text": "One-shot prompting"
        },
        {
          "key": "B",
          "textEn": "Prompt chaining",
          "textKo": "프롬프트 체이닝(Prompt chaining)",
          "text": "Prompt chaining"
        },
        {
          "key": "C",
          "textEn": "Tree of thoughts",
          "textKo": "사고의 나무(Tree of thoughts)",
          "text": "Tree of thoughts"
        },
        {
          "key": "D",
          "textEn": "RAG",
          "textKo": "검색 증강 생성(RAG)",
          "text": "RAG"
        }
      ],
      "answerKey": "B",
      "answerText": "(Prompt chaining)"
    },
    {
      "id": 169,
      "sourceNumber": 169,
      "title": "Question 169",
      "promptKo": "빠르게 변하는 재고 데이터를 반영해 텍스트 생성 정확도를 높이려면 어떤 기법이 적절합니까?",
      "promptEn": "An AI practitioner wants to improve a text generation model using fast-changing inventory data.\nWhich technique helps?",
      "explanation": [
        "빠르게 바뀌는 외부 정보를 실시간으로 활용하려면 RAG가 적절합니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- RAG: 정적인 모델 대신 동적인 외부 지식을 활용 가능"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Transfer learning",
          "textKo": "전이 학습(Transfer learning)",
          "text": "Transfer learning"
        },
        {
          "key": "B",
          "textEn": "Federated learning",
          "textKo": "연합 학습(Federated learning)",
          "text": "Federated learning"
        },
        {
          "key": "C",
          "textEn": "Retrieval Augmented Generation (RAG)",
          "textKo": "검색 증강 생성(RAG)",
          "text": "Retrieval Augmented Generation (RAG)"
        },
        {
          "key": "D",
          "textEn": "One-shot prompting",
          "textKo": "원샷 프롬프트(One-shot prompting)",
          "text": "One-shot prompting"
        }
      ],
      "answerKey": "C",
      "answerText": "(RAG)"
    },
    {
      "id": 170,
      "sourceNumber": 170,
      "title": "Question 170",
      "promptKo": "모델 버전 기록 및 개발 문서를 표준화하려는 경우, 어떤 도구가 적절합니까?",
      "promptEn": "A company wants to track AI 모델 개발 이력 및 버전 정보를 문서화하려 합니다.\n어떤 솔루션이 적합합니까?",
      "explanation": [
        "Model Cards는 모델 메타데이터 및 책임성 관련 정보를 문서화하는 AWS 기능입니다."
      ],
      "wrongExplanations": [
        "- A -> 코드 버전 관리 도구",
        "- B -> 이상 탐지",
        "- D -> NLP 도구"
      ],
      "glossary": [
        "- Model Cards: 모델의 메타 정보, 성능, 제한사항 등을 문서화하는 기능"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Git",
          "textKo": "Git -> 코드 버전 관리 시스템",
          "text": "Git"
        },
        {
          "key": "B",
          "textEn": "Amazon Fraud Detector",
          "textKo": "Amazon Fraud Detector -> 이상 거래 탐지 서비스",
          "text": "Amazon Fraud Detector"
        },
        {
          "key": "C",
          "textEn": "Amazon SageMaker Model Cards",
          "textKo": "Amazon SageMaker Model Cards -> 모델 문서화 기능",
          "text": "Amazon SageMaker Model Cards"
        },
        {
          "key": "D",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend -> NLP 서비스",
          "text": "Amazon Comprehend"
        }
      ],
      "answerKey": "C",
      "answerText": "(Model Cards)"
    },
    {
      "id": 171,
      "sourceNumber": 171,
      "title": "Question 171",
      "promptKo": "여러 ML 모델을 사용하는 회사가 원래 모델 품질의 변화를 감지하여 문제를 해결하고자 합니다.\n어떤 AWS 서비스가 이 요구사항을 충족합니까?",
      "promptEn": "A company that uses multiple ML models wants to identify changes in original model quality so that the company can resolve any issues.\nWhich AWS service or feature meets these requirements?",
      "explanation": [
        "Model Monitor는 배포된 모델의 성능 저하(드리프트)를 자동으로 탐지하여 품질 저하 시 대응할 수 있도록 지원합니다."
      ],
      "wrongExplanations": [
        "- A -> JumpStart는 사전 훈련 모델 제공",
        "- B -> HyperPod는 대규모 훈련을 위한 인프라",
        "- C -> Data Wrangler는 데이터 전처리 도구"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker JumpStart",
          "textKo": "Amazon SageMaker JumpStart -> 사전 학습 모델 제공",
          "text": "Amazon SageMaker JumpStart"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker HyperPod",
          "textKo": "Amazon SageMaker HyperPod -> 대규모 학습 인프라",
          "text": "Amazon SageMaker HyperPod"
        },
        {
          "key": "C",
          "textEn": "Amazon SageMaker Data Wrangler",
          "textKo": "Amazon SageMaker Data Wrangler -> 데이터 전처리 도구",
          "text": "Amazon SageMaker Data Wrangler"
        },
        {
          "key": "D",
          "textEn": "Amazon SageMaker Model Monitor",
          "textKo": "Amazon SageMaker Model Monitor -> 모델 성능 모니터링",
          "text": "Amazon SageMaker Model Monitor"
        }
      ],
      "answerKey": "D",
      "answerText": "(Amazon SageMaker Model Monitor)"
    },
    {
      "id": 172,
      "sourceNumber": 172,
      "title": "Question 172",
      "promptKo": "RAG에서 \"청킹(chunking)\"의 목적은 무엇입니까?",
      "promptEn": "What is the purpose of chunking in Retrieval Augmented Generation (RAG)?",
      "explanation": [
        "청킹은 문서를 의미 있는 작은 단위로 나눠 임베딩하여 검색의 정확성과 관련성을 높입니다."
      ],
      "wrongExplanations": [
        "- A, D -> 저장 관련 아님",
        "- B -> 효율성보다는 정확성 중심"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "To avoid database storage limitations for large text documents",
          "textKo": "대형 텍스트 문서의 데이터베이스 저장 한도를 피하기 위해",
          "text": "To avoid database storage limitations for large text documents"
        },
        {
          "key": "B",
          "textEn": "To improve efficiency by avoiding the need to convert large text into vector embeddings",
          "textKo": "대규모 텍스트를 임베딩으로 변환할 필요를 줄이기 위해",
          "text": "To improve efficiency by avoiding the need to convert large text into vector embeddings"
        },
        {
          "key": "C",
          "textEn": "To improve the contextual relevancy of results retrieved from the vector index",
          "textKo": "벡터 인덱스 검색 결과의 문맥 관련성을 높이기 위해",
          "text": "To improve the contextual relevancy of results retrieved from the vector index"
        },
        {
          "key": "D",
          "textEn": "To decrease the cost of storage by storing parts or chunks of the text",
          "textKo": "텍스트를 분할 저장하여 저장 비용을 줄이기 위해",
          "text": "To decrease the cost of storage by storing parts or chunks of the text"
        }
      ],
      "answerKey": "C",
      "answerText": "(컨텍스트 관련성 향상)"
    },
    {
      "id": 173,
      "sourceNumber": 173,
      "title": "Question 173",
      "promptKo": "파일럿 단계에서 사용량이 적고, 향후 수요 예측이 어려운 경우 비용을 최소화하는 솔루션은?",
      "promptEn": "A company is piloting a generative AI editorial assistant. Usage is low now but unpredictable later.\nWants to minimize cost.\nWhich is best?",
      "explanation": [
        "사용량 예측이 어려울 경우, 온디맨드 방식은 사용량만큼만 비용이 발생해 유리합니다."
      ],
      "wrongExplanations": [
        "- A -> 고정비용 높음",
        "- B -> 예측 가능한 고정 부하에 적합",
        "- D -> 학습에는 적합하지만 비용 제어에 한계 있음"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "GPU-powered Amazon EC2",
          "textKo": "GPU-powered Amazon EC2",
          "text": "GPU-powered Amazon EC2"
        },
        {
          "key": "B",
          "textEn": "Amazon Bedrock with Provisioned Throughput",
          "textKo": "Amazon Bedrock with Provisioned Throughput",
          "text": "Amazon Bedrock with Provisioned Throughput"
        },
        {
          "key": "C",
          "textEn": "Amazon Bedrock with On-Demand Throughput",
          "textKo": "Amazon Bedrock with On-Demand Throughput",
          "text": "Amazon Bedrock with On-Demand Throughput"
        },
        {
          "key": "D",
          "textEn": "Amazon SageMaker JumpStart",
          "textKo": "Amazon SageMaker JumpStart",
          "text": "Amazon SageMaker JumpStart"
        }
      ],
      "answerKey": "C",
      "answerText": "(On-Demand Throughput)"
    },
    {
      "id": 174,
      "sourceNumber": 174,
      "title": "Question 174",
      "promptKo": "정치적으로 편향된 콘텐츠가 출력되는 경우, 어떤 Guardrail을 설정해야 합니까?",
      "promptEn": "A RAG app on Bedrock is generating politically influenced content.\nWhich guardrail option filters this?",
      "explanation": [
        "정치와 같은 특정 주제를 차단하려면 Denied Topics 설정을 활용합니다."
      ],
      "wrongExplanations": [
        "- A -> 단어 차단",
        "- C -> 개인정보 등 민감 정보 차단",
        "- D -> 전반적인 유해성 관련 필터"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Word filters",
          "textKo": "단어 필터(Word filters)",
          "text": "Word filters"
        },
        {
          "key": "B",
          "textEn": "Denied topics",
          "textKo": "차단된 주제(Denied topics)",
          "text": "Denied topics"
        },
        {
          "key": "C",
          "textEn": "Sensitive information filters",
          "textKo": "민감 정보 필터(Sensitive information filters)",
          "text": "Sensitive information filters"
        },
        {
          "key": "D",
          "textEn": "Content filters",
          "textKo": "콘텐츠 필터(Content filters)",
          "text": "Content filters"
        }
      ],
      "answerKey": "B",
      "answerText": "(Denied topics)"
    },
    {
      "id": 175,
      "sourceNumber": 175,
      "title": "Question 175",
      "promptKo": "신용카드 사기 탐지 시스템에서 실제 사기가 아닌 건도 많이 플래그됩니다.\n직원의 검토 부담을 줄이기 위한 평가지표는?",
      "promptEn": "Fraud detection system is flagging many false positives.\nWhich metric reduces reviewer burden?",
      "explanation": [
        "Precision은 실제 사기인 경우만 정확하게 탐지하는 비율이므로, false positive를 줄이는 데 적합합니다."
      ],
      "wrongExplanations": [
        "- A -> recall은 놓치지 않는 것에 초점",
        "- B -> 전체 정확도지만 class imbalance에 약함",
        "- D -> 시각화 도구로 직접 해결책은 아님"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Recall",
          "textKo": "재현율(Recall)",
          "text": "Recall"
        },
        {
          "key": "B",
          "textEn": "Accuracy",
          "textKo": "정확도(Accuracy)",
          "text": "Accuracy"
        },
        {
          "key": "C",
          "textEn": "Precision",
          "textKo": "정밀도(Precision)",
          "text": "Precision"
        },
        {
          "key": "D",
          "textEn": "Lift chart",
          "textKo": "향상도 차트(Lift chart)",
          "text": "Lift chart"
        }
      ],
      "answerKey": "C",
      "answerText": "(Precision)"
    },
    {
      "id": 176,
      "sourceNumber": 176,
      "title": "Question 176",
      "promptKo": "제품 매뉴얼 기반 AI 상담봇에서 고객 신뢰를 높이기 위한 전략은?",
      "promptEn": "AI agent answers questions from product manuals.\nHow to boost user trust?",
      "explanation": [
        "출처를 제공하면 응답의 근거를 보여줘 사용자 신뢰도가 높아집니다."
      ],
      "wrongExplanations": [
        "- A -> 숫자만으로는 설득력 부족",
        "- C -> 외형은 신뢰성과 직접 관련 없음",
        "- D -> 톤은 일관성엔 도움 되지만 신뢰성 보장은 아님"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Write confidence score in answer",
          "textKo": "답변에 신뢰도 점수 표시",
          "text": "Write confidence score in answer"
        },
        {
          "key": "B",
          "textEn": "Include links to product manuals",
          "textKo": "제품 매뉴얼 링크 제공",
          "text": "Include links to product manuals"
        },
        {
          "key": "C",
          "textEn": "Design computer-like avatar",
          "textKo": "컴퓨터 같은 아바타 디자인",
          "text": "Design computer-like avatar"
        },
        {
          "key": "D",
          "textEn": "Mimic company tone in answers",
          "textKo": "회사의 어조를 모방해 답변",
          "text": "Mimic company tone in answers"
        }
      ],
      "answerKey": "B",
      "answerText": "(참조 링크 제공)"
    },
    {
      "id": 177,
      "sourceNumber": 177,
      "title": "Question 177",
      "promptKo": "AI가 치료 추천과 함께 설명도 제공합니다.\n이것은 어떤 인간 중심 설계 원칙입니까?",
      "promptEn": "AI gives treatment suggestions with explanations.\nWhat human-centered AI principle is this?",
      "explanation": [
        "설명 가능성은 사용자와 전문가가 AI의 결정을 이해하고 신뢰하도록 돕습니다.",
        "의료처럼 고위험(high-stakes) 분야에서는 단순한 답변보다, \"왜 이런 결론에 도달했는지\" 설명이 반드시 필요합니다.",
        "설명이 없으면 사용자는 AI의 결정을 불신하거나 무작정 의존할 수 있어 위험합니다.",
        "- B. Privacy and security -> 데이터 보호 관련 원칙이지, 설명 제공과 직접적인 관련 없음.",
        "- C. Fairness -> 공정성은 차별 없는 의사결정을 의미. 설명성과는 다른 개념.",
        "- D. Data governance -> 데이터 관리 및 품질 보장 원칙. 설명과 무관."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Explainability",
          "textKo": "설명 가능성(Explainability)",
          "text": "Explainability"
        },
        {
          "key": "B",
          "textEn": "Privacy and security",
          "textKo": "개인정보 보호 및 보안(Privacy and security)",
          "text": "Privacy and security"
        },
        {
          "key": "C",
          "textEn": "Fairness",
          "textKo": "공정성(Fairness)",
          "text": "Fairness"
        },
        {
          "key": "D",
          "textEn": "Data governance",
          "textKo": "데이터 거버넌스(Data governance)",
          "text": "Data governance"
        }
      ],
      "answerKey": "A",
      "answerText": "(Explainability)"
    },
    {
      "id": 178,
      "sourceNumber": 178,
      "title": "Question 178",
      "promptKo": "RAG 기법의 NLP에서의 주요 장점은 무엇입니까?",
      "promptEn": "What is a key benefit of RAG for NLP?",
      "explanation": [
        "RAG (Retrieval-Augmented Generation) 은 모델 내부 지식만 사용하는 것이 아니라, **외부 지식 소스(예: 데이터베이스, 문서, 벡터 스토어)**에서 관련 정보를 검색한 뒤 답변을 생성합니다.",
        "장점:",
        "- 최신 정보 반영 가능 (LLM이 오래된 학습 데이터만 알 때 보완 가능)",
        "- 도메인 특화 지식 반영 가능",
        "- 모델 크기나 파라미터 수를 늘리지 않고도 정확도 향상 가능",
        "B. Speeds up model training -> RAG는 학습 속도와 무관.",
        "C. For speech recognition -> RAG는 NLP 답변 생성, 음성 인식과 무관.",
        "D. For data augmentation in vision -> 비전 분야 증강 기법은 RAG와 무관."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Uses external knowledge for better answers",
          "textKo": "외부 지식을 활용해 더 나은 답변 제공",
          "text": "Uses external knowledge for better answers"
        },
        {
          "key": "B",
          "textEn": "Speeds up model training",
          "textKo": "모델 학습 속도 향상",
          "text": "Speeds up model training"
        },
        {
          "key": "C",
          "textEn": "For speech recognition",
          "textKo": "음성 인식에 사용",
          "text": "For speech recognition"
        },
        {
          "key": "D",
          "textEn": "For data augmentation in vision",
          "textKo": "컴퓨터 비전에서 데이터 증강에 사용",
          "text": "For data augmentation in vision"
        }
      ],
      "answerKey": "A",
      "answerText": "(외부 지식 활용 가능)"
    },
    {
      "id": 179,
      "sourceNumber": 179,
      "title": "Question 179",
      "promptKo": "Fine-tuning된 모델이 꾸준한 요청을 처리해야 할 때, 가장 비용 효율적인 배포 방식은?",
      "promptEn": "Company fine-tuned an LLM and expects steady traffic.\nWants cost-effective deployment.\nBest option?",
      "explanation": [
        "일정한 트래픽이 예상될 경우 Provisioned Throughput은 예측 가능한 성능과 낮은 단가를 제공합니다.",
        "A. Amazon EC2 -> 모델 호스팅 가능하나, 직접 인프라 관리 필요 -> 유지보수 부담&uarr;, 비용 효율&darr;.",
        "B. On-demand throughput -> 변동 트래픽에 적합. 꾸준한 트래픽에는 비용이 더 나옴.",
        "C. S3 + Lambda -> 서버리스 워크로드에는 적합하지만, LLM 서빙에는 부적절."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon EC2",
          "textKo": "Amazon EC2",
          "text": "Amazon EC2"
        },
        {
          "key": "B",
          "textEn": "On-demand throughput on Bedrock",
          "textKo": "Amazon Bedrock 온디맨드(Throughput)",
          "text": "On-demand throughput on Bedrock"
        },
        {
          "key": "C",
          "textEn": "S3 + Lambda",
          "textKo": "Amazon S3 + AWS Lambda",
          "text": "S3 + Lambda"
        },
        {
          "key": "D",
          "textEn": "Provisioned Throughput on Bedrock",
          "textKo": "Amazon Bedrock 사전 할당(Provisioned Throughput)",
          "text": "Provisioned Throughput on Bedrock"
        }
      ],
      "answerKey": "D",
      "answerText": "(Provisioned Throughput)"
    },
    {
      "id": 180,
      "sourceNumber": 180,
      "title": "Question 180",
      "promptKo": "산업별 용어에 맞게 모델을 적응시키기 위한 라벨 데이터 기반 학습 방법은?",
      "promptEn": "Which method trains AI models on labeled data to adapt to industry-specific terms?",
      "explanation": [
        "Fine-tuning은 기존 모델을 도메인 특화 데이터로 재학습시켜 특정 요구에 최적화합니다.",
        "예:",
        "- 일반 LLM -> \"환자 chart\"를 단순히 \"표(chart)\"로 해석",
        "- 의료 도메인 fine-tuned LLM -> \"chart\"를 \"환자 진료 기록\"으로 정확히 이해",
        "A. Data augmentation -> 데이터 수를 늘리는 기법이지, 모델을 도메인 특화시키는 방법 아님.",
        "C. Model quantization -> 모델을 압축해 효율성을 높이는 기법, 학습 적응과 무관.",
        "D. Continuous pre-training -> 라벨 없는 대규모 데이터로 추가 학습하는 방식. 산업별 라벨 데이터 적응과는 다름."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Data augmentation",
          "textKo": "데이터 증강(Data augmentation)",
          "text": "Data augmentation"
        },
        {
          "key": "B",
          "textEn": "Fine-tuning",
          "textKo": "파인튜닝(Fine-tuning)",
          "text": "Fine-tuning"
        },
        {
          "key": "C",
          "textEn": "Model quantization",
          "textKo": "모델 양자화(Model quantization)",
          "text": "Model quantization"
        },
        {
          "key": "D",
          "textEn": "Continuous pre-training",
          "textKo": "지속적 사전 학습(Continuous pre-training)",
          "text": "Continuous pre-training"
        }
      ],
      "answerKey": "B",
      "answerText": "(Fine-tuning)"
    },
    {
      "id": 181,
      "sourceNumber": 181,
      "title": "Question 181",
      "promptKo": "한 회사가 Amazon Bedrock Agents를 사용해 애플리케이션용 에이전트를 만들고 있습니다. 에이전트가 잘 작동하지만, 구체적인 예시를 제공해 정확도를 개선하려고 합니다. 어떤 해결책이 이 요구사항을 충족합니까?",
      "promptEn": "A company is creating an agent for its application by using Amazon Bedrock Agents. The agent is performing well, but the company wants to improve the agent's accuracy by providing some specific examples. Which solution meets these requirements?",
      "explanation": [
        "고급 프롬프트에 구체적인 예시를 포함하면 에이전트가 더 정확하게 동작하도록 유도할 수 있습니다.",
        "B: 가드레일은 안전성&middot;적절성 제어용",
        "C: Ground Truth는 데이터 라벨링용, 프롬프트 개선과 직접 관련 없음",
        "D: Lambda로 데이터셋 수정은 Bedrock Agents 즉시 학습과 관련 없음"
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Amazon Bedrock Agents: 관리형 LLM 기반 에이전트 서비스",
        "- Prompt Engineering: 프롬프트 설계를 통해 모델 출력을 개선하는 기술"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Modify the advanced prompts for the agent to include the examples.",
          "textKo": "에이전트의 고급 프롬프트를 수정하여 예시 포함",
          "text": "Modify the advanced prompts for the agent to include the examples."
        },
        {
          "key": "B",
          "textEn": "Create a guardrail for the agent that includes the examples.",
          "textKo": "에이전트의 가드레일에 예시 포함",
          "text": "Create a guardrail for the agent that includes the examples."
        },
        {
          "key": "C",
          "textEn": "Use Amazon SageMaker Ground Truth to label the examples.",
          "textKo": "Amazon SageMaker Ground Truth를 사용해 예시 라벨링",
          "text": "Use Amazon SageMaker Ground Truth to label the examples."
        },
        {
          "key": "D",
          "textEn": "Run a script in AWS Lambda that adds the examples to the training dataset.",
          "textKo": "AWS Lambda 스크립트로 학습 데이터셋에 예시 추가",
          "text": "Run a script in AWS Lambda that adds the examples to the training dataset."
        }
      ],
      "answerKey": "A",
      "answerText": "(프롬프트에 예시 포함)"
    },
    {
      "id": 182,
      "sourceNumber": 182,
      "title": "Question 182",
      "promptKo": "머신러닝 운영(MLOps)에서 인프라를 코드로 관리(IaC)하는 이점은 무엇입니까?",
      "promptEn": "Which option is a benefit of using infrastructure as code (IaC) in machine learning operations (MLOps)?",
      "explanation": [
        "IaC를 사용하면 클라우드 환경에서 확장 가능하고 일관된 머신러닝 워크로드를 자동으로 배포할 수 있어 운영 효율성이 높아집니다.",
        "A: 하이퍼파라미터 튜닝과 관련 없음",
        "B: IaC는 인스턴스 유형 지정 가능, 항상 강력한 인스턴스는 아님",
        "D: 비용 절감과 직접 연결되지 않음"
      ],
      "wrongExplanations": [],
      "glossary": [
        "- IaC (Infrastructure as Code): 코드로 인프라를 정의하고 관리하는 방법",
        "- MLOps: 머신러닝 모델 운영 및 배포를 위한 DevOps 접근 방식"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "IaC eliminates the need for hyperparameter tuning.",
          "textKo": "하이퍼파라미터 튜닝 필요성을 없앰",
          "text": "IaC eliminates the need for hyperparameter tuning."
        },
        {
          "key": "B",
          "textEn": "IaC always provisions powerful compute instances, contributing to the training of more accurate models.",
          "textKo": "항상 강력한 컴퓨팅 인스턴스 제공",
          "text": "IaC always provisions powerful compute instances, contributing to the training of more accurate models."
        },
        {
          "key": "C",
          "textEn": "IaC streamlines the deployment of scalable and consistent ML workloads in cloud environments.",
          "textKo": "클라우드 환경에서 확장 가능하고 일관된 ML 워크로드 배포",
          "text": "IaC streamlines the deployment of scalable and consistent ML workloads in cloud environments."
        },
        {
          "key": "D",
          "textEn": "IaC minimizes overall expenses by deploying only low-cost instances.",
          "textKo": "비용을 최소화하기 위해 저가 인스턴스만 배포",
          "text": "IaC minimizes overall expenses by deploying only low-cost instances."
        }
      ],
      "answerKey": "C",
      "answerText": "(일관되고 확장 가능한 배포)"
    },
    {
      "id": 183,
      "sourceNumber": 183,
      "title": "Question 183",
      "promptKo": "한 회사가 특정 도메인에 대한 질문에 답하기 위해 파운데이션 모델(FM)을 instruction 기반으로 fine-tuning 하려 합니다. 학습 데이터를 어떻게 준비해야 합니까?",
      "promptEn": "A company wants to fine-tune a foundation model (FM) to answer questions for a specific domain. The company wants to use instruction-based fine-tuning. How should the company prepare the training data?",
      "explanation": [
        "instruction-based fine-tuning에는 도메인 관련 질문과 답변 쌍을 만들어 모델이 정확히 학습할 수 있도록 해야 합니다.",
        "A: 단순 문서 병합은 학습 형식 불충분",
        "B: 감정 분류와 관련",
        "D: few-shot 프롬프트는 프롬프트 기반 학습용"
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Gather company internal documents and industry-specific materials. Merge the documents and materials into a single file.",
          "textKo": "사내 문서와 업계 자료를 수집하여 단일 파일로 합침",
          "text": "Gather company internal documents and industry-specific materials. Merge the documents and materials into a single file."
        },
        {
          "key": "B",
          "textEn": "Collect external company reviews from various online sources. Manually label each review as either positive or negative.",
          "textKo": "외부 리뷰를 수집하고 긍정/부정 라벨링",
          "text": "Collect external company reviews from various online sources. Manually label each review as either positive or negative."
        },
        {
          "key": "C",
          "textEn": "Create pairs of questions and answers that specifically address topics related to the company's industry domain.",
          "textKo": "도메인 관련 질문-답변 쌍 생성",
          "text": "Create pairs of questions and answers that specifically address topics related to the company's industry domain."
        },
        {
          "key": "D",
          "textEn": "Create few-shot prompts to instruct the model to answer only domain knowledge.",
          "textKo": "few-shot 프롬프트 생성",
          "text": "Create few-shot prompts to instruct the model to answer only domain knowledge."
        }
      ],
      "answerKey": "C",
      "answerText": "(질문-답변 쌍 생성)"
    },
    {
      "id": 184,
      "sourceNumber": 184,
      "title": "Question 184",
      "promptKo": "AWS에서 AI 모델을 학습할 때 데이터 준수 및 프라이버시를 보장하는 머신러닝 기법은 무엇입니까?",
      "promptEn": "Which ML technique ensures data compliance and privacy when training AI models on AWS?",
      "explanation": [
        "Federated learning은 데이터 소유권을 유지하면서 여러 위치에서 분산 학습을 수행해 데이터 프라이버시와 컴플라이언스를 보장합니다.",
        "A: 강화 학습은 정책 최적화용",
        "B: 전이 학습은 기존 모델 활용",
        "D: 비지도 학습은 라벨 없는 데이터 학습"
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Federated Learning: 데이터가 중앙 서버로 이동하지 않고 분산 학습 수행",
        "- Data Compliance: 데이터 보호 관련 법규 및 정책 준수"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Reinforcement learning",
          "textKo": "강화 학습",
          "text": "Reinforcement learning"
        },
        {
          "key": "B",
          "textEn": "Transfer learning",
          "textKo": "전이 학습",
          "text": "Transfer learning"
        },
        {
          "key": "C",
          "textEn": "Federated learning",
          "textKo": "연합 학습",
          "text": "Federated learning"
        },
        {
          "key": "D",
          "textEn": "Unsupervised learning",
          "textKo": "비지도 학습",
          "text": "Unsupervised learning"
        }
      ],
      "answerKey": "C",
      "answerText": "(Federated learning)"
    },
    {
      "id": 185,
      "sourceNumber": 185,
      "title": "Question 185",
      "promptKo": "한 회사가 Amazon Bedrock에 호스팅된 베이스 모델을 맞춤화해야 합니다.\n다음 회사 요구사항에 맞는 모델 커스터마이징 방법을 선택하십시오. 각 방법은 하나 이상 선택할 수 있습니다.\n요구사항\n|\n| 정답\n|\n회사는 특정 작업과 예시에 대한 모델 성능 향상을 원합니다.\n|\n| 파인튜닝\n|\n회사는 특정 문서를 제공하여 도메인 지식 향상을 원합니다.\n|\n| 지속적 사전학습\n|\n회사는 시간이 지남에 따라 더 많은 비라벨 데이터를 사용해 모델을 재학습하기 원합니다.\n|\n| 지속적 사전학습\n|",
      "promptEn": "- A company needs to customize a base model that is hosted on Amazon Bedrock.\nSelect the correct model customization method from the following list of company requirements. Each model customization method should be selected one or more times.\nRequirement\n| Options\n| 정답\n|\nThe company wants to improve the model's performance on specific tasks and examples.\n| Continued pre-training, Fine-tuning\n| Fine-tuning\n|\nThe company wants to improve the model's domain knowledge by providing specific documents.\n| Continued pre-training, Fine-tuning\n| Continued pre-training\n|\nThe company wants to retrain the model by using more unlabeled data over time.\n| Continued pre-training, Fine-tuning\n| Continued pre-training\n|",
      "explanation": [
        "- Fine-tuning은 특정 작업/예제에 대한 성능 개선에 사용됩니다.",
        "- Continued pre-training은 도메인 지식 강화나 비식별 데이터로 추가 학습에 적합합니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Fine-tuning: 라벨된 데이터로 특정 작업에 맞게 모델을 조정",
        "- Continued pre-training: 도메인 관련 데이터로 사전 학습을 이어감",
        "|",
        "|",
        "|"
      ],
      "type": "matching",
      "choicePool": [
        "Continued pre-training",
        "Fine-tuning",
        "파인튜닝",
        "지속적 사전학습"
      ],
      "allowRepeat": true,
      "rows": [
        {
          "id": "185-row-1",
          "prompt": "회사는 특정 작업과 예시에 대한 모델 성능 향상을 원합니다.",
          "answer": "파인튜닝"
        },
        {
          "id": "185-row-2",
          "prompt": "회사는 특정 문서를 제공하여 도메인 지식 향상을 원합니다.",
          "answer": "지속적 사전학습"
        },
        {
          "id": "185-row-3",
          "prompt": "회사는 시간이 지남에 따라 더 많은 비라벨 데이터를 사용해 모델을 재학습하기 원합니다.",
          "answer": "지속적 사전학습"
        }
      ]
    },
    {
      "id": 186,
      "sourceNumber": 186,
      "title": "Question 186",
      "promptKo": "한 제조 회사가 공개된 소비자 불만을 수집하는 애플리케이션을 운영 중입니다. 애플리케이션은 복잡한 하드코딩 로직으로 불만을 처리합니다. 이 로직을 시장과 제품 라인 전반에 확장하려 합니다. 이 시나리오에서 생성형 AI 모델이 제공하는 이점은 무엇입니까?",
      "promptEn": "A manufacturing company has an application that ingests consumer complaints from publicly available sources. The application uses complex hard-coded logic to process the complaints. The company wants to scale this logic across markets and product lines. Which advantage do generative AI models offer for this scenario?",
      "explanation": [
        "생성형 AI 모델은 사전에 모든 경우의 수를 하드코딩할 필요 없이, 다양한 입력 패턴에 맞게 유연하게 적응할 수 있습니다.",
        "시장/제품별 불만 유형이 다르더라도, 생성형 모델은 패턴을 일반화해 처리할 수 있으므로 확장성에 유리합니다.",
        "A. 출력의 예측 가능성 -> 생성형 모델은 출력이 확률적이므로 항상 동일하지 않음.",
        "C. 입력 변화에 덜 민감함 -> 실제로는 입력 변화에 민감할 수 있음.",
        "D. 설명 가능성 -> 모델이 왜 그런 출력을 했는지 설명하는 원칙이지, 문제 상황의 핵심 이점은 아님."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Predictability of outputs",
          "textKo": "출력의 예측 가능성",
          "text": "Predictability of outputs"
        },
        {
          "key": "B",
          "textEn": "Adaptability",
          "textKo": "적응성",
          "text": "Adaptability"
        },
        {
          "key": "C",
          "textEn": "Less sensitivity to changes in inputs",
          "textKo": "입력 변화에 덜 민감함",
          "text": "Less sensitivity to changes in inputs"
        },
        {
          "key": "D",
          "textEn": "Explainability",
          "textKo": "설명 가능성",
          "text": "Explainability"
        }
      ],
      "answerKey": "B",
      "answerText": "(적응성)"
    },
    {
      "id": 187,
      "sourceNumber": 187,
      "title": "Question 187",
      "promptKo": "금융회사가 거래 데이터를 기반으로 모든 신용카드 활동을 사기 가능성과 비사기로 구분하고자 합니다. 어떤 유형의 ML 모델이 이 요구사항에 적합합니까?",
      "promptEn": "A financial company wants to flag all credit card activity as possibly fraudulent or non-fraudulent based on transaction data. Which type of ML model meets these requirements?",
      "explanation": [
        "사기 탐지는 일반적으로 이진 분류 문제이므로 Binary Classification 모델이 적합합니다.",
        "A. Regression (회귀) -> 연속적인 숫자 값 예측용으로 사용되며, 사기 탐지처럼 범주(사기/비사기)를 분류하는 문제에는 적합하지 않습니다.",
        "B. Diffusion (확산) -> 주로 생성 모델과 관련된 기술이며, 분류 문제와는 직접 관련이 없습니다.",
        "D. Multi-class classification (다중 클래스 분류) -> 다중 클래스 문제(세 가지 이상 범주)용이며, 이진(사기/비사기) 문제에는 과도합니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- 이진 분류(Binary Classification): 두 가지 범주 중 하나를 예측하는 ML 모델"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Regression",
          "textKo": "회귀(Regression)",
          "text": "Regression"
        },
        {
          "key": "B",
          "textEn": "Diffusion",
          "textKo": "확산(Diffusion)",
          "text": "Diffusion"
        },
        {
          "key": "C",
          "textEn": "Binary classification",
          "textKo": "이진 분류(Binary Classification)",
          "text": "Binary classification"
        },
        {
          "key": "D",
          "textEn": "Multi-class classification",
          "textKo": "다중 클래스 분류(Multi-class Classification)",
          "text": "Multi-class classification"
        }
      ],
      "answerKey": "C",
      "answerText": "Binary Classification (이진 분류)"
    },
    {
      "id": 188,
      "sourceNumber": 188,
      "title": "Question 188",
      "promptKo": "회사는 Fine-tuning된 LLM을 사용해 고객 서비스 챗봇을 설계하고 있으며, 책임 있는 AI 특성을 반영하려 합니다.\n각 설계 활동에 대해 올바른 Responsible AI 특성을 선택하세요. 각 특성은 한 번만 선택하거나 선택하지 않을 수 있습니다.\n설계 활동\n| 선택지: 거버넌스, 개인정보 보호 및 보안, 안전성, 투명성\n| 정답\n|\n학습 데이터 준비 시 개인 정보를 익명화한다\n| 거버넌스, 개인정보 보호 및 보안, 안전성, 투명성\n| 개인정보 보호 및 보안\n|\n고객 서비스 챗봇이 설명 가능한 결정을 제공하도록 설계한다\n| 거버넌스, 개인정보 보호 및 보안, 안전성, 투명성\n| 투명성\n|\nAmazon Bedrock Guardrails를 사용해 유해 출력 방지\n| 거버넌스, 개인정보 보호 및 보안, 안전성, 투명성\n| 안전성\n|",
      "promptEn": "A company is designing a customer service chatbot by using a fine-tuned large language model (LLM). The company wants to ensure that the chatbot uses responsible AI characteristics.\nSelect the correct responsible AI characteristic from the following list for each application design action. Each responsible AI characteristic should be selected one time or not at all.\nApplication Design Action\n| Options: Governance, Privacy and security, Safety, Transparency\n| 정답\n|\nAnonymize personal information during training data preparation\n| Governance, Privacy and security, Safety, Transparency\n| Privacy and security\n|\nDesign the customer service chatbot to provide explainable decisions\n| Governance, Privacy and security, Safety, Transparency\n| Transparency\n|\nUse Amazon Bedrock Guardrails to prevent harmful output and misuse of the chatbot\n| Governance, Privacy and security, Safety, Transparency\n| Safety\n|",
      "explanation": [
        "- Privacy and security: 데이터 준비 시 개인 정보 익명화",
        "- Transparency: 챗봇의 결정에 대한 설명 가능성",
        "- Safety: Bedrock Guardrails로 유해 출력 방지"
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Responsible AI: AI 시스템이 공정하고 안전하며 투명하게 작동하도록 설계",
        "- Guardrails: Amazon Bedrock에서 유해하거나 부적절한 출력을 제어하는 설정"
      ],
      "type": "matching",
      "choicePool": [
        "거버넌스",
        "개인정보 보호 및 보안",
        "안전성",
        "투명성"
      ],
      "allowRepeat": false,
      "rows": [
        {
          "id": "188-row-1",
          "prompt": "학습 데이터 준비 시 개인 정보를 익명화한다",
          "answer": "개인정보 보호 및 보안"
        },
        {
          "id": "188-row-2",
          "prompt": "고객 서비스 챗봇이 설명 가능한 결정을 제공하도록 설계한다",
          "answer": "투명성"
        },
        {
          "id": "188-row-3",
          "prompt": "Amazon Bedrock Guardrails를 사용해 유해 출력 방지",
          "answer": "안전성"
        }
      ]
    },
    {
      "id": 189,
      "sourceNumber": 189,
      "title": "Question 189",
      "promptKo": "병원이 임상 기록을 받아쓰는 직원의 역량 향상을 위해 음성-텍스트 기능이 있는 생성형 AI 솔루션을 도입하려 합니다. 어떤 AWS 서비스가 적합합니까?",
      "promptEn": "A hospital wants to use a generative AI solution with speech-to-text functionality to help improve employee skills in dictating clinical notes. Which AWS service meets these requirements?",
      "explanation": [
        "HealthScribe는 의료 환경에 특화된 음성-텍스트 변환 및 기록 작성 서비스를 제공합니다.",
        "A: 개발용 일반 서비스, 음성-텍스트 기능 없음",
        "B: 음성 합성 서비스, 텍스트 입력용",
        "C: 이미지/영상 분석 서비스, 음성 처리 아님"
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Q Developer",
          "textKo": "Amazon Q Developer",
          "text": "Amazon Q Developer"
        },
        {
          "key": "B",
          "textEn": "Amazon Polly",
          "textKo": "Amazon Polly",
          "text": "Amazon Polly"
        },
        {
          "key": "C",
          "textEn": "Amazon Rekognition",
          "textKo": "Amazon Rekognition",
          "text": "Amazon Rekognition"
        },
        {
          "key": "D",
          "textEn": "AWS HealthScribe",
          "textKo": "AWS HealthScribe",
          "text": "AWS HealthScribe"
        }
      ],
      "answerKey": "D",
      "answerText": "(AWS HealthScribe)"
    },
    {
      "id": 190,
      "sourceNumber": 190,
      "title": "Question 190",
      "promptKo": "숫자 예측을 하는 AI 모델 유형은 무엇입니까?",
      "promptEn": "Which type of AI model makes numeric predictions?",
      "explanation": [
        "회귀(Regression) 모델은 연속적인 숫자 값을 예측하는 데 사용됩니다."
      ],
      "wrongExplanations": [
        "- A: Diffusion은 주로 생성 모델과 관련",
        "- C: Transformer는 구조 유형, 숫자 예측 특정 아님",
        "- D: Multi-modal은 여러 데이터 유형 처리, 숫자 예측 한정 아님"
      ],
      "glossary": [
        "- Regression: 연속적 값을 예측하는 통계 및 ML 기법"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Diffusion",
          "textKo": "Diffusion -> 생성 모델",
          "text": "Diffusion"
        },
        {
          "key": "B",
          "textEn": "Regression",
          "textKo": "Regression -> 회귀 모델",
          "text": "Regression"
        },
        {
          "key": "C",
          "textEn": "Transformer",
          "textKo": "Transformer -> 구조 유형",
          "text": "Transformer"
        },
        {
          "key": "D",
          "textEn": "Multi-modal",
          "textKo": "Multi-modal -> 여러 데이터 유형 처리",
          "text": "Multi-modal"
        }
      ],
      "answerKey": "B",
      "answerText": "(Regression)"
    },
    {
      "id": 191,
      "sourceNumber": 191,
      "title": "Question 191",
      "promptKo": "회사가 다양한 용도로 Amazon SageMaker 기능을 사용하려고 합니다.\n각 사용 사례에 맞는 SageMaker 기능을 다음 목록에서 선택하세요. 각 기능은 한 번만 선택하거나 선택하지 않아도 됩니다.\n- 코드를 사용하지 않고 시각적 인터페이스로 데이터 준비\n- 사기 탐지를 위한 미리 구축된 솔루션 찾기 및 사용\n- 사람의 개입으로 라벨링된 데이터셋 생성",
      "promptEn": "A company wants to use Amazon SageMaker features for various use cases.\nSelect the correct SageMaker feature from the following list for each use case. Each SageMaker feature should be selected one time or not at all.\n- Preparing data through a visual interface without using code\n- Finding and using a prebuilt solution for fraud detection\n- Create labeled datasets with human intervention\nOptions:\n- SageMaker Canvas\n- SageMaker Feature Store\n- SageMaker Ground Truth\n- SageMaker JumpStart\n- SageMaker Model Monitor",
      "explanation": [
        "- 1번: SageMaker Canvas - 코딩 없이 데이터 준비 가능",
        "- 2번: SageMaker JumpStart - 미리 구축된 솔루션 제공",
        "- 3번: SageMaker Ground Truth - 사람의 개입으로 라벨링 지원"
      ],
      "wrongExplanations": [],
      "glossary": [
        "- SageMaker Canvas: 코딩 없이 ML 데이터 준비 및 모델 구축",
        "- SageMaker JumpStart: 사전 구축된 ML 솔루션 및 모델 제공",
        "- SageMaker Ground Truth: 고품질 라벨링 데이터셋 생성 서비스",
        "- SageMaker Feature Store -> 특징 데이터 관리",
        "- SageMaker Model Monitor -> 모델 성능 모니터링"
      ],
      "type": "matching",
      "choicePool": [
        "SageMaker Canvas",
        "SageMaker Feature Store",
        "SageMaker Ground Truth",
        "SageMaker JumpStart",
        "SageMaker Model Monitor"
      ],
      "allowRepeat": false,
      "rows": [
        {
          "id": "191-row-1",
          "prompt": "코드를 사용하지 않고 시각적 인터페이스로 데이터 준비",
          "answer": "SageMaker Canvas"
        },
        {
          "id": "191-row-2",
          "prompt": "사기 탐지를 위한 미리 구축된 솔루션 찾기 및 사용",
          "answer": "SageMaker JumpStart"
        },
        {
          "id": "191-row-3",
          "prompt": "사람의 개입으로 라벨링된 데이터셋 생성",
          "answer": "SageMaker Ground Truth"
        }
      ]
    },
    {
      "id": 192,
      "sourceNumber": 192,
      "title": "Question 192",
      "promptKo": "대형 언어 모델(LLM)에서 벡터 임베딩의 목적은 무엇입니까?",
      "promptEn": "What is the purpose of vector embeddings in a large language model (LLM)?",
      "explanation": [
        "벡터 임베딩은 텍스트를 수치 벡터로 변환하여 유사도 비교 및 수학적 연산을 가능하게 합니다."
      ],
      "wrongExplanations": [
        "- A: 텍스트 분할은 토큰화 과정",
        "- B: 문자 단위 그룹화는 토큰화의 한 형태지만 임베딩 목적과는 다름",
        "- D: 단어 수 집계는 임베딩과 무관"
      ],
      "glossary": [
        "- 벡터 임베딩(Vector Embedding): 텍스트를 수치 벡터로 변환하는 과정, 의미 비교에 사용"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Splitting text into manageable pieces of data",
          "textKo": "텍스트를 관리 가능한 데이터 조각으로 분할",
          "text": "Splitting text into manageable pieces of data"
        },
        {
          "key": "B",
          "textEn": "Grouping a set of characters to be treated as a single unit",
          "textKo": "문자를 하나의 단위로 그룹화",
          "text": "Grouping a set of characters to be treated as a single unit"
        },
        {
          "key": "C",
          "textEn": "Providing the ability to mathematically compare texts",
          "textKo": "텍스트를 수학적으로 비교할 수 있는 능력 제공",
          "text": "Providing the ability to mathematically compare texts"
        },
        {
          "key": "D",
          "textEn": "Providing the count of every word in the input",
          "textKo": "입력 텍스트 내 모든 단어 수 제공",
          "text": "Providing the count of every word in the input"
        }
      ],
      "answerKey": "C",
      "answerText": "(Providing the ability to mathematically compare texts)"
    },
    {
      "id": 193,
      "sourceNumber": 193,
      "title": "Question 193",
      "promptKo": "회사가 AWS 서비스를 사용해 파운데이션 모델(FM)을 파인튜닝하려고 합니다. 데이터가 저장된 AWS 리전 내에서 데이터가 안전하고 프라이빗하게 유지되어야 합니다.\n가장 비용 효율적으로 요구사항을 충족하는 방법 두 가지를 고르세요.",
      "promptEn": "A company wants to fine-tune a foundation model (FM) by using AWS services. The company needs to ensure that its data stays private, safe, and secure in the source AWS Region where the data is stored.\nWhich combination of steps will meet these requirements MOST cost-effectively? (Choose two.)",
      "explanation": [
        "- B: Amazon Bedrock API 사용은 관리형 서비스로 안전한 모델 파인튜닝 가능",
        "- C: AWS PrivateLink와 VPC를 사용하면 데이터가 AWS 네트워크 내부에서 안전하게 전송됨"
      ],
      "wrongExplanations": [
        "- A, D: 온프레미스 호스팅은 비용과 관리가 부담됨",
        "- E: CloudWatch는 모니터링용, 보안과 프라이버시 직접 해결 안 함"
      ],
      "glossary": [
        "- AWS PrivateLink: VPC 내에서 프라이빗 네트워크 통신 보장",
        "- Amazon Bedrock: 관리형 파운데이션 모델 API 서비스"
      ],
      "type": "multi-select",
      "options": [
        {
          "key": "A",
          "textEn": "Host the model on premises by using AWS Outposts.",
          "textKo": "AWS Outposts 온프레미스 호스팅",
          "text": "Host the model on premises by using AWS Outposts."
        },
        {
          "key": "B",
          "textEn": "Use the Amazon Bedrock API.",
          "textKo": "Amazon Bedrock API 사용",
          "text": "Use the Amazon Bedrock API."
        },
        {
          "key": "C",
          "textEn": "Use AWS PrivateLink and a VPC.",
          "textKo": "AWS PrivateLink + VPC 사용",
          "text": "Use AWS PrivateLink and a VPC."
        },
        {
          "key": "D",
          "textEn": "Host the Amazon Bedrock API on premises.",
          "textKo": "Bedrock API 온프레미스 호스팅",
          "text": "Host the Amazon Bedrock API on premises."
        },
        {
          "key": "E",
          "textEn": "Use Amazon CloudWatch logs and metrics.",
          "textKo": "CloudWatch 로그 및 메트릭 사용",
          "text": "Use Amazon CloudWatch logs and metrics."
        }
      ],
      "answerKeys": [
        "B",
        "C"
      ],
      "requiredSelections": 2
    },
    {
      "id": 194,
      "sourceNumber": 194,
      "title": "Question 194",
      "promptKo": "금융 회사가 AWS에서 생성 AI 모델을 운영합니다. 민감한 고객 데이터 처리 관련 국제 규정 준수 보고서를 생성해야 합니다.\n어떤 AWS 서비스가 요구사항에 맞습니까?",
      "promptEn": "A financial company uses AWS to host its generative AI models. The company must generate reports to show adherence to international regulations for handling sensitive customer data.\nWhich AWS service meets these requirements?",
      "explanation": [
        "AWS Artifact는 규정 준수 및 감사 보고서를 제공하는 서비스입니다."
      ],
      "wrongExplanations": [
        "- A: Macie는 데이터 보안 및 개인정보 보호 자동화",
        "- C: Secrets Manager는 비밀 정보 관리",
        "- D: Config는 리소스 변경 모니터링"
      ],
      "glossary": [
        "- AWS Artifact: 컴플라이언스 보고서와 감사 문서 제공 서비스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Macie",
          "textKo": "Amazon Macie -> 데이터 보안",
          "text": "Amazon Macie"
        },
        {
          "key": "B",
          "textEn": "AWS Artifact",
          "textKo": "AWS Artifact -> 컴플라이언스 보고서",
          "text": "AWS Artifact"
        },
        {
          "key": "C",
          "textEn": "AWS Secrets Manager",
          "textKo": "Secrets Manager -> 비밀 정보 관리",
          "text": "AWS Secrets Manager"
        },
        {
          "key": "D",
          "textEn": "AWS Config",
          "textKo": "Config -> 리소스 변경 모니터링",
          "text": "AWS Config"
        }
      ],
      "answerKey": "B",
      "answerText": "(AWS Artifact)"
    },
    {
      "id": 195,
      "sourceNumber": 195,
      "title": "Question 195",
      "promptKo": "의료 회사가 현장 정보 처리 애플리케이션을 현대화하려 합니다. 생성 AI를 이용해 환자의 의료 질문에 답변할 계획입니다.\n책임 있는 AI 구현을 위해 어떤 AWS 서비스를 사용해야 합니까?",
      "promptEn": "A medical company wants to modernize its onsite information processing application. The company wants to use generative AI to respond to medical questions from patients.\nWhich AWS service should the company use to ensure responsible AI for the application?",
      "explanation": [
        "Bedrock Guardrails는 유해하거나 부적절한 출력을 방지하여 책임 있는 AI 보장에 도움을 줍니다."
      ],
      "wrongExplanations": [
        "- B: Inspector는 보안 취약점 검사",
        "- C: Rekognition은 이미지/비디오 분석",
        "- D: Trusted Advisor는 클라우드 리소스 최적화"
      ],
      "glossary": [
        "- Guardrails: AI 모델 출력 제어 및 안전성 보장"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Guardrails for Amazon Bedrock",
          "textKo": "Guardrails for Amazon Bedrock -> 출력 제어",
          "text": "Guardrails for Amazon Bedrock"
        },
        {
          "key": "B",
          "textEn": "Amazon Inspector",
          "textKo": "Amazon Inspector -> 보안 취약점 검사",
          "text": "Amazon Inspector"
        },
        {
          "key": "C",
          "textEn": "Amazon Rekognition",
          "textKo": "Amazon Rekognition -> 이미지/영상 분석",
          "text": "Amazon Rekognition"
        },
        {
          "key": "D",
          "textEn": "AWS Trusted Advisor",
          "textKo": "AWS Trusted Advisor -> 클라우드 최적화",
          "text": "AWS Trusted Advisor"
        }
      ],
      "answerKey": "A",
      "answerText": "(Guardrails for Amazon Bedrock)"
    },
    {
      "id": 196,
      "sourceNumber": 196,
      "title": "Question 196",
      "promptKo": "텍스트 요약 작업에서 파운데이션 모델(FM)의 성능을 평가할 때 사용하는 지표는 무엇입니까?",
      "promptEn": "Which metric is used to evaluate the performance of foundation models (FMs) for text summarization tasks?",
      "explanation": [
        "BLEU 점수는 기계 번역 및 요약 작업에서 생성된 텍스트의 품질을 평가하는 데 널리 사용됩니다."
      ],
      "wrongExplanations": [
        "- A: F1 점수는 분류 문제에서 주로 사용",
        "- C: 정확도는 주로 분류 문제에서 사용",
        "- D: MSE는 회귀 문제에 주로 적용"
      ],
      "glossary": [
        "- BLEU score: 기계 생성 텍스트의 품질을 참조 텍스트와 비교해 평가하는 지표"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "F1 score",
          "textKo": "F1 score",
          "text": "F1 score"
        },
        {
          "key": "B",
          "textEn": "Bilingual Evaluation Understudy (BLEU) score",
          "textKo": "Bilingual Evaluation Understudy (BLEU) score",
          "text": "Bilingual Evaluation Understudy (BLEU) score"
        },
        {
          "key": "C",
          "textEn": "Accuracy",
          "textKo": "Accuracy",
          "text": "Accuracy"
        },
        {
          "key": "D",
          "textEn": "Mean squared error (MSE)",
          "textKo": "Mean squared error (MSE)",
          "text": "Mean squared error (MSE)"
        }
      ],
      "answerKey": "B",
      "answerText": "(Bilingual Evaluation Understudy, BLEU score)"
    },
    {
      "id": 197,
      "sourceNumber": 197,
      "title": "Question 197",
      "promptKo": "파운데이션 모델(FM)을 파인튜닝할 때의 이점은 무엇입니까?",
      "promptEn": "What is the benefit of fine-tuning a foundation model (FM)?",
      "explanation": [
        "파인튜닝은 기존 FM을 특정 작업에 맞게 새로운 라벨 데이터로 추가 학습하여 성능을 개선합니다."
      ],
      "wrongExplanations": [
        "- A: 파인튜닝이 모델 크기나 복잡도를 줄이지는 않음",
        "- B: 파인튜닝은 기존 모델을 재학습하는 것이지 처음부터 학습하는 것은 아님",
        "- C: 파인튜닝과 사전 학습(pre-training)은 다름"
      ],
      "glossary": [
        "- Fine-tuning: 기존 모델을 특정 데이터로 추가 학습해 특정 작업에 최적화하는 과정"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Fine-tuning reduces the FM's size and complexity and enables slower inference.",
          "textKo": "모델 크기/복잡도 감소, 느린 추론",
          "text": "Fine-tuning reduces the FM's size and complexity and enables slower inference."
        },
        {
          "key": "B",
          "textEn": "Fine-tuning uses specific training data to retrain the FM from scratch to adapt to a specific use case.",
          "textKo": "특정 데이터로 처음부터 재학습",
          "text": "Fine-tuning uses specific training data to retrain the FM from scratch to adapt to a specific use case."
        },
        {
          "key": "C",
          "textEn": "Fine-tuning keeps the FM's knowledge up to date by pre-training the FM on more recent data.",
          "textKo": "최신 데이터로 사전 학습",
          "text": "Fine-tuning keeps the FM's knowledge up to date by pre-training the FM on more recent data."
        },
        {
          "key": "D",
          "textEn": "Fine-tuning improves the performance of the FM on a specific task by further training the FM on new labeled data.",
          "textKo": "특정 작업 성능 향상",
          "text": "Fine-tuning improves the performance of the FM on a specific task by further training the FM on new labeled data."
        }
      ],
      "answerKey": "D",
      "answerText": "(Fine-tuning improves performance on a specific task)"
    },
    {
      "id": 198,
      "sourceNumber": 198,
      "title": "Question 198",
      "promptKo": "회사가 챗봇의 응답을 회사의 원하는 톤에 맞추고자 합니다. 고객 서비스 상담사와 고객 간의 고품질 대화 예시 100개를 보유하고 있습니다. 이 데이터를 사용해 챗봇에 회사 톤을 반영하려 합니다.\n어떤 솔루션이 요구사항을 충족합니까?",
      "promptEn": "A company wants to improve its chatbot's responses to match the company's desired tone. The company has 100 examples of high-quality conversations between customer service agents and customers. The company wants to use this data to incorporate company tone into the chatbot's responses.\nWhich solution meets these requirements?",
      "explanation": [
        "Bedrock의 파인튜닝을 통해 특정 데이터로 모델을 맞춤 설정하여 회사 톤을 반영할 수 있습니다."
      ],
      "wrongExplanations": [
        "- A: Personalize는 추천 시스템용",
        "- B: HyperPod는 대규모 학습용이지만 톤 조절 목적에는 부적합",
        "- C: TensorRT는 추론 최적화용"
      ],
      "glossary": [
        "- Amazon Bedrock: 관리형 파운데이션 모델 서비스, 파인튜닝 가능",
        "- TensorRT: NVIDIA의 딥러닝 추론 최적화 라이브러리"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use Amazon Personalize to generate responses.",
          "textKo": "Amazon Personalize",
          "text": "Use Amazon Personalize to generate responses."
        },
        {
          "key": "B",
          "textEn": "Create an Amazon SageMaker HyperPod pre-training job.",
          "textKo": "SageMaker HyperPod",
          "text": "Create an Amazon SageMaker HyperPod pre-training job."
        },
        {
          "key": "C",
          "textEn": "Host the model by using Amazon SageMaker. Use TensorRT for large language model (LLM) deployment.",
          "textKo": "SageMaker + TensorRT",
          "text": "Host the model by using Amazon SageMaker. Use TensorRT for large language model (LLM) deployment."
        },
        {
          "key": "D",
          "textEn": "Create an Amazon Bedrock fine-tuning job.",
          "textKo": "Amazon Bedrock fine-tuning",
          "text": "Create an Amazon Bedrock fine-tuning job."
        }
      ],
      "answerKey": "D",
      "answerText": "(Amazon Bedrock fine-tuning job)"
    },
    {
      "id": 199,
      "sourceNumber": 199,
      "title": "Question 199",
      "promptKo": "전자상거래 회사가 고객 주문 자동화 챗봇을 운영 중입니다. 챗봇은 AI로 구동되며 24시간 365일 고객에게 제공됩니다.\n챗봇을 출시 전에 해결해야 할 AI 시스템 입력 취약점은 무엇입니까?",
      "promptEn": "An ecommerce company is using a chatbot to automate the customer order submission process. The chatbot is powered by AI and is available to customers directly from the company's website 24 hours a day, 7 days a week.\nWhich option is an AI system input vulnerability that the company needs to resolve before the chatbot is made available?",
      "explanation": [
        "입력 조작(프롬프트 인젝션)은 악의적 입력으로 AI 동작을 바꾸는 취약점입니다."
      ],
      "wrongExplanations": [
        "- A: 데이터 유출은 보안 문제",
        "- C: 환각은 출력 문제",
        "- D: 개념 드리프트는 데이터 분포 변화 문제"
      ],
      "glossary": [
        "- Prompt injection: AI 모델 입력에 악의적 코드를 삽입하는 공격 기법"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Data leakage",
          "textKo": "Data leakage",
          "text": "Data leakage"
        },
        {
          "key": "B",
          "textEn": "Prompt injection",
          "textKo": "Prompt injection",
          "text": "Prompt injection"
        },
        {
          "key": "C",
          "textEn": "Large language model (LLM) hallucinations",
          "textKo": "Large language model (LLM) hallucinations",
          "text": "Large language model (LLM) hallucinations"
        },
        {
          "key": "D",
          "textEn": "Concept drift",
          "textKo": "Concept drift",
          "text": "Concept drift"
        }
      ],
      "answerKey": "B",
      "answerText": "(Prompt injection)"
    },
    {
      "id": 200,
      "sourceNumber": 200,
      "title": "Question 200",
      "promptKo": "소셜 미디어 회사가 자사 앱에서 차별적 콘텐츠 게시를 방지하려 합니다. 솔루션 일환으로 Amazon Bedrock을 사용하려고 합니다.\n어떻게 Bedrock을 활용할 수 있을까요?",
      "promptEn": "A social media company wants to prevent users from posting discriminatory content on the company's application. The company wants to use Amazon Bedrock as part of the solution.\nHow can the company use Amazon Bedrock to meet these requirements?",
      "explanation": [
        "Bedrock Guardrails 등을 이용해 차별적 주제 관련 상호작용을 차단할 수 있습니다."
      ],
      "wrongExplanations": [
        "- A: 사용자 선호 기반 상호작용 제공은 차별 방지와 무관",
        "- C: 대화 주제 제한은 너무 제한적임",
        "- D: 다양한 응답 제공은 문제 해결과 직접 연관 없음"
      ],
      "glossary": [
        "- Amazon Bedrock Guardrails: AI 응답의 안전성과 적절성 보장을 위한 제어 장치"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Give users the ability to interact based on user preferences.",
          "textKo": "사용자 선호 기반 상호작용 제공",
          "text": "Give users the ability to interact based on user preferences."
        },
        {
          "key": "B",
          "textEn": "Block interactions related to predefined topics.",
          "textKo": "사전 정의된 주제 관련 상호작용 차단",
          "text": "Block interactions related to predefined topics."
        },
        {
          "key": "C",
          "textEn": "Restrict user conversations to predefined topics.",
          "textKo": "대화 주제를 사전 정의로 제한",
          "text": "Restrict user conversations to predefined topics."
        },
        {
          "key": "D",
          "textEn": "Provide a variety of responses to select from for user engagement.",
          "textKo": "다양한 응답 제공",
          "text": "Provide a variety of responses to select from for user engagement."
        }
      ],
      "answerKey": "B",
      "answerText": "(Block interactions related to predefined topics)"
    },
    {
      "id": 201,
      "sourceNumber": 201,
      "title": "Question 201",
      "promptKo": "한 교육 회사가 애플리케이션을 개발하려고 합니다.\n사용자는 질문을 텍스트로 입력하거나 질문 이미지를 제공할 수 있으며, 애플리케이션은 서면 답변과 그 답변에 대한 설명을 제공합니다.\n어떤 모델 유형이 이러한 요구사항을 충족할까요?",
      "promptEn": "An education company wants to build an application. The application will give users the ability to enter text or provide a picture of a question. The application will respond with a written answer and an explanation of the written answer.\nWhich model type meets these requirements?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- 멀티모달 LLM: 텍스트, 이미지 등 여러 형태의 입력을 이해하고 처리하는 대형 언어 모델",
        "- Diffusion Model: 주로 이미지나 영상을 생성하는 생성형 AI 모델",
        "- Text-to-Speech(TTS): 텍스트를 음성으로 변환하는 모델"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Computer vision model",
          "textKo": "컴퓨터 비전 모델",
          "text": "Computer vision model"
        },
        {
          "key": "B",
          "textEn": "Large multi-modal language model",
          "textKo": "대형 멀티모달 언어 모델",
          "text": "Large multi-modal language model"
        },
        {
          "key": "C",
          "textEn": "Diffusion model",
          "textKo": "디퓨전 모델",
          "text": "Diffusion model"
        },
        {
          "key": "D",
          "textEn": "Text-to-speech model",
          "textKo": "텍스트-투-스피치 모델",
          "text": "Text-to-speech model"
        }
      ],
      "answerKey": "B",
      "answerText": "Large multi-modal language model 이유: 멀티모달 모델은 텍스트와 이미지를 동시에 이해하고 처리할 수 있으며, 질문에 대한 답변과 설명을 생성할 수 있습니다. - 오답 풀이: - A. Computer vision model -> 이미지 인식 전용, 텍스트 이해/생성 불가 - C. Diffusion model -> 이미지 생성 전용, 질문 답변 불가 - D. Text-to-speech model -> 텍스트를 음성으로 변환하는 모델, 질문 이해&middot;답변 불가"
    },
    {
      "id": 202,
      "sourceNumber": 202,
      "title": "Question 202",
      "promptKo": "생성형 AI 모델 라이프사이클에서 모델 정확도를 평가하기 위한 테스트는 어느 단계에서 수행되나요?",
      "promptEn": "In which stage of the generative AI model lifecycle are tests performed to examine the model's accuracy?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Evaluation 단계: 모델의 정확도, 성능, 효율성 등을 테스트하는 단계",
        "- Deployment 단계: 학습 완료 후 모델을 실제 환경에 적용하는 단계"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Deployment",
          "textKo": "배포 단계",
          "text": "Deployment"
        },
        {
          "key": "B",
          "textEn": "Data selection",
          "textKo": "데이터 선택 단계",
          "text": "Data selection"
        },
        {
          "key": "C",
          "textEn": "Fine-tuning",
          "textKo": "파인튜닝 단계",
          "text": "Fine-tuning"
        },
        {
          "key": "D",
          "textEn": "Evaluation",
          "textKo": "평가 단계",
          "text": "Evaluation"
        }
      ],
      "answerKey": "D",
      "answerText": "Evaluation 이유: 모델의 정확도, 성능 등을 확인하기 위해 테스트를 수행하는 단계는 **평가 단계(Evaluation)**입니다. - 오답 풀이: - A. Deployment -> 모델을 실제 환경에 배포하는 단계, 테스트 목적과 다름 - B. Data selection -> 학습 데이터 선택 단계, 평가와 무관 - C. Fine-tuning -> 모델 성능을 향상시키기 위한 학습 단계"
    },
    {
      "id": 203,
      "sourceNumber": 203,
      "title": "Question 203",
      "promptKo": "생성형 AI에서 임베딩(embeddings)을 올바르게 설명한 것은 무엇인가요?",
      "promptEn": "Which statement correctly describes embeddings in generative AI?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Embedding: 데이터를 고차원 벡터로 변환하여 의미적 유사성을 반영하는 표현",
        "- Semantic Relationships: 데이터 간 의미상의 관계"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Embeddings represent data as high-dimensional vectors that capture semantic relationships.",
          "textKo": "임베딩은 데이터를 의미적 관계를 담은 고차원 벡터로 표현합니다.",
          "text": "Embeddings represent data as high-dimensional vectors that capture semantic relationships."
        },
        {
          "key": "B",
          "textEn": "Embeddings is a technique that searches data to find the most helpful information to answer natural language questions.",
          "textKo": "임베딩은 자연어 질문에 답변할 때 가장 유용한 정보를 찾기 위해 데이터를 검색하는 기법입니다.",
          "text": "Embeddings is a technique that searches data to find the most helpful information to answer natural language questions."
        },
        {
          "key": "C",
          "textEn": "Embeddings reduce the hardware requirements of a model by using a less precise data type for the weights and activations.",
          "textKo": "임베딩은 모델의 가중치와 활성화 값에 덜 정밀한 데이터 타입을 사용하여 하드웨어 요구사항을 줄입니다.",
          "text": "Embeddings reduce the hardware requirements of a model by using a less precise data type for the weights and activations."
        },
        {
          "key": "D",
          "textEn": "Embeddings provide the ability to store and retrieve data for generative AI applications.",
          "textKo": "임베딩은 생성형 AI 애플리케이션에서 데이터를 저장하고 검색할 수 있는 기능을 제공합니다.",
          "text": "Embeddings provide the ability to store and retrieve data for generative AI applications."
        }
      ],
      "answerKey": "A",
      "answerText": "Embeddings represent data as high-dimensional vectors that capture semantic relationships. 이유: 임베딩은 데이터를 의미적 관계가 반영된 벡터 공간으로 변환하여 AI 모델이 문장, 단어, 이미지 간 유사성을 이해하도록 돕습니다. - 오답 풀이: - B -> 임베딩은 검색 자체가 아니라 벡터 표현 방식 - C -> 임베딩은 정밀도 감소와 관련 없음 - D -> 임베딩 자체는 저장/검색 기능을 의미하지 않음"
    },
    {
      "id": 204,
      "sourceNumber": 204,
      "title": "Question 204",
      "promptKo": "회사는 대형 언어 모델(LLM)을 애플리케이션에 통합하여 생성형 AI 기능을 추가하려고 합니다.\nLLM의 응답은 최대한 **결정적(deterministic)**이고 안정적이어야 합니다.\n어떤 솔루션이 이러한 요구사항을 충족할까요?",
      "promptEn": "A company wants to add generative AI functionality to its application by integrating a large language model (LLM). The responses from the LLM must be as deterministic and as stable as possible.\nWhich solution meets these requirements?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Temperature: 언어 모델 생성 시 확률적 다양성을 조절하는 파라미터 (0 -> 결정적, 1 -> 다양성 높음)",
        "- Deterministic: 동일한 입력에 대해 항상 동일한 결과를 내는 특성"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Configure the application to automatically set the temperature parameter to 0 when submitting the prompt to the LLM.",
          "textKo": "프롬프트를 LLM에 제출할 때 자동으로 온도(temperature) 파라미터를 0으로 설정",
          "text": "Configure the application to automatically set the temperature parameter to 0 when submitting the prompt to the LLM."
        },
        {
          "key": "B",
          "textEn": "Configure the application to automatically add \"make your response deterministic\" at the end of the prompt before submitting the prompt to the LLM.",
          "textKo": "프롬프트 끝에 \"make your response deterministic\"를 추가",
          "text": "Configure the application to automatically add \"make your response deterministic\" at the end of the prompt before submitting the prompt to the LLM."
        },
        {
          "key": "C",
          "textEn": "Configure the application to automatically add \"make your response deterministic\" at the beginning of the prompt before submitting the prompt to the LLM.",
          "textKo": "프롬프트 시작에 \"make your response deterministic\"를 추가",
          "text": "Configure the application to automatically add \"make your response deterministic\" at the beginning of the prompt before submitting the prompt to the LLM."
        },
        {
          "key": "D",
          "textEn": "Configure the application to automatically set the temperature parameter to 1 when submitting the prompt to the LLM.",
          "textKo": "프롬프트를 LLM에 제출할 때 자동으로 온도(temperature) 파라미터를 1로 설정",
          "text": "Configure the application to automatically set the temperature parameter to 1 when submitting the prompt to the LLM."
        }
      ],
      "answerKey": "A",
      "answerText": "Configure the application to automatically set the temperature parameter to 0 when submitting the prompt to the LLM. 이유: LLM에서 temperature 값이 0이면 모델의 생성 결과가 결정적(deterministic)으로 나오며, 같은 입력에 대해 항상 동일한 출력 생성 - 오답 풀이: - B/C -> 단순 문장 추가만으로는 결정적 응답을 보장하지 못함 - D -> temperature 1은 랜덤성을 높여 결정성을 낮춤"
    },
    {
      "id": 205,
      "sourceNumber": 205,
      "title": "Question 205",
      "promptKo": "회사는 애플리케이션을 구축하기 위해 생성형 AI 모델을 선택해야 합니다.\n애플리케이션은 사용자에게 실시간으로 응답을 제공해야 합니다.\n이 요구사항을 충족하기 위해 고려해야 하는 모델 특성은 무엇인가요?",
      "promptEn": "A company needs to select a generative AI model to build an application. The application must provide responses to users in real time.\nWhich model characteristic should the company consider to meet these requirements?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Inference speed: 학습된 모델이 입력 데이터를 처리하고 결과를 반환하는 속도",
        "- Real-time response: 지연 없이 즉시 응답이 이루어지는 시스템 특성"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Model complexity",
          "textKo": "모델 복잡도",
          "text": "Model complexity"
        },
        {
          "key": "B",
          "textEn": "Innovation speed",
          "textKo": "혁신 속도",
          "text": "Innovation speed"
        },
        {
          "key": "C",
          "textEn": "Inference speed",
          "textKo": "추론 속도",
          "text": "Inference speed"
        },
        {
          "key": "D",
          "textEn": "Training time",
          "textKo": "학습 시간",
          "text": "Training time"
        }
      ],
      "answerKey": "C",
      "answerText": "Inference speed 이유: 실시간 응답을 위해서는 **추론 속도(Inference speed)**가 빠른 모델이 필요합니다. - 오답 풀이: - A -> 모델 복잡도가 낮으면 속도가 빨라질 수 있으나, 직접적인 고려 기준은 아님 - B -> 혁신 속도는 모델 성능 향상과 관련, 실시간 응답과 직접적 관련 없음 - D -> 학습 시간은 모델 구축 단계와 관련, 배포 후 실시간 응답과 관련 없음"
    },
    {
      "id": 206,
      "sourceNumber": 206,
      "title": "Question 206",
      "promptKo": "파운데이션 모델(FM)에 주어지는 질문에 대한 정확한 응답을 제공하도록 하는 지침을 무엇이라고 하나요?",
      "promptEn": "Which term refers to the instructions given to foundation models (FMs) so that the FMs provide a more accurate response to a question?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Prompt: 모델에게 특정 작업을 수행하도록 지시하는 입력",
        "- Foundation Model(FM): 대규모 데이터로 사전 학습된 범용 AI 모델"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Prompt",
          "textKo": "프롬프트",
          "text": "Prompt"
        },
        {
          "key": "B",
          "textEn": "Direction",
          "textKo": "방향(Directions)",
          "text": "Direction"
        },
        {
          "key": "C",
          "textEn": "Dialog",
          "textKo": "대화(Dialog)",
          "text": "Dialog"
        },
        {
          "key": "D",
          "textEn": "Translation",
          "textKo": "번역(Translation)",
          "text": "Translation"
        }
      ],
      "answerKey": "A",
      "answerText": "Prompt 이유: 프롬프트는 모델에게 원하는 답변을 얻기 위해 주어지는 지침이나 입력 문장입니다. - 오답 풀이: - B -> 단순 방향이나 지침 의미, 모델 입력 용어로는 부적절 - C -> Dialog는 대화 형식, 프롬프트와 다름 - D -> Translation은 언어 변환, 질문 지침과 관련 없음"
    },
    {
      "id": 207,
      "sourceNumber": 207,
      "title": "Question 207",
      "promptKo": "한 소매 회사가 고객에게 제품을 추천하는 ML 모델을 만들고자 합니다.\n회사는 책임 있는 AI 관행에 기반하여 모델을 구축하려고 합니다.\n모델 편향(Bias)을 줄이기 위해 데이터 수집 시 어떤 방법을 적용해야 할까요?",
      "promptEn": "A retail company wants to build an ML model to recommend products to customers. The company wants to build the model based on responsible practices.\nWhich practice should the company apply when collecting data to decrease model bias?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Bias: 모델이 특정 그룹에 대해 편향되게 예측하는 현상",
        "- Responsible AI: 편향, 공정성, 투명성을 고려한 AI 설계"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use data from only customers who match the demographics of the company's overall customer base.",
          "textKo": "전체 고객층과 동일한 인구통계 특성을 가진 고객 데이터만 사용",
          "text": "Use data from only customers who match the demographics of the company's overall customer base."
        },
        {
          "key": "B",
          "textEn": "Collect data from customers who have a past purchase history.",
          "textKo": "과거 구매 기록이 있는 고객 데이터 수집",
          "text": "Collect data from customers who have a past purchase history."
        },
        {
          "key": "C",
          "textEn": "Ensure that the data is balanced and collected from a diverse group.",
          "textKo": "데이터가 균형 잡히고 다양한 그룹에서 수집되도록 보장",
          "text": "Ensure that the data is balanced and collected from a diverse group."
        },
        {
          "key": "D",
          "textEn": "Ensure that the data is from a publicly available dataset.",
          "textKo": "공개 데이터셋만 사용",
          "text": "Ensure that the data is from a publicly available dataset."
        }
      ],
      "answerKey": "C",
      "answerText": "Ensure that the data is balanced and collected from a diverse group. 이유: 다양한 데이터 확보가 모델의 편향을 줄이는 핵심 방법입니다. - 오답 풀이: - A -> 특정 인구집단만 사용하면 편향이 발생 - B -> 구매 기록에 기반하면 특정 행동 패턴에 치우침 - D -> 공개 데이터만 사용하는 것은 편향 해결과 직접 관련 없음"
    },
    {
      "id": 208,
      "sourceNumber": 208,
      "title": "Question 208",
      "promptKo": "한 회사가 고객 이탈(Churn)을 예측하는 ML 모델을 개발하고 있습니다.\n이진 분류(Binary Classification) 문제, 예를 들어 이탈 예측,에 대한 성능 평가에 적합한 지표는 무엇인가요?",
      "promptEn": "A company is developing an ML model to predict customer churn.\nWhich evaluation metric will assess the model's performance on a binary classification task such as predicting churn?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- F1 Score: Precision과 Recall의 조화 평균",
        "- Binary Classification: 두 가지 클래스(예: 이탈/비이탈)로 나누는 분류 문제"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "F1 score",
          "textKo": "F1 점수",
          "text": "F1 score"
        },
        {
          "key": "B",
          "textEn": "Mean squared error (MSE)",
          "textKo": "평균 제곱 오차(MSE)",
          "text": "Mean squared error (MSE)"
        },
        {
          "key": "C",
          "textEn": "R-squared",
          "textKo": "결정 계수(R&sup2;)",
          "text": "R-squared"
        },
        {
          "key": "D",
          "textEn": "Time used to train the model",
          "textKo": "학습 소요 시간",
          "text": "Time used to train the model"
        }
      ],
      "answerKey": "A",
      "answerText": "F1 score 이유: F1 점수는 이진 분류 문제에서 Precision과 Recall을 종합한 지표로, 불균형 데이터에도 유용 - 오답 풀이: - B -> MSE는 회귀 문제용 - C -> R&sup2; 역시 회귀 평가 지표 - D -> 학습 시간은 모델 성능 평가 지표가 아님"
    },
    {
      "id": 209,
      "sourceNumber": 209,
      "title": "Question 209",
      "promptKo": "AI 실무자가 Amazon SageMaker 모델 성능을 평가하고 있습니다.\n선택할 지표는 정확히 분류된 항목 수 / 전체 항목 수 비율을 보여야 합니다.\n어떤 지표가 이 조건에 맞을까요?",
      "promptEn": "An AI practitioner is evaluating the performance of an Amazon SageMaker model. The AI practitioner must choose a performance metric. The metric must show the ratio of the number of correctly classified items to the total number of correctly and incorrectly classified items.\nWhich metric meets these requirements?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Accuracy: 전체 데이터에서 맞춘 비율",
        "- Precision: 양성 예측의 정확도",
        "- Recall: 실제 양성 데이터 중 맞춘 비율"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Accuracy",
          "textKo": "정확도(Accuracy)",
          "text": "Accuracy"
        },
        {
          "key": "B",
          "textEn": "Precision",
          "textKo": "정밀도(Precision)",
          "text": "Precision"
        },
        {
          "key": "C",
          "textEn": "F1 score",
          "textKo": "F1 점수(F1 score)",
          "text": "F1 score"
        },
        {
          "key": "D",
          "textEn": "Recall",
          "textKo": "재현율(Recall)",
          "text": "Recall"
        }
      ],
      "answerKey": "A",
      "answerText": "Accuracy 이유: Accuracy는 전체 예측 중에서 올바르게 예측된 비율을 의미합니다. - 오답 풀이: - B -> Precision: 양성 예측 중 올바른 비율 - C -> F1 score: Precision과 Recall의 조화 평균 - D -> Recall: 실제 양성 중 올바르게 예측된 비율"
    },
    {
      "id": 210,
      "sourceNumber": 210,
      "title": "Question 210",
      "promptKo": "한 전자상거래 회사가 매일 수 기가바이트의 고객 데이터를 받습니다.\n회사는 이를 이용해 향후 제품 수요를 예측하는 ML 모델을 학습합니다.\n하루에 한 번 추론(Inference)을 수행할 수 있는 솔루션이 필요합니다.\n어떤 추론 유형이 적합할까요?",
      "promptEn": "An ecommerce company receives multiple gigabytes of customer data daily. The company uses the data to train an ML model to forecast future product demand. The company needs a solution to perform inferences once each day.\nWhich inference type meets these requirements?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Batch Inference: 일정량 데이터를 모아 한 번에 처리하는 추론 방식",
        "- Real-time Inference: 입력 즉시 추론 수행",
        "- Asynchronous Inference: 요청 후 결과를 나중에 수신",
        "- Serverless: 서버 관리 없이 실행되는 컴퓨팅 환경"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Batch inference",
          "textKo": "배치 추론(Batch inference)",
          "text": "Batch inference"
        },
        {
          "key": "B",
          "textEn": "Asynchronous inference",
          "textKo": "비동기 추론(Asynchronous inference)",
          "text": "Asynchronous inference"
        },
        {
          "key": "C",
          "textEn": "Real-time inference",
          "textKo": "실시간 추론(Real-time inference)",
          "text": "Real-time inference"
        },
        {
          "key": "D",
          "textEn": "Serverless inference",
          "textKo": "서버리스 추론(Serverless inference)",
          "text": "Serverless inference"
        }
      ],
      "answerKey": "A",
      "answerText": "Batch inference 이유: 하루에 한 번 대량 데이터를 처리할 경우 배치 추론이 적합하며, 데이터가 모여 있는 상태에서 한 번에 처리 - 오답 풀이: - B -> 비동기 추론은 실시간 요청과 연계, 배치 처리 목적과 다름 - C -> 실시간 추론은 즉시 응답이 필요할 때 사용 - D -> 서버리스는 배포 방식/인프라 형태, 배치 처리와 직접적 관련 없음"
    },
    {
      "id": 211,
      "sourceNumber": 211,
      "title": "Question 211",
      "promptKo": "모델이 회사의 프로덕션 환경에 오래 배포되어 있습니다.\n최근 모델 응답에서 일부 불일치가 발견되었습니다.\n회사는 모델 편향(Bias)과 드리프트(Drift)를 평가하고자 합니다.\n이 요구사항을 충족하는 AWS 서비스 또는 기능은 무엇인가요?",
      "promptEn": "The model has been deployed in the company's production environment for a long time. The company recently noticed some inconsistency in the model's responses. The company wants to evaluate model bias and drift.\nWhich AWS service or feature meets these requirements?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Model Drift: 모델 성능이 시간이 지나면서 변하는 현상",
        "- Bias: 특정 그룹에 대해 편향된 예측"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker Model Monitor",
          "textKo": "Amazon SageMaker 모델 모니터(Model Monitor)",
          "text": "Amazon SageMaker Model Monitor"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker Clarify",
          "textKo": "Amazon SageMaker 클라리파이(Clarify)",
          "text": "Amazon SageMaker Clarify"
        },
        {
          "key": "C",
          "textEn": "Amazon SageMaker Model Cards",
          "textKo": "Amazon SageMaker 모델 카드(Model Cards)",
          "text": "Amazon SageMaker Model Cards"
        },
        {
          "key": "D",
          "textEn": "Amazon SageMaker Feature Store",
          "textKo": "Amazon SageMaker 특징 저장소(Feature Store)",
          "text": "Amazon SageMaker Feature Store"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon SageMaker Model Monitor 이유: Model Monitor는 배포된 모델의 입력/출력 데이터를 지속적으로 모니터링하며, 편향(Bias)과 데이터/모델 드리프트(Drift)를 감지합니다. - 오답 풀이: - B -> Clarify는 주로 모델 학습 단계에서 편향과 공정성을 평가 - C -> Model Cards는 모델 설명 문서 제공, 모니터링 기능 아님 - D -> Feature Store는 피처 저장과 재사용용, 편향/드리프트 모니터링과 관련 없음"
    },
    {
      "id": 212,
      "sourceNumber": 212,
      "title": "Question 212",
      "promptKo": "회사는 Amazon Bedrock에 가입하여 애플리케이션을 구축하려 합니다.\n직원이 Amazon Bedrock에서 특정 모델에만 접근하도록 제한하고자 합니다.\n어떤 솔루션이 이 요구사항을 충족할까요?",
      "promptEn": "A company has signed up for Amazon Bedrock access to build applications. The company wants to restrict employee access to specific models available on Amazon Bedrock.\nWhich solution meets these requirements?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- IAM Policy: 사용자/그룹/역할이 AWS 리소스에 접근할 수 있는 권한 규칙",
        "- Amazon Bedrock: 관리형 AI 서비스로 여러 파운데이션 모델(FM)을 사용할 수 있음"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use AWS Identity and Access Management (IAM) policies to restrict model access.",
          "textKo": "AWS IAM 정책을 사용하여 모델 접근 제한",
          "text": "Use AWS Identity and Access Management (IAM) policies to restrict model access."
        },
        {
          "key": "B",
          "textEn": "Use AWS Security Token Service (AWS STS) to generate temporary credentials for model use.",
          "textKo": "AWS STS를 사용하여 모델 사용을 위한 임시 자격 증명 생성",
          "text": "Use AWS Security Token Service (AWS STS) to generate temporary credentials for model use."
        },
        {
          "key": "C",
          "textEn": "Use AWS Identity and Access Management (IAM) service roles to restrict model subscription.",
          "textKo": "AWS IAM 서비스 역할을 사용하여 모델 구독 제한",
          "text": "Use AWS Identity and Access Management (IAM) service roles to restrict model subscription."
        },
        {
          "key": "D",
          "textEn": "Use Amazon Inspector to monitor model access.",
          "textKo": "Amazon Inspector를 사용하여 모델 접근 모니터링",
          "text": "Use Amazon Inspector to monitor model access."
        }
      ],
      "answerKey": "A",
      "answerText": "Use AWS Identity and Access Management (IAM) policies to restrict model access 이유: IAM 정책을 통해 특정 사용자/그룹이 접근 가능한 리소스를 제어할 수 있습니다. - 오답 풀이: - B -> 임시 자격 증명은 주로 일시적 권한 부여, 접근 제한 관리와 직접적 관련 없음 - C -> 서비스 역할은 특정 서비스가 다른 AWS 리소스 접근 시 사용, 사용자 접근 제한 목적과 다름 - D -> Inspector는 보안 취약점 진단 서비스, 접근 제어 기능 아님"
    },
    {
      "id": 213,
      "sourceNumber": 213,
      "title": "Question 213",
      "promptKo": "어떤 ML 기법이 정답 값(Label)이 포함된 학습 데이터를 사용하나요?",
      "promptEn": "Which ML technique uses training data that is labeled with the correct output values?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Supervised Learning: 입력과 정답 레이블을 사용하여 모델 학습",
        "- Unsupervised Learning: 클러스터링, 차원 축소 등 레이블 없는 데이터 학습"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Supervised learning",
          "textKo": "지도 학습(Supervised learning)",
          "text": "Supervised learning"
        },
        {
          "key": "B",
          "textEn": "Unsupervised learning",
          "textKo": "비지도 학습(Unsupervised learning)",
          "text": "Unsupervised learning"
        },
        {
          "key": "C",
          "textEn": "Reinforcement learning",
          "textKo": "강화 학습(Reinforcement learning)",
          "text": "Reinforcement learning"
        },
        {
          "key": "D",
          "textEn": "Transfer learning",
          "textKo": "전이 학습(Transfer learning)",
          "text": "Transfer learning"
        }
      ],
      "answerKey": "A",
      "answerText": "Supervised learning 이유: 지도 학습은 입력과 정답을 함께 제공하며 모델이 올바른 출력 예측을 학습하도록 합니다. - 오답 풀이: - B -> 비지도 학습은 레이블 없는 데이터에서 패턴 발견 - C -> 강화 학습은 행동과 보상 기반 학습 - D -> 전이 학습은 이미 학습된 모델 지식을 다른 작업에 적용"
    },
    {
      "id": 214,
      "sourceNumber": 214,
      "title": "Question 214",
      "promptKo": "텍스트 생성 과정에서 각 단계에서 고려할 수 있는 다음 단어/토큰 수를 제어하는 LLM 파라미터는 무엇인가요?",
      "promptEn": "Which large language model (LLM) parameter controls the number of possible next words or tokens considered at each step of the text generation process?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Top-K sampling: 다음 토큰 후보를 상위 K개로 제한 후 샘플링",
        "- Temperature: 낮으면 결정적, 높으면 다양성 증가"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Maximum tokens",
          "textKo": "최대 토큰(Maximum tokens)",
          "text": "Maximum tokens"
        },
        {
          "key": "B",
          "textEn": "Top K",
          "textKo": "Top K",
          "text": "Top K"
        },
        {
          "key": "C",
          "textEn": "Temperature",
          "textKo": "온도(Temperature)",
          "text": "Temperature"
        },
        {
          "key": "D",
          "textEn": "Batch size",
          "textKo": "배치 크기(Batch size)",
          "text": "Batch size"
        }
      ],
      "answerKey": "B",
      "answerText": "Top K 이유: Top-K는 모델이 다음 토큰을 선택할 때 고려할 상위 K개의 후보를 의미합니다. - 오답 풀이: - A -> Maximum tokens는 생성될 전체 토큰 수 제한 - C -> Temperature는 출력 확률 분포의 무작위성 조절 - D -> Batch size는 학습 또는 추론 시 처리하는 샘플 수"
    },
    {
      "id": 215,
      "sourceNumber": 215,
      "title": "Question 215",
      "promptKo": "회사는 챗봇을 개발 중입니다.\n챗봇은 Amazon Lex와 OpenSearch Service를 사용하며, 회사의 프라이빗 데이터를 활용하여 질문에 답합니다.\n데이터를 데이터베이스에 저장하기 전에 **벡터 표현(Vector representation)**으로 변환해야 합니다.\n어떤 파운데이션 모델(FM)이 적합할까요?",
      "promptEn": "A company is making a chatbot. The chatbot uses Amazon Lex and Amazon OpenSearch Service. The chatbot uses the company's private data to answer questions. The company needs to convert the data into a vector representation before storing the data in a database.\nWhich type of foundation model (FM) meets these requirements?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Text Embeddings: 텍스트를 고차원 벡터로 변환한 표현",
        "- Vector Database: 벡터 기반 검색 및 유사도 계산에 사용"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Text completion model",
          "textKo": "텍스트 완성 모델(Text completion model)",
          "text": "Text completion model"
        },
        {
          "key": "B",
          "textEn": "Instruction following model",
          "textKo": "지시 수행 모델(Instruction following model)",
          "text": "Instruction following model"
        },
        {
          "key": "C",
          "textEn": "Text embeddings model",
          "textKo": "텍스트 임베딩 모델(Text embeddings model)",
          "text": "Text embeddings model"
        },
        {
          "key": "D",
          "textEn": "Image generation model",
          "textKo": "이미지 생성 모델(Image generation model)",
          "text": "Image generation model"
        }
      ],
      "answerKey": "C",
      "answerText": "Text embeddings model 이유: 임베딩 모델은 텍스트를 벡터 공간에 매핑하여 검색, 추천, 유사도 계산에 사용됩니다. 오답 풀이: - A -> Text completion은 문장 생성용 B -> Instruction following은 지시 수행용 - D -> 이미지 생성 모델은 텍스트 벡터화와 무관"
    },
    {
      "id": 216,
      "sourceNumber": 216,
      "title": "Question 216",
      "promptKo": "회사는 LLM을 사용해 제품 설명을 생성하고자 합니다.\n모델에 특정 형식을 따르는 예제 설명을 제공하려고 합니다.\n어떤 프롬프트 기법이 형식에 맞는 설명을 생성하는 데 적합할까요?",
      "promptEn": "A company wants to use a large language model (LLM) to generate product descriptions. The company wants to give the model example descriptions that follow a format.\nWhich prompt engineering technique will generate descriptions that match the format?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Few-shot prompting: 모델에게 여러 예제를 보여주어 학습 없이 특정 형식/스타일에 맞춘 출력 생성"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Zero-shot prompting",
          "textKo": "제로샷 프롬프트(Zero-shot prompting)",
          "text": "Zero-shot prompting"
        },
        {
          "key": "B",
          "textEn": "Chain-of-thought prompting",
          "textKo": "사고 과정 연쇄 프롬프트(Chain-of-thought prompting)",
          "text": "Chain-of-thought prompting"
        },
        {
          "key": "C",
          "textEn": "One-shot prompting",
          "textKo": "원샷 프롬프트(One-shot prompting)",
          "text": "One-shot prompting"
        },
        {
          "key": "D",
          "textEn": "Few-shot prompting",
          "textKo": "소수 샷 프롬프트(Few-shot prompting)",
          "text": "Few-shot prompting"
        }
      ],
      "answerKey": "D",
      "answerText": "Few-shot prompting 이유: 소수 샷 프롬프트는 모델에 몇 가지 예제를 제공하여 원하는 형식/스타일에 맞춰 결과를 생성합니다. - 오답 풀이: - A -> Zero-shot은 예제 없이 수행 - B -> Chain-of-thought는 복잡한 추론 과정 안내용 - C -> One-shot은 단 하나의 예제만 제공, 형식 학습에는 불충분"
    },
    {
      "id": 217,
      "sourceNumber": 217,
      "title": "Question 217",
      "promptKo": "은행이 Amazon Bedrock에서 LLM을 파인튜닝하여 고객의 대출 질문을 지원하려 합니다.\n모델이 개인 정보(PII)를 유출하지 않도록 하려면 어떤 방법이 적합할까요?",
      "promptEn": "A bank is fine-tuning a large language model (LLM) on Amazon Bedrock to assist customers with questions about their loans. The bank wants to ensure that the model does not reveal any private customer data.\nWhich solution meets these requirements?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- PII(Personally Identifiable Information): 개인을 식별할 수 있는 정보",
        "- Fine-tuning: 사전 학습 모델을 특정 작업에 맞게 추가 학습"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use Amazon Bedrock Guardrails.",
          "textKo": "Amazon Bedrock Guardrails 사용",
          "text": "Use Amazon Bedrock Guardrails."
        },
        {
          "key": "B",
          "textEn": "Remove personally identifiable information (PII) from the customer data before fine-tuning the LLM.",
          "textKo": "파인튜닝 전에 고객 데이터에서 PII 제거",
          "text": "Remove personally identifiable information (PII) from the customer data before fine-tuning the LLM."
        },
        {
          "key": "C",
          "textEn": "Increase the Top-K parameter of the LLM.",
          "textKo": "LLM의 Top-K 파라미터 증가",
          "text": "Increase the Top-K parameter of the LLM."
        },
        {
          "key": "D",
          "textEn": "Store customer data in Amazon S3. Encrypt the data before fine-tuning the LLM.",
          "textKo": "S3에 데이터 저장 후 암호화하고 파인튜닝",
          "text": "Store customer data in Amazon S3. Encrypt the data before fine-tuning the LLM."
        }
      ],
      "answerKey": "B",
      "answerText": "Remove personally identifiable information (PII) from the customer data before fine-tuning the LLM 이유: 개인정보가 포함되지 않은 데이터만 사용해야 안전하게 파인튜닝 가능 - 오답 풀이: - A -> Guardrails는 출력 안전성 보장, 입력 데이터 보호 아님 - C -> Top-K는 생성 다양성 조절 - D -> 암호화만으로 파인튜닝 시 모델에 PII 학습될 수 있음"
    },
    {
      "id": 218,
      "sourceNumber": 218,
      "title": "Question 218",
      "promptKo": "한 식료품점에서 고객이 매장 내 제품을 찾도록 돕는 챗봇을 만들고자 합니다.\n챗봇은 재고를 실시간 확인하고 제품 위치를 안내해야 합니다.\n어떤 프롬프트 기법이 적합할까요?",
      "promptEn": "A grocery store wants to create a chatbot to help customers find products in the store. The chatbot must check the inventory in real time and provide the product location in the store.\nWhich prompt engineering technique should the store use to build the chatbot?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- ReAct Prompting: Reasoning + Acting, 모델이 추론 후 외부 행동 수행 가능"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Zero-shot prompting",
          "textKo": "제로샷 프롬프트",
          "text": "Zero-shot prompting"
        },
        {
          "key": "B",
          "textEn": "Few-shot prompting",
          "textKo": "소수 샷 프롬프트",
          "text": "Few-shot prompting"
        },
        {
          "key": "C",
          "textEn": "Least-to-most prompting",
          "textKo": "Least-to-most 프롬프트",
          "text": "Least-to-most prompting"
        },
        {
          "key": "D",
          "textEn": "Reasoning and acting (ReAct) prompting",
          "textKo": "추론 및 행동(ReAct) 프롬프트",
          "text": "Reasoning and acting (ReAct) prompting"
        }
      ],
      "answerKey": "D",
      "answerText": "Reasoning and acting (ReAct) prompting 이유: ReAct는 모델이 추론 후 행동(예: 데이터베이스 질의)을 수행할 수 있어 실시간 정보 조회에 적합 - 오답 풀이: - A -> Zero-shot은 추론 없이 바로 답변, 실시간 재고 처리에 부적합 - B -> Few-shot은 예제 기반, 실시간 연계 불가 - C -> Least-to-most는 복잡한 문제 해결 순서 안내용"
    },
    {
      "id": 219,
      "sourceNumber": 219,
      "title": "Question 219",
      "promptKo": "회사가 Amazon Bedrock에서 제3자 모델을 사용해 기밀 문서를 분석합니다.\n데이터 프라이버시가 우려됩니다.\nAmazon Bedrock이 데이터를 보호하는 방법으로 올바른 설명은 무엇인가요?",
      "promptEn": "A company uses a third-party model on Amazon Bedrock to analyze confidential documents. The company is concerned about data privacy.\nWhich statement describes how Amazon Bedrock protects data privacy?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Amazon Bedrock: 관리형 AI 서비스, 고객 데이터 보호 기능 포함",
        "- Data privacy: 데이터가 외부에 노출되지 않도록 보호하는 특성"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "User inputs and model outputs are anonymized and shared with third-party model providers.",
          "textKo": "사용자 입력 및 모델 출력은 익명화되어 제3자 모델 제공자와 공유",
          "text": "User inputs and model outputs are anonymized and shared with third-party model providers."
        },
        {
          "key": "B",
          "textEn": "User inputs and model outputs are not shared with any third-party model providers.",
          "textKo": "사용자 입력 및 모델 출력은 어떤 제3자 모델 제공자와도 공유되지 않음",
          "text": "User inputs and model outputs are not shared with any third-party model providers."
        },
        {
          "key": "C",
          "textEn": "User inputs are kept confidential, but model outputs are shared with third-party model providers.",
          "textKo": "사용자 입력은 비공개지만 출력은 공유됨",
          "text": "User inputs are kept confidential, but model outputs are shared with third-party model providers."
        },
        {
          "key": "D",
          "textEn": "User inputs and model outputs are redacted before the inputs and outputs are shared with third-party model providers.",
          "textKo": "입력/출력을 공유하기 전에 삭제 후 공유",
          "text": "User inputs and model outputs are redacted before the inputs and outputs are shared with third-party model providers."
        }
      ],
      "answerKey": "B",
      "answerText": "User inputs and model outputs are not shared with any third-party model providers. 이유: Bedrock은 고객 데이터(입력/출력)를 외부 모델 제공자와 공유하지 않아 데이터 프라이버시를 보호 - 오답 풀이: - A -> Bedrock은 익명화 공유하지 않음 - C -> 출력 공유는 불가 - D -> 데이터 삭제 후 공유는 Bedrock 동작과 무관"
    },
    {
      "id": 220,
      "sourceNumber": 220,
      "title": "Question 220",
      "promptKo": "한 애니메이션 회사가 콘텐츠에 자막을 제공하고자 합니다.\n어떤 AWS 서비스가 적합할까요?",
      "promptEn": "An animation company wants to provide subtitles for its content.\nWhich AWS service meets this requirement?",
      "explanation": [],
      "wrongExplanations": [],
      "glossary": [
        "- Amazon Transcribe: 음성을 텍스트로 자동 변환 서비스",
        "- Subtitle: 영상 콘텐츠의 자막"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        },
        {
          "key": "B",
          "textEn": "Amazon Polly",
          "textKo": "Amazon Polly",
          "text": "Amazon Polly"
        },
        {
          "key": "C",
          "textEn": "Amazon Transcribe",
          "textKo": "Amazon Transcribe",
          "text": "Amazon Transcribe"
        },
        {
          "key": "D",
          "textEn": "Amazon Translate",
          "textKo": "Amazon Translate",
          "text": "Amazon Translate"
        }
      ],
      "answerKey": "C",
      "answerText": "Amazon Transcribe 이유: Transcribe는 음성을 텍스트로 변환, 자막 생성에 직접 사용 가능 - 오답 풀이: - A -> Comprehend는 텍스트 분석, 감정 분석 등 - B -> Polly는 텍스트 -> 음성 변환 - D -> Translate는 번역, 음성 -> 텍스트와 직접 관련 없음"
    },
    {
      "id": 221,
      "sourceNumber": 221,
      "title": "Question 221",
      "promptKo": "전자상거래 회사가 구매 이력과 선호도를 기반으로 고객을 그룹화하여 사용자 경험을 개인화하려고 합니다.\n어떤 머신러닝 기법을 사용해야 할까요?",
      "promptEn": "An ecommerce company wants to group customers based on their purchase history and preferences to personalize the user experience of the company's application.\nWhich ML technique should the company use?",
      "explanation": [
        "고객을 그룹으로 묶는 것은 비지도 학습 중 하나인 클러스터링에 해당합니다."
      ],
      "wrongExplanations": [
        "- A: 분류는 이미 라벨이 있는 데이터를 분류하는 것",
        "- C: 회귀는 수치 예측용",
        "- D: 콘텐츠 생성은 텍스트 생성 등과 관련"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Classification",
          "textKo": "분류(Classification)",
          "text": "Classification"
        },
        {
          "key": "B",
          "textEn": "Clustering",
          "textKo": "클러스터링(Clustering)",
          "text": "Clustering"
        },
        {
          "key": "C",
          "textEn": "Regression",
          "textKo": "회귀(Regression)",
          "text": "Regression"
        },
        {
          "key": "D",
          "textEn": "Content generation",
          "textKo": "콘텐츠 생성(Content generation)",
          "text": "Content generation"
        }
      ],
      "answerKey": "B",
      "answerText": "(Clustering)"
    },
    {
      "id": 222,
      "sourceNumber": 222,
      "title": "Question 222",
      "promptKo": "회사가 직원들의 공개된 파운데이션 모델(FM) 접근을 제어하려고 합니다.\n어떤 솔루션이 이 요구사항을 충족할까요?",
      "promptEn": "A company wants to control employee access to publicly available foundation models (FMs).\nWhich solution meets these requirements?",
      "explanation": [
        "SageMaker JumpStart를 설정하여 직원들이 접근할 수 있는 FMs를 제한할 수 있습니다."
      ],
      "wrongExplanations": [
        "- A: 비용 보고서 분석은 접근 제어와 무관",
        "- B: 보안 문서 다운로드는 접근 제어가 아님",
        "- D: OpenSearch는 검색 솔루션으로 접근 제한과 관련 없음"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Analyze cost and usage reports in AWS Cost Explorer.",
          "textKo": "AWS 비용 보고서 분석(AWS Cost Explorer)",
          "text": "Analyze cost and usage reports in AWS Cost Explorer."
        },
        {
          "key": "B",
          "textEn": "Download AWS security and compliance documents from AWS Artifact.",
          "textKo": "AWS 보안 및 규정 준수 문서 다운로드(AWS Artifact)",
          "text": "Download AWS security and compliance documents from AWS Artifact."
        },
        {
          "key": "C",
          "textEn": "Configure Amazon SageMaker JumpStart to restrict discoverable FMs.",
          "textKo": "SageMaker JumpStart 설정으로 접근 가능한 FM 제한",
          "text": "Configure Amazon SageMaker JumpStart to restrict discoverable FMs."
        },
        {
          "key": "D",
          "textEn": "Build a hybrid search solution by using Amazon OpenSearch Service.",
          "textKo": "Amazon OpenSearch Service를 활용한 하이브리드 검색",
          "text": "Build a hybrid search solution by using Amazon OpenSearch Service."
        }
      ],
      "answerKey": "C",
      "answerText": "(Configure Amazon SageMaker JumpStart to restrict discoverable FMs)"
    },
    {
      "id": 223,
      "sourceNumber": 223,
      "title": "Question 223",
      "promptKo": "회사가 고객 서비스팀의 글로벌 고객 대응을 돕기 위해 번역 도구를 구축했습니다. 도구 성능을 평가하기 위해, 도구와 실제 인간의 번역 결과를 동일 문서로 비교하는 병렬 데이터 프로세스를 마련했습니다.\n도구 평가에 적절한 전략은 무엇인가요?",
      "promptEn": "A company has set up a translation tool to help its customer service team handle issues from customers around the world. The company wants to evaluate the performance of the translation tool. The company sets up a parallel data process that compares the responses from the tool to responses from actual humans. Both sets of responses are generated on the same set of documents.\nWhich strategy should the company use to evaluate the translation tool?",
      "explanation": [
        "BLEU 점수는 두 번역 결과 간의 상대적 품질 비교에 적합합니다."
      ],
      "wrongExplanations": [
        "- A: 절대 품질 평가에는 부적합",
        "- C,D: BERTScore는 의미 기반 평가지만, 상대 품질 비교는 BLEU가 더 흔함"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use the Bilingual Evaluation Understudy (BLEU) score to estimate the absolute translation quality of the two methods.",
          "textKo": "BLEU 점수로 두 방법의 절대 번역 품질 평가",
          "text": "Use the Bilingual Evaluation Understudy (BLEU) score to estimate the absolute translation quality of the two methods."
        },
        {
          "key": "B",
          "textEn": "Use the Bilingual Evaluation Understudy (BLEU) score to estimate the relative translation quality of the two methods.",
          "textKo": "BLEU 점수로 두 방법의 상대적 번역 품질 평가",
          "text": "Use the Bilingual Evaluation Understudy (BLEU) score to estimate the relative translation quality of the two methods."
        },
        {
          "key": "C",
          "textEn": "Use the BERTScore to estimate the absolute translation quality of the two methods.",
          "textKo": "BERTScore로 두 방법의 절대 번역 품질 평가",
          "text": "Use the BERTScore to estimate the absolute translation quality of the two methods."
        },
        {
          "key": "D",
          "textEn": "Use the BERTScore to estimate the relative translation quality of the two methods.",
          "textKo": "BERTScore로 두 방법의 상대적 번역 품질 평가",
          "text": "Use the BERTScore to estimate the relative translation quality of the two methods."
        }
      ],
      "answerKey": "B",
      "answerText": "(Use BLEU to estimate the relative translation quality)"
    },
    {
      "id": 224,
      "sourceNumber": 224,
      "title": "Question 224",
      "promptKo": "AI 전문가가 LLM에서 더 다양하고 창의적인 결과를 생성하고 싶어 합니다.\n추론 파라미터를 어떻게 조정해야 할까요?",
      "promptEn": "An AI practitioner wants to generate more diverse and more creative outputs from a large language model (LLM).\nHow should the AI practitioner adjust the inference parameter?",
      "explanation": [
        "온도를 높이면 무작위성이 증가해 다양하고 창의적인 출력이 생성됩니다."
      ],
      "wrongExplanations": [
        "- B: Top K 감소는 다양성 감소",
        "- C: 응답 길이 증가는 다양성과 무관",
        "- D: 프롬프트 길이 감소도 영향 적음"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Increase the temperature value.",
          "textKo": "온도 값 증가",
          "text": "Increase the temperature value."
        },
        {
          "key": "B",
          "textEn": "Decrease the Top K value.",
          "textKo": "Top-K 값 감소",
          "text": "Decrease the Top K value."
        },
        {
          "key": "C",
          "textEn": "Increase the response length.",
          "textKo": "응답 길이 증가",
          "text": "Increase the response length."
        },
        {
          "key": "D",
          "textEn": "Decrease the prompt length.",
          "textKo": "프롬프트 길이 감소",
          "text": "Decrease the prompt length."
        }
      ],
      "answerKey": "A",
      "answerText": "(Increase the temperature value)"
    },
    {
      "id": 225,
      "sourceNumber": 225,
      "title": "Question 225",
      "promptKo": "한 회사가 맞춤형 컴퓨터 비전 모델을 개발했습니다. 실제 데이터에서 오류를 줄이기 위해 데이터 라벨링에 사용자 친화적인 인터페이스가 필요합니다.\n어떤 AWS 서비스 또는 도구가 적합할까요?",
      "promptEn": "A company has developed custom computer vision models. The company needs a user-friendly interface for data labeling to minimize model mistakes on new real-world data.\nWhich AWS service, feature, or tool meets these requirements?",
      "explanation": [
        "Ground Truth는 라벨링을 위한 직관적 UI를 제공합니다."
      ],
      "wrongExplanations": [
        "- B: Canvas는 노코드 ML",
        "- C,D: Bedrock 관련 기능은 라벨링과 직접 연관 없음"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker Ground Truth",
          "textKo": "Amazon SageMaker Ground Truth",
          "text": "Amazon SageMaker Ground Truth"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker Canvas",
          "textKo": "Amazon SageMaker Canvas",
          "text": "Amazon SageMaker Canvas"
        },
        {
          "key": "C",
          "textEn": "Amazon Bedrock playground",
          "textKo": "Amazon Bedrock Playground",
          "text": "Amazon Bedrock playground"
        },
        {
          "key": "D",
          "textEn": "Amazon Bedrock Agents",
          "textKo": "Amazon Bedrock Agents",
          "text": "Amazon Bedrock Agents"
        }
      ],
      "answerKey": "A",
      "answerText": "(Amazon SageMaker Ground Truth)"
    },
    {
      "id": 226,
      "sourceNumber": 226,
      "title": "Question 226",
      "promptKo": "회사가 직원 채용 솔루션에 AI를 도입하면서 편향 위험을 줄이고 책임감 있는 AI를 보장하려고 합니다.\n책임 있는 AI의 핵심 요소 중 어떤 것을 고려해야 할까요? (두 가지 선택)",
      "promptEn": "A company is integrating AI into its employee recruitment and hiring solution. The company wants to mitigate bias risks and ensure responsible AI practices while prioritizing equitable hiring decisions.\nWhich core dimensions of responsible AI should the company consider? (Choose two.)",
      "explanation": [
        "공정성(Fairness)과 투명성(Transparency)은 책임 AI의 핵심입니다."
      ],
      "wrongExplanations": [
        "- B: Tolerance는 책임 AI의 공식 요소 아님",
        "- C: 유연성은 핵심 요소가 아님",
        "- D: 오픈소스는 필수 조건 아님"
      ],
      "glossary": [],
      "type": "multi-select",
      "options": [
        {
          "key": "A",
          "textEn": "Fairness",
          "textKo": "공정성(Fairness)",
          "text": "Fairness"
        },
        {
          "key": "B",
          "textEn": "Tolerance",
          "textKo": "관용(Tolerance)",
          "text": "Tolerance"
        },
        {
          "key": "C",
          "textEn": "Flexibility",
          "textKo": "유연성(Flexibility)",
          "text": "Flexibility"
        },
        {
          "key": "D",
          "textEn": "Open source",
          "textKo": "오픈소스(Open source)",
          "text": "Open source"
        },
        {
          "key": "E",
          "textEn": "Transparency",
          "textKo": "투명성(Transparency)",
          "text": "Transparency"
        }
      ],
      "answerKeys": [
        "A",
        "E"
      ],
      "requiredSelections": 2
    },
    {
      "id": 227,
      "sourceNumber": 227,
      "title": "Question 227",
      "promptKo": "한 금융사가 고객 이탈 예측 모델을 배포했습니다. 1주일간 운영 후, 실제 고객 행동 대비 예측 정확도를 평가하려고 합니다.\n어떤 평가지표가 적합할까요?",
      "promptEn": "A financial company has deployed an ML model to predict customer churn. The model has been running in production for 1 week. The company wants to evaluate how accurately the model predicts churn compared to actual customer behavior.\nWhich metric meets these requirements?",
      "explanation": [
        "F1 점수는 불균형 데이터에서 분류 정확도 평가에 적합합니다."
      ],
      "wrongExplanations": [
        "- A: RMSE는 회귀 평가용",
        "- B: ROI는 투자 수익률",
        "- D: BLEU는 번역 평가용"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Root mean squared error (RMSE)",
          "textKo": "RMSE (Root Mean Squared Error)",
          "text": "Root mean squared error (RMSE)"
        },
        {
          "key": "B",
          "textEn": "Return on investment (ROI)",
          "textKo": "ROI (Return on Investment)",
          "text": "Return on investment (ROI)"
        },
        {
          "key": "C",
          "textEn": "F1 score",
          "textKo": "F1 점수",
          "text": "F1 score"
        },
        {
          "key": "D",
          "textEn": "Bilingual Evaluation Understudy (BLEU) score",
          "textKo": "BLEU 점수",
          "text": "Bilingual Evaluation Understudy (BLEU) score"
        }
      ],
      "answerKey": "C",
      "answerText": "(F1 score)"
    },
    {
      "id": 228,
      "sourceNumber": 228,
      "title": "Question 228",
      "promptKo": "한 회사가 Amazon Bedrock의 사전학습된 FM을 사용하는 생성 AI 애플리케이션을 보유하고 있습니다.\nFM이 회사 정보를 활용해 더 많은 컨텍스트를 포함하도록 하려 합니다.\n가장 비용 효율적인 솔루션은 무엇일까요?",
      "promptEn": "A company has a generative AI application that uses a pre-trained foundation model (FM) on Amazon Bedrock. The company wants the FM to include more context by using company information.\nWhich solution meets these requirements MOST cost-effectively?",
      "explanation": [
        "Bedrock Knowledge Bases를 활용하면 비용 효율적으로 도메인 정보를 통합할 수 있습니다."
      ],
      "wrongExplanations": [
        "- B: 단순 모델 변경은 컨텍스트 확대에 비효율적",
        "- C: Bedrock Agents는 다중 작업 에이전트용",
        "- D: 맞춤형 모델 배포는 비용이 많이 듬"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use Amazon Bedrock Knowledge Bases.",
          "textKo": "Amazon Bedrock Knowledge Bases 사용",
          "text": "Use Amazon Bedrock Knowledge Bases."
        },
        {
          "key": "B",
          "textEn": "Choose a different FM on Amazon Bedrock.",
          "textKo": "다른 FM 선택",
          "text": "Choose a different FM on Amazon Bedrock."
        },
        {
          "key": "C",
          "textEn": "Use Amazon Bedrock Agents.",
          "textKo": "Amazon Bedrock Agents 사용",
          "text": "Use Amazon Bedrock Agents."
        },
        {
          "key": "D",
          "textEn": "Deploy a custom model on Amazon Bedrock.",
          "textKo": "맞춤형 모델 배포",
          "text": "Deploy a custom model on Amazon Bedrock."
        }
      ],
      "answerKey": "A",
      "answerText": "(Use Amazon Bedrock Knowledge Bases)"
    },
    {
      "id": 229,
      "sourceNumber": 229,
      "title": "Question 229",
      "promptKo": "한 회사가 Amazon SageMaker를 사용하여 AI 모델을 개발하고 있습니다.\nAI 모델 생애주기 워크플로의 각 단계에 대해 올바른 SageMaker 기능 또는 리소스를 다음 목록에서 선택하십시오. 각 SageMaker 기능 또는 리소스는 한 번만 선택하거나 선택하지 않아도 됩니다.",
      "promptEn": "한 회사가 Amazon SageMaker를 사용하여 AI 모델을 개발하고 있습니다.\nAI 모델 생애주기 워크플로의 각 단계에 대해 올바른 SageMaker 기능 또는 리소스를 다음 목록에서 선택하십시오. 각 SageMaker 기능 또는 리소스는 한 번만 선택하거나 선택하지 않아도 됩니다.",
      "explanation": [
        "- Managing different versions of the model",
        "-> 정답: SageMaker Model Registry",
        "SageMaker Model Registry는 모델 버전 관리를 포함하여 모델 등록, 승인, 추적을 위한 기능을 제공합니다.",
        "- Using the current model to make predictions",
        "-> 정답: SageMaker Serverless Inference",
        "SageMaker Serverless Inference는 배포된 모델을 사용해 추론(predictions)을 수행하는 데 적합한 기능입니다. 서버 관리 없이 자동으로 확장되어 요청에 따라 추론 작업을 수행합니다.",
        "최종 정답",
        "- Managing different versions of the model: SageMaker Model Registry",
        "- Using the current model to make predictions: SageMaker Serverless Inference"
      ],
      "wrongExplanations": [
        "- SageMaker Clarify: 이 기능은 모델의 편향성(Bias) 탐지와 설명 가능성(Explainability) 분석을 위한 도구로, 버전 관리나 예측과는 관련이 없습니다."
      ],
      "glossary": [
        "&bull; SageMaker Model Registry: 모델 버전 관리 및 배포 승인 워크플로우를 지원하는 기능",
        "&bull; SageMaker Serverless Inference: 서버리스 방식으로 모델을 배포하고 추론을 수행할 수 있는 기능",
        "&bull; SageMaker Clarify: AI 모델의 편향성 및 설명 가능성을 분석하는 기능"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "SageMaker Clarify",
          "text": "SageMaker Clarify"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "> 정답: SageMaker Model Registry",
          "text": "> 정답: SageMaker Model Registry"
        }
      ],
      "answerKey": "B",
      "answerText": "> 정답: SageMaker Model Registry"
    },
    {
      "id": 230,
      "sourceNumber": 230,
      "title": "Question 230",
      "promptKo": "한 외식 업체가 고객 음식 선호도를 예측하기 위해 데이터를 수집하려고 합니다. 이 회사는 모든 인구 통계 집단의 음식 선호도가 데이터에 포함되도록 하기를 원합니다.\n이 시나리오가 나타내는 데이터셋 특성은 무엇인가요?",
      "promptEn": "A food service company wants to collect a dataset to predict customer food preferences. The company wants to ensure that the food preferences of all demographics are included in the data.\nWhich dataset characteristic does this scenario present?",
      "explanation": [
        "다양한 인구 집단의 선호도를 포함하려는 것은 데이터의 다양성(Diversity) 확보와 관련됩니다."
      ],
      "wrongExplanations": [
        "- A: 정확도는 라벨이나 값이 실제와 일치하는지를 의미",
        "- C: Recency bias는 최신 데이터에 치우치는 현상",
        "- D: 신뢰도는 일관성과 품질의 안정성과 관련됨"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Accuracy",
          "textKo": "정확도(Accuracy)",
          "text": "Accuracy"
        },
        {
          "key": "B",
          "textEn": "Diversity",
          "textKo": "다양성(Diversity)",
          "text": "Diversity"
        },
        {
          "key": "C",
          "textEn": "Recency bias",
          "textKo": "최신 편향(Recency bias)",
          "text": "Recency bias"
        },
        {
          "key": "D",
          "textEn": "Reliability",
          "textKo": "신뢰도(Reliability)",
          "text": "Reliability"
        }
      ],
      "answerKey": "B",
      "answerText": "(Diversity)"
    },
    {
      "id": 231,
      "sourceNumber": 231,
      "title": "Question 231",
      "promptKo": "회사가 인사 정책에 대한 질문에 답변하는 챗봇을 만들고자 합니다. LLM을 사용 중이며, 방대한 디지털 문서 자료를 보유하고 있습니다.\n생성된 응답을 최적화하려면 어떤 기법을 사용해야 하나요?",
      "promptEn": "A company wants to create a chatbot that answers questions about human resources policies. The company is using a large language model (LLM) and has a large digital documentation base.\nWhich technique should the company use to optimize the generated responses?",
      "explanation": [
        "RAG는 LLM이 외부 문서(예: HR 문서)를 참조하여 더 정확하고 컨텍스트 있는 응답을 생성하도록 도와줍니다."
      ],
      "wrongExplanations": [
        "- B: Few-shot prompting은 소량 예시 제공이지만, RAG처럼 문서 기반 참조는 아님",
        "- C: 온도 조정은 응답의 무작위성 제어일 뿐, 정확한 정보 반영과는 다름",
        "- D: 토큰 사이즈 축소는 응답 길이 제한과 관련"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use Retrieval Augmented Generation (RAG).",
          "textKo": "Retrieval Augmented Generation (RAG) 사용",
          "text": "Use Retrieval Augmented Generation (RAG)."
        },
        {
          "key": "B",
          "textEn": "Use few-shot prompting.",
          "textKo": "Few-shot prompting 사용",
          "text": "Use few-shot prompting."
        },
        {
          "key": "C",
          "textEn": "Set the temperature to 1.",
          "textKo": "온도 1로 설정",
          "text": "Set the temperature to 1."
        },
        {
          "key": "D",
          "textEn": "Decrease the token size.",
          "textKo": "토큰 크기 감소",
          "text": "Decrease the token size."
        }
      ],
      "answerKey": "A",
      "answerText": "(Use Retrieval Augmented Generation (RAG))"
    },
    {
      "id": 232,
      "sourceNumber": 232,
      "title": "Question 232",
      "promptKo": "교육 회사가 10대 청소년을 대상으로 한 챗봇을 개발 중이며, 창의적인 철자 및 축약어를 포함한 언어 스타일을 사용하고자 합니다.\n이러한 언어 스타일을 잘 반영했는지 평가하기 위해 사용할 수 있는 성능 평가지표는 무엇인가요?",
      "promptEn": "An education company is building a chatbot whose target audience is teenagers. The company is training a custom large language model (LLM). The company wants the chatbot to speak in the target audience's language style by using creative spelling and shortened words.\nWhich metric will assess the LLM's performance?",
      "explanation": [
        "BERTScore는 의미 기반 유사성을 평가하므로 창의적 표현이 포함된 출력의 품질을 평가하는 데 유용합니다."
      ],
      "wrongExplanations": [
        "- A: F1은 분류 정확도 측정용",
        "- C: ROUGE는 요약 평가용",
        "- D: BLEU는 표면적 단어 일치 중심으로 창의적 표현에 약함"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "F1 score",
          "textKo": "F1 점수",
          "text": "F1 score"
        },
        {
          "key": "B",
          "textEn": "BERTScore",
          "textKo": "BERTScore",
          "text": "BERTScore"
        },
        {
          "key": "C",
          "textEn": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)",
          "textKo": "ROUGE",
          "text": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)"
        },
        {
          "key": "D",
          "textEn": "Bilingual Evaluation Understudy (BLEU) score",
          "textKo": "BLEU",
          "text": "Bilingual Evaluation Understudy (BLEU) score"
        }
      ],
      "answerKey": "B",
      "answerText": "(BERTScore)"
    },
    {
      "id": 233,
      "sourceNumber": 233,
      "title": "Question 233",
      "promptKo": "고객 서비스 팀이 고객 피드백을 분석하고 이를 자동으로 제품 품질, 고객 서비스, 배송 경험 등의 카테고리로 분류하는 애플리케이션을 개발하고 있습니다.\n이 시나리오에 해당하는 AI 개념은 무엇인가요?",
      "promptEn": "A customer service team is developing an application to analyze customer feedback and automatically classify the feedback into different categories. The categories include product quality, customer service, and delivery experience.\nWhich AI concept does this scenario present?",
      "explanation": [
        "텍스트 형태의 피드백을 분석하고 분류하는 작업은 NLP의 대표적인 활용 사례입니다."
      ],
      "wrongExplanations": [
        "- A: Computer vision은 이미지나 영상 처리 기술",
        "- C: 추천 시스템은 사용자 선호도 기반의 항목 추천에 사용",
        "- D: 사기 탐지는 패턴 분석을 통한 이상 감지에 사용"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Computer vision",
          "textKo": "컴퓨터 비전(Computer vision)",
          "text": "Computer vision"
        },
        {
          "key": "B",
          "textEn": "Natural language processing (NLP)",
          "textKo": "자연어 처리(Natural language processing, NLP)",
          "text": "Natural language processing (NLP)"
        },
        {
          "key": "C",
          "textEn": "Recommendation systems",
          "textKo": "추천 시스템(Recommendation systems)",
          "text": "Recommendation systems"
        },
        {
          "key": "D",
          "textEn": "Fraud detection",
          "textKo": "사기 탐지(Fraud detection)",
          "text": "Fraud detection"
        }
      ],
      "answerKey": "B",
      "answerText": "(Natural language processing (NLP))"
    },
    {
      "id": 234,
      "sourceNumber": 234,
      "title": "Question 234",
      "promptKo": "한 금융 서비스 회사는 생성형 AI 기반 챗봇이 규제 준수를 위해 사실에 기반한 답변만 제공하도록 보장해야 한다. 기반 모델(FM)이 환각(hallucination)하는 것을 방지할 수 있는 솔루션은 무엇인가?",
      "promptEn": "A financial services company must ensure that its generative AI-powered chatbot provides factual responses for regulatory compliance. Which solution prevents the underlying foundation model (FM) from hallucinating?",
      "explanation": [
        "Amazon Bedrock Guardrails는 모델의 입력과 출력을 정책 기반으로 제어해, 잘못된 정보나 환각(hallucination)이 발생하지 않도록 방지하는 기능을 제공한다. 규제 준수와 같은 고신뢰 응답이 필요한 경우 필수적인 도구다."
      ],
      "wrongExplanations": [
        "- A: AWS Config는 리소스 구성 상태를 관리&middot;평가하는 서비스로, 모델 환각 방지와는 관련이 없다.",
        "- C: Amazon Fraud Detector는 사기 탐지 전용 서비스로, 모델 출력 제어 기능이 없다.",
        "- D: AWS Audit Manager는 감사 보고서 작성 도구일 뿐 실시간 모델 출력 제어 기능이 없다."
      ],
      "glossary": [
        "- Amazon Bedrock Guardrails: Amazon Bedrock에서 모델의 입력과 출력을 제어하기 위해 정책을 적용할 수 있는 기능으로, 민감한 주제 차단이나 환각 방지에 사용된다."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use AWS Config to query compliance metadata by using natural language.",
          "textKo": "AWS Config를 사용해 자연어로 규정 메타데이터를 쿼리한다.",
          "text": "Use AWS Config to query compliance metadata by using natural language."
        },
        {
          "key": "B",
          "textEn": "Configure Amazon Bedrock Guardrails to evaluate user inputs and model responses.",
          "textKo": "Amazon Bedrock Guardrails를 구성해 사용자 입력과 모델 응답을 평가한다.",
          "text": "Configure Amazon Bedrock Guardrails to evaluate user inputs and model responses."
        },
        {
          "key": "C",
          "textEn": "Use Amazon Fraud Detector to detect potentially fraudulent online activities.",
          "textKo": "Amazon Fraud Detector를 사용해 잠재적 온라인 사기 활동을 탐지한다.",
          "text": "Use Amazon Fraud Detector to detect potentially fraudulent online activities."
        },
        {
          "key": "D",
          "textEn": "Use AWS Audit Manager to prepare IT audit and compliance reports.",
          "textKo": "AWS Audit Manager를 사용해 IT 감사 및 컴플라이언스 보고서를 준비한다.",
          "text": "Use AWS Audit Manager to prepare IT audit and compliance reports."
        }
      ],
      "answerKey": "B",
      "answerText": "Configure Amazon Bedrock Guardrails to evaluate user inputs and model responses."
    },
    {
      "id": 235,
      "sourceNumber": 235,
      "title": "Question 235",
      "promptKo": "한 회사가 제품 광고를 위해 생성형 AI를 활용해 예시 이미지와 슬로건을 생성하는 솔루션을 개발하려 한다. 각 작업에 대해 올바른 모델 유형을 선택하시오. 각 모델 유형은 한 번만 선택할 수 있다.",
      "promptEn": "HOTSPOT - A company wants to develop a solution that uses generative AI to create content for product advertisements, including sample images and slogans. Select the correct model type from the following list for each action. Each model type should be selected one time.",
      "explanation": [
        "이미지 생성에는 텍스트 설명을 기반으로 이미지를 만드는 Text-to-image 모델이 필요하고, 문장이나 문구 작성에는 자연어 처리 기반의 LLM이 적합하다."
      ],
      "wrongExplanations": [
        "- 잘못된 모델 유형을 선택할 경우 이미지나 텍스트 생성이 제대로 이루어지지 않거나 결과 품질이 떨어진다."
      ],
      "glossary": [
        "- Text-to-image 모델: 텍스트 설명을 기반으로 이미지를 생성하는 모델 유형.",
        "- LLM (Large Language Model): 대규모 텍스트 데이터를 학습해 인간처럼 문장을 생성할 수 있는 모델."
      ],
      "type": "matching",
      "choicePool": [
        "Text-to-image 모델",
        "Large Language Model (LLM)"
      ],
      "allowRepeat": false,
      "rows": [
        {
          "id": "235-row-1",
          "prompt": "이미지 생성",
          "answer": "Text-to-image 모델"
        },
        {
          "id": "235-row-2",
          "prompt": "슬로건 생성",
          "answer": "Large Language Model (LLM)"
        }
      ]
    },
    {
      "id": 236,
      "sourceNumber": 236,
      "title": "Question 236",
      "promptKo": "한 회사가 여러 개의 ML 모델을 만들었다. 이 모델들을 저장&middot;관리&middot;버전 관리할 수 있는 솔루션이 필요하다. 어떤 AWS 서비스 또는 기능이 이러한 요구사항을 충족하는가?",
      "promptEn": "A company has created multiple ML models. The company needs a solution for storing, managing, and versioning the models. Which AWS service or feature meets these requirements?",
      "explanation": [
        "Amazon SageMaker Model Registry는 모델의 버전 관리, 저장, 배포를 중앙에서 관리할 수 있도록 지원하는 기능이다."
      ],
      "wrongExplanations": [
        "- A: AWS Audit Manager는 감사용 서비스로 모델 버전 관리 기능이 없다.",
        "- B: Model Monitor는 모델 품질 모니터링 서비스다.",
        "- D: Canvas는 코딩 없이 모델을 만드는 시각화 도구일 뿐 버전 관리 기능은 없다."
      ],
      "glossary": [
        "- Amazon SageMaker Model Registry: ML 모델을 등록하고 버전 관리하며 배포 파이프라인과 통합할 수 있는 중앙 저장소 기능."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "AWS Audit Manager",
          "textKo": "",
          "text": "AWS Audit Manager"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker Model Monitor",
          "textKo": "",
          "text": "Amazon SageMaker Model Monitor"
        },
        {
          "key": "C",
          "textEn": "Amazon SageMaker Model Registry",
          "textKo": "",
          "text": "Amazon SageMaker Model Registry"
        },
        {
          "key": "D",
          "textEn": "Amazon SageMaker Canvas",
          "textKo": "",
          "text": "Amazon SageMaker Canvas"
        }
      ],
      "answerKey": "C",
      "answerText": "Amazon SageMaker Model Registry"
    },
    {
      "id": 237,
      "sourceNumber": 237,
      "title": "Question 237",
      "promptKo": "한 AI 실무자가 ML 모델을 개발 중이다. 이해 관계자에게 모델의 투명성과 설명 가능성을 제공하고자 한다. 이를 충족할 수 있는 솔루션은 무엇인가?",
      "promptEn": "An AI practitioner is building an ML model. The AI practitioner wants to provide model transparency and explainability to stakeholders. Which solution will meet these requirements?",
      "explanation": [
        "Shapley 값은 모델 예측에 기여한 각 특성의 중요도를 설명하는 기법으로, 모델의 의사결정 과정을 투명하게 보여줄 수 있다."
      ],
      "wrongExplanations": [
        "- B: 정확도는 성능 지표일 뿐 설명 가능성을 제공하지 않는다.",
        "- C: 혼동 행렬은 분류 성능을 보여주지만 모델의 의사결정 이유는 설명하지 않는다.",
        "- D: 보안 엔드포인트는 투명성과 무관하다."
      ],
      "glossary": [
        "- Shapley 값: 각 특성이 모델 예측에 기여한 정도를 공정하게 분배해 설명하는 수학적 기법."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Present the model Shapley values.",
          "textKo": "",
          "text": "Present the model Shapley values."
        },
        {
          "key": "B",
          "textEn": "Provide the model accuracy measure.",
          "textKo": "",
          "text": "Provide the model accuracy measure."
        },
        {
          "key": "C",
          "textEn": "Provide the model confusion matrix.",
          "textKo": "",
          "text": "Provide the model confusion matrix."
        },
        {
          "key": "D",
          "textEn": "Provide a secure model inference endpoint.",
          "textKo": "",
          "text": "Provide a secure model inference endpoint."
        }
      ],
      "answerKey": "A",
      "answerText": "Present the model Shapley values."
    },
    {
      "id": 238,
      "sourceNumber": 238,
      "title": "Question 238",
      "promptKo": "한 회사가 ML 애플리케이션을 개발 중이다. 이 애플리케이션은 고객과 제품의 특성에 따라 자동으로 유사한 그룹을 묶어야 한다. 이 요구사항을 충족하는 ML 전략은 무엇인가?",
      "promptEn": "A company is developing an ML application. The application must automatically group similar customers and products based on their characteristics. Which ML strategy should the company use to meet these requirements?",
      "explanation": [
        "유사한 특성에 따라 자동으로 그룹화(클러스터링)하는 작업은 정답 데이터가 필요 없는 비지도 학습(Unsupervised Learning)에 해당한다."
      ],
      "wrongExplanations": [
        "- B: 지도 학습은 정답이 필요하다.",
        "- C: 강화 학습은 보상 기반 학습이다.",
        "- D: 준지도 학습은 일부 정답 데이터가 있는 경우다."
      ],
      "glossary": [
        "- Unsupervised Learning: 정답(label) 없이 데이터의 패턴이나 구조를 학습하는 방법."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Unsupervised learning",
          "textKo": "",
          "text": "Unsupervised learning"
        },
        {
          "key": "B",
          "textEn": "Supervised learning",
          "textKo": "",
          "text": "Supervised learning"
        },
        {
          "key": "C",
          "textEn": "Reinforcement learning",
          "textKo": "",
          "text": "Reinforcement learning"
        },
        {
          "key": "D",
          "textEn": "Semi-supervised learning",
          "textKo": "",
          "text": "Semi-supervised learning"
        }
      ],
      "answerKey": "A",
      "answerText": "Unsupervised learning"
    },
    {
      "id": 239,
      "sourceNumber": 239,
      "title": "Question 239",
      "promptKo": "한 뉴스 기관이 영어로 기사를 발행한다. 이 기관은 기사를 다른 언어로도 제공하고 싶어 한다. 이 요구사항을 충족하는 솔루션은 무엇인가?",
      "promptEn": "A news agency publishes articles in English. The agency wants to make articles available in other languages. Which solution meets these requirements?",
      "explanation": [
        "Amazon Translate는 실시간으로 텍스트를 여러 언어로 번역할 수 있는 서비스다. 기사 번역에 가장 적합하다."
      ],
      "wrongExplanations": [
        "- A: Transcribe는 음성을 텍스트로 변환하는 서비스다.",
        "- C: Personalize는 맞춤형 추천 서비스다.",
        "- D: Textract는 문서 이미지에서 텍스트를 추출하는 서비스다."
      ],
      "glossary": [
        "- Amazon Translate: 다국어 번역을 지원하는 완전관리형 머신 번역 서비스."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Add Amazon Transcribe to the company's website.",
          "textKo": "",
          "text": "Add Amazon Transcribe to the company's website."
        },
        {
          "key": "B",
          "textEn": "Use the Amazon Translate real-time translation feature.",
          "textKo": "",
          "text": "Use the Amazon Translate real-time translation feature."
        },
        {
          "key": "C",
          "textEn": "Add Amazon Personalize to the company's website.",
          "textKo": "",
          "text": "Add Amazon Personalize to the company's website."
        },
        {
          "key": "D",
          "textEn": "Use the Amazon Textract real-time document processing feature.",
          "textKo": "",
          "text": "Use the Amazon Textract real-time document processing feature."
        }
      ],
      "answerKey": "B",
      "answerText": "Use the Amazon Translate real-time translation feature."
    },
    {
      "id": 240,
      "sourceNumber": 240,
      "title": "Question 240",
      "promptKo": "한 은행이 계좌 개설에 대한 고객 문의에 답변하는 챗봇을 만들고 있다. 챗봇은 은행의 공개 문서를 사용해 답변을 생성할 것이다. 회사는 Amazon Bedrock과 프롬프트 엔지니어링을 활용해 챗봇의 답변을 개선하려 한다. 이 요구사항에 가장 적합한 프롬프트 엔지니어링 기법은 무엇인가?",
      "promptEn": "A bank is building a chatbot to answer customer questions about opening a bank account. The chatbot will use public bank documents to generate responses. The company will use Amazon Bedrock and prompt engineering to improve the chatbot's responses. Which prompt engineering technique meets these requirements?",
      "explanation": [
        "Few-shot prompting은 모델에 몇 가지 예시를 제공해 원하는 방식으로 응답하도록 유도하는 기법으로, 도메인 지식이 필요한 챗봇의 응답 품질을 높일 수 있다."
      ],
      "wrongExplanations": [
        "- A: Complexity-based prompting은 일반적인 프롬프트 기법이 아니다.",
        "- B: Zero-shot은 예시 없이 답변하도록 하여 정확도가 낮을 수 있다.",
        "- D: Directional stimulus prompting은 명확한 예시를 제공하는 방법이 아니다."
      ],
      "glossary": [
        "- Few-shot prompting: 모델에 소수의 예시를 제공하여 원하는 패턴으로 응답을 유도하는 프롬프트 설계 기법."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Complexity-based prompting",
          "textKo": "",
          "text": "Complexity-based prompting"
        },
        {
          "key": "B",
          "textEn": "Zero-shot prompting",
          "textKo": "",
          "text": "Zero-shot prompting"
        },
        {
          "key": "C",
          "textEn": "Few-shot prompting",
          "textKo": "",
          "text": "Few-shot prompting"
        },
        {
          "key": "D",
          "textEn": "Directional stimulus prompting",
          "textKo": "",
          "text": "Directional stimulus prompting"
        }
      ],
      "answerKey": "C",
      "answerText": "Few-shot prompting"
    },
    {
      "id": 241,
      "sourceNumber": 241,
      "title": "Question 241",
      "promptKo": "한 회사가 Amazon Bedrock에 호스팅된 ML 모델을 파인튜닝하려 한다. 회사는 자체 VPC의 프라이빗 데이터베이스에 저장된 민감한 데이터를 사용해야 하며, 데이터는 사설 네트워크 내부에만 머물러야 한다.\n이 요구사항을 충족하는 솔루션은 무엇인가?",
      "promptEn": "A company wants to fine-tune an ML model that is hosted on Amazon Bedrock. The company wants to use its own sensitive data that is stored in private databases in a VPC. The data needs to stay within the company's private network.",
      "explanation": [
        "AWS PrivateLink는 AWS 서비스와 VPC 간의 안전한 프라이빗 네트워크 연결을 제공해 인터넷을 거치지 않고 Amazon Bedrock에 접근할 수 있도록 한다."
      ],
      "wrongExplanations": [
        "- A: IAM 역할은 인증&middot;인가 용도로만 사용된다.",
        "- B: 리소스 정책은 접근 제어 용도이며 네트워크 경로를 제어하지 않는다.",
        "- D: KMS는 암호화 키 관리용으로 네트워크 전송 경로와 무관하다."
      ],
      "glossary": [
        "- AWS PrivateLink: VPC와 AWS 서비스 간에 인터넷을 우회한 프라이빗 연결을 제공하는 네트워킹 서비스."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Restrict access to Amazon Bedrock by using an AWS Identity and Access Management (IAM) service role.",
          "textKo": "",
          "text": "Restrict access to Amazon Bedrock by using an AWS Identity and Access Management (IAM) service role."
        },
        {
          "key": "B",
          "textEn": "Restrict access to Amazon Bedrock by using an AWS Identity and Access Management (IAM) resource policy.",
          "textKo": "",
          "text": "Restrict access to Amazon Bedrock by using an AWS Identity and Access Management (IAM) resource policy."
        },
        {
          "key": "C",
          "textEn": "Use AWS PrivateLink to connect the VPC and Amazon Bedrock.",
          "textKo": "",
          "text": "Use AWS PrivateLink to connect the VPC and Amazon Bedrock."
        },
        {
          "key": "D",
          "textEn": "Use AWS Key Management Service (AWS KMS) keys to encrypt the data.",
          "textKo": "",
          "text": "Use AWS Key Management Service (AWS KMS) keys to encrypt the data."
        }
      ],
      "answerKey": "C",
      "answerText": "Use AWS PrivateLink to connect the VPC and Amazon Bedrock."
    },
    {
      "id": 242,
      "sourceNumber": 242,
      "title": "Question 242",
      "promptKo": "한 다큐멘터리 제작자가 더 많은 시청자에게 다가가기 위해 여러 언어로 자막과 음성 더빙을 자동으로 추가하려고 한다.\n이 요구사항을 충족하는 올바른 조합을 고르시오. (2개 선택)",
      "promptEn": "A documentary filmmaker wants to reach more viewers. The filmmaker wants to automatically add subtitles and voice-overs in multiple languages to their films.",
      "explanation": [
        "Transcribe는 음성을 텍스트로 변환하고, Translate는 이를 다른 언어로 번역할 수 있다. Polly는 번역된 텍스트를 자연스러운 음성으로 변환해 음성 더빙을 자동화한다."
      ],
      "wrongExplanations": [
        "- B, E: Textract는 문서에서 텍스트를 추출하는 서비스로 자막과 음성 변환과는 관련이 없다.",
        "- D: Translate는 번역만 지원하고 음성 합성 기능은 없다."
      ],
      "glossary": [
        "- Amazon Polly: 텍스트를 자연스러운 음성으로 변환하는 서비스.",
        "- Amazon Transcribe: 음성을 텍스트로 변환하는 서비스.",
        "- Amazon Translate: 여러 언어 간 번역을 지원하는 서비스."
      ],
      "type": "multi-select",
      "options": [
        {
          "key": "A",
          "textEn": "Use Amazon Transcribe and Amazon Translate to generate subtitles in other languages.",
          "textKo": "",
          "text": "Use Amazon Transcribe and Amazon Translate to generate subtitles in other languages."
        },
        {
          "key": "B",
          "textEn": "Use Amazon Textract and Amazon Translate to generate subtitles in other languages.",
          "textKo": "",
          "text": "Use Amazon Textract and Amazon Translate to generate subtitles in other languages."
        },
        {
          "key": "C",
          "textEn": "Use Amazon Polly to generate voice-overs in other languages.",
          "textKo": "",
          "text": "Use Amazon Polly to generate voice-overs in other languages."
        },
        {
          "key": "D",
          "textEn": "Use Amazon Translate to generate voice-overs in other languages.",
          "textKo": "",
          "text": "Use Amazon Translate to generate voice-overs in other languages."
        },
        {
          "key": "E",
          "textEn": "Use Amazon Textract to generate voice-overs in other languages.",
          "textKo": "",
          "text": "Use Amazon Textract to generate voice-overs in other languages."
        }
      ],
      "answerKeys": [
        "A",
        "C"
      ],
      "requiredSelections": 2
    },
    {
      "id": 243,
      "sourceNumber": 243,
      "title": "Question 243",
      "promptKo": "한 회사가 사내 정책에 대한 직원 질문에 답변할 수 있는 챗봇을 만들고자 한다. 정책은 자주 업데이트되며, 챗봇은 변경 사항을 실시간에 가깝게 반영해야 한다.\n이 요구사항에 적합한 솔루션은 무엇인가?",
      "promptEn": "A company wants to create a chatbot to answer employee questions about company policies. Company policies are updated frequently. The chatbot must reflect the changes in near real time. The company wants to choose a large language model (LLM).",
      "explanation": [
        "RAG 워크플로우를 사용하면 모델을 재학습하지 않고도 최신 정책 문서를 검색해 실시간으로 반영할 수 있다."
      ],
      "wrongExplanations": [
        "- A: 파인튜닝은 실시간 업데이트 반영이 어렵다.",
        "- B: 단순 모델 선택만으로는 최신 정보 반영이 불가능하다.",
        "- D: Q Business도 가능하지만 Knowledge Bases를 사용하는 RAG가 보다 일반적인 접근법이다."
      ],
      "glossary": [
        "- RAG (Retrieval-Augmented Generation): 모델이 답변 생성 시 외부 지식베이스를 조회해 최신 정보를 반영하도록 하는 기법."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Fine-tune an LLM on the company policy text by using Amazon SageMaker.",
          "textKo": "",
          "text": "Fine-tune an LLM on the company policy text by using Amazon SageMaker."
        },
        {
          "key": "B",
          "textEn": "Select a foundation model (FM) from Amazon Bedrock to build an application.",
          "textKo": "",
          "text": "Select a foundation model (FM) from Amazon Bedrock to build an application."
        },
        {
          "key": "C",
          "textEn": "Create a Retrieval Augmented Generation (RAG) workflow by using Amazon Bedrock Knowledge Bases.",
          "textKo": "",
          "text": "Create a Retrieval Augmented Generation (RAG) workflow by using Amazon Bedrock Knowledge Bases."
        },
        {
          "key": "D",
          "textEn": "Use Amazon Q Business to build a custom Q App.",
          "textKo": "",
          "text": "Use Amazon Q Business to build a custom Q App."
        }
      ],
      "answerKey": "C",
      "answerText": "Create a Retrieval Augmented Generation (RAG) workflow by using Amazon Bedrock Knowledge Bases."
    },
    {
      "id": 244,
      "sourceNumber": 244,
      "title": "Question 244",
      "promptKo": "한 회사가 소규모 라벨링된 데이터셋을 사용하여 특정 작업에 맞는 AI 모델을 지도 학습으로 학습하고 있다.\n이 단계는 FM(Foundation Model) 라이프사이클 중 어느 단계에 해당하는가?",
      "promptEn": "A company is using supervised learning to train an AI model on a small labeled dataset that is specific to a target task.",
      "explanation": [
        "파인튜닝은 사전 학습된 모델에 소량의 라벨링된 데이터셋을 추가로 학습시켜 특정 작업에 맞게 조정하는 단계다."
      ],
      "wrongExplanations": [
        "- B: 데이터 선택은 학습 전 데이터 수집 단계다.",
        "- C: 사전 학습은 대규모 범용 데이터로 모델을 학습하는 초기 단계다.",
        "- D: 평가는 학습 이후 모델 성능을 측정하는 단계다."
      ],
      "glossary": [
        "- Fine-tuning: 사전 학습된 모델을 특정 작업에 맞게 조정하는 추가 학습 과정."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Fine-tuning",
          "textKo": "",
          "text": "Fine-tuning"
        },
        {
          "key": "B",
          "textEn": "Data selection",
          "textKo": "",
          "text": "Data selection"
        },
        {
          "key": "C",
          "textEn": "Pre-training",
          "textKo": "",
          "text": "Pre-training"
        },
        {
          "key": "D",
          "textEn": "Evaluation",
          "textKo": "",
          "text": "Evaluation"
        }
      ],
      "answerKey": "A",
      "answerText": "Fine-tuning"
    },
    {
      "id": 245,
      "sourceNumber": 245,
      "title": "Question 245",
      "promptKo": "한 회사가 개인 대출 승인/거절을 지원하는 AI 애플리케이션을 개발 중이다. 이 애플리케이션은 책임 있는 AI(Responsible AI) 원칙을 따라야 한다.\n각 작업에 대해 적절한 책임 있는 AI 원칙을 선택하시오.",
      "promptEn": "HOTSPOT - A company is developing an AI application to help the company approve or deny personal loans. The application must follow the principles of responsible AI.\nSelect the correct responsible AI principle from the following list for each action. Select each responsible AI principle one time or not at all.",
      "explanation": [
        "대출 승인과 같은 고위험 영역에서는 공정성, 투명성, 책임성 등의 원칙이 필수다."
      ],
      "wrongExplanations": [
        "(항목별 오답은 세부 시나리오에 따라 상이)"
      ],
      "glossary": [
        "- Responsible AI: AI의 설계&middot;운영&middot;활용 전 과정에서 공정성, 투명성, 신뢰성 등을 확보하는 접근 방식."
      ],
      "type": "matching",
      "allowRepeat": false,
      "choicePool": [
        "공정성 (Fairness)",
        "투명성 (Transparency)",
        "책임성 (Accountability)",
        "신뢰성 (Reliability)",
        "개인정보 보호 (Privacy)"
      ],
      "rows": [
        {
          "id": "245-manual-1",
          "prompt": "특정 집단에 불리한 편향이 생기지 않도록 대출 심사를 설계한다",
          "answer": "공정성 (Fairness)"
        },
        {
          "id": "245-manual-2",
          "prompt": "승인 또는 거절 판단 이유를 설명할 수 있게 만든다",
          "answer": "투명성 (Transparency)"
        },
        {
          "id": "245-manual-3",
          "prompt": "AI 판단 결과를 검토하고 책임질 절차와 주체를 둔다",
          "answer": "책임성 (Accountability)"
        },
        {
          "id": "245-manual-4",
          "prompt": "운영 중에도 일관되고 안정적인 판단 품질을 유지한다",
          "answer": "신뢰성 (Reliability)"
        },
        {
          "id": "245-manual-5",
          "prompt": "대출 신청자의 개인정보와 민감 정보를 보호한다",
          "answer": "개인정보 보호 (Privacy)"
        }
      ]
    },
    {
      "id": 246,
      "sourceNumber": 246,
      "title": "Question 246",
      "promptKo": "한 회사가 애플리케이션에 출력 메시지 스타일을 개선하는 기능을 도입하려 한다. Amazon Bedrock에서 LLM을 파인튜닝할 예정이다.\n이때 필요한 데이터 유형은 무엇인가?",
      "promptEn": "A company is introducing a new feature for its application. The feature will refine the style of output messages. The company will fine-tune a large language model (LLM) on Amazon Bedrock to implement the feature.",
      "explanation": [
        "파인튜닝에는 모델이 어떤 입력에 어떤 출력을 생성해야 하는지 학습할 수 있도록 입력-출력 쌍 데이터가 필요하다."
      ],
      "wrongExplanations": [
        "- A, B, D: 입력 또는 출력만으로는 모델이 원하는 스타일을 학습할 수 없다."
      ],
      "glossary": [
        "- Input-output pairs: 파인튜닝 시 입력 문장과 원하는 출력 문장을 짝지어 제공하는 학습 데이터 형식."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Samples of only input messages",
          "textKo": "",
          "text": "Samples of only input messages"
        },
        {
          "key": "B",
          "textEn": "Samples of only output messages",
          "textKo": "",
          "text": "Samples of only output messages"
        },
        {
          "key": "C",
          "textEn": "Samples of pairs of input and output messages",
          "textKo": "",
          "text": "Samples of pairs of input and output messages"
        },
        {
          "key": "D",
          "textEn": "Separate samples of input and output messages",
          "textKo": "",
          "text": "Separate samples of input and output messages"
        }
      ],
      "answerKey": "C",
      "answerText": "Samples of pairs of input and output messages"
    },
    {
      "id": 247,
      "sourceNumber": 247,
      "title": "Question 247",
      "promptKo": "한 헬스케어 회사가 환자 퇴원 후 30일 이내 재입원을 예측하는 AI 솔루션을 구축 중이다. 이미 과거 데이터를 기반으로 모델을 학습했으며, 이를 실시간으로 예측에 활용하려 한다.\n이 시나리오에서 모델 추론(inference)에 해당하는 작업은 무엇인가?",
      "promptEn": "A healthcare company is building an AI solution to predict patient readmission within 30 days of patient discharge. The company has trained a model on historical patient data including medical history, demographics, and treatment specifications, to provide readmission predictions in real time.",
      "explanation": [
        "모델 추론이란 이미 학습된 모델을 사용해 새로운 데이터에 대한 예측을 수행하는 과정을 의미한다."
      ],
      "wrongExplanations": [
        "- A: 데이터 수집 단계.",
        "- B: 성능 평가 단계.",
        "- C: 패턴 발견은 학습 과정이다."
      ],
      "glossary": [
        "- Inference: 학습된 모델을 사용해 실제 데이터에 대한 예측을 수행하는 단계."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Gather historical patient readmission data.",
          "textKo": "",
          "text": "Gather historical patient readmission data."
        },
        {
          "key": "B",
          "textEn": "Use appropriate metrics and assess model performance.",
          "textKo": "",
          "text": "Use appropriate metrics and assess model performance."
        },
        {
          "key": "C",
          "textEn": "Use data to identify patient patterns and correlations.",
          "textKo": "",
          "text": "Use data to identify patient patterns and correlations."
        },
        {
          "key": "D",
          "textEn": "Use a trained model to predict patient readmission.",
          "textKo": "",
          "text": "Use a trained model to predict patient readmission."
        }
      ],
      "answerKey": "D",
      "answerText": "Use a trained model to predict patient readmission."
    },
    {
      "id": 248,
      "sourceNumber": 248,
      "title": "Question 248",
      "promptKo": "한 금융회사가 ML 예측 결과에 대한 인간 검토 워크플로우를 구축하려 한다. 또한 신뢰도 임계값을 정의하고 시간이 지남에 따라 이를 조정하고자 한다.\n이 요구사항을 충족하는 AWS 서비스는 무엇인가?",
      "promptEn": "A financial company wants to build workflows for human review of ML predictions. The company wants to define confidence thresholds for its use case and adjust the thresholds over time.",
      "explanation": [
        "Amazon A2I는 ML 예측 결과에 대해 사람의 검토를 자동으로 워크플로우에 통합할 수 있는 서비스로, 신뢰도 임계값을 설정해 자동/수동 검토를 병행할 수 있다."
      ],
      "wrongExplanations": [
        "- A: Personalize는 추천 시스템용이다.",
        "- C: Inspector는 보안 검사 서비스다.",
        "- D: Audit Manager는 감사 보고서 작성용이다."
      ],
      "glossary": [
        "- Amazon A2I: ML 예측 결과에 인간 검토를 통합할 수 있는 워크플로우 서비스."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Personalize",
          "textKo": "",
          "text": "Amazon Personalize"
        },
        {
          "key": "B",
          "textEn": "Amazon Augmented AI (Amazon A2I)",
          "textKo": "",
          "text": "Amazon Augmented AI (Amazon A2I)"
        },
        {
          "key": "C",
          "textEn": "Amazon Inspector",
          "textKo": "",
          "text": "Amazon Inspector"
        },
        {
          "key": "D",
          "textEn": "AWS Audit Manager",
          "textKo": "",
          "text": "AWS Audit Manager"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon Augmented AI (Amazon A2I)"
    },
    {
      "id": 249,
      "sourceNumber": 249,
      "title": "Question 249",
      "promptKo": "한 회사가 직원들이 내부 데이터를 조회할 수 있는 AI 어시스턴트를 만들고자 한다.\n이 요구사항을 충족하는 AWS 서비스는 무엇인가?",
      "promptEn": "A company wants to develop an AI assistant for employees to query internal data.",
      "explanation": [
        "Amazon Q Business는 기업 내부 시스템 및 문서를 연결해 질의응답형 AI 어시스턴트를 손쉽게 구축할 수 있는 서비스다."
      ],
      "wrongExplanations": [
        "- A: Rekognition은 이미지/영상 분석 서비스다.",
        "- B: Textract는 문서에서 텍스트 추출 기능만 제공한다.",
        "- C: Lex는 챗봇 빌더지만 지식 통합형 AI 어시스턴트와는 다르다."
      ],
      "glossary": [
        "- Amazon Q Business: 기업 내부 지식에 기반한 AI 어시스턴트를 생성할 수 있는 완전관리형 서비스."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Rekognition",
          "textKo": "",
          "text": "Amazon Rekognition"
        },
        {
          "key": "B",
          "textEn": "Amazon Textract",
          "textKo": "",
          "text": "Amazon Textract"
        },
        {
          "key": "C",
          "textEn": "Amazon Lex",
          "textKo": "",
          "text": "Amazon Lex"
        },
        {
          "key": "D",
          "textEn": "Amazon Q Business",
          "textKo": "",
          "text": "Amazon Q Business"
        }
      ],
      "answerKey": "D",
      "answerText": "Amazon Q Business"
    },
    {
      "id": 250,
      "sourceNumber": 250,
      "title": "Question 250",
      "promptKo": "한 회사가 코드를 작성하지 않고 AWS에서 ML 모델을 구축하고 배포하고자 한다.\n이 요구사항을 충족하는 AWS 서비스 또는 기능은 무엇인가?",
      "promptEn": "A company wants to build and deploy ML models on AWS without writing any code.",
      "explanation": [
        "SageMaker Canvas는 코딩 없이도 ML 모델을 구축&middot;학습&middot;배포할 수 있는 시각화 기반의 서비스다."
      ],
      "wrongExplanations": [
        "- B: Rekognition은 이미지/영상 분석 서비스이며 커스텀 모델 빌드 기능이 제한적이다.",
        "- C: DeepRacer는 자율주행 학습용 데모 플랫폼이다.",
        "- D: Comprehend는 자연어 처리 전용 완성형 서비스다."
      ],
      "glossary": [
        "- SageMaker Canvas: 비개발자도 드래그 앤 드롭 방식으로 ML 모델을 만들고 배포할 수 있는 시각화 도구."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker Canvas",
          "textKo": "",
          "text": "Amazon SageMaker Canvas"
        },
        {
          "key": "B",
          "textEn": "Amazon Rekognition",
          "textKo": "",
          "text": "Amazon Rekognition"
        },
        {
          "key": "C",
          "textEn": "AWS DeepRacer",
          "textKo": "",
          "text": "AWS DeepRacer"
        },
        {
          "key": "D",
          "textEn": "Amazon Comprehend",
          "textKo": "",
          "text": "Amazon Comprehend"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon SageMaker Canvas"
    },
    {
      "id": 251,
      "sourceNumber": 251,
      "title": "Question 251",
      "promptKo": "한 디자인 회사가 Amazon Bedrock의 FM을 사용해 다양한 프로젝트용 이미지를 생성하고 있다.\n각 이미지가 얼마나 상세하거나 추상적으로 나타날지 제어하고 싶다.\n회사는 어떤 모델 파라미터를 수정해야 하는가?",
      "promptEn": "A design company is using a foundation model (FM) on Amazon Bedrock to generate images for various projects. The company wants to have control over how detailed or abstract each generated image appears.",
      "explanation": [
        "Generation step은 이미지 생성 과정에서 단계 수를 제어하며, 단계 수가 많을수록 결과가 더 세밀해지고, 단계 수가 적으면 더 추상적으로 표현된다."
      ],
      "wrongExplanations": [
        "- A: Model checkpoint는 모델의 저장 시점을 의미하며 이미지 디테일에 직접적인 영향을 주지 않는다.",
        "- B: Batch size는 한 번에 처리하는 샘플 수를 의미하며, 이미지 품질과 직접 관련이 없다.",
        "- D: Token length는 텍스트 생성과 관련된 파라미터로 이미지 생성에는 적용되지 않는다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Model checkpoint",
          "textKo": "",
          "text": "Model checkpoint"
        },
        {
          "key": "B",
          "textEn": "Batch size",
          "textKo": "",
          "text": "Batch size"
        },
        {
          "key": "C",
          "textEn": "Generation step",
          "textKo": "",
          "text": "Generation step"
        },
        {
          "key": "D",
          "textEn": "Token length",
          "textKo": "",
          "text": "Token length"
        }
      ],
      "answerKey": "C",
      "answerText": "Generation step"
    },
    {
      "id": 252,
      "sourceNumber": 252,
      "title": "Question 252",
      "promptKo": "한 금융회사가 전 세계 여러 국가에 지사를 운영하고 있다.\n생성 AI 애플리케이션과 FM 간의 모든 API 호출이 공용 인터넷을 거치지 않아야 한다.\n이 요구사항을 충족하는 AWS 서비스는 무엇인가?",
      "promptEn": "A financial company has offices in different countries worldwide. The company requires that all API calls between generative AI applications and foundation models (FM) must not travel across the public internet.",
      "explanation": [
        "AWS PrivateLink를 사용하면 VPC와 AWS 서비스 간의 안전한 사설 네트워크 연결이 가능하며, 트래픽이 공용 인터넷을 거치지 않는다."
      ],
      "wrongExplanations": [
        "- B: Amazon Q는 AI 질의응답 서비스이며 네트워크 경로 제어 기능이 없다.",
        "- C: CloudFront는 콘텐츠 전송 서비스로, 공용 인터넷을 통한 배포에 사용된다.",
        "- D: CloudTrail은 AWS 활동 로깅 서비스이며 네트워크 전송과 관련 없다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "AWS PrivateLink",
          "textKo": "",
          "text": "AWS PrivateLink"
        },
        {
          "key": "B",
          "textEn": "Amazon Q",
          "textKo": "",
          "text": "Amazon Q"
        },
        {
          "key": "C",
          "textEn": "Amazon CloudFront",
          "textKo": "",
          "text": "Amazon CloudFront"
        },
        {
          "key": "D",
          "textEn": "AWS CloudTrail",
          "textKo": "",
          "text": "AWS CloudTrail"
        }
      ],
      "answerKey": "A",
      "answerText": "AWS PrivateLink"
    },
    {
      "id": 253,
      "sourceNumber": 253,
      "title": "Question 253",
      "promptKo": "한 전자상거래 회사가 챗봇을 배포하려 한다.\n챗봇은 사용자 질문에 제품 정보 및 주문 내역을 제공한다.\n입력 프롬프트와 챗봇 응답에서 유해한 콘텐츠를 필터링하는 안전장치를 구현해야 한다.\n어떤 AWS 기능이 이를 충족하는가?",
      "promptEn": "An ecommerce company is deploying a chatbot. The chatbot will give users the ability to ask questions about the company's products and receive details on users' orders. The company must implement safeguards for the chatbot to filter harmful content from the input prompts and chatbot responses.",
      "explanation": [
        "Bedrock Guardrails는 LLM 응답과 입력을 검사하고 안전하게 필터링하여 유해한 콘텐츠 생성을 방지한다."
      ],
      "wrongExplanations": [
        "- B: Bedrock Agents는 모델과 외부 서비스를 연결하는 기능이다.",
        "- C: Inference APIs는 추론을 수행할 뿐, 안전 필터링 기능이 없다.",
        "- D: Custom models는 모델 자체이며, 안전 장치 기능은 포함되지 않는다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Bedrock Guardrails",
          "textKo": "",
          "text": "Amazon Bedrock Guardrails"
        },
        {
          "key": "B",
          "textEn": "Amazon Bedrock Agents",
          "textKo": "",
          "text": "Amazon Bedrock Agents"
        },
        {
          "key": "C",
          "textEn": "Amazon Bedrock inference APIs",
          "textKo": "",
          "text": "Amazon Bedrock inference APIs"
        },
        {
          "key": "D",
          "textEn": "Amazon Bedrock custom models",
          "textKo": "",
          "text": "Amazon Bedrock custom models"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon Bedrock Guardrails"
    },
    {
      "id": 254,
      "sourceNumber": 254,
      "title": "Question 254",
      "promptKo": "한 회사가 실험 환경에서 생성 AI 애플리케이션을 학습하고 싶다.\n가장 비용 효율적인 솔루션은 무엇인가?",
      "promptEn": "A company wants to learn about generative AI applications in an experimental environment.",
      "explanation": [
        "SageMaker JumpStart는 사전 학습된 AI 모델과 예제 프로젝트를 제공하여, 실험 환경에서 빠르게 비용 효율적으로 테스트할 수 있다."
      ],
      "wrongExplanations": [
        "- A, D: Amazon Q Developer/Business는 질의응답용이며 비용 효율적 실험 환경 제공에 최적화되어 있지 않다.",
        "- C: PartyRock는 실제 서비스 이름이 아니며 존재하지 않는다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Q Developer",
          "textKo": "",
          "text": "Amazon Q Developer"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker JumpStart",
          "textKo": "",
          "text": "Amazon SageMaker JumpStart"
        },
        {
          "key": "C",
          "textEn": "Amazon Bedrock PartyRock",
          "textKo": "",
          "text": "Amazon Bedrock PartyRock"
        },
        {
          "key": "D",
          "textEn": "Amazon Q Business",
          "textKo": "",
          "text": "Amazon Q Business"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon SageMaker JumpStart"
    },
    {
      "id": 255,
      "sourceNumber": 255,
      "title": "Question 255",
      "promptKo": "한 회사가 특정 분야에 대한 AI 어시스턴트를 학습시키기 위해 대규모 데이터셋을 수집해야 한다.\n어떤 데이터셋이 적합한가?",
      "promptEn": "A company needs to collect a large dataset to train an AI assistant in a specific content area.",
      "explanation": [
        "AI 어시스턴트 학습에는 해당 분야 관련 용어를 포함한 다양한 대화 데이터가 필요하며, 이는 모델이 문맥과 용어를 학습하는 데 필수적이다."
      ],
      "wrongExplanations": [
        "- B: 일반 판매 시계열 데이터는 대화형 AI 학습과 관련 없다.",
        "- C: 뉴스 감정 분석 데이터는 도메인 대화 학습에 부적합하다.",
        "- D: 제품 ID와 사용자 ID는 추천 시스템용 데이터로, 언어 학습에는 적합하지 않다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Diverse conversations that use relevant terminology",
          "textKo": "",
          "text": "Diverse conversations that use relevant terminology"
        },
        {
          "key": "B",
          "textEn": "Time series data of general purpose historical sales",
          "textKo": "",
          "text": "Time series data of general purpose historical sales"
        },
        {
          "key": "C",
          "textEn": "Sentiment analysis of news articles",
          "textKo": "",
          "text": "Sentiment analysis of news articles"
        },
        {
          "key": "D",
          "textEn": "Unique product IDs and corresponding user IDs",
          "textKo": "",
          "text": "Unique product IDs and corresponding user IDs"
        }
      ],
      "answerKey": "A",
      "answerText": "Diverse conversations that use relevant terminology"
    },
    {
      "id": 256,
      "sourceNumber": 256,
      "title": "Question 256",
      "promptKo": "한 금융회사가 대출 승인 결정을 위한 생성 AI 애플리케이션을 개발 중이다.\n출력이 책임 있고 공정해야 한다.\n어떤 솔루션이 요구사항을 충족하는가?",
      "promptEn": "A financial company is developing a generative AI application for loan approval decisions. The company needs the application output to be responsible and fair.",
      "explanation": [
        "공정하고 책임 있는 AI를 위해서는 편향 없는 데이터를 사용해야 하며, 모든 인구 집단을 반영해야 한다."
      ],
      "wrongExplanations": [
        "- B: 모델 깊이가 깊다고 공정성이 보장되지 않는다.",
        "- C: 의사결정 과정을 숨기면 설명 가능성이 떨어진다.",
        "- D: 정적 테스트 데이터만으로는 지속적인 공정성 확인이 어렵다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Review the training data to check for biases. Include data from all demographics in the training data.",
          "textKo": "",
          "text": "Review the training data to check for biases. Include data from all demographics in the training data."
        },
        {
          "key": "B",
          "textEn": "Use a deep learning model with many hidden layers.",
          "textKo": "",
          "text": "Use a deep learning model with many hidden layers."
        },
        {
          "key": "C",
          "textEn": "Keep the model's decision-making process a secret to protect proprietary algorithms.",
          "textKo": "",
          "text": "Keep the model's decision-making process a secret to protect proprietary algorithms."
        },
        {
          "key": "D",
          "textEn": "Continuously monitor the model's performance on a static test dataset",
          "textKo": "",
          "text": "Continuously monitor the model's performance on a static test dataset"
        }
      ],
      "answerKey": "A",
      "answerText": "Review the training data to check for biases. Include data from all demographics in the training data."
    },
    {
      "id": 257,
      "sourceNumber": 257,
      "title": "Question 257",
      "promptKo": "각 사용 사례에 대해 올바른 AWS 서비스 또는 도구를 선택하시오.\n각 서비스/도구는 한 번만 선택하거나 선택하지 않을 수 있다.",
      "promptEn": "HOTSPOT - Select the correct AWS service or tool from the following list for each use case. Select each AWS service or tool one time or not at all.",
      "explanation": [
        "각 AWS 서비스는 특정 AI 용도에 최적화되어 있다. 사용 사례에 따라 적합한 서비스 선택이 필요하다."
      ],
      "wrongExplanations": [
        "선택하지 않은 서비스는 해당 사용 사례와 관련이 없다."
      ],
      "glossary": [],
      "type": "matching",
      "choicePool": [
        "SageMaker",
        "Lex 또는 Q",
        "Rekognition",
        "Textract"
      ],
      "allowRepeat": false,
      "rows": [
        {
          "id": "257-row-1",
          "prompt": "AI 모델 빌드",
          "answer": "SageMaker"
        },
        {
          "id": "257-row-2",
          "prompt": "AI 챗봇",
          "answer": "Lex 또는 Q"
        },
        {
          "id": "257-row-3",
          "prompt": "이미지/영상 분석",
          "answer": "Rekognition"
        },
        {
          "id": "257-row-4",
          "prompt": "텍스트 추출",
          "answer": "Textract"
        }
      ]
    },
    {
      "id": 258,
      "sourceNumber": 258,
      "title": "Question 258",
      "promptKo": "머신러닝 지식이 거의 없는 AI 실무자가 코드를 작성하지 않고 직원 이직률을 예측하고 싶다.\n어떤 SageMaker 기능이 이를 충족하는가?",
      "promptEn": "An AI practitioner who has minimal ML knowledge wants to predict employee attrition without writing code.",
      "explanation": [
        "Canvas는 코딩 없이 시각적 인터페이스로 ML 모델을 구축&middot;학습&middot;배포할 수 있다."
      ],
      "wrongExplanations": [
        "- B: Clarify는 데이터 편향 및 공정성 확인용이다.",
        "- C: Model Monitor는 배포 후 모델 성능 모니터링용이다.",
        "- D: Data Wrangler는 데이터 준비 및 변환용이다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "SageMaker Canvas",
          "textKo": "",
          "text": "SageMaker Canvas"
        },
        {
          "key": "B",
          "textEn": "SageMaker Clarify",
          "textKo": "",
          "text": "SageMaker Clarify"
        },
        {
          "key": "C",
          "textEn": "SageMaker Model Monitor",
          "textKo": "",
          "text": "SageMaker Model Monitor"
        },
        {
          "key": "D",
          "textEn": "SageMaker Data Wrangler",
          "textKo": "",
          "text": "SageMaker Data Wrangler"
        }
      ],
      "answerKey": "A",
      "answerText": "SageMaker Canvas"
    },
    {
      "id": 259,
      "sourceNumber": 259,
      "title": "Question 259",
      "promptKo": "한 회사가 AI를 활용해 서비스를 개선 중이다.\nAI 시스템의 공정성과 설명 가능성을 보장하기 위해 개발 팀 교육을 진행하려 한다.\n어떤 교육이 적합한가?",
      "promptEn": "A company is using AI to improve its services. The company needs to ensure that the AI system is fair and explainable. The company wants to require training for members of the AI system development team.",
      "explanation": [
        "책임 있는 AI와 편향 인식 교육을 통해 팀 구성원은 공정하고 설명 가능한 AI 시스템을 설계&middot;운영할 수 있다."
      ],
      "wrongExplanations": [
        "- A, D: 코딩이나 고급 ML 알고리즘 교육은 공정성&middot;설명 가능성과 직접적 관련이 없다.",
        "- B: 데이터 보호는 중요하지만 공정성&middot;설명 가능성과는 별개이다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Training on advanced coding skills",
          "textKo": "",
          "text": "Training on advanced coding skills"
        },
        {
          "key": "B",
          "textEn": "Training on data privacy and encryption protocols",
          "textKo": "",
          "text": "Training on data privacy and encryption protocols"
        },
        {
          "key": "C",
          "textEn": "Training on bias awareness and responsible AI",
          "textKo": "",
          "text": "Training on bias awareness and responsible AI"
        },
        {
          "key": "D",
          "textEn": "Training on advanced ML algorithms",
          "textKo": "",
          "text": "Training on advanced ML algorithms"
        }
      ],
      "answerKey": "C",
      "answerText": "Training on bias awareness and responsible AI"
    },
    {
      "id": 260,
      "sourceNumber": 260,
      "title": "Question 260",
      "promptKo": "한 회사가 ML 모델을 가지고 있다.\n모델이 어떻게 예측을 수행하는지 이해하고 싶다.\n이와 관련된 용어는 무엇인가?",
      "promptEn": "A company has an ML model. The company wants to know how the model makes predictions.",
      "explanation": [
        "모델 해석 가능성(Interpretability)은 모델이 예측을 어떻게 내리는지 이해하고 설명할 수 있는 능력을 의미한다."
      ],
      "wrongExplanations": [
        "- B: Training은 학습 과정이고, 예측 설명과 직접 관련 없다.",
        "- C: Interoperability는 시스템 간 호환성을 의미한다.",
        "- D: Performance는 모델 성능 평가를 의미한다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Model interpretability",
          "textKo": "",
          "text": "Model interpretability"
        },
        {
          "key": "B",
          "textEn": "Model training",
          "textKo": "",
          "text": "Model training"
        },
        {
          "key": "C",
          "textEn": "Model interoperability",
          "textKo": "",
          "text": "Model interoperability"
        },
        {
          "key": "D",
          "textEn": "Model performance",
          "textKo": "",
          "text": "Model performance"
        }
      ],
      "answerKey": "A",
      "answerText": "Model interpretability"
    },
    {
      "id": 261,
      "sourceNumber": 261,
      "title": "Question 261",
      "promptKo": "한 회사가 고객의 인구 통계와 구매 패턴을 기반으로 그룹을 식별하고자 한다.\n어떤 알고리즘을 사용해야 하는가?",
      "promptEn": "A company wants to identify groups for its customers based on the customers' demographics and buying patterns.",
      "explanation": [
        "K-means는 고객 데이터를 클러스터링하여 유사한 특성을 가진 그룹을 자동으로 식별할 수 있는 대표적인 비지도 학습 알고리즘이다."
      ],
      "wrongExplanations": [
        "- A: k-NN은 분류용 알고리즘으로, 그룹 식별보다는 라벨이 있는 데이터 예측에 사용된다.",
        "- C: Decision tree는 지도 학습 기반 분류/회귀용이다.",
        "- D: SVM 역시 분류/회귀용이며 클러스터링에는 적합하지 않다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "K-nearest neighbors (k-NN)",
          "textKo": "",
          "text": "K-nearest neighbors (k-NN)"
        },
        {
          "key": "B",
          "textEn": "K-means",
          "textKo": "",
          "text": "K-means"
        },
        {
          "key": "C",
          "textEn": "Decision tree",
          "textKo": "",
          "text": "Decision tree"
        },
        {
          "key": "D",
          "textEn": "Support vector machine",
          "textKo": "",
          "text": "Support vector machine"
        }
      ],
      "answerKey": "B",
      "answerText": "K-means"
    },
    {
      "id": 262,
      "sourceNumber": 262,
      "title": "Question 262",
      "promptKo": "한 회사가 LLM을 개발 중이며, 출력이 기대만큼 다양하지 않음을 확인했다.\n어떤 파라미터를 조정해야 하는가?",
      "promptEn": "A company is working on a large language model (LLM) and noticed that the LLM's outputs are not as diverse as expected.",
      "explanation": [
        "Temperature는 LLM 출력의 다양성을 제어한다. 값이 높을수록 모델은 더 창의적이고 다양한 응답을 생성하며, 낮을수록 출력이 더 결정적이다."
      ],
      "wrongExplanations": [
        "- B: Batch size는 학습 과정에서 한 번에 처리하는 샘플 수와 관련된다.",
        "- C: Learning rate는 학습 속도 조절용으로 다양성에 직접적 영향 없음.",
        "- D: Optimizer type은 학습 방식 선택과 관련되며 출력 다양성과 무관하다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Temperature",
          "textKo": "",
          "text": "Temperature"
        },
        {
          "key": "B",
          "textEn": "Batch size",
          "textKo": "",
          "text": "Batch size"
        },
        {
          "key": "C",
          "textEn": "Learning rate",
          "textKo": "",
          "text": "Learning rate"
        },
        {
          "key": "D",
          "textEn": "Optimizer type",
          "textKo": "",
          "text": "Optimizer type"
        }
      ],
      "answerKey": "A",
      "answerText": "Temperature"
    },
    {
      "id": 263,
      "sourceNumber": 263,
      "title": "Question 263",
      "promptKo": "한 회사가 Amazon Nova Canvas 모델로 이미지를 생성하고 있다.\n모델이 특정 항목을 생성하지 않도록 하려 한다.\n어떤 방법을 사용해야 하는가?",
      "promptEn": "A company is using an Amazon Nova Canvas model to generate images. The model generates images successfully.\nThe company needs to prevent the model from including specific items in the generated images.",
      "explanation": [
        "Negative prompt는 모델이 특정 내용을 포함하지 않도록 지시하는 프롬프트로, 이미지 생성 시 원하지 않는 항목을 제거하는 데 사용된다."
      ],
      "wrongExplanations": [
        "- A: Temperature는 출력 다양성에 영향을 주지만 특정 항목 제외와는 관련 없다.",
        "- B: 더 상세한 프롬프트는 포함할 내용을 강조하지만 제외와는 관련 없다.",
        "- D: 다른 FM을 사용하는 것은 불필요하며 문제를 해결하지 않는다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use a higher temperature value.",
          "textKo": "",
          "text": "Use a higher temperature value."
        },
        {
          "key": "B",
          "textEn": "Use a more detailed prompt.",
          "textKo": "",
          "text": "Use a more detailed prompt."
        },
        {
          "key": "C",
          "textEn": "Use a negative prompt.",
          "textKo": "",
          "text": "Use a negative prompt."
        },
        {
          "key": "D",
          "textEn": "Use another foundation model (FM).",
          "textKo": "",
          "text": "Use another foundation model (FM)."
        }
      ],
      "answerKey": "C",
      "answerText": "Use a negative prompt"
    },
    {
      "id": 264,
      "sourceNumber": 264,
      "title": "Question 264",
      "promptKo": "한 회사가 ML 기술을 사용하여 애플리케이션을 개발하고 있다.\n각 작업에 대해 올바른 ML 기술을 선택하시오. (각 기술은 한 번만 선택)",
      "promptEn": "HOTSPOT - A company uses ML techniques to build applications.",
      "explanation": [
        "각 ML 기법은 특정 문제 유형에 최적화되어 있으며, 적절히 선택해야 한다."
      ],
      "wrongExplanations": [
        "사용 사례와 맞지 않는 ML 기법은 성능 저하 또는 부적절한 결과를 초래한다."
      ],
      "glossary": [],
      "type": "matching",
      "choicePool": [
        "지도 학습",
        "비지도 학습",
        "게임 또는 시뮬레이션 기반 최적화"
      ],
      "allowRepeat": false,
      "rows": [
        {
          "id": "264-row-1",
          "prompt": "분류",
          "answer": "지도 학습"
        },
        {
          "id": "264-row-2",
          "prompt": "클러스터링",
          "answer": "비지도 학습"
        },
        {
          "id": "264-row-3",
          "prompt": "강화 학습",
          "answer": "게임 또는 시뮬레이션 기반 최적화"
        }
      ]
    },
    {
      "id": 265,
      "sourceNumber": 265,
      "title": "Question 265",
      "promptKo": "한 회사가 인간 피드백을 사용해 FM을 미세 조정하기 위한 학습 데이터셋 라벨링을 원한다.\n라벨링 애플리케이션 개발이나 라벨링 인력 관리는 원하지 않는다.\n어떤 AWS 서비스가 요구사항을 충족하는가?",
      "promptEn": "A company wants to label training datasets by using human feedback to fine-tune a foundation model (FM). The company does not want to develop labeling applications or manage a labeling workforce.",
      "explanation": [
        "Ground Truth Plus는 라벨링 작업을 AWS가 관리하며, 고객은 데이터를 제공하고 라벨링 결과만 받을 수 있다."
      ],
      "wrongExplanations": [
        "- A: Data Wrangler는 데이터 준비용 도구로 라벨링 인력을 제공하지 않는다.",
        "- C: Transcribe는 음성-텍스트 변환 서비스다.",
        "- D: Macie는 데이터 보안 및 개인정보 감지 서비스다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker Data Wrangler",
          "textKo": "",
          "text": "Amazon SageMaker Data Wrangler"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker Ground Truth Plus",
          "textKo": "",
          "text": "Amazon SageMaker Ground Truth Plus"
        },
        {
          "key": "C",
          "textEn": "Amazon Transcribe",
          "textKo": "",
          "text": "Amazon Transcribe"
        },
        {
          "key": "D",
          "textEn": "Amazon Macie",
          "textKo": "",
          "text": "Amazon Macie"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon SageMaker Ground Truth Plus"
    },
    {
      "id": 266,
      "sourceNumber": 266,
      "title": "Question 266",
      "promptKo": "온라인 미디어 스트리밍 회사가 자연어 기반 이미지 검색 및 필터링 기능을 제공하고자 한다.\n유사도 검색과 최근접 이웃 쿼리를 지원하는 벡터 데이터베이스가 필요하다.\n어떤 AWS 서비스가 이를 지원하는가?",
      "promptEn": "An online media streaming company wants to give its customers the ability to perform natural language-based image search and filtering. The company needs a vector database that can help with similarity searches and nearest neighbor queries.",
      "explanation": [
        "OpenSearch Service는 벡터 검색 기능을 제공하여 자연어 기반 이미지 검색과 유사도 계산을 지원한다."
      ],
      "wrongExplanations": [
        "- A: Comprehend는 텍스트 분석용 NLP 서비스다.",
        "- B: Personalize는 추천 시스템용 서비스다.",
        "- C: Polly는 텍스트-음성 변환 서비스다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Comprehend",
          "textKo": "",
          "text": "Amazon Comprehend"
        },
        {
          "key": "B",
          "textEn": "Amazon Personalize",
          "textKo": "",
          "text": "Amazon Personalize"
        },
        {
          "key": "C",
          "textEn": "Amazon Polly",
          "textKo": "",
          "text": "Amazon Polly"
        },
        {
          "key": "D",
          "textEn": "Amazon OpenSearch Service",
          "textKo": "",
          "text": "Amazon OpenSearch Service"
        }
      ],
      "answerKey": "D",
      "answerText": "Amazon OpenSearch Service"
    },
    {
      "id": 267,
      "sourceNumber": 267,
      "title": "Question 267",
      "promptKo": "한 회사가 SageMaker AI를 사용해 AI 솔루션을 구축하고 있다.\n애플리케이션 개발을 용이하게 하기 위해 SageMaker AI 기능을 선택해야 한다.",
      "promptEn": "HOTSPOT - A company is building an AI solution by using Amazon SageMaker AI. The company wants to use SageMaker AI features to facilitate application development.",
      "explanation": [
        "SageMaker는 AI 모델 개발을 위한 종합 플랫폼으로, 각 단계에 맞는 기능을 제공한다."
      ],
      "wrongExplanations": [
        "기능을 잘못 선택하면 개발 과정 효율성과 모델 품질이 저하될 수 있다."
      ],
      "glossary": [],
      "type": "matching",
      "choicePool": [
        "SageMaker Studio",
        "SageMaker Data Wrangler",
        "SageMaker Model Monitor",
        "SageMaker Endpoint"
      ],
      "allowRepeat": false,
      "rows": [
        {
          "id": "267-row-1",
          "prompt": "모델 학습",
          "answer": "SageMaker Studio"
        },
        {
          "id": "267-row-2",
          "prompt": "데이터 준비",
          "answer": "SageMaker Data Wrangler"
        },
        {
          "id": "267-row-3",
          "prompt": "모델 모니터링",
          "answer": "SageMaker Model Monitor"
        },
        {
          "id": "267-row-4",
          "prompt": "모델 배포",
          "answer": "SageMaker Endpoint"
        }
      ]
    },
    {
      "id": 268,
      "sourceNumber": 268,
      "title": "Question 268",
      "promptKo": "한 회사가 생성 AI 도구를 구축하고 있다.\n내부 문서를 활용하여 FM을 맞춤화하려 한다.\n어떤 접근 방식이 적합한가?",
      "promptEn": "A company is building a generative AI tool. The company will use internal documents to customize a foundation model (FM).",
      "explanation": [
        "Continued pre-training은 기존 FM에 새로운 도메인 데이터를 추가 학습시켜 모델을 맞춤화하는 방법이다."
      ],
      "wrongExplanations": [
        "- A: Classification은 분류 작업에 사용된다.",
        "- C: Distillation은 모델 경량화에 사용된다.",
        "- D: Regression은 회귀 분석 작업에 사용된다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Classification",
          "textKo": "",
          "text": "Classification"
        },
        {
          "key": "B",
          "textEn": "Continued pre-training",
          "textKo": "",
          "text": "Continued pre-training"
        },
        {
          "key": "C",
          "textEn": "Distillation",
          "textKo": "",
          "text": "Distillation"
        },
        {
          "key": "D",
          "textEn": "Regression",
          "textKo": "",
          "text": "Regression"
        }
      ],
      "answerKey": "B",
      "answerText": "Continued pre-training"
    },
    {
      "id": 269,
      "sourceNumber": 269,
      "title": "Question 269",
      "promptKo": "한 회사가 SageMaker Model Monitor를 사용해 예측 모델을 모니터링하고 있다.\n데이터 드리프트가 설정 임계치를 초과했다.\n예측 모델에 미칠 잠재적 영향을 완화하고자 한다.\n어떤 솔루션이 적합한가?",
      "promptEn": "A company is monitoring a predictive model by using Amazon SageMaker Model Monitor. The company notices data drift beyond a defined threshold. The company wants to mitigate a potentially adverse impact on the predictive model.",
      "explanation": [
        "데이터 드리프트 발생 시 최신 데이터를 사용해 모델을 재학습하면 성능 저하를 방지할 수 있다."
      ],
      "wrongExplanations": [
        "- A: 단순 재시작은 드리프트 문제를 해결하지 않는다.",
        "- B: 모니터링 민감도 조정은 드리프트 자체를 해결하지 않는다.",
        "- D: 실험 추적 설정은 원인 분석에는 도움 되지만 문제 해결에는 부족하다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Restart the SageMaker AI endpoint.",
          "textKo": "",
          "text": "Restart the SageMaker AI endpoint."
        },
        {
          "key": "B",
          "textEn": "Adjust the monitoring sensitivity.",
          "textKo": "",
          "text": "Adjust the monitoring sensitivity."
        },
        {
          "key": "C",
          "textEn": "Re-train the model with fresh data.",
          "textKo": "",
          "text": "Re-train the model with fresh data."
        },
        {
          "key": "D",
          "textEn": "Set up experiments tracking.",
          "textKo": "",
          "text": "Set up experiments tracking."
        }
      ],
      "answerKey": "C",
      "answerText": "Re-train the model with fresh data"
    },
    {
      "id": 270,
      "sourceNumber": 270,
      "title": "Question 270",
      "promptKo": "한 금융회사가 생성 AI 모델을 사용해 신규 고객의 신용 한도를 결정한다.\n모델의 의사결정 과정을 고객에게 더 투명하게 제공하고자 한다.\n어떤 솔루션이 적합한가?",
      "promptEn": "A financial company uses a generative AI model to assign credit limits to new customers. The company wants to make the decision-making process of the model more transparent to its customers.",
      "explanation": [
        "설명 가능한 AI(XAI) 기술을 적용하면 모델이 어떤 기준으로 결정을 내렸는지 고객에게 명확하게 보여줄 수 있다."
      ],
      "wrongExplanations": [
        "- A: 규칙 기반 시스템으로 변경하면 투명성은 확보되지만 ML 활용 목적을 상실한다.",
        "- C: UI 제공만으로는 결정 과정 설명이 부족하다.",
        "- D: 정확도 향상만으로 투명성을 제공할 수 없다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use a rule-based system instead of an ML model.",
          "textKo": "",
          "text": "Use a rule-based system instead of an ML model."
        },
        {
          "key": "B",
          "textEn": "Apply explainable AI techniques to show customers which factors influenced the model's decision.",
          "textKo": "",
          "text": "Apply explainable AI techniques to show customers which factors influenced the model's decision."
        },
        {
          "key": "C",
          "textEn": "Develop an interactive UI for customers and provide clear technical explanations about the system.",
          "textKo": "",
          "text": "Develop an interactive UI for customers and provide clear technical explanations about the system."
        },
        {
          "key": "D",
          "textEn": "Increase the accuracy of the model to reduce the need for transparency.",
          "textKo": "",
          "text": "Increase the accuracy of the model to reduce the need for transparency."
        }
      ],
      "answerKey": "B",
      "answerText": "Apply explainable AI techniques to show customers which factors influenced the model's decision"
    },
    {
      "id": 271,
      "sourceNumber": 271,
      "title": "Question 271",
      "promptKo": "한 회사가 모델을 프로덕션에 배포했다. 4개월 후, 모델 추론 품질이 저하되었다.\n모델 품질 저하 시 알림을 받고, 향후 동일 문제가 발생하지 않도록 하고 싶다.",
      "promptEn": "A company deployed a model to production. After 4 months, the model inference quality degraded. The company wants to receive a notification if the model inference quality degrades. The company also wants to ensure that the problem does not happen again.",
      "explanation": [
        "SageMaker Model Monitor는 프로덕션 모델의 데이터 드리프트와 품질 저하를 감지하고 알림을 제공한다. 문제 발생 시 최신 데이터를 사용해 모델을 재학습하면 품질 저하를 방지할 수 있다."
      ],
      "wrongExplanations": [
        "- A: SageMaker Clarify는 모델 편향 및 공정성 분석에 적합하지만, 모델 드리프트 모니터링에는 한계가 있다.",
        "- C/D: 새로운 모델을 만드는 것은 필요하지 않으며 Feature Store나 JumpStart는 드리프트 알림 기능과 직접 관련이 없다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Retrain the model. Monitor model drift by using Amazon SageMaker Clarify.",
          "textKo": "",
          "text": "Retrain the model. Monitor model drift by using Amazon SageMaker Clarify."
        },
        {
          "key": "B",
          "textEn": "Retrain the model. Monitor model drift by using Amazon SageMaker Model Monitor.",
          "textKo": "",
          "text": "Retrain the model. Monitor model drift by using Amazon SageMaker Model Monitor."
        },
        {
          "key": "C",
          "textEn": "Build a new model. Monitor model drift by using Amazon SageMaker Feature Store.",
          "textKo": "",
          "text": "Build a new model. Monitor model drift by using Amazon SageMaker Feature Store."
        },
        {
          "key": "D",
          "textEn": "Build a new model. Monitor model drift by using Amazon SageMaker JumpStart.",
          "textKo": "",
          "text": "Build a new model. Monitor model drift by using Amazon SageMaker JumpStart."
        }
      ],
      "answerKey": "B",
      "answerText": "Retrain the model. Monitor model drift by using Amazon SageMaker Model Monitor."
    },
    {
      "id": 272,
      "sourceNumber": 272,
      "title": "Question 272",
      "promptKo": "다음 중 비지도 학습의 예는 무엇인가?",
      "promptEn": "Which option is an example of unsupervised learning?",
      "explanation": [
        "비지도 학습은 데이터에 레이블 없이 패턴이나 그룹을 찾는 학습 방식이다. 고객 구매 기록 기반 그룹화는 대표적인 비지도 학습 사례(클러스터링)이다."
      ],
      "wrongExplanations": [
        "- B/C: 지도 학습 사례이다 (라벨이 있는 데이터 기반).",
        "- D: 강화 학습 사례이다 (trial-and-error 기반)."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "A model that groups customers based on their purchase history",
          "textKo": "",
          "text": "A model that groups customers based on their purchase history"
        },
        {
          "key": "B",
          "textEn": "A model that classifies images as dogs or cats",
          "textKo": "",
          "text": "A model that classifies images as dogs or cats"
        },
        {
          "key": "C",
          "textEn": "A model that predicts a house's price based on various features",
          "textKo": "",
          "text": "A model that predicts a house's price based on various features"
        },
        {
          "key": "D",
          "textEn": "A model that learns to play chess by using trial and error",
          "textKo": "",
          "text": "A model that learns to play chess by using trial and error"
        }
      ],
      "answerKey": "A",
      "answerText": "A model that groups customers based on their purchase history"
    },
    {
      "id": 273,
      "sourceNumber": 273,
      "title": "Question 273",
      "promptKo": "한 회사가 LLM을 사용해 텍스트 요약 작업을 평가하고자 한다.\n생성된 요약의 품질을 평가할 적절한 지표는 무엇인가?",
      "promptEn": "A company is evaluating several large language models (LLMs) for a text summarization task. The company needs to select a metric to evaluate the quality of the summaries that the LLMs generate.",
      "explanation": [
        "ROUGE는 텍스트 요약의 품질을 평가하는 표준 지표로, 생성된 요약과 참조 요약 간의 단어/문장 유사도를 측정한다."
      ],
      "wrongExplanations": [
        "- A: Recall은 분류 문제의 성능 평가용이다.",
        "- B: AUC는 이진 분류 평가용 지표다.",
        "- D: MSE는 회귀 문제 평가 지표다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Recall",
          "textKo": "",
          "text": "Recall"
        },
        {
          "key": "B",
          "textEn": "Area under the ROC curve (AUC)",
          "textKo": "",
          "text": "Area under the ROC curve (AUC)"
        },
        {
          "key": "C",
          "textEn": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)",
          "textKo": "",
          "text": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)"
        },
        {
          "key": "D",
          "textEn": "Mean squared error (MSE)",
          "textKo": "",
          "text": "Mean squared error (MSE)"
        }
      ],
      "answerKey": "C",
      "answerText": "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)"
    },
    {
      "id": 274,
      "sourceNumber": 274,
      "title": "Question 274",
      "promptKo": "연구팀이 다양한 생성 AI 모델로 연구 논문을 작성하고자 한다.\n정의된 프롬프트를 사용하여 모델 출력을 평가할 방법이 필요하며, 과학자 팀이 평가에 참여해야 한다.",
      "promptEn": "A research group wants to test different generative AI models to create research papers. The research group has defined a prompt and needs a method to assess the models' output. The research group wants to use a team of scientists to perform the output assessments.",
      "explanation": [
        "Amazon Bedrock는 생성 AI 모델 평가 기능을 제공하며, 팀 기반 평가 및 사용자 정의 평가를 지원한다."
      ],
      "wrongExplanations": [
        "- A: Personalize는 추천 시스템용 서비스이다.",
        "- B: Rekognition은 이미지/영상 콘텐츠 분석용이다.",
        "- D: Comprehend는 감정 분석 및 NLP 서비스로 적합하지 않다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use automatic evaluation on Amazon Personalize.",
          "textKo": "",
          "text": "Use automatic evaluation on Amazon Personalize."
        },
        {
          "key": "B",
          "textEn": "Use content moderation on Amazon Rekognition.",
          "textKo": "",
          "text": "Use content moderation on Amazon Rekognition."
        },
        {
          "key": "C",
          "textEn": "Use model evaluation on Amazon Bedrock.",
          "textKo": "",
          "text": "Use model evaluation on Amazon Bedrock."
        },
        {
          "key": "D",
          "textEn": "Use sentiment analysis on Amazon Comprehend.",
          "textKo": "",
          "text": "Use sentiment analysis on Amazon Comprehend."
        }
      ],
      "answerKey": "C",
      "answerText": "Use model evaluation on Amazon Bedrock"
    },
    {
      "id": 275,
      "sourceNumber": 275,
      "title": "Question 275",
      "promptKo": "한 전자상거래 회사가 앱 사용자에게 개인화된 제품 추천을 제공하는 생성 AI 솔루션을 개발 중이다.\nAI 솔루션이 제품 판매 및 사용자 참여를 얼마나 효과적으로 증가시키는지 추적하고자 한다.",
      "promptEn": "HOTSPOT - An ecommerce company is developing a generative AI solution to create personalized product recommendations for its application users. The company wants to track how effectively the AI solution increases product sales and user engagement in the application.",
      "explanation": [
        "비즈니스 목표에 따라 KPI를 정의하고 추적해야 AI 솔루션 효과를 평가할 수 있다."
      ],
      "wrongExplanations": [
        "잘못된 지표 선택 시 솔루션 효과를 정확히 측정할 수 없다."
      ],
      "glossary": [],
      "type": "matching",
      "choicePool": [
        "매출(MRR, Revenue)",
        "클릭률(CTR), 세션 수, 재방문율 등"
      ],
      "allowRepeat": false,
      "rows": [
        {
          "id": "275-row-1",
          "prompt": "제품 판매 증가",
          "answer": "매출(MRR, Revenue)"
        },
        {
          "id": "275-row-2",
          "prompt": "사용자 참여",
          "answer": "클릭률(CTR), 세션 수, 재방문율 등"
        }
      ]
    },
    {
      "id": 276,
      "sourceNumber": 276,
      "title": "Question 276",
      "promptKo": "AI 담당자가 ML 모델을 평가하고, 고객과 이해관계자에게 모델 예측에 대한 설명을 제공하고자 한다.",
      "promptEn": "An AI practitioner wants to evaluate ML models. The AI practitioner wants to provide explanations of model predictions to customers and stakeholders.",
      "explanation": [
        "SageMaker Clarify는 모델 편향, 공정성 및 예측 설명(Explainable AI)을 제공하여 이해관계자에게 설명 가능한 결과를 제공한다."
      ],
      "wrongExplanations": [
        "- A: QuickSight는 시각화 도구다.",
        "- B: Comprehend는 NLP 분석 도구다.",
        "- C: Trusted Advisor는 AWS 인프라 최적화 도구다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon QuickSight",
          "textKo": "",
          "text": "Amazon QuickSight"
        },
        {
          "key": "B",
          "textEn": "Amazon Comprehend",
          "textKo": "",
          "text": "Amazon Comprehend"
        },
        {
          "key": "C",
          "textEn": "AWS Trusted Advisor",
          "textKo": "",
          "text": "AWS Trusted Advisor"
        },
        {
          "key": "D",
          "textEn": "Amazon SageMaker Clarify",
          "textKo": "",
          "text": "Amazon SageMaker Clarify"
        }
      ],
      "answerKey": "D",
      "answerText": "Amazon SageMaker Clarify"
    },
    {
      "id": 277,
      "sourceNumber": 277,
      "title": "Question 277",
      "promptKo": "감정 분석은 AI의 어떤 분야에 속하는가?",
      "promptEn": "Sentiment analysis is a subset of which broader field of AI?",
      "explanation": [
        "감정 분석은 텍스트 데이터에서 감정이나 의견을 추출하는 NLP 기술의 한 분야이다."
      ],
      "wrongExplanations": [
        "- A: Computer vision은 이미지/영상 분석",
        "- B: Robotics는 로봇 제어 및 자율 시스템",
        "- D: Time series forecasting은 시계열 예측"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Computer vision",
          "textKo": "",
          "text": "Computer vision"
        },
        {
          "key": "B",
          "textEn": "Robotics",
          "textKo": "",
          "text": "Robotics"
        },
        {
          "key": "C",
          "textEn": "Natural language processing (NLP)",
          "textKo": "",
          "text": "Natural language processing (NLP)"
        },
        {
          "key": "D",
          "textEn": "Time series forecasting",
          "textKo": "",
          "text": "Time series forecasting"
        }
      ],
      "answerKey": "C",
      "answerText": "Natural language processing (NLP)"
    },
    {
      "id": 278,
      "sourceNumber": 278,
      "title": "Question 278",
      "promptKo": "회사가 AWS 계정에서 Amazon Bedrock API에 대한 프라이빗 액세스를 설정하고, 데이터를 인터넷 노출로부터 보호하고자 한다.",
      "promptEn": "A company wants to set up private access to Amazon Bedrock APIs from the company's AWS account. The company also wants to protect its data from internet exposure.",
      "explanation": [
        "AWS PrivateLink를 사용하면 VPC 내부에서 인터넷을 거치지 않고 안전하게 Bedrock API에 접근할 수 있다."
      ],
      "wrongExplanations": [
        "- A: CloudFront는 CDN 및 접근 제어용이며 VPC 프라이빗 액세스 목적과 맞지 않는다.",
        "- B: Glue는 데이터 카탈로그 암호화 용도",
        "- C: Lake Formation은 중앙 데이터 거버넌스용"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use Amazon CloudFront to restrict access to the company's private content.",
          "textKo": "",
          "text": "Use Amazon CloudFront to restrict access to the company's private content."
        },
        {
          "key": "B",
          "textEn": "Use AWS Glue to set up data encryption across the company's data catalog.",
          "textKo": "",
          "text": "Use AWS Glue to set up data encryption across the company's data catalog."
        },
        {
          "key": "C",
          "textEn": "Use AWS Lake Formation to manage centralized data governance and cross-account data sharing.",
          "textKo": "",
          "text": "Use AWS Lake Formation to manage centralized data governance and cross-account data sharing."
        },
        {
          "key": "D",
          "textEn": "Use AWS PrivateLink to configure a private connection between the company's VPC and Amazon Bedrock.",
          "textKo": "",
          "text": "Use AWS PrivateLink to configure a private connection between the company's VPC and Amazon Bedrock."
        }
      ],
      "answerKey": "D",
      "answerText": "Use AWS PrivateLink to configure a private connection between the company's VPC and Amazon Bedrock"
    },
    {
      "id": 279,
      "sourceNumber": 279,
      "title": "Question 279",
      "promptKo": "한 회사가 대량의 비정형 텍스트 사용자 피드백을 수집했다.\n피드백의 감정을 분석하고자 한다.",
      "promptEn": "A company receives a large amount of unstructured user feedback in text format. The company wants to analyze the sentiment of the user feedback.",
      "explanation": [
        "LLM을 활용한 NLP 기술을 사용하면 비정형 텍스트에서 감정 정보를 정확히 추출할 수 있다."
      ],
      "wrongExplanations": [
        "- B: 회귀 알고리즘은 범주 분류에 적합하지 않다.",
        "- C: 추천 엔진은 감정 분석 목적과 관련 없다.",
        "- D: 시계열 알고리즘은 과거 데이터를 기반으로 예측할 뿐 감정 분석에는 부적합하다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use a large language model (LLM) to perform natural language processing (NLP) for sentiment analysis.",
          "textKo": "",
          "text": "Use a large language model (LLM) to perform natural language processing (NLP) for sentiment analysis."
        },
        {
          "key": "B",
          "textEn": "Use a regression algorithm to classify the feedback based on predefined categories. Then, analyze user sentiment.",
          "textKo": "",
          "text": "Use a regression algorithm to classify the feedback based on predefined categories. Then, analyze user sentiment."
        },
        {
          "key": "C",
          "textEn": "Use a recommendation engine algorithm to detect user sentiment.",
          "textKo": "",
          "text": "Use a recommendation engine algorithm to detect user sentiment."
        },
        {
          "key": "D",
          "textEn": "Use a time series algorithm to predict user sentiment based on past feedback.",
          "textKo": "",
          "text": "Use a time series algorithm to predict user sentiment based on past feedback."
        }
      ],
      "answerKey": "A",
      "answerText": "Use a large language model (LLM) to perform natural language processing (NLP) for sentiment analysis"
    },
    {
      "id": 280,
      "sourceNumber": 280,
      "title": "Question 280",
      "promptKo": "한 회사가 여러 ML 모델을 개선하고자 한다.\n각 사용 사례에 맞는 ML 기법을 선택하시오. (각 기법은 한 번만 선택)",
      "promptEn": "HOTSPOT - A company wants to improve multiple ML models.",
      "explanation": [
        "각 ML 기법은 모델 개선 목적에 맞게 적용해야 하며, 올바른 기법을 선택해야 성능 향상 효과를 얻을 수 있다."
      ],
      "wrongExplanations": [
        "잘못된 기법 선택 시 모델 개선 효과가 제한되거나 부정확한 결과가 발생할 수 있다."
      ],
      "glossary": [],
      "type": "matching",
      "choicePool": [
        "모델 성능 향상",
        "최적 모델 학습",
        "예측 정확도 향상",
        "입력 데이터 품질 향상"
      ],
      "allowRepeat": false,
      "rows": [
        {
          "id": "280-row-1",
          "prompt": "데이터 증강",
          "answer": "모델 성능 향상"
        },
        {
          "id": "280-row-2",
          "prompt": "하이퍼파라미터 튜닝",
          "answer": "최적 모델 학습"
        },
        {
          "id": "280-row-3",
          "prompt": "모델 앙상블",
          "answer": "예측 정확도 향상"
        },
        {
          "id": "280-row-4",
          "prompt": "Feature engineering",
          "answer": "입력 데이터 품질 향상"
        }
      ]
    },
    {
      "id": 281,
      "sourceNumber": 281,
      "title": "Question 281",
      "promptKo": "한 회사가 제품 카탈로그를 위해 이미지를 생성하고 설명을 만들어주는 AI 솔루션을 구축하려고 합니다.\n이 회사는 해당 솔루션에 사용할 파운데이션 모델(FM)을 선택해야 하며, 각 FM의 출력 유형을 고려해야 합니다.\n회사가 평가하고 있는 FM의 특성은 무엇입니까?",
      "promptEn": "A company wants to create an AI solution to generate images and descriptions for a product catalog. The company needs to select a foundation model (FM) for this solution.\nThe company must consider the output types of each FM.\nWhich FM characteristic is the company evaluating?",
      "explanation": [
        "- Modality는 모델이 처리하거나 생성할 수 있는 데이터 유형(텍스트, 이미지, 오디오 등)을 의미합니다.",
        "- 회사는 이미지와 텍스트 출력을 모두 지원할 수 있는 FM을 고려하고 있으므로 Modality를 평가하고 있는 것입니다.",
        "- Latency는 응답 시간, Model size는 모델 크기, Customization은 조정 가능성을 뜻합니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Modality: 입력 및 출력 데이터 유형(예: 텍스트, 이미지, 오디오 등)"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Latency",
          "textKo": "지연 시간(Latency)",
          "text": "Latency"
        },
        {
          "key": "B",
          "textEn": "Model size",
          "textKo": "모델 크기(Model size)",
          "text": "Model size"
        },
        {
          "key": "C",
          "textEn": "Model customization",
          "textKo": "모델 커스터마이징(Model customization)",
          "text": "Model customization"
        },
        {
          "key": "D",
          "textEn": "Modality",
          "textKo": "모달리티(Modality)",
          "text": "Modality"
        }
      ],
      "answerKey": "D",
      "answerText": "Modality"
    },
    {
      "id": 282,
      "sourceNumber": 282,
      "title": "Question 282",
      "promptKo": "한 회사가 소셜 미디어의 고객 리뷰를 분석하기 위해 ML 모델을 사용하려고 합니다.\n이 모델은 각 리뷰가 중립, 긍정 또는 부정 중 어떤 감정을 가지는지 판별해야 합니다.\n이 요구 사항에 가장 적합한 모델 평가 전략은 무엇입니까?",
      "promptEn": "A company wants to use an ML model to analyze customer reviews on social media. The model must determine if each review has a neutral, positive, or negative sentiment.\nWhich model evaluation strategy will meet these requirements?",
      "explanation": [
        "- 감정 분석은 리뷰를 긍정&middot;중립&middot;부정으로 분류하는 작업입니다.",
        "- 따라서 Classification 전략이 적절합니다.",
        "- Summarization은 텍스트 요약, Machine translation은 언어 번역, Open-ended generation은 생성 모델입니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Classification: 데이터를 사전에 정의된 카테고리로 분류하는 지도학습 기법"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Open-ended generation",
          "textKo": "개방형 생성(Open-ended generation)",
          "text": "Open-ended generation"
        },
        {
          "key": "B",
          "textEn": "Text summarization",
          "textKo": "텍스트 요약(Text summarization)",
          "text": "Text summarization"
        },
        {
          "key": "C",
          "textEn": "Machine translation",
          "textKo": "기계 번역(Machine translation)",
          "text": "Machine translation"
        },
        {
          "key": "D",
          "textEn": "Classification",
          "textKo": "분류(Classification)",
          "text": "Classification"
        }
      ],
      "answerKey": "D",
      "answerText": "Classification"
    },
    {
      "id": 283,
      "sourceNumber": 283,
      "title": "Question 283",
      "promptKo": "HOTSPOT - 아래 문장 각각에 대해 알맞은 AI 용어를 선택하세요. 각 용어는 한 번만 선택할 수 있습니다.",
      "promptEn": "HOTSPOT - Select the correct AI term from the following list for each statement. Each AI term should be selected one time.",
      "explanation": [
        "- 문제에서 주어진 문장에 맞는 AI 관련 용어(예: Supervised learning, Unsupervised learning, Generative AI 등)를 연결하는 문제입니다.",
        "- 각 용어의 개념을 정확히 이해해야 맞게 매칭할 수 있습니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Supervised learning: 레이블이 있는 데이터를 사용해 학습",
        "- Unsupervised learning: 레이블 없이 데이터의 패턴을 학습",
        "- Generative AI: 새로운 데이터를 생성하는 인공지능"
      ],
      "type": "matching",
      "allowRepeat": false,
      "choicePool": [
        "Supervised learning",
        "Unsupervised learning",
        "Generative AI"
      ],
      "rows": [
        {
          "id": "283-manual-1",
          "prompt": "레이블이 있는 데이터를 사용해 학습한다",
          "answer": "Supervised learning"
        },
        {
          "id": "283-manual-2",
          "prompt": "레이블 없이 데이터의 패턴을 학습한다",
          "answer": "Unsupervised learning"
        },
        {
          "id": "283-manual-3",
          "prompt": "새로운 데이터를 생성하는 인공지능이다",
          "answer": "Generative AI"
        }
      ]
    },
    {
      "id": 284,
      "sourceNumber": 284,
      "title": "Question 284",
      "promptKo": "다음 중 비지도 학습(unsupervised learning)의 예로 올바른 것은 무엇입니까?",
      "promptEn": "Which option is an example of unsupervised learning?",
      "explanation": [
        "- 비지도 학습은 레이블 없이 데이터의 패턴이나 구조를 찾는 학습 방식입니다.",
        "- Clustering(군집화)은 대표적인 비지도 학습 방법으로, 유사한 데이터끼리 그룹을 만드는 작업입니다.",
        "- 나머지 보기는 지도학습 또는 생성 AI에 해당합니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Unsupervised learning: 레이블 없는 데이터에서 패턴을 찾는 학습",
        "- Clustering: 데이터의 유사성을 기반으로 그룹화하는 기법"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Clustering data points into groups based on their similarity",
          "textKo": "데이터 포인트를 유사성에 따라 그룹화하기",
          "text": "Clustering data points into groups based on their similarity"
        },
        {
          "key": "B",
          "textEn": "Training a model to recognize images of animals",
          "textKo": "동물 이미지를 인식하도록 모델 학습",
          "text": "Training a model to recognize images of animals"
        },
        {
          "key": "C",
          "textEn": "Predicting the price of a house based on the house's features",
          "textKo": "주택 특징을 기반으로 가격 예측",
          "text": "Predicting the price of a house based on the house's features"
        },
        {
          "key": "D",
          "textEn": "Generating human-like text based on a given prompt",
          "textKo": "주어진 프롬프트에 따라 인간과 유사한 텍스트 생성",
          "text": "Generating human-like text based on a given prompt"
        }
      ],
      "answerKey": "A",
      "answerText": "Clustering data points into groups based on their similarity"
    },
    {
      "id": 285,
      "sourceNumber": 285,
      "title": "Question 285",
      "promptKo": "대량의 교육 자료를 보유한 온라인 교육 회사가 엔터프라이즈 검색 기능을 사용하려고 합니다.\n이 요구 사항을 충족하는 AWS 서비스는 무엇입니까?",
      "promptEn": "An online learning company with large volumes of education materials wants to use enterprise search.\nWhich AWS service meets these requirements?",
      "explanation": [
        "- Amazon Kendra는 자연어 질의에 따라 다양한 데이터 소스에서 정보를 검색할 수 있는 엔터프라이즈 검색 서비스입니다.",
        "- Comprehend는 텍스트 분석, Textract는 문서 텍스트 추출, Personalize는 추천 시스템에 사용됩니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Enterprise search: 기업 내 문서나 데이터에서 검색 기능을 제공하는 시스템",
        "- Amazon Kendra: NLP 기반 엔터프라이즈 검색 서비스"
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        },
        {
          "key": "B",
          "textEn": "Amazon Textract",
          "textKo": "Amazon Textract",
          "text": "Amazon Textract"
        },
        {
          "key": "C",
          "textEn": "Amazon Kendra",
          "textKo": "Amazon Kendra",
          "text": "Amazon Kendra"
        },
        {
          "key": "D",
          "textEn": "Amazon Personalize",
          "textKo": "Amazon Personalize",
          "text": "Amazon Personalize"
        }
      ],
      "answerKey": "C",
      "answerText": "Amazon Kendra"
    },
    {
      "id": 286,
      "sourceNumber": 286,
      "title": "Question 286",
      "promptKo": "언제든지 원하는 양의 데이터를 저장하고 검색하는 데 주로 사용되는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service is primarily used to store and retrieve any amount of data at any time?",
      "explanation": [
        "Amazon S3(Simple Storage Service)는 객체 스토리지 서비스로, 안정성과 확장성이 높아 데이터를 안전하게 저장하고 손쉽게 검색할 수 있습니다. 정적 웹 호스팅, 백업, 로그 저장 등 다양한 용도로 사용됩니다."
      ],
      "wrongExplanations": [
        "- Amazon EC2: 컴퓨팅 리소스를 제공하는 서비스입니다.",
        "- Amazon RDS: 관계형 데이터베이스 서비스입니다.",
        "- Amazon VPC: 가상 네트워크 환경을 구성하는 서비스입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "Amazon EC2",
          "text": "Amazon EC2"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "Amazon RDS",
          "text": "Amazon RDS"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "Amazon S3",
          "text": "Amazon S3"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "Amazon VPC",
          "text": "Amazon VPC"
        }
      ],
      "answerKey": "C",
      "answerText": "Amazon S3"
    },
    {
      "id": 287,
      "sourceNumber": 287,
      "title": "Question 287",
      "promptKo": "서버를 프로비저닝하거나 관리하지 않고 코드를 실행할 수 있게 해주는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service allows you to run code without provisioning or managing servers?",
      "explanation": [
        "AWS Lambda는 서버리스 컴퓨팅 서비스로, 사용자가 서버를 직접 관리할 필요 없이 이벤트 발생 시 코드를 실행할 수 있게 해줍니다. 비용은 코드 실행 시간에 따라 부과됩니다."
      ],
      "wrongExplanations": [
        "- Amazon EC2: 서버를 직접 관리해야 합니다.",
        "- Amazon S3: 스토리지 서비스입니다.",
        "- Amazon RDS: 데이터베이스 서비스입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "Amazon EC2",
          "text": "Amazon EC2"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "Amazon S3",
          "text": "Amazon S3"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "Amazon RDS",
          "text": "Amazon RDS"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "AWS Lambda",
          "text": "AWS Lambda"
        }
      ],
      "answerKey": "D",
      "answerText": "AWS Lambda"
    },
    {
      "id": 288,
      "sourceNumber": 288,
      "title": "Question 288",
      "promptKo": "AWS에서 완전 관리형 NoSQL 데이터베이스 서비스는 무엇입니까?",
      "promptEn": "Which AWS service is a fully managed NoSQL database?",
      "explanation": [
        "Amazon DynamoDB는 완전 관리형 NoSQL 데이터베이스 서비스로, 빠른 성능과 확장성을 제공합니다. 서버 관리가 필요 없으며 자동으로 스케일링됩니다."
      ],
      "wrongExplanations": [
        "- Amazon RDS: 관계형 데이터베이스 서비스입니다.",
        "- Amazon S3: 객체 스토리지입니다.",
        "- Amazon Redshift: 데이터 웨어하우스입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "Amazon DynamoDB",
          "text": "Amazon DynamoDB"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "Amazon RDS",
          "text": "Amazon RDS"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "Amazon S3",
          "text": "Amazon S3"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "Amazon Redshift",
          "text": "Amazon Redshift"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon DynamoDB"
    },
    {
      "id": 289,
      "sourceNumber": 289,
      "title": "Question 289",
      "promptKo": "실시간으로 애플리케이션과 인프라를 모니터링하는 데 사용할 수 있는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service can be used to monitor applications and infrastructure in real-time?",
      "explanation": [
        "Amazon CloudWatch는 AWS 리소스와 애플리케이션을 실시간으로 모니터링하고 알람을 설정할 수 있는 서비스입니다. 성능 지표와 로그를 기반으로 문제를 감지하고 대응할 수 있습니다."
      ],
      "wrongExplanations": [
        "- AWS Config: 리소스 구성 기록 및 규정 준수 확인 서비스입니다.",
        "- AWS CloudTrail: API 호출 기록 서비스입니다.",
        "- Amazon Inspector: 보안 평가 서비스입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "AWS Config",
          "text": "AWS Config"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "Amazon CloudWatch",
          "text": "Amazon CloudWatch"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "AWS CloudTrail",
          "text": "AWS CloudTrail"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "Amazon Inspector",
          "text": "Amazon Inspector"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon CloudWatch"
    },
    {
      "id": 290,
      "sourceNumber": 290,
      "title": "Question 290",
      "promptKo": "클라우드 리소스를 가상 네트워크 내에서 격리할 수 있게 해주는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service allows you to isolate your cloud resources within a virtual network?",
      "explanation": [
        "Amazon VPC(Virtual Private Cloud)는 사용자가 AWS 클라우드 내에서 논리적으로 격리된 네트워크 환경을 구성할 수 있게 해줍니다. 서브넷, 라우팅, 보안 그룹 등을 통해 세밀한 네트워크 제어가 가능합니다."
      ],
      "wrongExplanations": [
        "- Amazon S3: 스토리지 서비스입니다.",
        "- AWS Lambda: 서버리스 컴퓨팅 서비스입니다.",
        "- Amazon EC2: 컴퓨팅 리소스이지만 네트워크 격리는 VPC가 담당합니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "Amazon S3",
          "text": "Amazon S3"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "AWS Lambda",
          "text": "AWS Lambda"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "Amazon VPC",
          "text": "Amazon VPC"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "Amazon EC2",
          "text": "Amazon EC2"
        }
      ],
      "answerKey": "C",
      "answerText": "Amazon VPC"
    },
    {
      "id": 291,
      "sourceNumber": 291,
      "title": "Question 291",
      "promptKo": "클라우드에서 가상 서버를 실행하고 관리할 수 있게 해주는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service enables you to launch and manage virtual servers in the cloud?",
      "explanation": [
        "Amazon EC2(Elastic Compute Cloud)는 사용자가 클라우드에서 가상 서버를 쉽게 시작하고 관리할 수 있게 해주는 핵심 서비스입니다. 다양한 인스턴스 유형을 지원하며 유연한 확장이 가능합니다."
      ],
      "wrongExplanations": [
        "- Amazon S3: 스토리지 서비스입니다.",
        "- AWS Lambda: 서버리스 실행 환경입니다.",
        "- Amazon RDS: 데이터베이스 서비스입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "Amazon S3",
          "text": "Amazon S3"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "AWS Lambda",
          "text": "AWS Lambda"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "Amazon RDS",
          "text": "Amazon RDS"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "Amazon EC2",
          "text": "Amazon EC2"
        }
      ],
      "answerKey": "D",
      "answerText": "Amazon EC2"
    },
    {
      "id": 292,
      "sourceNumber": 292,
      "title": "Question 292",
      "promptKo": "전 세계적으로 콘텐츠를 낮은 지연 시간으로 배포하는 데 도움이 되는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service helps you distribute content globally with low latency?",
      "explanation": [
        "Amazon CloudFront는 CDN(Content Delivery Network) 서비스로, 전 세계 엣지 로케이션을 통해 콘텐츠를 빠르게 전송할 수 있습니다. 지연 시간을 줄이고 사용자 경험을 개선합니다."
      ],
      "wrongExplanations": [
        "- Amazon S3: 스토리지입니다. CDN 기능은 없습니다.",
        "- Amazon Route 53: DNS 서비스입니다.",
        "- AWS Lambda: 서버리스 실행 환경입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "Amazon CloudFront",
          "text": "Amazon CloudFront"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "Amazon S3",
          "text": "Amazon S3"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "Amazon Route 53",
          "text": "Amazon Route 53"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "AWS Lambda",
          "text": "AWS Lambda"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon CloudFront"
    },
    {
      "id": 293,
      "sourceNumber": 293,
      "title": "Question 293",
      "promptKo": "클라우드에서 도메인 이름 시스템(DNS)을 제공하는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service provides a domain name system (DNS) on the cloud?",
      "explanation": [
        "Amazon Route 53은 확장성과 신뢰성이 높은 DNS 웹 서비스로, 도메인 이름을 IP 주소로 변환하고 트래픽을 효과적으로 라우팅합니다."
      ],
      "wrongExplanations": [
        "- Amazon CloudFront: CDN 서비스입니다.",
        "- Amazon VPC: 네트워크 서비스이지만 DNS 서비스는 아닙니다.",
        "- Amazon S3: 스토리지입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "Amazon CloudFront",
          "text": "Amazon CloudFront"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "Amazon Route 53",
          "text": "Amazon Route 53"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "Amazon VPC",
          "text": "Amazon VPC"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "Amazon S3",
          "text": "Amazon S3"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon Route 53"
    },
    {
      "id": 294,
      "sourceNumber": 294,
      "title": "Question 294",
      "promptKo": "웹 애플리케이션을 손쉽게 배포하고 확장할 수 있는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service provides an easy way to deploy and scale web applications?",
      "explanation": [
        "Elastic Beanstalk는 사용자가 코드를 업로드하기만 하면 자동으로 인프라를 구성하고 애플리케이션을 배포해주는 PaaS(Platform as a Service)입니다. 확장성과 모니터링 기능도 내장되어 있습니다."
      ],
      "wrongExplanations": [
        "- Amazon EC2: 수동 설정이 필요합니다.",
        "- AWS Lambda: 이벤트 기반 서버리스 환경입니다.",
        "- Amazon S3: 스토리지입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "Amazon EC2",
          "text": "Amazon EC2"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "AWS Lambda",
          "text": "AWS Lambda"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "AWS Elastic Beanstalk",
          "text": "AWS Elastic Beanstalk"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "Amazon S3",
          "text": "Amazon S3"
        }
      ],
      "answerKey": "C",
      "answerText": "AWS Elastic Beanstalk"
    },
    {
      "id": 295,
      "sourceNumber": 295,
      "title": "Question 295",
      "promptKo": "코드를 사용하여 인프라 프로비저닝을 자동화하는 데 사용되는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service is used to automate infrastructure provisioning using code?",
      "explanation": [
        "AWS CloudFormation은 인프라를 코드(IaC)로 관리할 수 있게 해주는 서비스로, JSON 또는 YAML 템플릿을 통해 리소스를 자동으로 생성, 수정, 삭제할 수 있습니다."
      ],
      "wrongExplanations": [
        "- Amazon EC2: 컴퓨팅 서비스입니다.",
        "- Amazon S3: 스토리지입니다.",
        "- AWS Config: 리소스 구성 기록 서비스입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "Amazon EC2",
          "text": "Amazon EC2"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "Amazon S3",
          "text": "Amazon S3"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "AWS Config",
          "text": "AWS Config"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "AWS CloudFormation",
          "text": "AWS CloudFormation"
        }
      ],
      "answerKey": "D",
      "answerText": "AWS CloudFormation"
    },
    {
      "id": 296,
      "sourceNumber": 296,
      "title": "Question 296",
      "promptKo": "안정적이고 예측 가능한 성능을 유지하기 위해 용량을 자동으로 조정할 수 있게 해주는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service enables you to automatically adjust capacity to maintain steady, predictable performance?",
      "explanation": [
        "AWS Auto Scaling은 트래픽 변화에 따라 EC2 인스턴스나 기타 리소스의 수를 자동으로 조절하여 성능과 비용 효율성을 최적화합니다."
      ],
      "wrongExplanations": [
        "- Amazon S3: 스토리지로, 오토 스케일링 대상이 아닙니다.",
        "- AWS CloudWatch: 모니터링 서비스입니다.",
        "- Amazon VPC: 네트워크 서비스입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "AWS Auto Scaling",
          "text": "AWS Auto Scaling"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "Amazon S3",
          "text": "Amazon S3"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "AWS CloudWatch",
          "text": "AWS CloudWatch"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "Amazon VPC",
          "text": "Amazon VPC"
        }
      ],
      "answerKey": "A",
      "answerText": "AWS Auto Scaling"
    },
    {
      "id": 297,
      "sourceNumber": 297,
      "title": "Question 297",
      "promptKo": "컨테이너 실행을 위한 격리된 환경을 만들 수 있는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service allows you to create isolated environments for running containers?",
      "explanation": [
        "Amazon ECS(Elastic Container Service)는 컨테이너 오케스트레이션 서비스로, 격리된 환경에서 컨테이너를 효율적으로 실행하고 관리할 수 있습니다."
      ],
      "wrongExplanations": [
        "- Amazon EC2: VM 기반 컴퓨팅 서비스입니다.",
        "- AWS Lambda: 서버리스 서비스입니다.",
        "- Amazon S3: 스토리지입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "Amazon EC2",
          "text": "Amazon EC2"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "Amazon ECS",
          "text": "Amazon ECS"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "AWS Lambda",
          "text": "AWS Lambda"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "Amazon S3",
          "text": "Amazon S3"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon ECS"
    },
    {
      "id": 298,
      "sourceNumber": 298,
      "title": "Question 298",
      "promptKo": "AWS에서 관리형 쿠버네티스 서비스를 제공하는 것은 무엇입니까?",
      "promptEn": "Which AWS service is a managed Kubernetes service?",
      "explanation": [
        "Amazon EKS(Elastic Kubernetes Service)는 AWS에서 완전 관리형 쿠버네티스 환경을 제공하여 사용자가 인프라 관리 없이 컨테이너화된 애플리케이션을 배포할 수 있게 해줍니다."
      ],
      "wrongExplanations": [
        "- Amazon ECS: AWS 자체 오케스트레이션 서비스입니다.",
        "- Amazon EC2: VM 서비스입니다.",
        "- Amazon S3: 스토리지입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "Amazon ECS",
          "text": "Amazon ECS"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "Amazon EC2",
          "text": "Amazon EC2"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "Amazon EKS",
          "text": "Amazon EKS"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "Amazon S3",
          "text": "Amazon S3"
        }
      ],
      "answerKey": "C",
      "answerText": "Amazon EKS"
    },
    {
      "id": 299,
      "sourceNumber": 299,
      "title": "Question 299",
      "promptKo": "서버리스 컨테이너를 사용하여 애플리케이션을 빌드하고 실행할 수 있게 해주는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service lets you build and run applications using serverless containers?",
      "explanation": [
        "AWS Fargate는 서버리스 컨테이너 실행 서비스로, 사용자가 서버를 관리하지 않고 컨테이너만 배포하면 됩니다. ECS 및 EKS와 함께 사용할 수 있습니다."
      ],
      "wrongExplanations": [
        "- Amazon EC2: 서버 관리가 필요합니다.",
        "- Amazon ECS: 오케스트레이션이지만 서버 관리는 필요할 수 있습니다.",
        "- Amazon S3: 스토리지입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "Amazon EC2",
          "text": "Amazon EC2"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "Amazon ECS",
          "text": "Amazon ECS"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "Amazon S3",
          "text": "Amazon S3"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "AWS Fargate",
          "text": "AWS Fargate"
        }
      ],
      "answerKey": "D",
      "answerText": "AWS Fargate"
    },
    {
      "id": 300,
      "sourceNumber": 300,
      "title": "Question 300",
      "promptKo": "사용자 액세스 및 권한 관리를 위해 사용되는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service is used for managing user access and permissions?",
      "explanation": [
        "AWS IAM(Identity and Access Management)은 사용자 및 그룹에 대한 접근 권한을 안전하게 관리할 수 있는 서비스입니다. 최소 권한 원칙을 적용할 수 있어 보안 강화에 필수적입니다."
      ],
      "wrongExplanations": [
        "- Amazon Cognito: 주로 애플리케이션 사용자 인증용입니다.",
        "- AWS Organizations: 계정 관리 서비스입니다.",
        "- Amazon GuardDuty: 보안 모니터링 서비스입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "AWS IAM",
          "text": "AWS IAM"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "Amazon Cognito",
          "text": "Amazon Cognito"
        },
        {
          "key": "C",
          "textEn": "",
          "textKo": "AWS Organizations",
          "text": "AWS Organizations"
        },
        {
          "key": "D",
          "textEn": "",
          "textKo": "Amazon GuardDuty",
          "text": "Amazon GuardDuty"
        }
      ],
      "answerKey": "A",
      "answerText": "AWS IAM"
    },
    {
      "id": 301,
      "sourceNumber": 301,
      "title": "Question 301",
      "promptKo": "한 회사가 LLM을 사용해 온라인 튜터링 애플리케이션을 개발하고 있습니다. 회사는 LLM에 구성 가능한 안전장치를 적용해 표준 안전 규칙을 따르도록 해야 합니다.\n이 요구사항을 가장 적은 노력으로 충족하는 방법은 무엇입니까?",
      "promptEn": "A company is using large language models (LLMs) to develop online tutoring applications. The company needs to apply configurable safeguards to the LLMs. These safeguards must ensure that the LLMs follow standard safety rules when creating applications.\nWhich solution will meet these requirements with the LEAST effort?",
      "explanation": [
        "Amazon Bedrock Guardrails는 LLM에 안전 정책을 쉽게 적용할 수 있는 기능으로, 프롬프트 차단, 금지 주제 설정, 콘텐츠 필터링 등을 통해 표준 안전 규칙을 손쉽게 적용할 수 있습니다."
      ],
      "wrongExplanations": [
        "- A. Bedrock playground는 테스트 환경일 뿐, 안전장치를 구성하는 기능은 없습니다.",
        "- B. SageMaker Clarify는 공정성&middot;편향성 분석 도구입니다.",
        "- D. SageMaker Jumpstart는 모델 배포와 관련된 기능입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Bedrock playgrounds",
          "textKo": "",
          "text": "Amazon Bedrock playgrounds"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker Clarify",
          "textKo": "",
          "text": "Amazon SageMaker Clarify"
        },
        {
          "key": "C",
          "textEn": "Amazon Bedrock Guardrails",
          "textKo": "",
          "text": "Amazon Bedrock Guardrails"
        },
        {
          "key": "D",
          "textEn": "Amazon SageMaker Jumpstart",
          "textKo": "",
          "text": "Amazon SageMaker Jumpstart"
        }
      ],
      "answerKey": "C",
      "answerText": "Amazon Bedrock Guardrails"
    },
    {
      "id": 302,
      "sourceNumber": 302,
      "title": "Question 302",
      "promptKo": "한 회사가 Amazon Bedrock의 Amazon Nova 모델을 검토 중입니다. 다국어를 지원하는 멀티모달 모델이 필요합니다.\n이 요구를 가장 비용 효율적으로 충족하는 모델은 무엇입니까?",
      "promptEn": "A company is exploring Amazon Nova models in Amazon Bedrock. The company needs a multimodal model that supports multiple languages.\nWhich Nova model will meet these requirements MOST cost-effectively?",
      "explanation": [
        "Nova Lite는 Amazon Nova 제품군 중 기본 멀티모달 기능과 다국어 지원을 제공하면서도 비용이 가장 저렴한 옵션입니다."
      ],
      "wrongExplanations": [
        "- B. Nova Pro는 고성능 모델로 비용이 더 높습니다.",
        "- C. Nova Canvas는 이미지 생성 중심입니다.",
        "- D. Nova Reel은 비디오 중심 기능입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Nova Lite",
          "textKo": "",
          "text": "Nova Lite"
        },
        {
          "key": "B",
          "textEn": "Nova Pro",
          "textKo": "",
          "text": "Nova Pro"
        },
        {
          "key": "C",
          "textEn": "Nova Canvas",
          "textKo": "",
          "text": "Nova Canvas"
        },
        {
          "key": "D",
          "textEn": "Nova Reel",
          "textKo": "",
          "text": "Nova Reel"
        }
      ],
      "answerKey": "A",
      "answerText": "Nova Lite"
    },
    {
      "id": 303,
      "sourceNumber": 303,
      "title": "Question 303",
      "promptKo": "회사가 Amazon Bedrock FM을 사용해 새로운 생성형 AI 챗봇을 개발 중입니다. 테스트 과정에서 챗봇이 프롬프트 인젝션 공격에 취약함을 발견했습니다.\n이 문제를 가장 적은 구현 노력으로 해결할 방법은 무엇입니까?",
      "promptEn": "A company is building a new generative AI chatbot. The chatbot uses an Amazon Bedrock foundation model (FM) to generate responses. During testing, the company notices that the chatbot is prone to prompt injection attacks.\nWhat can the company do to secure the chatbot with the LEAST implementation effort?",
      "explanation": [
        "Bedrock Guardrails는 콘텐츠 필터와 금지 주제를 손쉽게 설정하여 프롬프트 인젝션으로 인한 유해한 응답을 방지할 수 있는 기능입니다. 별도의 모델 변경이나 파인튜닝 없이 적용 가능합니다."
      ],
      "wrongExplanations": [
        "- A. 파인튜닝은 시간과 비용이 많이 듭니다.",
        "- C. 모델 변경만으로 보안이 해결되지 않습니다.",
        "- D. chain-of-thought은 보안 기능이 아닙니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Fine-tune the FM to avoid harmful responses.",
          "textKo": "",
          "text": "Fine-tune the FM to avoid harmful responses."
        },
        {
          "key": "B",
          "textEn": "Use Amazon Bedrock Guardrails content filters and denied topics.",
          "textKo": "",
          "text": "Use Amazon Bedrock Guardrails content filters and denied topics."
        },
        {
          "key": "C",
          "textEn": "Change the FM to a more secure FM.",
          "textKo": "",
          "text": "Change the FM to a more secure FM."
        },
        {
          "key": "D",
          "textEn": "Use chain-of-thought prompting to produce secure responses.",
          "textKo": "",
          "text": "Use chain-of-thought prompting to produce secure responses."
        }
      ],
      "answerKey": "B",
      "answerText": "Use Amazon Bedrock Guardrails content filters and denied topics."
    },
    {
      "id": 304,
      "sourceNumber": 304,
      "title": "Question 304",
      "promptKo": "AI에서 추론(inference)이란 무엇을 의미합니까?",
      "promptEn": "What does inference refer to in the context of AI?",
      "explanation": [
        "AI에서 추론은 학습된 모델을 사용해 새로운 데이터에 대해 예측하거나 결정을 내리는 과정을 의미합니다."
      ],
      "wrongExplanations": [
        "- A. 알고리즘 생성은 학습 전 단계입니다.",
        "- C. 모델 앙상블과는 다른 개념입니다.",
        "- D. 데이터 수집은 학습 전 과정입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "The process of creating new AI algorithms",
          "textKo": "",
          "text": "The process of creating new AI algorithms"
        },
        {
          "key": "B",
          "textEn": "The use of a trained model to make predictions or decisions on unseen data",
          "textKo": "",
          "text": "The use of a trained model to make predictions or decisions on unseen data"
        },
        {
          "key": "C",
          "textEn": "The process of combining multiple AI models into one model",
          "textKo": "",
          "text": "The process of combining multiple AI models into one model"
        },
        {
          "key": "D",
          "textEn": "The method of collecting training data for AI systems",
          "textKo": "",
          "text": "The method of collecting training data for AI systems"
        }
      ],
      "answerKey": "B",
      "answerText": "The use of a trained model to make predictions or decisions on unseen data"
    },
    {
      "id": 305,
      "sourceNumber": 305,
      "title": "Question 305",
      "promptKo": "한 회사가 사용자 질문에 응답하는 AI 어시스턴트를 구축하려 합니다. 이 AI는 특정 데이터 소스를 평가하고 외부 API를 호출하며 응답 옵션을 생성하고 우선순위를 비교해야 합니다.\n이 요구사항을 충족할 수 있는 Amazon Bedrock 기능은 무엇입니까?",
      "promptEn": "A company wants to build an AI assistant to provide responses to user queries. The AI assistant must evaluate specific data sources, query external APIs, generate response options, and compare and prioritize response options.\nWhich Amazon Bedrock feature or resource will meet these requirements?",
      "explanation": [
        "Bedrock Agents는 워크플로 기반으로 외부 데이터 소스 질의, API 호출, 결과 종합 등 복잡한 작업을 자동화할 수 있어 AI 어시스턴트 제작에 적합합니다."
      ],
      "wrongExplanations": [
        "- A. Prompt Management는 프롬프트 관리 기능입니다.",
        "- B. Response streaming은 응답 전송 방식입니다.",
        "- C. Knowledge Bases는 지식 검색 기능만 제공합니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Prompt Management",
          "textKo": "",
          "text": "Prompt Management"
        },
        {
          "key": "B",
          "textEn": "Response streaming",
          "textKo": "",
          "text": "Response streaming"
        },
        {
          "key": "C",
          "textEn": "Knowledge Bases",
          "textKo": "",
          "text": "Knowledge Bases"
        },
        {
          "key": "D",
          "textEn": "Agents",
          "textKo": "",
          "text": "Agents"
        }
      ],
      "answerKey": "D",
      "answerText": "Agents"
    },
    {
      "id": 306,
      "sourceNumber": 306,
      "title": "Question 306",
      "promptKo": "AI 실무자가 동일한 입력에 대해 여러 번 호출 시 서로 다른 응답을 생성하는 LLM을 관찰했습니다.\n이 현상은 어떤 AI 리스크에 해당합니까?",
      "promptEn": "An AI practitioner notices a large language model (LLM) is generating different responses for the same input across multiple invocations.\nWhich risk of AI does this describe?",
      "explanation": [
        "비결정성(Nondeterminism)은 동일한 입력에 대해 모델이 매번 동일한 출력을 보장하지 않는 현상을 말합니다. 이는 생성형 모델의 특성입니다."
      ],
      "wrongExplanations": [
        "- A. Hallucinations는 잘못된 정보 생성입니다.",
        "- C. Accuracy는 정확도 문제입니다.",
        "- D. Multimodality는 다양한 형태의 데이터 처리입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Hallucinations",
          "textKo": "",
          "text": "Hallucinations"
        },
        {
          "key": "B",
          "textEn": "Nondeterminism",
          "textKo": "",
          "text": "Nondeterminism"
        },
        {
          "key": "C",
          "textEn": "Accuracy",
          "textKo": "",
          "text": "Accuracy"
        },
        {
          "key": "D",
          "textEn": "Multimodality",
          "textKo": "",
          "text": "Multimodality"
        }
      ],
      "answerKey": "B",
      "answerText": "Nondeterminism"
    },
    {
      "id": 307,
      "sourceNumber": 307,
      "title": "Question 307",
      "promptKo": "회사가 AWS에서 생성형 AI 애플리케이션을 개발하고 있습니다. 이 앱은 학생들의 읽기 이해력을 높이는 데 도움을 주며, 학생들이 이야기 텍스트에 삽화를 추가할 수 있게 해야 합니다.\n이 요구사항을 충족하는 솔루션은 무엇입니까?",
      "promptEn": "A company is building a generative AI application on AWS. The application will help improve reading comprehension for students. The application must give students the ability to add illustrations to stories.\nWhich solution will meet this requirement?",
      "explanation": [
        "Stable Diffusion 3.5 Large는 텍스트를 기반으로 고품질 이미지를 생성할 수 있는 모델로, 삽화 추가 요구사항을 충족합니다."
      ],
      "wrongExplanations": [
        "- B. Polly는 음성 변환 서비스입니다.",
        "- C. Rekognition은 이미지 분석 서비스입니다.",
        "- D. Q Business는 비즈니스 정보 검색 기능입니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Use Amazon Bedrock Stable Diffusion 3.5 Large to generate images based on text inputs.",
          "textKo": "",
          "text": "Use Amazon Bedrock Stable Diffusion 3.5 Large to generate images based on text inputs."
        },
        {
          "key": "B",
          "textEn": "Use Amazon Polly to create an audiobook based on story texts.",
          "textKo": "",
          "text": "Use Amazon Polly to create an audiobook based on story texts."
        },
        {
          "key": "C",
          "textEn": "Use Amazon Rekognition to analyze image contents and detect text attributes.",
          "textKo": "",
          "text": "Use Amazon Rekognition to analyze image contents and detect text attributes."
        },
        {
          "key": "D",
          "textEn": "Create a standard prompt template. Use Amazon Q Business to illustrate stories.",
          "textKo": "",
          "text": "Create a standard prompt template. Use Amazon Q Business to illustrate stories."
        }
      ],
      "answerKey": "A",
      "answerText": "Use Amazon Bedrock Stable Diffusion 3.5 Large to generate images based on text inputs."
    },
    {
      "id": 308,
      "sourceNumber": 308,
      "title": "Question 308",
      "promptKo": "한 헬스케어 회사가 질병 발병 패턴을 파악하기 위해 작년 데이터를 분석하고 있습니다. 매월 트렌드 분석 보고서를 작성해 보건 당국에 제출해야 하며, 이번 달의 최신 데이터에 대한 인사이트도 제공해야 합니다.\n가장 비용 효율적인 추론 방식은 무엇입니까?",
      "promptEn": "A healthcare company wants to analyze patient data. The data was gathered over the previous year to detect patterns in disease outbreaks. The company needs to create a trend analysis report for each month to present to public health officials. The company must provide insights into patient data from the most recent month of the current year.\nWhich inference method will meet these requirements MOST cost-effectively?",
      "explanation": [
        "Batch transform은 실시간 처리가 필요 없는 대규모 데이터 분석에 적합하며, 월 단위 보고서 생성과 같은 시나리오에 비용 효율적입니다."
      ],
      "wrongExplanations": [
        "- A. Real-time inference는 불필요하게 비용이 높습니다.",
        "- C. Serverless inference는 실시간/유연성 중심입니다.",
        "- D. Asynchronous inference는 지연된 처리지만 실시간 트리거가 필요할 수 있습니다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Real-time inference",
          "textKo": "",
          "text": "Real-time inference"
        },
        {
          "key": "B",
          "textEn": "Batch transform",
          "textKo": "",
          "text": "Batch transform"
        },
        {
          "key": "C",
          "textEn": "Serverless inference",
          "textKo": "",
          "text": "Serverless inference"
        },
        {
          "key": "D",
          "textEn": "Asynchronous inference",
          "textKo": "",
          "text": "Asynchronous inference"
        }
      ],
      "answerKey": "B",
      "answerText": "Batch transform"
    },
    {
      "id": 309,
      "sourceNumber": 309,
      "title": "Question 309",
      "promptKo": "다음 목록에서 단계들을 올바른 순서로 선택하여 새로운 맞춤형 ML 모델의 수명 주기를 올바르게 설명하십시오. 각 단계를 한 번씩만 선택하세요.",
      "promptEn": "HOTSPOT -\nSelect and order the steps from the following list to correctly describe the ML lifecycle for a new custom model. Select each step one time.",
      "explanation": [
        "ML 수명주기는 데이터 수집과 전처리에서 시작해 학습 및 평가를 거쳐, 프로덕션 환경에 배포하고 성능을 모니터링하는 흐름으로 진행됩니다."
      ],
      "wrongExplanations": [
        "단계의 순서가 잘못되면 모델 성능 저하 또는 운영 환경 오류가 발생할 수 있습니다."
      ],
      "glossary": [],
      "type": "ordering",
      "sequenceItems": [
        "데이터 수집 (Data Collection)",
        "데이터 준비 및 전처리 (Data Preparation)",
        "모델 학습 (Model Training)",
        "모델 평가 (Model Evaluation)",
        "배포 및 모니터링 (Deployment and Monitoring)"
      ]
    },
    {
      "id": 310,
      "sourceNumber": 310,
      "title": "Question 310",
      "promptKo": "한 회사가 AI 리스크를 관리하고 책임감 있게 AI를 사용하기 위해 ISO 인증을 획득했습니다.\n이 인증은 회사에 대해 무엇을 의미합니까?",
      "promptEn": "A company acquires International Organization for Standardization (ISO) accreditation to manage AI risks and to use AI responsibly.\nWhat does this accreditation reflect about the company?",
      "explanation": [
        "ISO 인증은 조직의 AI 관리 및 개발 체계(프레임워크) 가 국제 표준을 충족함을 의미합니다.",
        "즉, 개인이나 개별 시스템이 아닌 운영 프로세스 전체에 대한 인증입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "All members of the company are ISO certified.",
          "textKo": "",
          "text": "All members of the company are ISO certified."
        },
        {
          "key": "B",
          "textEn": "All AI systems that the company uses are ISO certified.",
          "textKo": "",
          "text": "All AI systems that the company uses are ISO certified."
        },
        {
          "key": "C",
          "textEn": "All AI application team members are ISO certified.",
          "textKo": "",
          "text": "All AI application team members are ISO certified."
        },
        {
          "key": "D",
          "textEn": "The company's development framework is ISO certified.",
          "textKo": "",
          "text": "The company's development framework is ISO certified."
        }
      ],
      "answerKey": "D",
      "answerText": "The company's development framework is ISO certified."
    },
    {
      "id": 311,
      "sourceNumber": 311,
      "title": "Question 311",
      "promptKo": "HOTSPOT 문제 -\n다음 설명에 대해 올바른 프롬프트 엔지니어링 기법을 선택하십시오.\n각 기법은 한 번만 또는 사용하지 않을 수도 있습니다.",
      "promptEn": "HOTSPOT -\nSelect the correct prompt engineering technique from the following list for each description. Select each prompt engineering technique one time or not at all.",
      "explanation": [
        "이 문제는 Few-shot, Zero-shot, Chain-of-thought prompting 등",
        "LLM 응답 품질을 조정하는 기법을 구분하는 문제입니다.",
        "각 설명에 맞는 기법을 정확히 선택해야 합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "matching",
      "allowRepeat": false,
      "choicePool": [
        "Few-shot prompting",
        "Zero-shot prompting",
        "Chain-of-thought prompting"
      ],
      "rows": [
        {
          "id": "311-manual-1",
          "prompt": "예시 없이 바로 작업을 지시하는 프롬프트 방식",
          "answer": "Zero-shot prompting"
        },
        {
          "id": "311-manual-2",
          "prompt": "몇 개의 예시를 함께 제공해 원하는 패턴을 유도하는 방식",
          "answer": "Few-shot prompting"
        },
        {
          "id": "311-manual-3",
          "prompt": "단계별로 생각하도록 유도해 추론 과정을 끌어내는 방식",
          "answer": "Chain-of-thought prompting"
        }
      ]
    },
    {
      "id": 312,
      "sourceNumber": 312,
      "title": "Question 312",
      "promptKo": "심장병 위험을 예측하기 위해 환자 데이터를 사용하는 모델을 개발 중입니다.\n데이터셋에는 심장병 유무(타깃 값) 이 포함되어 있습니다.\n이 경우 어떤 머신러닝 기법이 적절합니까?",
      "promptEn": "A company is developing an ML model to predict heart disease risk.\nThe model uses patient data such as age, cholesterol, blood pressure, smoking status, and exercise habits.\nThe dataset includes a target value that indicates whether a patient has heart disease.\nWhich ML technique will meet these requirements?",
      "explanation": [
        "정답(label)이 포함된 데이터를 사용하므로 지도학습(Supervised Learning) 이 정답입니다.",
        "모델은 입력(특징)과 타깃(심장병 유무) 간의 관계를 학습합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Unsupervised learning",
          "textKo": "",
          "text": "Unsupervised learning"
        },
        {
          "key": "B",
          "textEn": "Supervised learning",
          "textKo": "",
          "text": "Supervised learning"
        },
        {
          "key": "C",
          "textEn": "Reinforcement learning",
          "textKo": "",
          "text": "Reinforcement learning"
        },
        {
          "key": "D",
          "textEn": "Semi-supervised learning",
          "textKo": "",
          "text": "Semi-supervised learning"
        }
      ],
      "answerKey": "B",
      "answerText": "Supervised learning"
    },
    {
      "id": 313,
      "sourceNumber": 313,
      "title": "Question 313",
      "promptKo": "한 회사가 제품 가이드를 수동으로 업로드하여 데이터베이스를 갱신하고 있습니다.\n이 가이드에는 텍스트와 이미지가 포함되어 있습니다.\n이를 생성형 AI로 자동화하려고 합니다.\n아래 단계 중 올바른 순서로 선택하세요. (각 단계는 한 번씩만 선택)",
      "promptEn": "HOTSPOT -\nA company periodically updates its product database by manually uploading digital product guides.\nThe product guides contain text and images.\nThe company wants to automate this task by using generative AI.\nSelect and order the steps from the following list to automate the database update task by using generative AI.\nSelect each step one time.",
      "explanation": [
        "일반적인 순서는 다음과 같습니다:",
        "- 데이터 수집",
        "- 전처리 (텍스트 및 이미지 추출)",
        "- 생성형 AI 모델 활용",
        "- 결과를 데이터베이스에 저장",
        "-> 생성형 AI를 비정형 데이터 자동처리 파이프라인에 통합하는 과정입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "ordering",
      "sequenceItems": [
        "데이터 수집",
        "전처리 (텍스트 및 이미지 추출)",
        "생성형 AI 모델 활용",
        "결과를 데이터베이스에 저장"
      ]
    },
    {
      "id": 314,
      "sourceNumber": 314,
      "title": "Question 314",
      "promptKo": "한 회사가 데이터 저장 및 삭제에 대한 정책을 가지고 있습니다.\n이것은 어떤 데이터 거버넌스 전략입니까?",
      "promptEn": "A company has guidelines for data storage and deletion.\nWhich data governance strategy does this describe?",
      "explanation": [
        "데이터 보존(Data Retention) 은 데이터의 저장 기간, 보존 정책, 삭제 시점을 정의하는 전략입니다.",
        "기업의 규정 준수와 개인정보 보호에 필수적입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Data de-identification",
          "textKo": "",
          "text": "Data de-identification"
        },
        {
          "key": "B",
          "textEn": "Data quality standards",
          "textKo": "",
          "text": "Data quality standards"
        },
        {
          "key": "C",
          "textEn": "Data retention",
          "textKo": "",
          "text": "Data retention"
        },
        {
          "key": "D",
          "textEn": "Log storage",
          "textKo": "",
          "text": "Log storage"
        }
      ],
      "answerKey": "C",
      "answerText": "Data retention"
    },
    {
      "id": 315,
      "sourceNumber": 315,
      "title": "Question 315",
      "promptKo": "이미지 집합에 대해 전치(Transpose) 및 회전(Rotate) 과 같은 수치 변환을 적용해야 합니다.\n가장 운영 효율적인 방식은 무엇입니까?",
      "promptEn": "A company needs to apply numerical transformations to a set of images to transpose and rotate the images.\nWhich solution will meet these requirements in the MOST operationally efficient way?",
      "explanation": [
        "단순한 수학적 이미지 변환 작업은 서버리스 방식인 AWS Lambda로 처리하는 것이 가장 효율적입니다.",
        "서버 관리가 필요 없고 비용이 낮으며 자동 확장이 가능합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Create a deep neural network by using the images as input.",
          "textKo": "",
          "text": "Create a deep neural network by using the images as input."
        },
        {
          "key": "B",
          "textEn": "Create an AWS Lambda function to perform the transformations.",
          "textKo": "",
          "text": "Create an AWS Lambda function to perform the transformations."
        },
        {
          "key": "C",
          "textEn": "Use an Amazon Bedrock large language model (LLM) with a high temperature.",
          "textKo": "",
          "text": "Use an Amazon Bedrock large language model (LLM) with a high temperature."
        },
        {
          "key": "D",
          "textEn": "Use AWS Glue Data Quality to make corrections to each image.",
          "textKo": "",
          "text": "Use AWS Glue Data Quality to make corrections to each image."
        }
      ],
      "answerKey": "B",
      "answerText": "Create an AWS Lambda function to perform the transformations."
    },
    {
      "id": 316,
      "sourceNumber": 316,
      "title": "Question 316",
      "promptKo": "AI 실무자가 동일한 입력을 여러 번 실행했을 때 LLM이 매번 다른 결과를 생성하는 것을 발견했습니다.\n이는 어떤 AI 리스크에 해당합니까?",
      "promptEn": "An AI practitioner notices a large language model (LLM) is generating different responses for the same input across multiple invocations.\nWhich risk of AI does this describe?",
      "explanation": [
        "비결정성(Nondeterminism) 은 동일한 입력에도 다른 출력이 발생하는 특성을 말합니다.",
        "이는 LLM이 확률 기반으로 동작하기 때문입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Hallucinations",
          "textKo": "",
          "text": "Hallucinations"
        },
        {
          "key": "B",
          "textEn": "Nondeterminism",
          "textKo": "",
          "text": "Nondeterminism"
        },
        {
          "key": "C",
          "textEn": "Accuracy",
          "textKo": "",
          "text": "Accuracy"
        },
        {
          "key": "D",
          "textEn": "Multimodality",
          "textKo": "",
          "text": "Multimodality"
        }
      ],
      "answerKey": "B",
      "answerText": "Nondeterminism"
    },
    {
      "id": 317,
      "sourceNumber": 317,
      "title": "Question 317",
      "promptKo": "전자상거래 사이트에서 사용할 상품 설명을 자동 생성하는 AI 애플리케이션을 개발 중입니다.\n문체와 어조가 일관된 문단 단위의 텍스트를 하루 수천 개 생성해야 합니다.\n어떤 생성 모델이 적합합니까?",
      "promptEn": "A company is developing a generative AI application to automatically generate product descriptions for an ecommerce website.\nThe product descriptions must consist of paragraphs of text that are consistent in style and tone.\nThe application must generate thousands of unique descriptions each day.\nWhich type of generative model will meet these requirements?",
      "explanation": [
        "Transformer 기반 모델(GPT, Claude 등) 은 문맥 이해와 자연어 생성을 잘 수행합니다.",
        "텍스트 일관성을 유지하면서 대량의 데이터를 효율적으로 생성할 수 있습니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "A variational autoencoder (VAE) model",
          "textKo": "",
          "text": "A variational autoencoder (VAE) model"
        },
        {
          "key": "B",
          "textEn": "A transformer-based model",
          "textKo": "",
          "text": "A transformer-based model"
        },
        {
          "key": "C",
          "textEn": "A diffusion model",
          "textKo": "",
          "text": "A diffusion model"
        },
        {
          "key": "D",
          "textEn": "A generative adversarial network (GAN) model",
          "textKo": "",
          "text": "A generative adversarial network (GAN) model"
        }
      ],
      "answerKey": "B",
      "answerText": "A transformer-based model"
    },
    {
      "id": 318,
      "sourceNumber": 318,
      "title": "Question 318",
      "promptKo": "AI 실무자가 모델을 훈련시킨 결과,\n훈련 데이터에서는 성능이 좋지만 평가 데이터에서는 성능이 나쁩니다.\n이 문제의 가장 가능성 높은 원인은 무엇입니까?",
      "promptEn": "An AI practitioner has trained a model on a training dataset.\nThe model performs well on the training data.\nHowever, the model does not perform well on evaluation data.\nWhat is the MOST likely cause of this issue?",
      "explanation": [
        "과적합(Overfitting) 은 모델이 훈련 데이터에만 지나치게 맞춰져 새로운 데이터에 일반화하지 못하는 상태를 말합니다.",
        "이는 머신러닝의 가장 일반적인 문제 중 하나입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "The model is underfit.",
          "textKo": "",
          "text": "The model is underfit."
        },
        {
          "key": "B",
          "textEn": "The model requires prompt engineering.",
          "textKo": "",
          "text": "The model requires prompt engineering."
        },
        {
          "key": "C",
          "textEn": "The model is biased.",
          "textKo": "",
          "text": "The model is biased."
        },
        {
          "key": "D",
          "textEn": "The model is overfit.",
          "textKo": "",
          "text": "The model is overfit."
        }
      ],
      "answerKey": "D",
      "answerText": "The model is overfit."
    },
    {
      "id": 319,
      "sourceNumber": 319,
      "title": "Question 319",
      "promptKo": "한 회사가 대출 신청 리스크를 평가할 해석 가능한 ML 모델을 개발하고자 한다.",
      "promptEn": "A company wants to develop an interpretable ML model to assess the risk of loan applications.",
      "explanation": [
        "로지스틱 회귀는 입력 변수와 출력 확률 간의 관계가 명확하게 해석 가능하다.",
        "금융과 같은 규제 산업에서 모델의 결정 근거를 설명해야 할 때 가장 적합하다."
      ],
      "wrongExplanations": [
        "A: 딥러닝은 높은 정확도 가능하지만 \"블랙박스\"라 해석 불가",
        "C: K-평균은 군집화용, 리스크 예측에 적합하지 않음",
        "D: RCF는 이상치 탐지용, 예측보다는 탐지 목적"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Deep learning model",
          "textKo": "딥러닝 모델",
          "text": "Deep learning model"
        },
        {
          "key": "B",
          "textEn": "Logistic regression model",
          "textKo": "로지스틱 회귀 모델",
          "text": "Logistic regression model"
        },
        {
          "key": "C",
          "textEn": "K-means algorithm",
          "textKo": "K-평균 알고리즘",
          "text": "K-means algorithm"
        },
        {
          "key": "D",
          "textEn": "Random cut forest algorithm",
          "textKo": "Random cut forest 알고리즘",
          "text": "Random cut forest algorithm"
        }
      ],
      "answerKey": "B",
      "answerText": "로지스틱 회귀 모델"
    },
    {
      "id": 320,
      "sourceNumber": 320,
      "title": "Question 320",
      "promptKo": "회사가 고객의 **개인식별정보(PII)**를 저장할 때, 데이터를 반드시 회사가 속한 AWS 리전 내에 보관해야 한다.",
      "promptEn": "A company stores customer personally identifiable information (PII) data. The company must store the PII data within the company's AWS Region.",
      "explanation": [
        "데이터 레지던시는 데이터가 저장되어야 하는 지리적 위치를 명시하는 정책이다.",
        "법적&middot;규제 준수를 위해, PII 데이터는 특정 리전에만 저장하도록 요구된다."
      ],
      "wrongExplanations": [
        "A: 데이터 분석 관련, 저장 위치와 무관",
        "C: 모델 편향 문제, 위치와 무관",
        "D: 라우팅 정책, 저장 위치와 직접적 관련 없음"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Data mining",
          "textKo": "데이터 마이닝",
          "text": "Data mining"
        },
        {
          "key": "B",
          "textEn": "Data residency",
          "textKo": "데이터 레지던시",
          "text": "Data residency"
        },
        {
          "key": "C",
          "textEn": "Pre-training bias",
          "textKo": "사전 학습 편향",
          "text": "Pre-training bias"
        },
        {
          "key": "D",
          "textEn": "Geolocation routing",
          "textKo": "지리적 라우팅",
          "text": "Geolocation routing"
        }
      ],
      "answerKey": "B",
      "answerText": "데이터 레지던시(Data residency)"
    },
    {
      "id": 321,
      "sourceNumber": 321,
      "title": "Question 321",
      "promptKo": "회사가 마케팅 운영 개선을 위해 생성형 AI를 도입하려 한다.\n6개월 내 매출 증가가 목표이다.",
      "promptEn": "A company wants to implement a generative AI solution to improve marketing operations. The company wants to increase its revenue in the next 6 months.",
      "explanation": [
        "짧은 6개월 내 효과를 보려면 명확한 목표 정의와 요구사항 검증이 우선이다.",
        "이후 적절한 모델 선택 및 구현 전략을 결정할 수 있다."
      ],
      "wrongExplanations": [
        "A: 데이터 준비&middot;모델 학습에 시간 소요 -> 단기간 목표 달성 어려움",
        "C: 프리빌트 솔루션은 맞춤화 어려움, 단기간 성과 불확실",
        "D: 단순 모방은 회사 특성 반영 못함"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Immediately start training a custom FM",
          "textKo": "기존 데이터로 FM 커스텀 학습 즉시 시작",
          "text": "Immediately start training a custom FM"
        },
        {
          "key": "B",
          "textEn": "Conduct stakeholder interviews to refine use cases and set measurable goals",
          "textKo": "이해관계자 인터뷰 후 유즈케이스 정제 및 측정 가능한 목표 설정",
          "text": "Conduct stakeholder interviews to refine use cases and set measurable goals"
        },
        {
          "key": "C",
          "textEn": "Implement a prebuilt AI assistant solution and measure its impact on customer satisfaction",
          "textKo": "사전 구축된 AI 어시스턴트 배포 후 고객 만족도 측정",
          "text": "Implement a prebuilt AI assistant solution and measure its impact on customer satisfaction"
        },
        {
          "key": "D",
          "textEn": "Analyze industry AI implementations and replicate the most successful features",
          "textKo": "업계 AI 사례 분석 후 성공적 기능 복제",
          "text": "Analyze industry AI implementations and replicate the most successful features"
        }
      ],
      "answerKey": "B",
      "answerText": "이해관계자 인터뷰 후 목표 설정"
    },
    {
      "id": 322,
      "sourceNumber": 322,
      "title": "Question 322",
      "promptKo": "헬스케어 회사가 환자 음성 분석으로 질병 진단 개선 모델 개발.\n수백 개 음성 데이터가 수집됨. 현재 길이와 언어 기준으로 필터링 중.",
      "promptEn": "A healthcare company wants to create a model to improve disease diagnostics by analyzing patient voices. Hundreds of patient voices recorded. Filtering currently by duration and language.",
      "explanation": [
        "데이터 수집 완료 후, 품질&middot;형식 기준으로 데이터를 정제하는 과정이 전처리 단계다.",
        "길이, 언어 필터링은 전형적 전처리 작업이다."
      ],
      "wrongExplanations": [
        "A: 수집 단계는 이미 완료됨",
        "C: Feature engineering은 모델 입력을 위해 특성 변환/추출 단계",
        "D: 학습 단계는 아직 시작되지 않음"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Data collection",
          "textKo": "데이터 수집",
          "text": "Data collection"
        },
        {
          "key": "B",
          "textEn": "Data preprocessing",
          "textKo": "데이터 전처리",
          "text": "Data preprocessing"
        },
        {
          "key": "C",
          "textEn": "Feature engineering",
          "textKo": "특성 추출(Feature engineering)",
          "text": "Feature engineering"
        },
        {
          "key": "D",
          "textEn": "Model training",
          "textKo": "모델 학습",
          "text": "Model training"
        }
      ],
      "answerKey": "B",
      "answerText": "데이터 전처리(Data preprocessing)"
    },
    {
      "id": 323,
      "sourceNumber": 323,
      "title": "Question 323",
      "promptKo": "Bedrock AI 어시스턴트가 일반적이고 무관한 답변 제공.\n프롬프트 엔지니어링으로 개선하려 한다.",
      "promptEn": "Company uses Bedrock AI assistant; responses generic/irrelevant. Wants prompt engineering improvement.",
      "explanation": [
        "Few-shot prompting은 도메인 예시와 명확한 지시를 제공해 AI가 특정 패턴을 따르도록 유도한다.",
        "이 방식이 가장 효과적으로 관련 답변 생성 가능."
      ],
      "wrongExplanations": [
        "B: 숨겨진 논리 과정은 도메인 무관, 답변 질 낮음",
        "C: 스타일 변화만, 내용 개선 불가",
        "D: Zero-shot은 정보 부족 시 적합하지 않음"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Few-shot prompting with domain-specific context",
          "textKo": "도메인 예시(Few-shot) 제공",
          "text": "Few-shot prompting with domain-specific context"
        },
        {
          "key": "B",
          "textEn": "Chain-of-thought prompting with hidden reasoning",
          "textKo": "논리 과정 숨기기(Chain-of-thought)",
          "text": "Chain-of-thought prompting with hidden reasoning"
        },
        {
          "key": "C",
          "textEn": "Modify style to formal & include specs",
          "textKo": "정형화된 스타일 + 제품 사양 포함",
          "text": "Modify style to formal & include specs"
        },
        {
          "key": "D",
          "textEn": "Zero-shot prompting to augment retrieval",
          "textKo": "Zero-shot로 DB 검색 강화",
          "text": "Zero-shot prompting to augment retrieval"
        }
      ],
      "answerKey": "A",
      "answerText": "Few-shot prompting"
    },
    {
      "id": 324,
      "sourceNumber": 324,
      "title": "Question 324",
      "promptKo": "웹사이트 호텔 설명을 일관된 스타일로 생성하려면?",
      "promptEn": "Website에서 호텔 설명 생성, 일관된 스타일 필요.",
      "explanation": [
        "Bedrock은 생성형 FM 제공 -> 일관된 문장/스타일 생성 가능."
      ],
      "wrongExplanations": [
        "A: 텍스트 분석, 생성 불가",
        "B: 추천 시스템, 스타일 생성 불가",
        "C: 이미지 분석, 텍스트 생성 불가"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Comprehend"
        },
        {
          "key": "B",
          "textEn": "Personalize",
          "textKo": "Amazon Personalize",
          "text": "Personalize"
        },
        {
          "key": "C",
          "textEn": "Rekognition",
          "textKo": "Amazon Rekognition",
          "text": "Rekognition"
        },
        {
          "key": "D",
          "textEn": "Bedrock",
          "textKo": "Amazon Bedrock",
          "text": "Bedrock"
        }
      ],
      "answerKey": "D",
      "answerText": "Amazon Bedrock"
    },
    {
      "id": 325,
      "sourceNumber": 325,
      "title": "Question 325",
      "promptKo": "사전학습 LLM이 특정 도메인 지식 부족.\n라벨 없는 데이터 사용 시 최적 fine-tuning 방법?",
      "promptEn": "Pre-trained LLM -> 도메인 지식 부족. Unlabeled data 사용하여 fine-tune 필요.",
      "explanation": [
        "라벨 없는 데이터로 도메인 지식을 학습하려면 사전학습을 계속 진행하는 방식이 적합하다.",
        "모델의 기반 구조를 유지하면서 도메인 특화 지식 습득 가능."
      ],
      "wrongExplanations": [
        "A: 전체 학습 -> 비용/시간 과다",
        "B: 라벨 필요",
        "D: RAG -> 외부 지식 검색 중심, 라벨 없는 fine-tune과 다름"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Full training",
          "textKo": "전체 학습",
          "text": "Full training"
        },
        {
          "key": "B",
          "textEn": "Supervised fine-tuning",
          "textKo": "지도학습 파인튜닝",
          "text": "Supervised fine-tuning"
        },
        {
          "key": "C",
          "textEn": "Continued pre-training",
          "textKo": "사전학습 계속(Continued pre-training)",
          "text": "Continued pre-training"
        },
        {
          "key": "D",
          "textEn": "Retrieval Augmented Generation (RAG)",
          "textKo": "RAG",
          "text": "Retrieval Augmented Generation (RAG)"
        }
      ],
      "answerKey": "C",
      "answerText": "Continued pre-training"
    },
    {
      "id": 326,
      "sourceNumber": 326,
      "title": "Question 326",
      "promptKo": "커스텀 특성 기반 이미지 분류, 개발 노력 최소화 방법?",
      "promptEn": "Custom features 기반 이미지 분류, 최소 개발 노력?",
      "explanation": [
        "사전 학습 모델을 활용하면 개발 노력 최소화 + 성능 확보 가능.",
        "이미 학습된 특성을 재활용하고, 필요한 데이터셋만으로 fine-tuning 하면 된다."
      ],
      "wrongExplanations": [
        "A: 특성 직접 추출 필요 -> 개발 노력 증가",
        "C: GAN은 생성 모델 -> 분류에는 부적합",
        "D: 수작업 특성 엔지니어링 필요 -> 개발 노력 많음"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Traditional ML",
          "textKo": "전통적 ML 알고리즘",
          "text": "Traditional ML"
        },
        {
          "key": "B",
          "textEn": "Pre-trained deep learning + fine-tune",
          "textKo": "사전 학습 DL 모델 + 파인튜닝",
          "text": "Pre-trained deep learning + fine-tune"
        },
        {
          "key": "C",
          "textEn": "GAN",
          "textKo": "GAN 모델",
          "text": "GAN"
        },
        {
          "key": "D",
          "textEn": "SVM",
          "textKo": "SVM",
          "text": "SVM"
        }
      ],
      "answerKey": "B",
      "answerText": "Pre-trained deep learning model + fine-tune"
    },
    {
      "id": 327,
      "sourceNumber": 327,
      "title": "Question 327",
      "promptKo": "Text-to-text fine-tuning에 적합한 데이터 형식?",
      "promptEn": "Bedrock text-to-text fine-tuning 데이터셋 형식?",
      "explanation": [
        "Text-to-text fine-tuning에는 입력-출력 라벨 쌍이 필요하다.",
        "JSON 포맷이 구조화가 용이하여 모델 학습에 적합하다."
      ],
      "wrongExplanations": [
        "B, D: 라벨 없으므로 fine-tuning 불가",
        "C: 표 형식 -> 문장 단위 매핑 어렵다"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "JSON labeled",
          "textKo": "JSON (라벨 포함)",
          "text": "JSON labeled"
        },
        {
          "key": "B",
          "textEn": "CSV unlabeled",
          "textKo": "CSV (라벨 없음)",
          "text": "CSV unlabeled"
        },
        {
          "key": "C",
          "textEn": "CSV tabular",
          "textKo": "CSV (테이블형)",
          "text": "CSV tabular"
        },
        {
          "key": "D",
          "textEn": "Text unlabeled",
          "textKo": "Text (라벨 없음)",
          "text": "Text unlabeled"
        }
      ],
      "answerKey": "A",
      "answerText": "JSON with labeled data"
    },
    {
      "id": 328,
      "sourceNumber": 328,
      "title": "Question 328",
      "promptKo": "Bedrock 기반 생성형 AI 개발, 개발 노력 최소 -> 최대 순서로 나열.\n선택: Prompt engineering, RAG, Fine-tuning, Full model training",
      "promptEn": "Bedrock generative AI 개발 방법, 최소 -> 최대 개발 노력 순서 선택",
      "explanation": [
        "프롬프트 엔지니어링은 개발 노력 최소,",
        "RAG/파인튜닝은 점점 더 많은 데이터/구현 필요,",
        "전체 모델 학습은 가장 많은 시간&middot;리소스 필요."
      ],
      "wrongExplanations": [
        "순서가 뒤바르면 개발 비용과 시간 예측이 잘못된다."
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "",
          "textKo": "- Prompt engineering - RAG - Fine-tuning - Full model training",
          "text": "- Prompt engineering - RAG - Fine-tuning - Full model training"
        },
        {
          "key": "B",
          "textEn": "",
          "textKo": "순서가 뒤바르면 개발 비용과 시간 예측이 잘못된다.",
          "text": "순서가 뒤바르면 개발 비용과 시간 예측이 잘못된다."
        }
      ],
      "answerKey": "A",
      "answerText": "- Prompt engineering - RAG - Fine-tuning - Full model training"
    },
    {
      "id": 329,
      "sourceNumber": 329,
      "title": "Question 329",
      "promptKo": "항공사 시스템 코드 변환(A -> B)용 생성형 AI 모델 선택 기준?",
      "promptEn": "Airline wants generative AI model to convert flight booking system code from one language to another. Selection criteria?",
      "explanation": [
        "코드 변환은 문법과 의미를 정확히 이해하고 최적화할 수 있는 모델이어야 한다.",
        "단순 속도나 창의성보다 정확성과 최적화 능력이 핵심이다."
      ],
      "wrongExplanations": [
        "B: 속도만 빠르고 의미 이해 못하면 변환 실패",
        "C: 창의성 필요 없음",
        "D: 모델 크기만 기준이면 정확도 보장 안 됨"
      ],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Syntax, semantic understanding, code optimization capabilities",
          "textKo": "문법&middot;의미 이해 및 코드 최적화 능력",
          "text": "Syntax, semantic understanding, code optimization capabilities"
        },
        {
          "key": "B",
          "textEn": "Code generation speed, error handling",
          "textKo": "코드 생성 속도 및 오류 처리",
          "text": "Code generation speed, error handling"
        },
        {
          "key": "C",
          "textEn": "Ability to generate creative content",
          "textKo": "창의적 콘텐츠 생성 능력",
          "text": "Ability to generate creative content"
        },
        {
          "key": "D",
          "textEn": "Model size and resources",
          "textKo": "모델 크기와 리소스 요구량",
          "text": "Model size and resources"
        }
      ],
      "answerKey": "A",
      "answerText": "Syntax, semantic understanding, code optimization capabilities"
    },
    {
      "id": 330,
      "sourceNumber": 330,
      "title": "Question 330",
      "promptKo": "한 회사가 고객 이탈을 예측하기 위한 머신러닝 모델을 개발하고자 합니다. 회사는 고객 상호작용에 대한 대규모 데이터세트를 보유하고 있지만, 이 데이터세트에는 민감한 개인 정보가 포함되어 있습니다. 모델이 데이터로부터 학습할 수 있도록 허용하면서 고객의 프라이버시를 보호하기 위해 회사가 사용해야 하는 기술은 무엇입니까?",
      "promptEn": "A company wants to develop a machine learning model to predict customer churn. The company has a large dataset of customer interactions, but the dataset contains sensitive personal information. Which technique should the company use to protect the privacy of the customers while still allowing the model to learn from the data?",
      "explanation": [
        "- 데이터 익명화는 데이터 세트에서 개인 식별 정보(PII)를 제거하거나 수정하여 개인의 신원을 보호하면서도 분석 및 학습에 데이터를 활용할 수 있게 하는 기술입니다.",
        "- 암호화는 데이터를 보호하지만 모델 학습을 위해 복호화 과정이 필요하며 직접적인 학습 기법으로 보기는 어렵습니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Data Anonymization (데이터 익명화): 데이터에 포함된 개인 식별 정보를 삭제하거나 대체하여 특정 개인을 식별할 수 없도록 하는 과정."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Data anonymization",
          "textKo": "데이터 익명화 (Data anonymization)",
          "text": "Data anonymization"
        },
        {
          "key": "B",
          "textEn": "Data encryption",
          "textKo": "데이터 암호화 (Data encryption)",
          "text": "Data encryption"
        },
        {
          "key": "C",
          "textEn": "Data compression",
          "textKo": "데이터 압축 (Data compression)",
          "text": "Data compression"
        },
        {
          "key": "D",
          "textEn": "Data duplication",
          "textKo": "데이터 복제 (Data duplication)",
          "text": "Data duplication"
        }
      ],
      "answerKey": "A",
      "answerText": "Data anonymization"
    },
    {
      "id": 331,
      "sourceNumber": 331,
      "title": "Question 331",
      "promptKo": "데이터 과학자가 Amazon SageMaker를 사용하여 모델을 구축하고 있습니다. 데이터 과학자는 모델이 특정 인구 통계 그룹에 대해 편향을 보이지 않도록 확인해야 합니다. 데이터세트와 모델에서 편향을 탐지하기 위해 사용해야 하는 Amazon SageMaker 기능은 무엇입니까?",
      "promptEn": "A data scientist is using Amazon SageMaker to build a model. The data scientist needs to ensure that the model does not exhibit bias toward any specific demographic group. Which Amazon SageMaker feature should be used to detect bias in the dataset and the model?",
      "explanation": [
        "- Amazon SageMaker Clarify는 기계 학습 모델의 편향(Bias)을 탐지하고 모델 예측에 대한 설명(Explainability)을 제공하는 도구입니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Amazon SageMaker Clarify: 데이터 편향 탐지 및 모델 예측에 대한 기여도를 시각화하여 제공하는 서비스."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker Clarify",
          "textKo": "Amazon SageMaker Clarify",
          "text": "Amazon SageMaker Clarify"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker Debugger",
          "textKo": "Amazon SageMaker Debugger",
          "text": "Amazon SageMaker Debugger"
        },
        {
          "key": "C",
          "textEn": "Amazon SageMaker Model Monitor",
          "textKo": "Amazon SageMaker Model Monitor",
          "text": "Amazon SageMaker Model Monitor"
        },
        {
          "key": "D",
          "textEn": "Amazon SageMaker Autopilot",
          "textKo": "Amazon SageMaker Autopilot",
          "text": "Amazon SageMaker Autopilot"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon SageMaker Clarify"
    },
    {
      "id": 332,
      "sourceNumber": 332,
      "title": "Question 332",
      "promptKo": "한 회사가 마케팅 콘텐츠를 생성하기 위해 생성형 AI 모델을 사용하고 있습니다. 회사는 생성된 콘텐츠가 브랜드 가이드라인을 준수하고 부적절한 자료를 포함하지 않도록 보장하고자 합니다. 이를 달성하기 위해 회사가 사용해야 하는 접근 방식은 무엇입니까?",
      "promptEn": "A company is using a generative AI model to create marketing content. The company wants to ensure that the generated content is aligned with its brand guidelines and does not contain inappropriate material. Which approach should the company use to achieve this?",
      "explanation": [
        "- 가드레일(Guardrails)과 콘텐츠 필터링은 생성형 AI 시스템에서 부적절하거나 정책에 어긋나는 출력을 방지하기 위한 안전 장치입니다. (예: Guardrails for Amazon Bedrock)"
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Guardrails: 생성형 AI 모델의 입력과 출력을 모니터링하여 유해한 콘텐츠를 차단하거나 거르는 규칙 집합."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Implement guardrails and content filtering",
          "textKo": "가드레일 및 콘텐츠 필터링 구현",
          "text": "Implement guardrails and content filtering"
        },
        {
          "key": "B",
          "textEn": "Increase the model size",
          "textKo": "모델 크기 증대",
          "text": "Increase the model size"
        },
        {
          "key": "C",
          "textEn": "Use a more diverse training dataset",
          "textKo": "더 다양한 학습 데이터세트 사용",
          "text": "Use a more diverse training dataset"
        },
        {
          "key": "D",
          "textEn": "Reduce the temperature parameter of the model",
          "textKo": "모델의 Temperature(온도) 파라미터 감소",
          "text": "Reduce the temperature parameter of the model"
        }
      ],
      "answerKey": "A",
      "answerText": "Implement guardrails and content filtering"
    },
    {
      "id": 333,
      "sourceNumber": 333,
      "title": "Question 333",
      "promptKo": "한 AI 회사가 컴퓨터 비전 프로젝트를 위해 대량의 이미지 데이터에 라벨을 붙이는 과정을 자동화하고자 합니다. 인간 리뷰어와 함께 데이터 라벨링을 위한 관리형 경험을 제공하는 데 사용해야 할 AWS 서비스 또는 기능은 무엇입니까?",
      "promptEn": "An AI company wants to automate the process of labeling large amounts of image data for a computer vision project. Which AWS service or feature should be used to provide a managed experience for data labeling with human reviewers?",
      "explanation": [
        "- Amazon SageMaker Ground Truth는 자체 인력, 제3자 업체 또는 Amazon Mechanical Turk를 사용하여 데이터에 라벨을 쉽게 지정할 수 있는 완전 관리형 데이터 라벨링 서비스입니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Amazon SageMaker Ground Truth: 머신러닝 학습 데이터를 정확하게 라벨링할 수 있도록 돕는 서비스."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker Ground Truth",
          "textKo": "Amazon SageMaker Ground Truth",
          "text": "Amazon SageMaker Ground Truth"
        },
        {
          "key": "B",
          "textEn": "Amazon Rekognition",
          "textKo": "Amazon Rekognition",
          "text": "Amazon Rekognition"
        },
        {
          "key": "C",
          "textEn": "Amazon Textract",
          "textKo": "Amazon Textract",
          "text": "Amazon Textract"
        },
        {
          "key": "D",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon SageMaker Ground Truth"
    },
    {
      "id": 334,
      "sourceNumber": 334,
      "title": "Question 334",
      "promptKo": "전통적인 머신러닝과 비교했을 때 생성형 AI의 주요 특징은 무엇입니까?",
      "promptEn": "Which of the following is a key characteristic of Generative AI compared to traditional Machine Learning?",
      "explanation": [
        "- 전통적인 ML은 주로 기존 데이터를 바탕으로 예측, 분류, 군집화를 수행하는 반면, 생성형 AI(Generative AI)는 기존의 패턴을 학습하여 완전히 새로운 데이터를 생성하는 데 초점을 맞춥니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "It creates new content such as text, images, or audio.",
          "textKo": "텍스트, 이미지, 오디오와 같은 새로운 콘텐츠를 생성합니다.",
          "text": "It creates new content such as text, images, or audio."
        },
        {
          "key": "B",
          "textEn": "It only performs classification tasks.",
          "textKo": "분류 작업만 수행합니다.",
          "text": "It only performs classification tasks."
        },
        {
          "key": "C",
          "textEn": "It requires labeled data for all types of learning.",
          "textKo": "모든 유형의 학습에 라벨링된 데이터가 필요합니다.",
          "text": "It requires labeled data for all types of learning."
        },
        {
          "key": "D",
          "textEn": "It is used only for supervised learning.",
          "textKo": "지도 학습(Supervised learning)에만 사용됩니다.",
          "text": "It is used only for supervised learning."
        }
      ],
      "answerKey": "A",
      "answerText": "It creates new content such as text, images, or audio."
    },
    {
      "id": 335,
      "sourceNumber": 335,
      "title": "Question 335",
      "promptKo": "개발자가 인프라를 관리하지 않고 API를 통해 사전 학습된 파운데이션 모델(Foundation Model)을 애플리케이션에 통합하려고 합니다. 개발자가 사용해야 하는 AWS 서비스는 무엇입니까?",
      "promptEn": "A developer wants to integrate a pre-trained foundation model into an application via an API without managing infrastructure. Which AWS service should the developer use?",
      "explanation": [
        "- Amazon Bedrock은 선도적인 AI 스타트업 및 Amazon의 파운데이션 모델을 API를 통해 사용할 수 있게 해주는 완전 관리형 서비스로, 인프라 관리가 필요 없습니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Foundation Model (파운데이션 모델): 방대한 양의 데이터를 학습하여 다양한 하위 작업에 적응할 수 있는 대규모 모델."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Bedrock",
          "textKo": "Amazon Bedrock",
          "text": "Amazon Bedrock"
        },
        {
          "key": "B",
          "textEn": "Amazon SageMaker JumpStart",
          "textKo": "Amazon SageMaker JumpStart",
          "text": "Amazon SageMaker JumpStart"
        },
        {
          "key": "C",
          "textEn": "AWS Lambda",
          "textKo": "AWS Lambda",
          "text": "AWS Lambda"
        },
        {
          "key": "D",
          "textEn": "Amazon EC2",
          "textKo": "Amazon EC2",
          "text": "Amazon EC2"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon Bedrock"
    },
    {
      "id": 336,
      "sourceNumber": 336,
      "title": "Question 336",
      "promptKo": "거대 언어 모델(LLM)의 출력을 가이드하기 위해 프롬프트에 소수의 예시를 제공하는 관행을 무엇이라고 합니까?",
      "promptEn": "Which concept refers to the practice of providing a small number of examples in the prompt to guide a large language model's output?",
      "explanation": [
        "- Few-shot prompting: 모델에게 수행할 작업의 예시를 몇 개(Few) 보여주어 성능을 높이는 기법입니다.",
        "- Zero-shot: 예시 없이 지시만 내리는 것.",
        "- Fine-tuning: 모델 자체의 파라미터를 업데이트하는 과정."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Few-shot prompting",
          "textKo": "퓨샷 프롬프팅 (Few-shot prompting)",
          "text": "Few-shot prompting"
        },
        {
          "key": "B",
          "textEn": "Zero-shot prompting",
          "textKo": "제로샷 프롬프팅 (Zero-shot prompting)",
          "text": "Zero-shot prompting"
        },
        {
          "key": "C",
          "textEn": "Chain-of-thought prompting",
          "textKo": "생각의 사슬 프롬프팅 (Chain-of-thought prompting)",
          "text": "Chain-of-thought prompting"
        },
        {
          "key": "D",
          "textEn": "Fine-tuning",
          "textKo": "미세 조정 (Fine-tuning)",
          "text": "Fine-tuning"
        }
      ],
      "answerKey": "A",
      "answerText": "Few-shot prompting"
    },
    {
      "id": 337,
      "sourceNumber": 337,
      "title": "Question 337",
      "promptKo": "한 회사는 생성형 AI 모델이 확신에 차 있지만 틀리거나 터무니없는 답변을 생성할까 봐 걱정하고 있습니다. 이러한 현상을 무엇이라고 합니까?",
      "promptEn": "A company is concerned that its generative AI model might produce confident but incorrect or nonsensical answers. What is this phenomenon called?",
      "explanation": [
        "- Hallucination (환각): AI 모델이 사실이 아니거나 논리적으로 맞지 않는 정보를 마치 사실인 것처럼 그럴듯하게 생성하는 현상입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Hallucination",
          "textKo": "환각 (Hallucination)",
          "text": "Hallucination"
        },
        {
          "key": "B",
          "textEn": "Overfitting",
          "textKo": "과적합 (Overfitting)",
          "text": "Overfitting"
        },
        {
          "key": "C",
          "textEn": "Underfitting",
          "textKo": "과소적합 (Underfitting)",
          "text": "Underfitting"
        },
        {
          "key": "D",
          "textEn": "Vanishing gradient",
          "textKo": "기울기 소실 (Vanishing gradient)",
          "text": "Vanishing gradient"
        }
      ],
      "answerKey": "A",
      "answerText": "Hallucination"
    },
    {
      "id": 338,
      "sourceNumber": 338,
      "title": "Question 338",
      "promptKo": "회사의 내부 데이터를 사용하여 질문에 답변하는 검색 기반 경험을 제공하는 AWS 관리형 서비스는 무엇입니까?",
      "promptEn": "Which of the following is an AWS-managed service that provides a search-based experience to answer questions using a company's internal data?",
      "explanation": [
        "(AIF 기준)",
        "- Amazon Q는 기업용 생성형 AI 비서로, 기업 내부 문서를 연결하여 질문에 답변하고 콘텐츠를 생성하는 데 최적화되어 있습니다.",
        "- (참고) Amazon Kendra는 지능형 검색 서비스로, Q의 답변 성능을 뒷받침하는 기술로 사용되기도 합니다. 최신 문제 경향상 생성형 AI 기반 답변은 'Amazon Q'가 정답일 확률이 높습니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Q (formerly Amazon Q Business)",
          "textKo": "Amazon Q (구 Amazon Q Business)",
          "text": "Amazon Q (formerly Amazon Q Business)"
        },
        {
          "key": "B",
          "textEn": "Amazon Lex",
          "textKo": "Amazon Lex",
          "text": "Amazon Lex"
        },
        {
          "key": "C",
          "textEn": "Amazon Polly",
          "textKo": "Amazon Polly",
          "text": "Amazon Polly"
        },
        {
          "key": "D",
          "textEn": "Amazon Kendra",
          "textKo": "Amazon Kendra",
          "text": "Amazon Kendra"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon Q (또는 D. Amazon Kendra - 컨텍스트에 따라 다를 수 있으나 현재 생성형 AI 시험에서는 Q가 핵심)"
    },
    {
      "id": 339,
      "sourceNumber": 339,
      "title": "Question 339",
      "promptKo": "개발자가 특정 작업을 위해 더 작고 전문화된 모델을 사용하여 거대 언어 모델의 비용과 지연 시간을 줄이려고 합니다. 큰 '교사(teacher)' 모델의 동작을 모방하도록 작은 모델을 학습시키는 기술은 무엇입니까?",
      "promptEn": "A developer wants to reduce the cost and latency of a large language model by using a smaller, more specialized model for specific tasks. Which technique involves training a smaller model to mimic the behavior of a larger teacher model?",
      "explanation": [
        "- Knowledge Distillation: 크고 복잡한 모델(Teacher)의 지식을 더 작고 가벼운 모델(Student)로 전이시켜, 성능은 최대한 유지하면서 효율성을 높이는 기법입니다.",
        "제공해주신 링크들의 내용을 바탕으로 AWS Certified AI Practitioner (AIF-C01) 시험 스타일의 문제 세트를 구성해 드립니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Knowledge distillation",
          "textKo": "지식 증류 (Knowledge distillation)",
          "text": "Knowledge distillation"
        },
        {
          "key": "B",
          "textEn": "Quantization",
          "textKo": "양자화 (Quantization)",
          "text": "Quantization"
        },
        {
          "key": "C",
          "textEn": "Pruning",
          "textKo": "가지치기 (Pruning)",
          "text": "Pruning"
        },
        {
          "key": "D",
          "textEn": "Reinforcement learning",
          "textKo": "강화 학습 (Reinforcement learning)",
          "text": "Reinforcement learning"
        }
      ],
      "answerKey": "A",
      "answerText": "Knowledge distillation"
    },
    {
      "id": 340,
      "sourceNumber": 340,
      "title": "Question 340",
      "promptKo": "한 회사가 직원 퇴사(attrition)를 예측하기 위한 머신러닝 모델을 구축하려고 합니다. 데이터 세트에는 이름과 직원 ID를 포함한 민감한 정보가 포함되어 있습니다. 데이터의 학습 유용성을 유지하면서 개별 직원의 개인정보를 보호하기 위해 AI 실무자가 사용해야 하는 기술은 무엇입니까?",
      "promptEn": "A company wants to build a machine learning model to predict employee attrition. The dataset contains sensitive information, including names and employee IDs. Which technique should the AI practitioner use to protect the privacy of individual employees while maintaining the data's utility for model training?",
      "explanation": [
        "- 데이터 익명화는 PII(개인 식별 정보)를 제거하거나 수정하여 개인의 신원을 확인할 수 없게 만드는 과정으로, 데이터 유용성을 보존하면서 프라이버시를 보호하는 핵심 기술입니다.",
        "- 데이터 증강은 데이터 양을 늘리는 기술이며, 정규화는 값의 범위를 조정하는 기술입니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Data Anonymization: 개인 식별이 가능한 정보를 삭제하거나 마스킹하여 프라이버시를 보호하는 기법."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Data augmentation",
          "textKo": "데이터 증강 (Data augmentation)",
          "text": "Data augmentation"
        },
        {
          "key": "B",
          "textEn": "Data anonymization",
          "textKo": "데이터 익명화 (Data anonymization)",
          "text": "Data anonymization"
        },
        {
          "key": "C",
          "textEn": "Data normalization",
          "textKo": "데이터 정규화 (Data normalization)",
          "text": "Data normalization"
        },
        {
          "key": "D",
          "textEn": "Data duplication",
          "textKo": "데이터 중복 (Data duplication)",
          "text": "Data duplication"
        }
      ],
      "answerKey": "B",
      "answerText": "Data anonymization"
    },
    {
      "id": 341,
      "sourceNumber": 341,
      "title": "Question 341",
      "promptKo": "한 회사가 대규모 언어 모델(LLM)을 사용하는 생성형 AI 애플리케이션을 개발하고 있습니다. 회사는 모델이 유해하거나 부적절한 콘텐츠를 생성하지 않도록 보장하고자 합니다. 콘텐츠 필터링을 구현하기 위해 회사가 사용해야 하는 AWS 서비스 또는 기능은 무엇입니까?",
      "promptEn": "A company is developing a generative AI application that uses a Large Language Model (LLM). The company wants to ensure that the model does not generate harmful or inappropriate content. Which AWS service or feature should the company use to implement content filtering?",
      "explanation": [
        "- Guardrails for Amazon Bedrock은 책임감 있는 AI 정책에 따라 유해한 콘텐츠를 필터링하고 모델의 응답을 제어하는 안전 장치를 제공합니다.",
        "- Rekognition은 이미지/비디오 분석용이며, Model Monitor는 성능 저하 감지용입니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Guardrails: 생성형 AI 모델의 입력 및 출력에 대해 거부 주제, 필터링 수준 등을 설정하는 안전 관리 도구."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Rekognition",
          "textKo": "Amazon Rekognition",
          "text": "Amazon Rekognition"
        },
        {
          "key": "B",
          "textEn": "Guardrails for Amazon Bedrock",
          "textKo": "Guardrails for Amazon Bedrock",
          "text": "Guardrails for Amazon Bedrock"
        },
        {
          "key": "C",
          "textEn": "Amazon SageMaker Model Monitor",
          "textKo": "Amazon SageMaker Model Monitor",
          "text": "Amazon SageMaker Model Monitor"
        },
        {
          "key": "D",
          "textEn": "Amazon Inspector",
          "textKo": "Amazon Inspector",
          "text": "Amazon Inspector"
        }
      ],
      "answerKey": "B",
      "answerText": "Guardrails for Amazon Bedrock"
    },
    {
      "id": 342,
      "sourceNumber": 342,
      "title": "Question 342",
      "promptKo": "AI 실무자가 이진 분류(binary classification) 모델의 성능을 평가해야 합니다. 실무자는 진양성률(true positive rate)과 위양성률(false positive rate) 사이의 트레이드오프를 시각화하려고 합니다. 다음 중 실무자가 사용해야 하는 것은 무엇입니까?",
      "promptEn": "An AI practitioner needs to evaluate the performance of a binary classification model. The practitioner wants to visualize the trade-off between the true positive rate and the false positive rate. Which of the following should the practitioner use?",
      "explanation": [
        "- ROC 곡선은 임계값 변화에 따른 TPR과 FPR의 관계를 보여주는 시각화 도구입니다.",
        "- 혼동 행렬은 수치를 표로 나타내며, MSE는 회귀 모델용 지표입니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- ROC Curve: 분류 모델의 성능을 판단하기 위해 임계값별 민감도와 특이도를 그래프로 나타낸 것."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Confusion matrix",
          "textKo": "혼동 행렬 (Confusion matrix)",
          "text": "Confusion matrix"
        },
        {
          "key": "B",
          "textEn": "Receiver Operating Characteristic (ROC) curve",
          "textKo": "ROC 곡선 (Receiver Operating Characteristic curve)",
          "text": "Receiver Operating Characteristic (ROC) curve"
        },
        {
          "key": "C",
          "textEn": "Mean Squared Error (MSE)",
          "textKo": "평균 제곱 오차 (Mean Squared Error)",
          "text": "Mean Squared Error (MSE)"
        },
        {
          "key": "D",
          "textEn": "Elbow method",
          "textKo": "엘보우 방법 (Elbow method)",
          "text": "Elbow method"
        }
      ],
      "answerKey": "B",
      "answerText": "Receiver Operating Characteristic (ROC) curve"
    },
    {
      "id": 343,
      "sourceNumber": 343,
      "title": "Question 343",
      "promptKo": "한 회사가 사전 학습된 대규모 언어 모델(LLM)을 사용하려 하지만, 회사의 내부 비공개 문서에 대한 특정 지식이 필요합니다. 회사는 재학습 비용과 노력을 최소화하고자 합니다. 회사가 사용해야 하는 접근 방식은 무엇입니까?",
      "promptEn": "A company wants to use a pre-trained Large Language Model (LLM) but needs it to have specific knowledge about the company's internal private documents. The company wants to minimize the cost and effort of retraining. Which approach should the company use?",
      "explanation": [
        "- RAG는 외부 지식 베이스(내부 문서)에서 관련 정보를 검색하여 모델의 답변에 포함시키는 방식으로, 모델 자체를 재학습하지 않고도 최신/내부 정보를 반영할 수 있는 가장 효율적인 방법입니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- RAG: 모델 외부의 데이터를 검색하여 답변의 정확성과 신뢰성을 높이는 기술."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Training a model from scratch",
          "textKo": "모델 처음부터 학습 (Training from scratch)",
          "text": "Training a model from scratch"
        },
        {
          "key": "B",
          "textEn": "Prompt engineering",
          "textKo": "프롬프트 엔지니어링 (Prompt engineering)",
          "text": "Prompt engineering"
        },
        {
          "key": "C",
          "textEn": "Retrieval-Augmented Generation (RAG)",
          "textKo": "검색 증강 생성 (Retrieval-Augmented Generation, RAG)",
          "text": "Retrieval-Augmented Generation (RAG)"
        },
        {
          "key": "D",
          "textEn": "Hyperparameter optimization",
          "textKo": "하이퍼파라미터 최적화",
          "text": "Hyperparameter optimization"
        }
      ],
      "answerKey": "C",
      "answerText": "Retrieval-Augmented Generation (RAG)"
    },
    {
      "id": 344,
      "sourceNumber": 344,
      "title": "Question 344",
      "promptKo": "머신러닝 파이프라인의 어떤 단계에서 결측값 처리, 이상치 제거 및 원시 데이터를 학습에 적합한 형식으로 변환하는 작업이 수행됩니까?",
      "promptEn": "Which phase of the machine learning pipeline involves handling missing values, removing outliers, and transforming raw data into a suitable format for training?",
      "explanation": [
        "- 데이터 전처리는 원시 데이터의 노이즈를 제거하고 결측치를 처리하여 학습이 가능하도록 데이터를 정제하는 단계입니다.",
        "- 피처 엔지니어링은 데이터에서 새로운 변수를 추출하거나 선택하는 과정에 더 가깝습니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Data Preprocessing: 데이터를 정제하고 변환하여 모델 학습의 품질을 높이는 기초 단계."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Model evaluation",
          "textKo": "모델 평가",
          "text": "Model evaluation"
        },
        {
          "key": "B",
          "textEn": "Data preprocessing",
          "textKo": "데이터 전처리 (Data preprocessing)",
          "text": "Data preprocessing"
        },
        {
          "key": "C",
          "textEn": "Model deployment",
          "textKo": "모델 배포",
          "text": "Model deployment"
        },
        {
          "key": "D",
          "textEn": "Feature engineering",
          "textKo": "피처 엔지니어링 (Feature engineering)",
          "text": "Feature engineering"
        }
      ],
      "answerKey": "B",
      "answerText": "Data preprocessing"
    },
    {
      "id": 345,
      "sourceNumber": 345,
      "title": "Question 345",
      "promptKo": "한 회사가 Amazon Bedrock을 사용하여 챗봇을 만들고 있습니다. 회사는 상호 작용이 특정 주제 범위 내에서 유지되고 금지된 콘텐츠를 차단하기를 원합니다. 이 요구 사항을 직접적으로 해결하는 기능은 무엇입니까?",
      "promptEn": "A company is using Amazon Bedrock to build a chatbot. They want to ensure that the interactions remain within a specific set of topics and block prohibited content. Which feature directly addresses this requirement?",
      "explanation": [
        "- Guardrails는 특정 주제에 대한 필터링 및 금지된 질문/답변에 대한 정책을 설정하는 데 사용됩니다. 341번 문제와 유사한 맥락의 서비스 활용 문제입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Bedrock Knowledge Bases",
          "textKo": "Bedrock 지식 베이스 (Knowledge Bases)",
          "text": "Bedrock Knowledge Bases"
        },
        {
          "key": "B",
          "textEn": "Bedrock Guardrails",
          "textKo": "Bedrock 가드레일 (Guardrails)",
          "text": "Bedrock Guardrails"
        },
        {
          "key": "C",
          "textEn": "Bedrock Provisioned Throughput",
          "textKo": "Bedrock 프로비저닝된 처리량 (Provisioned Throughput)",
          "text": "Bedrock Provisioned Throughput"
        },
        {
          "key": "D",
          "textEn": "Bedrock Model Customization",
          "textKo": "Bedrock 모델 맞춤화 (Model Customization)",
          "text": "Bedrock Model Customization"
        }
      ],
      "answerKey": "B",
      "answerText": "Bedrock Guardrails"
    },
    {
      "id": 346,
      "sourceNumber": 346,
      "title": "Question 346",
      "promptKo": "AI 윤리의 관점에서 \"편향(bias)\"이라는 용어는 일반적으로 무엇을 의미합니까?",
      "promptEn": "In the context of AI ethics, what does the term \"bias\" typically refer to?",
      "explanation": [
        "- AI에서 편향은 데이터나 알고리즘의 결함으로 인해 특정 인종, 성별, 그룹에 대해 불이익을 주거나 왜곡된 결과를 내는 것을 의미합니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Bias (편향): 학습 데이터의 불균형이나 알고리즘 특성으로 인해 발생하는 비대칭적 결과."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "The speed at which a model makes predictions",
          "textKo": "모델이 예측을 수행하는 속도",
          "text": "The speed at which a model makes predictions"
        },
        {
          "key": "B",
          "textEn": "Systematic errors in a model that lead to unfair treatment of certain groups",
          "textKo": "특정 집단에 대한 불공정한 처우로 이어지는 모델의 체계적인 오류",
          "text": "Systematic errors in a model that lead to unfair treatment of certain groups"
        },
        {
          "key": "C",
          "textEn": "The cost associated with training a large model",
          "textKo": "대규모 모델 학습과 관련된 비용",
          "text": "The cost associated with training a large model"
        },
        {
          "key": "D",
          "textEn": "The process of encrypting training data",
          "textKo": "학습 데이터를 암호화하는 과정",
          "text": "The process of encrypting training data"
        }
      ],
      "answerKey": "B",
      "answerText": "Systematic errors in a model that lead to unfair treatment of certain groups"
    },
    {
      "id": 347,
      "sourceNumber": 347,
      "title": "Question 347",
      "promptKo": "Amazon 및 기타 선도적인 AI 기업의 파운데이션 모델을 사용하여 생성형 AI 애플리케이션을 구축하고 확장할 수 있는 서버리스 환경을 제공하는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service provides a serverless experience to build and scale generative AI applications using foundation models from Amazon and other leading AI companies?",
      "explanation": [
        "- Amazon Bedrock은 다양한 회사의 파운데이션 모델을 API를 통해 쉽게 사용할 수 있게 해주는 관리형(서버리스) 서비스입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker",
          "textKo": "Amazon SageMaker",
          "text": "Amazon SageMaker"
        },
        {
          "key": "B",
          "textEn": "Amazon Bedrock",
          "textKo": "Amazon Bedrock",
          "text": "Amazon Bedrock"
        },
        {
          "key": "C",
          "textEn": "Amazon Lex",
          "textKo": "Amazon Lex",
          "text": "Amazon Lex"
        },
        {
          "key": "D",
          "textEn": "Amazon Polly",
          "textKo": "Amazon Polly",
          "text": "Amazon Polly"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon Bedrock"
    },
    {
      "id": 348,
      "sourceNumber": 348,
      "title": "Question 348",
      "promptKo": "데이터 과학자가 딥러닝 모델을 학습시키고 있습니다. 모델이 학습 데이터에서는 매우 우수한 성능을 보이지만, 새로운 데이터(보지 못한 데이터)에 대해서는 일반화에 실패합니다. 이 현상을 무엇이라고 합니까?",
      "promptEn": "A data scientist is training a deep learning model. The model performs very well on the training data but fails to generalize to new, unseen data. What is this phenomenon called?",
      "explanation": [
        "- 과적합(Overfitting)은 모델이 학습 데이터의 노이즈까지 과하게 학습하여 실제 데이터에 대한 예측력이 떨어지는 상태를 말합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Underfitting",
          "textKo": "과소적합 (Underfitting)",
          "text": "Underfitting"
        },
        {
          "key": "B",
          "textEn": "Overfitting",
          "textKo": "과적합 (Overfitting)",
          "text": "Overfitting"
        },
        {
          "key": "C",
          "textEn": "Feature scaling",
          "textKo": "피처 스케일링 (Feature scaling)",
          "text": "Feature scaling"
        },
        {
          "key": "D",
          "textEn": "Gradient descent",
          "textKo": "경사 하강법 (Gradient descent)",
          "text": "Gradient descent"
        }
      ],
      "answerKey": "B",
      "answerText": "Overfitting Shutterstock 탐색"
    },
    {
      "id": 349,
      "sourceNumber": 349,
      "title": "Question 349",
      "promptKo": "생성형 AI 모델에서 하이퍼파라미터로 \"온도(Temperature)\"를 사용하는 주된 목적은 무엇입니까?",
      "promptEn": "What is the primary purpose of using \"Temperature\" as a hyperparameter in a generative AI model?",
      "explanation": [
        "- 온도(Temperature) 파라미터가 낮으면 모델은 가장 확률이 높은 단어를 선택하여 결정론적인 답변을 하고, 높으면 더 다양하고 창의적인(무작위적인) 답변을 생성합니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Temperature: 생성형 모델의 확률 분포를 조절하여 결과물의 다양성을 제어하는 값.",
        "제공해주신 링크의 내용을 바탕으로 AWS Certified AI Practitioner (AIF-C01) 시험 대비 문제 세트를 요청하신 형식에 맞춰 정리해 드립니다."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "To control the physical heat of the GPU during inference",
          "textKo": "추론 중 GPU의 물리적 발열을 제어하기 위해",
          "text": "To control the physical heat of the GPU during inference"
        },
        {
          "key": "B",
          "textEn": "To adjust the randomness and creativity of the model's output",
          "textKo": "모델 출력의 무작위성과 창의성을 조절하기 위해",
          "text": "To adjust the randomness and creativity of the model's output"
        },
        {
          "key": "C",
          "textEn": "To increase the speed of the training process",
          "textKo": "학습 과정의 속도를 높이기 위해",
          "text": "To increase the speed of the training process"
        },
        {
          "key": "D",
          "textEn": "To define the maximum number of tokens generated",
          "textKo": "생성되는 최대 토큰 수를 정의하기 위해",
          "text": "To define the maximum number of tokens generated"
        }
      ],
      "answerKey": "B",
      "answerText": "To adjust the randomness and creativity of the model's output"
    },
    {
      "id": 350,
      "sourceNumber": 350,
      "title": "Question 350",
      "promptKo": "한 회사가 스캔된 문서에서 텍스트, 표 및 양식 데이터를 추출해야 합니다. 어떤 AWS 서비스를 사용해야 합니까?",
      "promptEn": "A company needs to extract text, tables, and form data from scanned documents. Which AWS service should they use?",
      "explanation": [
        "- Amazon Textract는 단순한 광학 문자 인식(OCR)을 넘어 문서에서 구조화된 데이터(표, 양식 등)를 자동으로 추출하는 머신러닝 서비스입니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Amazon Textract: 문서 내의 데이터를 자동으로 추출하여 구조화된 형식으로 제공하는 AI 서비스."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Rekognition",
          "textKo": "Amazon Rekognition",
          "text": "Amazon Rekognition"
        },
        {
          "key": "B",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        },
        {
          "key": "C",
          "textEn": "Amazon Textract",
          "textKo": "Amazon Textract",
          "text": "Amazon Textract"
        },
        {
          "key": "D",
          "textEn": "Amazon Translate",
          "textKo": "Amazon Translate",
          "text": "Amazon Translate"
        }
      ],
      "answerKey": "C",
      "answerText": "Amazon Textract"
    },
    {
      "id": 351,
      "sourceNumber": 351,
      "title": "Question 351",
      "promptKo": "AI 실무자가 모델을 평가하고 있습니다. 모델의 성능은 학습 및 테스트 데이터 세트 전반에 걸쳐 일관되게 나타나지만, 특정 인구 통계 그룹에 대해서는 지속적으로 부정확합니다. 이것은 무엇의 예입니까?",
      "promptEn": "An AI practitioner is evaluating a model. The model's performance is consistent across training and testing datasets, but it is consistently inaccurate for a specific demographic group. What is this an example of?",
      "explanation": [
        "- 특정 그룹에 대해 결과가 일관되게 왜곡되거나 성능이 낮은 현상은 데이터의 불균형이나 알고리즘 설계에서 비롯된 '편향'에 해당합니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Model Bias: 모델이 특정 결과나 그룹을 선호하거나 소홀히 하여 불공정한 결과를 내는 체계적 오류."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Overfitting",
          "textKo": "과적합 (Overfitting)",
          "text": "Overfitting"
        },
        {
          "key": "B",
          "textEn": "Underfitting",
          "textKo": "과소적합 (Underfitting)",
          "text": "Underfitting"
        },
        {
          "key": "C",
          "textEn": "Model bias",
          "textKo": "모델 편향 (Model bias)",
          "text": "Model bias"
        },
        {
          "key": "D",
          "textEn": "Data drift",
          "textKo": "데이터 드리프트 (Data drift)",
          "text": "Data drift"
        }
      ],
      "answerKey": "C",
      "answerText": "Model bias"
    },
    {
      "id": 352,
      "sourceNumber": 352,
      "title": "Question 352",
      "promptKo": "한 회사가 생성형 AI 애플리케이션을 개발하고 있습니다. 주어진 프롬프트에 대해 모델이 매번 동일한 출력을 생성하도록 보장하려고 합니다. 어떤 파라미터를 0으로 설정해야 합니까?",
      "promptEn": "A company is developing a generative AI application. They want to ensure the model produces the same output for a given prompt every time. Which parameter should be set to 0?",
      "explanation": [
        "- 온도(Temperature) 파라미터를 0으로 설정하면 모델이 무작위성을 배제하고 가장 높은 확률을 가진 토큰만 선택하게 되어 결정론적인(항상 같은) 결과를 출력합니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Deterministic: 동일한 입력에 대해 항상 동일한 출력이 나오는 성질."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Top-P",
          "textKo": "Top-P",
          "text": "Top-P"
        },
        {
          "key": "B",
          "textEn": "Max tokens",
          "textKo": "최대 토큰 (Max tokens)",
          "text": "Max tokens"
        },
        {
          "key": "C",
          "textEn": "Temperature",
          "textKo": "온도 (Temperature)",
          "text": "Temperature"
        },
        {
          "key": "D",
          "textEn": "Presence penalty",
          "textKo": "존재 패널티 (Presence penalty)",
          "text": "Presence penalty"
        }
      ],
      "answerKey": "C",
      "answerText": "Temperature"
    },
    {
      "id": 353,
      "sourceNumber": 353,
      "title": "Question 353",
      "promptKo": "개발자가 자연어를 이해하고 항공권 예약과 같은 작업을 실행할 수 있는 챗봇을 만들고자 합니다. 어떤 AWS 서비스를 사용해야 합니까?",
      "promptEn": "A developer wants to build a chatbot that can understand natural language and execute tasks like booking a flight. Which AWS service should the developer use?",
      "explanation": [
        "- Amazon Lex는 음성과 텍스트를 사용하는 애플리케이션에 대화형 인터페이스를 구축하기 위한 서비스로, 챗봇 제작의 핵심 서비스입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Polly",
          "textKo": "Amazon Polly",
          "text": "Amazon Polly"
        },
        {
          "key": "B",
          "textEn": "Amazon Lex",
          "textKo": "Amazon Lex",
          "text": "Amazon Lex"
        },
        {
          "key": "C",
          "textEn": "Amazon Transcribe",
          "textKo": "Amazon Transcribe",
          "text": "Amazon Transcribe"
        },
        {
          "key": "D",
          "textEn": "Amazon Kendra",
          "textKo": "Amazon Kendra",
          "text": "Amazon Kendra"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon Lex"
    },
    {
      "id": 354,
      "sourceNumber": 354,
      "title": "Question 354",
      "promptKo": "대규모 언어 모델(LLM)이 작업을 이해하도록 돕기 위해 프롬프트 내에 소수의 예시를 제공하는 관행을 무엇이라고 합니까?",
      "promptEn": "Which concept refers to the practice of providing a small number of examples in the prompt to help a Large Language Model (LLM) understand a task?",
      "explanation": [
        "- Few-shot prompting은 모델에게 2~5개 정도의 예시를 보여주어 원하는 결과 형식을 학습시키는 기법입니다. 예시가 아예 없으면 Zero-shot이라고 합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Zero-shot prompting",
          "textKo": "제로샷 프롬프팅 (Zero-shot prompting)",
          "text": "Zero-shot prompting"
        },
        {
          "key": "B",
          "textEn": "Few-shot prompting",
          "textKo": "퓨샷 프롬프팅 (Few-shot prompting)",
          "text": "Few-shot prompting"
        },
        {
          "key": "C",
          "textEn": "Chain-of-thought prompting",
          "textKo": "생각의 사슬 프롬프팅 (Chain-of-thought prompting)",
          "text": "Chain-of-thought prompting"
        },
        {
          "key": "D",
          "textEn": "Fine-tuning",
          "textKo": "미세 조정 (Fine-tuning)",
          "text": "Fine-tuning"
        }
      ],
      "answerKey": "B",
      "answerText": "Few-shot prompting"
    },
    {
      "id": 355,
      "sourceNumber": 355,
      "title": "Question 355",
      "promptKo": "한 회사가 고객 리뷰의 감정(긍정, 부정, 중립)을 식별하고자 합니다. 어떤 AWS 서비스가 가장 적합합니까?",
      "promptEn": "A company wants to identify the sentiment of customer reviews (Positive, Negative, Neutral). Which AWS service is best suited for this?",
      "explanation": [
        "- Amazon Comprehend는 자연어 처리(NLP) 서비스로, 텍스트 내에서 감정 분석, 주제 추출, 개체명 인식 등을 수행합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Rekognition",
          "textKo": "Amazon Rekognition",
          "text": "Amazon Rekognition"
        },
        {
          "key": "B",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        },
        {
          "key": "C",
          "textEn": "Amazon Personalize",
          "textKo": "Amazon Personalize",
          "text": "Amazon Personalize"
        },
        {
          "key": "D",
          "textEn": "Amazon Forecast",
          "textKo": "Amazon Forecast",
          "text": "Amazon Forecast"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon Comprehend"
    },
    {
      "id": 356,
      "sourceNumber": 356,
      "title": "Question 356",
      "promptKo": "한 회사가 자사 전자상거래 웹사이트를 위한 추천 엔진을 구축하려고 합니다. 어떤 AWS 서비스를 사용해야 합니까?",
      "promptEn": "A company wants to build a recommendation engine for its e-commerce website. Which AWS service should it use?",
      "explanation": [
        "- Amazon Personalize는 Amazon.com에서 사용하는 기술을 기반으로 개별 사용자에게 맞춤형 추천을 제공하는 머신러닝 서비스입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Personalize",
          "textKo": "Amazon Personalize",
          "text": "Amazon Personalize"
        },
        {
          "key": "B",
          "textEn": "Amazon Lex",
          "textKo": "Amazon Lex",
          "text": "Amazon Lex"
        },
        {
          "key": "C",
          "textEn": "Amazon Polly",
          "textKo": "Amazon Polly",
          "text": "Amazon Polly"
        },
        {
          "key": "D",
          "textEn": "Amazon SageMaker Ground Truth",
          "textKo": "Amazon SageMaker Ground Truth",
          "text": "Amazon SageMaker Ground Truth"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon Personalize"
    },
    {
      "id": 357,
      "sourceNumber": 357,
      "title": "Question 357",
      "promptKo": "RAG(검색 증강 생성)를 사용하는 주된 이점은 무엇입니까?",
      "promptEn": "What is the primary benefit of using Retrieval-Augmented Generation (RAG)?",
      "explanation": [
        "- RAG는 모델이 학습하지 않은 최신 데이터나 내부 문서를 검색하여 답변의 근거로 삼게 함으로써, 틀린 정보를 말하는 환각 현상을 억제합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "It speeds up the inference time of the model.",
          "textKo": "모델의 추론 속도를 높입니다.",
          "text": "It speeds up the inference time of the model."
        },
        {
          "key": "B",
          "textEn": "It reduces hallucinations by grounding the model in external, up-to-date data.",
          "textKo": "외부의 최신 데이터에 모델을 근거하게 하여 환각(hallucination) 현상을 줄입니다.",
          "text": "It reduces hallucinations by grounding the model in external, up-to-date data."
        },
        {
          "key": "C",
          "textEn": "It reduces the size of the Large Language Model.",
          "textKo": "대규모 언어 모델의 크기를 줄입니다.",
          "text": "It reduces the size of the Large Language Model."
        },
        {
          "key": "D",
          "textEn": "It replaces the need for any prompt engineering.",
          "textKo": "프롬프트 엔지니어링의 필요성을 완전히 대체합니다.",
          "text": "It replaces the need for any prompt engineering."
        }
      ],
      "answerKey": "B",
      "answerText": "It reduces hallucinations by grounding the model in external, up-to-date data."
    },
    {
      "id": 358,
      "sourceNumber": 358,
      "title": "Question 358",
      "promptKo": "한 회사가 AI 워크로드의 환경적 영향에 대해 우려하고 있습니다. AWS 공동 책임 모델에 따르면, 지속 가능성(sustainability)과 관련하여 회사의 책임은 무엇입니까?",
      "promptEn": "A company is concerned about the environmental impact of its AI workloads. According to the AWS Shared Responsibility Model, which is the company's responsibility regarding sustainability?",
      "explanation": [
        "- 클라우드 '내부'의 지속 가능성(코드 최적화, 인스턴스 선택 등)은 고객 책임이며, 클라우드 '자체'의 인프라(냉각, 하드웨어)는 AWS의 책임입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Optimizing resource utilization by rightsizing instances",
          "textKo": "인스턴스 크기 조절을 통해 자원 활용 최적화",
          "text": "Optimizing resource utilization by rightsizing instances"
        },
        {
          "key": "B",
          "textEn": "Managing the cooling of the data center",
          "textKo": "데이터 센터의 냉각 시스템 관리",
          "text": "Managing the cooling of the data center"
        },
        {
          "key": "C",
          "textEn": "Designing more energy-efficient server hardware",
          "textKo": "에너지 효율적인 서버 하드웨어 설계",
          "text": "Designing more energy-efficient server hardware"
        },
        {
          "key": "D",
          "textEn": "Disposing of decommissioned hardware responsibly",
          "textKo": "폐기된 하드웨어의 책임 있는 처리",
          "text": "Disposing of decommissioned hardware responsibly"
        }
      ],
      "answerKey": "A",
      "answerText": "Optimizing resource utilization by rightsizing instances"
    },
    {
      "id": 359,
      "sourceNumber": 359,
      "title": "Question 359",
      "promptKo": "인프라를 관리하지 않고 API를 통해 파운데이션 모델(FM)을 사용하여 생성형 AI 애플리케이션을 구축할 수 있게 해주는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service allows you to build generative AI applications using foundation models (FMs) via an API without managing infrastructure?",
      "explanation": [
        "- Amazon Bedrock은 다양한 파운데이션 모델을 서버리스 환경에서 API를 통해 호출하여 사용할 수 있는 완전 관리형 서비스입니다.",
        "죄송합니다! 가독성을 높이기 위해 줄바꿈과 서식을 더 깔끔하게 다듬어서 다시 정리해 드릴게요."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker",
          "textKo": "Amazon SageMaker",
          "text": "Amazon SageMaker"
        },
        {
          "key": "B",
          "textEn": "Amazon Bedrock",
          "textKo": "Amazon Bedrock",
          "text": "Amazon Bedrock"
        },
        {
          "key": "C",
          "textEn": "Amazon Kendra",
          "textKo": "Amazon Kendra",
          "text": "Amazon Kendra"
        },
        {
          "key": "D",
          "textEn": "Amazon QuickSight",
          "textKo": "Amazon QuickSight",
          "text": "Amazon QuickSight"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon Bedrock"
    },
    {
      "id": 360,
      "sourceNumber": 360,
      "title": "Question 360",
      "promptKo": "한 회사가 고객 지원을 위해 생성형 AI 모델을 사용하고 있습니다. 모델이 가끔 사실에 근거하지 않은 답변을 매우 자신 있게 제공하는 경우가 있습니다. 이러한 동작을 일컫는 용어는 무엇입니까?",
      "promptEn": "A company is using a generative AI model to provide customer support. The model sometimes provides answers that are not based on facts and sounds very confident. What is the term for this behavior?",
      "explanation": [
        "- 환각(Hallucination)은 LLM이 학습 데이터에 없는 내용을 마치 사실인 것처럼 그럴싸하게 지어내어 답변하는 현상을 말합니다."
      ],
      "wrongExplanations": [],
      "glossary": [
        "- Hallucination: AI가 잘못된 정보를 사실처럼 생성하는 현상."
      ],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Overfitting",
          "textKo": "과적합 (Overfitting)",
          "text": "Overfitting"
        },
        {
          "key": "B",
          "textEn": "Underfitting",
          "textKo": "과소적합 (Underfitting)",
          "text": "Underfitting"
        },
        {
          "key": "C",
          "textEn": "Hallucination",
          "textKo": "환각 (Hallucination)",
          "text": "Hallucination"
        },
        {
          "key": "D",
          "textEn": "Bias",
          "textKo": "편향 (Bias)",
          "text": "Bias"
        }
      ],
      "answerKey": "C",
      "answerText": "Hallucination"
    },
    {
      "id": 361,
      "sourceNumber": 361,
      "title": "Question 361",
      "promptKo": "다음 중 파운데이션 모델(FM)의 주요 특징은 무엇입니까?",
      "promptEn": "Which of the following is a key characteristic of a foundation model (FM)?",
      "explanation": [
        "- 파운데이션 모델은 방대한 데이터를 통해 사전 학습되어 요약, 번역, 질문 답변 등 다양한 용도로 재사용 및 미세 조정이 가능하다는 점이 가장 큰 특징입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "It is trained on a small, specific dataset.",
          "textKo": "작고 구체적인 데이터 세트에서 학습됩니다.",
          "text": "It is trained on a small, specific dataset."
        },
        {
          "key": "B",
          "textEn": "It can be adapted to a wide range of downstream tasks.",
          "textKo": "광범위한 하위 작업(downstream tasks)에 맞게 조정될 수 있습니다.",
          "text": "It can be adapted to a wide range of downstream tasks."
        },
        {
          "key": "C",
          "textEn": "It requires full retraining for every new task.",
          "textKo": "새로운 작업마다 전체 재학습이 필요합니다.",
          "text": "It requires full retraining for every new task."
        },
        {
          "key": "D",
          "textEn": "It only works with structured numerical data.",
          "textKo": "구조화된 수치 데이터에서만 작동합니다.",
          "text": "It only works with structured numerical data."
        }
      ],
      "answerKey": "B",
      "answerText": "It can be adapted to a wide range of downstream tasks."
    },
    {
      "id": 362,
      "sourceNumber": 362,
      "title": "Question 362",
      "promptKo": "한 회사가 메모리가 제한된 에지 디바이스에서 실행할 수 있도록 대규모 언어 모델(LLM)의 크기를 줄이려고 합니다. AI 실무자가 사용해야 하는 기술은 무엇입니까?",
      "promptEn": "A company wants to reduce the size of a Large Language Model (LLM) so it can run on edge devices with limited memory. Which technique should the AI practitioner use?",
      "explanation": [
        "- 양자화(Quantization)는 모델의 가중치를 더 낮은 비트(예: 32bit -> 8bit)로 표현하여 모델 용량을 줄이고 연산 속도를 높이는 최적화 기법입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Data augmentation",
          "textKo": "데이터 증강 (Data augmentation)",
          "text": "Data augmentation"
        },
        {
          "key": "B",
          "textEn": "Quantization",
          "textKo": "양자화 (Quantization)",
          "text": "Quantization"
        },
        {
          "key": "C",
          "textEn": "Regularization",
          "textKo": "정규화 (Regularization)",
          "text": "Regularization"
        },
        {
          "key": "D",
          "textEn": "Backpropagation",
          "textKo": "역전파 (Backpropagation)",
          "text": "Backpropagation"
        }
      ],
      "answerKey": "B",
      "answerText": "Quantization"
    },
    {
      "id": 363,
      "sourceNumber": 363,
      "title": "Question 363",
      "promptKo": "이미지와 비디오에서 객체, 사람, 텍스트, 장면 및 활동을 식별하는 데 사용할 수 있는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service can be used to identify objects, people, text, scenes, and activities in images and videos?",
      "explanation": [
        "- Amazon Rekognition은 딥러닝 기반의 컴퓨터 비전 서비스로 시각적 분석 기능을 제공합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Rekognition",
          "textKo": "Amazon Rekognition",
          "text": "Amazon Rekognition"
        },
        {
          "key": "B",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        },
        {
          "key": "C",
          "textEn": "Amazon Textract",
          "textKo": "Amazon Textract",
          "text": "Amazon Textract"
        },
        {
          "key": "D",
          "textEn": "Amazon Kendra",
          "textKo": "Amazon Kendra",
          "text": "Amazon Kendra"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon Rekognition"
    },
    {
      "id": 364,
      "sourceNumber": 364,
      "title": "Question 364",
      "promptKo": "한 회사가 생성형 AI 애플리케이션을 구축하고 있으며 AWS Well-Architected Framework를 따르려고 합니다. 과도한 프로비저닝 없이 요구 사항을 충족하기 위해 적절한 크기와 유형의 리소스를 사용하는 데 중점을 두는 핵심 요소(Pillar)는 무엇입니까?",
      "promptEn": "A company is building a generative AI application and wants to follow the AWS Well-Architected Framework. Which pillar focuses on using the right size and type of resources to meet requirements without over-provisioning?",
      "explanation": [
        "- 비용 최적화(Cost Optimization)의 핵심은 낭비되는 리소스를 줄이고 가장 효율적인 비용으로 비즈니스 가치를 달성하는 것입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Security",
          "textKo": "보안 (Security)",
          "text": "Security"
        },
        {
          "key": "B",
          "textEn": "Reliability",
          "textKo": "안정성 (Reliability)",
          "text": "Reliability"
        },
        {
          "key": "C",
          "textEn": "Cost Optimization",
          "textKo": "비용 최적화 (Cost Optimization)",
          "text": "Cost Optimization"
        },
        {
          "key": "D",
          "textEn": "Performance Efficiency",
          "textKo": "성능 효율성 (Performance Efficiency)",
          "text": "Performance Efficiency"
        }
      ],
      "answerKey": "C",
      "answerText": "Cost Optimization"
    },
    {
      "id": 365,
      "sourceNumber": 365,
      "title": "Question 365",
      "promptKo": "대규모 언어 모델(LLM)에서 \"어텐션(Attention)\" 메커니즘의 주된 목적은 무엇입니까?",
      "promptEn": "What is the primary purpose of the \"Attention\" mechanism in Large Language Models (LLMs)?",
      "explanation": [
        "- 어텐션(Attention)은 문장 내에서 단어 간의 관계를 파악하여, 예측 시 어떤 단어에 더 집중할지 결정하는 트랜스포머 모델의 핵심 기술입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "To increase the learning rate during training.",
          "textKo": "학습 중 학습률(learning rate)을 높이기 위해",
          "text": "To increase the learning rate during training."
        },
        {
          "key": "B",
          "textEn": "To allow the model to focus on relevant parts of the input sequence.",
          "textKo": "모델이 입력 시퀀스의 관련 있는 부분에 집중할 수 있도록 하기 위해",
          "text": "To allow the model to focus on relevant parts of the input sequence."
        },
        {
          "key": "C",
          "textEn": "To encrypt the training data for privacy.",
          "textKo": "프라이버시를 위해 학습 데이터를 암호화하기 위해",
          "text": "To encrypt the training data for privacy."
        },
        {
          "key": "D",
          "textEn": "To monitor the GPU temperature.",
          "textKo": "GPU 온도를 모니터링하기 위해",
          "text": "To monitor the GPU temperature."
        }
      ],
      "answerKey": "B",
      "answerText": "To allow the model to focus on relevant parts of the input sequence."
    },
    {
      "id": 366,
      "sourceNumber": 366,
      "title": "Question 366",
      "promptKo": "한 데이터 과학자가 Amazon SageMaker를 사용하여 모델을 학습시키고 있습니다. 모델의 학습 데이터에 대한 오류율은 매우 낮지만, 검증 데이터에 대한 오류율은 매우 높다는 것을 발견했습니다. 이 현상을 무엇이라고 합니까?",
      "promptEn": "A data scientist is using Amazon SageMaker to train a model. They notice that the model's error rate on the training data is very low, but the error rate on the validation data is very high. What is this phenomenon called?",
      "explanation": [
        "- 학습 데이터에만 너무 과하게 맞춰져 실제(새로운) 데이터에서 성능이 떨어지는 것을 과적합(Overfitting)이라고 합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Underfitting",
          "textKo": "과소적합 (Underfitting)",
          "text": "Underfitting"
        },
        {
          "key": "B",
          "textEn": "Overfitting",
          "textKo": "과적합 (Overfitting)",
          "text": "Overfitting"
        },
        {
          "key": "C",
          "textEn": "Feature scaling",
          "textKo": "피처 스케일링 (Feature scaling)",
          "text": "Feature scaling"
        },
        {
          "key": "D",
          "textEn": "Hyperparameter tuning",
          "textKo": "하이퍼파라미터 튜닝 (Hyperparameter tuning)",
          "text": "Hyperparameter tuning"
        }
      ],
      "answerKey": "B",
      "answerText": "Overfitting"
    },
    {
      "id": 367,
      "sourceNumber": 367,
      "title": "Question 367",
      "promptKo": "다음 중 Amazon Lex의 일반적인 사용 사례는 무엇입니까?",
      "promptEn": "Which of the following is a common use case for Amazon Lex?",
      "explanation": [
        "- Amazon Lex는 음성과 텍스트를 대화형 인터페이스로 구현하여 챗봇을 만들 때 사용됩니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Real-time translation of documents.",
          "textKo": "문서의 실시간 번역",
          "text": "Real-time translation of documents."
        },
        {
          "key": "B",
          "textEn": "Building conversational interfaces for chatbots.",
          "textKo": "챗봇을 위한 대화형 인터페이스 구축",
          "text": "Building conversational interfaces for chatbots."
        },
        {
          "key": "C",
          "textEn": "Detecting fraud in financial transactions.",
          "textKo": "금융 거래의 사기 탐지",
          "text": "Detecting fraud in financial transactions."
        },
        {
          "key": "D",
          "textEn": "Training custom deep learning models.",
          "textKo": "맞춤형 딥러닝 모델 학습",
          "text": "Training custom deep learning models."
        }
      ],
      "answerKey": "B",
      "answerText": "Building conversational interfaces for chatbots."
    },
    {
      "id": 368,
      "sourceNumber": 368,
      "title": "Question 368",
      "promptKo": "한 회사가 여러 언어로 된 고객 리뷰를 자동으로 영문으로 번역하는 솔루션을 구현하고자 합니다. 회사가 사용해야 하는 AWS 서비스는 무엇입니까?",
      "promptEn": "A company wants to implement a solution that automatically translates customer reviews from multiple languages into English. Which AWS service should the company use?",
      "explanation": [
        "- 다국어 텍스트를 다른 언어로 변환하는 작업에는 Amazon Translate가 가장 적합합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Polly",
          "textKo": "Amazon Polly",
          "text": "Amazon Polly"
        },
        {
          "key": "B",
          "textEn": "Amazon Translate",
          "textKo": "Amazon Translate",
          "text": "Amazon Translate"
        },
        {
          "key": "C",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        },
        {
          "key": "D",
          "textEn": "Amazon Transcribe",
          "textKo": "Amazon Transcribe",
          "text": "Amazon Transcribe"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon Translate"
    },
    {
      "id": 369,
      "sourceNumber": 369,
      "title": "Question 369",
      "promptKo": "Amazon Bedrock을 사용할 때, 기본 인프라와 클라우드 자체의 보안에 대한 책임은 누구에게 있습니까?",
      "promptEn": "When using Amazon Bedrock, who is responsible for the underlying infrastructure and the security of the cloud?",
      "explanation": [
        "- AWS 공동 책임 모델에 따라, 클라우드 인프라 자체의 보안과 관리는 AWS의 책임입니다.",
        "사용자님께서 요청하신 AWS Certified AI Practitioner (AIF-C01) 기출문제 형식과 글씨체(스타일)를 그대로 유지하여, 제공해주신 링크(370번~379번)의 내용을 바탕으로 정리해 드립니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "The customer",
          "textKo": "고객",
          "text": "The customer"
        },
        {
          "key": "B",
          "textEn": "AWS",
          "textKo": "AWS",
          "text": "AWS"
        },
        {
          "key": "C",
          "textEn": "Third-party model providers",
          "textKo": "타사 모델 제공업체",
          "text": "Third-party model providers"
        },
        {
          "key": "D",
          "textEn": "Open-source community",
          "textKo": "오픈 소스 커뮤니티",
          "text": "Open-source community"
        }
      ],
      "answerKey": "B",
      "answerText": "AWS"
    },
    {
      "id": 370,
      "sourceNumber": 370,
      "title": "Question 370",
      "promptKo": "한 회사가 주택 가격을 예측하는 머신러닝 모델을 구축하려고 합니다. 대상 변수(주택 가격)는 연속적인 수치입니다. 회사는 어떤 유형의 머신러닝을 사용해야 합니까?",
      "promptEn": "A company wants to build a machine learning model to predict house prices. The target variable (house price) is a continuous numerical value. Which type of machine learning should the company use?",
      "explanation": [
        "- 대상 변수가 주택 가격이나 온도와 같이 연속적인 숫자인 경우 회귀(Regression) 알고리즘을 사용합니다. 분류는 범주형(예/아니오 등) 데이터를 예측할 때 사용합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Classification",
          "textKo": "분류 (Classification)",
          "text": "Classification"
        },
        {
          "key": "B",
          "textEn": "Clustering",
          "textKo": "군집화 (Clustering)",
          "text": "Clustering"
        },
        {
          "key": "C",
          "textEn": "Regression",
          "textKo": "회귀 (Regression)",
          "text": "Regression"
        },
        {
          "key": "D",
          "textEn": "Dimensionality reduction",
          "textKo": "차원 축소 (Dimensionality reduction)",
          "text": "Dimensionality reduction"
        }
      ],
      "answerKey": "C",
      "answerText": "Regression"
    },
    {
      "id": 371,
      "sourceNumber": 371,
      "title": "Question 371",
      "promptKo": "한 회사가 고객 데이터를 사용하는 생성형 AI 애플리케이션을 개발하고 있습니다. 데이터에서 개인 식별 정보(PII)를 식별하고 마스킹하는 데 도움이 되는 AWS 도구 또는 서비스는 무엇입니까?",
      "promptEn": "A company is developing a generative AI application that uses customer data. Which AWS tool or service can help the company identify and mask personally identifiable information (PII) in the data?",
      "explanation": [
        "- Amazon Comprehend는 자연어 처리(NLP) 서비스로, 텍스트 내에서 이름, 주소, 연락처와 같은 PII를 감지하고 마스킹(익명화)하는 기능을 제공합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Rekognition",
          "textKo": "Amazon Rekognition",
          "text": "Amazon Rekognition"
        },
        {
          "key": "B",
          "textEn": "Amazon Macie",
          "textKo": "Amazon Macie",
          "text": "Amazon Macie"
        },
        {
          "key": "C",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        },
        {
          "key": "D",
          "textEn": "Amazon GuardDuty",
          "textKo": "Amazon GuardDuty",
          "text": "Amazon GuardDuty"
        }
      ],
      "answerKey": "C",
      "answerText": "Amazon Comprehend"
    },
    {
      "id": 372,
      "sourceNumber": 372,
      "title": "Question 372",
      "promptKo": "Amazon Bedrock과 같은 서버리스 AI 서비스를 사용하는 주요 이점은 무엇입니까?",
      "promptEn": "Which of the following is a primary benefit of using a serverless AI service like Amazon Bedrock?",
      "explanation": [
        "- 서버리스 서비스의 핵심 이점은 사용자가 서버나 하드웨어를 직접 관리할 필요가 없으며, 수요에 따라 자동으로 확장(Scaling)된다는 점입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Full control over the underlying hardware",
          "textKo": "기본 하드웨어에 대한 전체 제어",
          "text": "Full control over the underlying hardware"
        },
        {
          "key": "B",
          "textEn": "Ability to manage the operating system",
          "textKo": "운영 체제 관리 능력",
          "text": "Ability to manage the operating system"
        },
        {
          "key": "C",
          "textEn": "Automatic scaling and no infrastructure management",
          "textKo": "자동 확장 및 인프라 관리 불필요",
          "text": "Automatic scaling and no infrastructure management"
        },
        {
          "key": "D",
          "textEn": "Lower latency than on-premises hardware for all workloads",
          "textKo": "모든 워크로드에 대해 온프레미스 하드웨어보다 낮은 지연 시간",
          "text": "Lower latency than on-premises hardware for all workloads"
        }
      ],
      "answerKey": "C",
      "answerText": "Automatic scaling and no infrastructure management"
    },
    {
      "id": 373,
      "sourceNumber": 373,
      "title": "Question 373",
      "promptKo": "생성형 AI에서 \"부정적 프롬프트(negative prompts)\"의 목적은 무엇입니까?",
      "promptEn": "In generative AI, what is the purpose of \"negative prompts\"?",
      "explanation": [
        "- 부정적 프롬프트는 이미지나 텍스트 생성 시 결과물에서 원치 않는 요소(예: \"흐릿함 제외\", \"특정 색상 제외\")를 제거하도록 모델에 명시적으로 지시하는 기법입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "To penalize the model for slow response times.",
          "textKo": "모델의 느린 응답 시간에 대해 불이익을 주기 위해",
          "text": "To penalize the model for slow response times."
        },
        {
          "key": "B",
          "textEn": "To specify what the model should not include in its output.",
          "textKo": "모델이 출력에 포함하지 말아야 할 내용을 지정하기 위해",
          "text": "To specify what the model should not include in its output."
        },
        {
          "key": "C",
          "textEn": "To reduce the cost of API calls.",
          "textKo": "API 호출 비용을 줄이기 위해",
          "text": "To reduce the cost of API calls."
        },
        {
          "key": "D",
          "textEn": "To train the model using reinforcement learning.",
          "textKo": "강화 학습을 사용하여 모델을 학습시키기 위해",
          "text": "To train the model using reinforcement learning."
        }
      ],
      "answerKey": "B",
      "answerText": "To specify what the model should not include in its output."
    },
    {
      "id": 374,
      "sourceNumber": 374,
      "title": "Question 374",
      "promptKo": "한 회사는 입력 데이터가 시간이 지남에 따라 약간 변하더라도 AI 모델이 일관되고 신뢰할 수 있는 결과를 제공하도록 보장하고자 합니다. 이것은 어떤 개념을 가리킵니까?",
      "promptEn": "A company wants to ensure that its AI models provide consistent and reliable results even when the input data changes slightly over time. Which concept is this referring to?",
      "explanation": [
        "- 견고성(Robustness)은 입력 데이터의 작은 변화나 노이즈에도 불구하고 모델이 성능을 유지하고 정확한 판단을 내리는 능력을 의미합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Model Transparency",
          "textKo": "모델 투명성",
          "text": "Model Transparency"
        },
        {
          "key": "B",
          "textEn": "Model Robustness",
          "textKo": "모델 견고성 (Robustness)",
          "text": "Model Robustness"
        },
        {
          "key": "C",
          "textEn": "Model Explainability",
          "textKo": "모델 설명 가능성",
          "text": "Model Explainability"
        },
        {
          "key": "D",
          "textEn": "Model Fairness",
          "textKo": "모델 공정성",
          "text": "Model Fairness"
        }
      ],
      "answerKey": "B",
      "answerText": "Model Robustness"
    },
    {
      "id": 375,
      "sourceNumber": 375,
      "title": "Question 375",
      "promptKo": "한 회사가 높은 추론 능력과 복잡한 문제 해결이 필요한 작업을 위해 Amazon Bedrock에서 파운데이션 모델을 선택해야 합니다. 어떤 모델 제품군이 가장 적합합니까?",
      "promptEn": "A company needs to choose a foundation model in Amazon Bedrock for a task that requires high reasoning capabilities and complex problem solving. Which model family is most suitable?",
      "explanation": [
        "- Amazon Bedrock에서 제공되는 모델 중 Anthropic의 Claude 시리즈는 복잡한 추론, 정교한 글쓰기 및 다단계 문제 해결 능력에서 매우 뛰어난 성능을 보입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Titan Image Generator",
          "textKo": "Amazon Titan Image Generator",
          "text": "Amazon Titan Image Generator"
        },
        {
          "key": "B",
          "textEn": "Anthropic Claude",
          "textKo": "Anthropic Claude",
          "text": "Anthropic Claude"
        },
        {
          "key": "C",
          "textEn": "Meta Llama (Llama 2/3)",
          "textKo": "Meta Llama (Llama 2/3)",
          "text": "Meta Llama (Llama 2/3)"
        },
        {
          "key": "D",
          "textEn": "Mistral AI",
          "textKo": "Mistral AI",
          "text": "Mistral AI"
        }
      ],
      "answerKey": "B",
      "answerText": "Anthropic Claude"
    },
    {
      "id": 376,
      "sourceNumber": 376,
      "title": "Question 376",
      "promptKo": "특정 작업을 위해 사전 학습된 모델의 일부 파라미터를 조정하거나 새로운 계층을 추가하는 기술은 무엇입니까?",
      "promptEn": "Which technique involves adjusting a small number of model parameters or adding new layers to a pre-trained model for a specific task?",
      "explanation": [
        "- 미세 조정(Fine-tuning)은 이미 대량의 데이터로 학습된 모델을 특정 목적(도메인)에 맞게 최적화하기 위해 소량의 데이터를 사용하여 가중치를 업데이트하는 과정입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Pre-training",
          "textKo": "사전 학습 (Pre-training)",
          "text": "Pre-training"
        },
        {
          "key": "B",
          "textEn": "Fine-tuning",
          "textKo": "미세 조정 (Fine-tuning)",
          "text": "Fine-tuning"
        },
        {
          "key": "C",
          "textEn": "Tokenization",
          "textKo": "토큰화 (Tokenization)",
          "text": "Tokenization"
        },
        {
          "key": "D",
          "textEn": "Quantization",
          "textKo": "양자화 (Quantization)",
          "text": "Quantization"
        }
      ],
      "answerKey": "B",
      "answerText": "Fine-tuning"
    },
    {
      "id": 377,
      "sourceNumber": 377,
      "title": "Question 377",
      "promptKo": "AWS의 책임감 있는 AI 원칙에 따르면, \"공정성(Fairness)\"의 목표는 무엇입니까?",
      "promptEn": "According to the AWS Responsible AI principles, what is the goal of \"Fairness\"?",
      "explanation": [
        "- AI에서의 공정성은 인종, 성별, 연령 등 특정 인구 통계적 속성에 따라 모델의 결과가 편향되거나 차별적인 영향을 주지 않도록 관리하는 것을 의미합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Ensuring the model is always 100% accurate.",
          "textKo": "모델이 항상 100% 정확하도록 보장하는 것.",
          "text": "Ensuring the model is always 100% accurate."
        },
        {
          "key": "B",
          "textEn": "Making sure the model's source code is public.",
          "textKo": "모델의 소스 코드를 공개하는 것.",
          "text": "Making sure the model's source code is public."
        },
        {
          "key": "C",
          "textEn": "Ensuring the model does not have a disproportionate adverse impact on specific groups.",
          "textKo": "모델이 특정 그룹에 대해 불균형적으로 부정적인 영향을 미치지 않도록 보장하는 것.",
          "text": "Ensuring the model does not have a disproportionate adverse impact on specific groups."
        },
        {
          "key": "D",
          "textEn": "Maximizing the speed of inference.",
          "textKo": "추론 속도를 최대화하는 것.",
          "text": "Maximizing the speed of inference."
        }
      ],
      "answerKey": "C",
      "answerText": "Ensuring the model does not have a disproportionate adverse impact on specific groups."
    },
    {
      "id": 378,
      "sourceNumber": 378,
      "title": "Question 378",
      "promptKo": "한 회사가 최신 내부 회사 매뉴얼을 바탕으로 질문에 답변할 수 있는 AI 도구를 고객 지원 상담원에게 제공하려고 합니다. 어떤 아키텍처를 사용해야 합니까?",
      "promptEn": "A company wants to provide its customer support agents with an AI tool that can answer questions based on the latest internal company manuals. Which architecture should they use?",
      "explanation": [
        "- RAG는 외부 지식 베이스(최신 매뉴얼 등)에서 정보를 검색하여 모델 답변의 근거로 사용하므로, 모델을 재학습시키지 않고도 최신 정보를 정확하게 반영할 수 있습니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Training a new model from scratch every day.",
          "textKo": "매일 모델을 처음부터 새로 학습시킴.",
          "text": "Training a new model from scratch every day."
        },
        {
          "key": "B",
          "textEn": "Prompt Engineering with static prompts.",
          "textKo": "정적 프롬프트를 사용한 프롬프트 엔지니어링.",
          "text": "Prompt Engineering with static prompts."
        },
        {
          "key": "C",
          "textEn": "Retrieval-Augmented Generation (RAG).",
          "textKo": "검색 증강 생성 (RAG).",
          "text": "Retrieval-Augmented Generation (RAG)."
        },
        {
          "key": "D",
          "textEn": "Increasing the Temperature of the model.",
          "textKo": "모델의 온도(Temperature)를 높임.",
          "text": "Increasing the Temperature of the model."
        }
      ],
      "answerKey": "C",
      "answerText": "Retrieval-Augmented Generation (RAG)"
    },
    {
      "id": 379,
      "sourceNumber": 379,
      "title": "Question 379",
      "promptKo": "사용자가 대규모 언어 모델(LLM)과 상호 작용하고 있습니다. 사용자는 모델의 응답을 안내하기 위해 일련의 지침과 예시를 제공합니다. 이 과정을 무엇이라고 합니까?",
      "promptEn": "A user is interacting with a Large Language Model (LLM). The user provides a sequence of instructions and examples to guide the model's response. What is this process called?",
      "explanation": [
        "- 원하는 결과를 얻기 위해 모델에게 전달하는 지침(Instruction)이나 예시(Example)를 정교하게 설계하는 과정을 프롬프트 엔지니어링이라고 합니다.",
        "요청하신 링크들의 내용을 바탕으로 AWS Certified AI Practitioner (AIF-C01) 시험 대비 문제 세트를 정리해 드립니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Backpropagation",
          "textKo": "역전파 (Backpropagation)",
          "text": "Backpropagation"
        },
        {
          "key": "B",
          "textEn": "Reinforcement Learning",
          "textKo": "강화 학습 (Reinforcement Learning)",
          "text": "Reinforcement Learning"
        },
        {
          "key": "C",
          "textEn": "Prompt Engineering",
          "textKo": "프롬프트 엔지니어링 (Prompt Engineering)",
          "text": "Prompt Engineering"
        },
        {
          "key": "D",
          "textEn": "Hyperparameter Optimization",
          "textKo": "하이퍼파라미터 최적화",
          "text": "Hyperparameter Optimization"
        }
      ],
      "answerKey": "C",
      "answerText": "Prompt Engineering"
    },
    {
      "id": 380,
      "sourceNumber": 380,
      "title": "Question 380",
      "promptKo": "파운데이션 모델을 사용하여 생성형 AI 애플리케이션을 쉽게 구축하고 확장할 수 있는 AWS의 관리형 서비스는 무엇입니까?",
      "promptEn": "Which AWS service is a managed service that makes it easy to build and scale generative AI applications with foundation models?",
      "explanation": [
        "- Amazon Bedrock은 API를 통해 파운데이션 모델을 사용할 수 있게 하여 인프라 관리 없이 생성형 AI 앱을 구축할 수 있도록 지원하는 완전 관리형 서비스입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker",
          "textKo": "Amazon SageMaker",
          "text": "Amazon SageMaker"
        },
        {
          "key": "B",
          "textEn": "Amazon Bedrock",
          "textKo": "Amazon Bedrock",
          "text": "Amazon Bedrock"
        },
        {
          "key": "C",
          "textEn": "Amazon Lex",
          "textKo": "Amazon Lex",
          "text": "Amazon Lex"
        },
        {
          "key": "D",
          "textEn": "Amazon Kendra",
          "textKo": "Amazon Kendra",
          "text": "Amazon Kendra"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon Bedrock"
    },
    {
      "id": 381,
      "sourceNumber": 381,
      "title": "Question 381",
      "promptKo": "RAG(검색 증강 생성)의 주된 목적은 무엇입니까?",
      "promptEn": "What is the primary purpose of Retrieval-Augmented Generation (RAG)?",
      "explanation": [
        "- RAG는 모델이 학습하지 않은 외부 데이터 소스에서 정보를 검색하여 답변의 근거로 활용함으로써, 최신성 및 신뢰도를 높이는 기술입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "To train a large language model from scratch.",
          "textKo": "대규모 언어 모델을 처음부터 학습시키기 위해.",
          "text": "To train a large language model from scratch."
        },
        {
          "key": "B",
          "textEn": "To reduce the inference cost of a model.",
          "textKo": "모델의 추론 비용을 줄이기 위해.",
          "text": "To reduce the inference cost of a model."
        },
        {
          "key": "C",
          "textEn": "To provide the model with access to up-to-date or proprietary information.",
          "textKo": "모델에 최신 정보나 독점 정보에 대한 액세스를 제공하기 위해.",
          "text": "To provide the model with access to up-to-date or proprietary information."
        },
        {
          "key": "D",
          "textEn": "To increase the number of parameters in a model.",
          "textKo": "모델의 파라미터 수를 늘리기 위해.",
          "text": "To increase the number of parameters in a model."
        }
      ],
      "answerKey": "C",
      "answerText": "To provide the model with access to up-to-date or proprietary information."
    },
    {
      "id": 382,
      "sourceNumber": 382,
      "title": "Question 382",
      "promptKo": "한 회사가 방대한 텍스트 문서 모음에서 주요 언어를 식별하려고 합니다. 회사는 어떤 AWS 서비스를 사용해야 합니까?",
      "promptEn": "A company wants to identify the dominant language in a large collection of text documents. Which AWS service should the company use?",
      "explanation": [
        "- Amazon Comprehend는 언어 감지(Language Detection) 기능을 제공하여 문서가 어떤 언어로 작성되었는지 식별할 수 있습니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Translate",
          "textKo": "Amazon Translate",
          "text": "Amazon Translate"
        },
        {
          "key": "B",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        },
        {
          "key": "C",
          "textEn": "Amazon Rekognition",
          "textKo": "Amazon Rekognition",
          "text": "Amazon Rekognition"
        },
        {
          "key": "D",
          "textEn": "Amazon Textract",
          "textKo": "Amazon Textract",
          "text": "Amazon Textract"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon Comprehend"
    },
    {
      "id": 383,
      "sourceNumber": 383,
      "title": "Question 383",
      "promptKo": "머신러닝에서 \"추론(inference)\"이라는 용어는 무엇을 의미합니까?",
      "promptEn": "In machine learning, what does the term \"inference\" refer to?",
      "explanation": [
        "- 추론은 이미 학습이 완료된 모델에 실제 데이터를 입력하여 결과를 도출해내는 단계를 말합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "The process of gathering data for training.",
          "textKo": "학습을 위해 데이터를 수집하는 과정.",
          "text": "The process of gathering data for training."
        },
        {
          "key": "B",
          "textEn": "The process of using a trained model to make predictions on new data.",
          "textKo": "학습된 모델을 사용하여 새로운 데이터에 대해 예측을 수행하는 과정.",
          "text": "The process of using a trained model to make predictions on new data."
        },
        {
          "key": "C",
          "textEn": "The process of adjusting model hyperparameters.",
          "textKo": "모델 하이퍼파라미터를 조정하는 과정.",
          "text": "The process of adjusting model hyperparameters."
        },
        {
          "key": "D",
          "textEn": "The process of cleaning and labeling the dataset.",
          "textKo": "데이터 세트를 정제하고 라벨링하는 과정.",
          "text": "The process of cleaning and labeling the dataset."
        }
      ],
      "answerKey": "B",
      "answerText": "The process of using a trained model to make predictions on new data."
    },
    {
      "id": 384,
      "sourceNumber": 384,
      "title": "Question 384",
      "promptKo": "AI에 대한 AWS 공동 책임 모델에 따르면, 모델을 미세 조정(fine-tune)하는 데 사용되는 데이터에 대한 책임은 누구에게 있습니까?",
      "promptEn": "According to the AWS Shared Responsibility Model for AI, who is responsible for the data used to fine-tune a model?",
      "explanation": [
        "- 공동 책임 모델에서 고객의 데이터(Data) 및 이를 사용한 모델 최적화는 항상 고객의 책임 영역에 해당합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "AWS",
          "textKo": "AWS",
          "text": "AWS"
        },
        {
          "key": "B",
          "textEn": "The customer",
          "textKo": "고객",
          "text": "The customer"
        },
        {
          "key": "C",
          "textEn": "The model provider",
          "textKo": "모델 제공업체",
          "text": "The model provider"
        },
        {
          "key": "D",
          "textEn": "A third-party auditor",
          "textKo": "제3자 감사관",
          "text": "A third-party auditor"
        }
      ],
      "answerKey": "B",
      "answerText": "The customer"
    },
    {
      "id": 385,
      "sourceNumber": 385,
      "title": "Question 385",
      "promptKo": "한 회사가 자동 안내 시스템을 위해 작성된 텍스트를 자연스러운 음성으로 변환하려고 합니다. 어떤 AWS 서비스를 사용해야 합니까?",
      "promptEn": "A company wants to convert written text into natural-sounding speech for an automated announcement system. Which AWS service should they use?",
      "explanation": [
        "- Amazon Polly는 텍스트를 음성으로 변환(Text-to-Speech, TTS)하는 서비스로, 수십 개의 언어와 다양한 음성을 지원합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Polly",
          "textKo": "Amazon Polly",
          "text": "Amazon Polly"
        },
        {
          "key": "B",
          "textEn": "Amazon Transcribe",
          "textKo": "Amazon Transcribe",
          "text": "Amazon Transcribe"
        },
        {
          "key": "C",
          "textEn": "Amazon Lex",
          "textKo": "Amazon Lex",
          "text": "Amazon Lex"
        },
        {
          "key": "D",
          "textEn": "Amazon Kendra",
          "textKo": "Amazon Kendra",
          "text": "Amazon Kendra"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon Polly"
    },
    {
      "id": 386,
      "sourceNumber": 386,
      "title": "Question 386",
      "promptKo": "대규모 언어 모델(LLM)의 문맥에서 \"토큰(Tokens)\"의 주요 기능은 무엇입니까?",
      "promptEn": "What is the primary function of \"Tokens\" in the context of Large Language Models (LLMs)?",
      "explanation": [
        "- 토큰은 텍스트를 모델이 이해하고 생성할 수 있는 최소한의 의미 단위(단어, 부분 단어 등)로 쪼갠 것을 의미합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "To measure the physical storage size of the model.",
          "textKo": "모델의 물리적 저장 크기를 측정하기 위해.",
          "text": "To measure the physical storage size of the model."
        },
        {
          "key": "B",
          "textEn": "To serve as the basic units of text that the model processes.",
          "textKo": "모델이 처리하는 텍스트의 기본 단위 역할을 하기 위해.",
          "text": "To serve as the basic units of text that the model processes."
        },
        {
          "key": "C",
          "textEn": "To encrypt the communication between the user and the API.",
          "textKo": "사용자와 API 간의 통신을 암호화하기 위해.",
          "text": "To encrypt the communication between the user and the API."
        },
        {
          "key": "D",
          "textEn": "To define the reward system in reinforcement learning.",
          "textKo": "강화 학습에서 보상 시스템을 정의하기 위해.",
          "text": "To define the reward system in reinforcement learning."
        }
      ],
      "answerKey": "B",
      "answerText": "To serve as the basic units of text that the model processes."
    },
    {
      "id": 387,
      "sourceNumber": 387,
      "title": "Question 387",
      "promptKo": "다음 중 생성형 AI 모델과 관련된 잠재적 위험은 무엇입니까?",
      "promptEn": "Which of the following is a potential risk associated with generative AI models?",
      "explanation": [
        "- 생성형 AI는 학습 데이터의 특성에 따라 편향된 결과를 내거나 부적절한 콘텐츠를 생성할 위험이 있어 가드레일과 같은 안전 장치가 필요합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Increased operational efficiency",
          "textKo": "운영 효율성 증대",
          "text": "Increased operational efficiency"
        },
        {
          "key": "B",
          "textEn": "Improved customer engagement",
          "textKo": "고객 참여 개선",
          "text": "Improved customer engagement"
        },
        {
          "key": "C",
          "textEn": "Generation of biased or harmful content",
          "textKo": "편향되거나 유해한 콘텐츠 생성",
          "text": "Generation of biased or harmful content"
        },
        {
          "key": "D",
          "textEn": "Reduced manual data entry",
          "textKo": "수동 데이터 입력 감소",
          "text": "Reduced manual data entry"
        }
      ],
      "answerKey": "C",
      "answerText": "Generation of biased or harmful content"
    },
    {
      "id": 388,
      "sourceNumber": 388,
      "title": "Question 388",
      "promptKo": "개발자가 자연어를 사용하여 PDF, FAQ, 인트라넷을 포함한 여러 데이터 소스에서 검색을 수행하려고 합니다. 이를 위해 설계된 AWS 서비스는 무엇입니까?",
      "promptEn": "A developer wants to search across multiple data sources, including PDFs, FAQs, and intranets, using natural language. Which AWS service is designed for this?",
      "explanation": [
        "- Amazon Kendra는 머신러닝 기반의 지능형 검색 서비스로, 다양한 형태의 문서에서 정답을 찾아주는 기능을 제공합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Personalize",
          "textKo": "Amazon Personalize",
          "text": "Amazon Personalize"
        },
        {
          "key": "B",
          "textEn": "Amazon Kendra",
          "textKo": "Amazon Kendra",
          "text": "Amazon Kendra"
        },
        {
          "key": "C",
          "textEn": "Amazon Polly",
          "textKo": "Amazon Polly",
          "text": "Amazon Polly"
        },
        {
          "key": "D",
          "textEn": "Amazon Translate",
          "textKo": "Amazon Translate",
          "text": "Amazon Translate"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon Kendra"
    },
    {
      "id": 389,
      "sourceNumber": 389,
      "title": "Question 389",
      "promptKo": "모델이 올바른 답에 도달할 수 있도록 복잡한 프롬프트를 여러 단계로 세분화하는 개념은 무엇입니까?",
      "promptEn": "Which concept involves breaking down a complex prompt into multiple steps to help a model arrive at a correct answer?",
      "explanation": [
        "- 생각의 사슬(Chain-of-thought) 프롬프팅은 모델이 단계별 추론 과정을 거치도록 유도하여 논리적이고 복잡한 문제의 해결 능력을 높이는 기법입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Zero-shot prompting",
          "textKo": "제로샷 프롬프팅 (Zero-shot prompting)",
          "text": "Zero-shot prompting"
        },
        {
          "key": "B",
          "textEn": "Few-shot prompting",
          "textKo": "퓨샷 프롬프팅 (Few-shot prompting)",
          "text": "Few-shot prompting"
        },
        {
          "key": "C",
          "textEn": "Chain-of-thought prompting",
          "textKo": "생각의 사슬 프롬프팅 (Chain-of-thought prompting)",
          "text": "Chain-of-thought prompting"
        },
        {
          "key": "D",
          "textEn": "Negative prompting",
          "textKo": "부정적 프롬프팅 (Negative prompting)",
          "text": "Negative prompting"
        }
      ],
      "answerKey": "C",
      "answerText": "Chain-of-thought prompting"
    },
    {
      "id": 390,
      "sourceNumber": 390,
      "title": "Question 390",
      "promptKo": "한 회사가 자체 독점 데이터를 사용하여 답변을 제공하는 생성형 AI 애플리케이션을 구축하려고 합니다. 모델을 재학습시키는 것을 피하고 싶을 때 어떤 기술을 사용해야 합니까?",
      "promptEn": "A company wants to build a generative AI application that uses their own proprietary data to provide answers. They want to avoid retraining the model. Which technique should they use?",
      "explanation": [
        "- RAG는 모델 가중치를 변경(재학습)하지 않고도 외부 지식 베이스에서 관련 정보를 검색하여 질문에 답변할 수 있게 하는 가장 효율적인 방법입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Fine-tuning",
          "textKo": "미세 조정 (Fine-tuning)",
          "text": "Fine-tuning"
        },
        {
          "key": "B",
          "textEn": "Retrieval-Augmented Generation (RAG)",
          "textKo": "검색 증강 생성 (Retrieval-Augmented Generation, RAG)",
          "text": "Retrieval-Augmented Generation (RAG)"
        },
        {
          "key": "C",
          "textEn": "Pre-training",
          "textKo": "사전 학습 (Pre-training)",
          "text": "Pre-training"
        },
        {
          "key": "D",
          "textEn": "Prompt engineering without data",
          "textKo": "데이터 없는 프롬프트 엔지니어링",
          "text": "Prompt engineering without data"
        }
      ],
      "answerKey": "B",
      "answerText": "Retrieval-Augmented Generation (RAG)"
    },
    {
      "id": 391,
      "sourceNumber": 391,
      "title": "Question 391",
      "promptKo": "책임감 있는 AI 사용을 보장하기 위해 대규모 언어 모델에 대한 가드레일을 생성하고 관리하는 데 사용되는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service is used to create and manage guardrails for large language models to help ensure responsible AI use?",
      "explanation": [
        "- Guardrails for Amazon Bedrock은 부적절한 콘텐츠를 필터링하고 사용자 정의 정책을 적용하여 안전한 AI 상호작용을 보장하는 전용 기능입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker Clarify",
          "textKo": "Amazon SageMaker Clarify",
          "text": "Amazon SageMaker Clarify"
        },
        {
          "key": "B",
          "textEn": "Guardrails for Amazon Bedrock",
          "textKo": "Guardrails for Amazon Bedrock",
          "text": "Guardrails for Amazon Bedrock"
        },
        {
          "key": "C",
          "textEn": "Amazon Rekognition",
          "textKo": "Amazon Rekognition",
          "text": "Amazon Rekognition"
        },
        {
          "key": "D",
          "textEn": "AWS HealthImaging",
          "textKo": "AWS HealthImaging",
          "text": "AWS HealthImaging"
        }
      ],
      "answerKey": "B",
      "answerText": "Guardrails for Amazon Bedrock"
    },
    {
      "id": 392,
      "sourceNumber": 392,
      "title": "Question 392",
      "promptKo": "데이터 과학자가 머신러닝 프로젝트를 수행 중이며 모델이 왜 특정 예측을 했는지 설명해야 합니다. 이것은 어떤 개념을 가리킵니까?",
      "promptEn": "A data scientist is working on a machine learning project and needs to explain why a model made a specific prediction. Which concept is this referring to?",
      "explanation": [
        "- 해석 가능성(Interpretability) 또는 설명 가능성(Explainability)은 모델의 의사결정 과정을 인간이 이해할 수 있는 수준으로 설명하는 능력을 의미합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Model Transparency",
          "textKo": "모델 투명성",
          "text": "Model Transparency"
        },
        {
          "key": "B",
          "textEn": "Model Interpretability",
          "textKo": "모델 해석 가능성 (Interpretability)",
          "text": "Model Interpretability"
        },
        {
          "key": "C",
          "textEn": "Model Robustness",
          "textKo": "모델 견고성",
          "text": "Model Robustness"
        },
        {
          "key": "D",
          "textEn": "Model Reliability",
          "textKo": "모델 신뢰성",
          "text": "Model Reliability"
        }
      ],
      "answerKey": "B",
      "answerText": "Model Interpretability"
    },
    {
      "id": 393,
      "sourceNumber": 393,
      "title": "Question 393",
      "promptKo": "한 회사는 자사의 AI 모델이 특정 집단의 사람들에게 편향될 수 있음을 우려하고 있습니다. 머신러닝 모델의 편향을 감지하는 데 도움이 되는 AWS 서비스 또는 기능은 무엇입니까?",
      "promptEn": "A company is concerned that its AI model might be biased against certain groups of people. Which AWS service or feature can help detect bias in machine learning models?",
      "explanation": [
        "- Amazon SageMaker Clarify는 데이터 세트와 학습된 모델의 잠재적 편향을 탐지하고 모델 예측에 대한 설명을 제공합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon SageMaker Clarify",
          "textKo": "Amazon SageMaker Clarify",
          "text": "Amazon SageMaker Clarify"
        },
        {
          "key": "B",
          "textEn": "Amazon Inspector",
          "textKo": "Amazon Inspector",
          "text": "Amazon Inspector"
        },
        {
          "key": "C",
          "textEn": "AWS Shield",
          "textKo": "AWS Shield",
          "text": "AWS Shield"
        },
        {
          "key": "D",
          "textEn": "Amazon Macie",
          "textKo": "Amazon Macie",
          "text": "Amazon Macie"
        }
      ],
      "answerKey": "A",
      "answerText": "Amazon SageMaker Clarify"
    },
    {
      "id": 394,
      "sourceNumber": 394,
      "title": "Question 394",
      "promptKo": "신경망에서 \"가중치(Weights)\"의 주요 역할은 무엇입니까?",
      "promptEn": "What is the primary role of \"Weights\" in a neural network?",
      "explanation": [
        "- 가중치는 한 뉴런의 신호가 다음 뉴런으로 전달될 때 결과에 미치는 영향력을 조절하는 매개변수입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "To define the number of layers in the network.",
          "textKo": "네트워크의 계층 수를 정의하기 위해.",
          "text": "To define the number of layers in the network."
        },
        {
          "key": "B",
          "textEn": "To determine the strength of the connection between neurons.",
          "textKo": "뉴런 간 연결의 강도를 결정하기 위해.",
          "text": "To determine the strength of the connection between neurons."
        },
        {
          "key": "C",
          "textEn": "To store the training data.",
          "textKo": "학습 데이터를 저장하기 위해.",
          "text": "To store the training data."
        },
        {
          "key": "D",
          "textEn": "To measure the physical weight of the hardware.",
          "textKo": "하드웨어의 물리적 무게를 측정하기 위해.",
          "text": "To measure the physical weight of the hardware."
        }
      ],
      "answerKey": "B",
      "answerText": "To determine the strength of the connection between neurons."
    },
    {
      "id": 395,
      "sourceNumber": 395,
      "title": "Question 395",
      "promptKo": "개발자가 대화형 인터페이스를 구축하기 위해 자연어 이해(NLU) 및 자동 음성 인식(ASR) 기능을 추가할 수 있게 해주는 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service allows developers to add natural language understanding (NLU) and automatic speech recognition (ASR) to build conversational interfaces?",
      "explanation": [
        "- Amazon Lex는 음성 인식과 자연어 이해를 결합하여 챗봇 및 대화형 앱을 만들기 위한 도구를 제공합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Polly",
          "textKo": "Amazon Polly",
          "text": "Amazon Polly"
        },
        {
          "key": "B",
          "textEn": "Amazon Lex",
          "textKo": "Amazon Lex",
          "text": "Amazon Lex"
        },
        {
          "key": "C",
          "textEn": "Amazon Transcribe",
          "textKo": "Amazon Transcribe",
          "text": "Amazon Transcribe"
        },
        {
          "key": "D",
          "textEn": "Amazon Kendra",
          "textKo": "Amazon Kendra",
          "text": "Amazon Kendra"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon Lex"
    },
    {
      "id": 396,
      "sourceNumber": 396,
      "title": "Question 396",
      "promptKo": "처음부터 학습시키는 대신, 새로운 관련 작업에 사전 학습된 모델을 사용하는 개념은 무엇입니까?",
      "promptEn": "Which concept involves using a pre-trained model on a new but related task, instead of training from scratch?",
      "explanation": [
        "- 전이 학습은 이미 구축된 지식(모델)을 새로운 문제 해결에 재사용하여 효율성을 높이는 기법입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Reinforcement Learning",
          "textKo": "강화 학습 (Reinforcement Learning)",
          "text": "Reinforcement Learning"
        },
        {
          "key": "B",
          "textEn": "Transfer Learning",
          "textKo": "전이 학습 (Transfer Learning)",
          "text": "Transfer Learning"
        },
        {
          "key": "C",
          "textEn": "Unsupervised Learning",
          "textKo": "비지도 학습 (Unsupervised Learning)",
          "text": "Unsupervised Learning"
        },
        {
          "key": "D",
          "textEn": "Clustering",
          "textKo": "군집화 (Clustering)",
          "text": "Clustering"
        }
      ],
      "answerKey": "B",
      "answerText": "Transfer Learning"
    },
    {
      "id": 397,
      "sourceNumber": 397,
      "title": "Question 397",
      "promptKo": "생성형 AI 모델에서 \"Top-P\"(핵 샘플링) 파라미터는 무엇을 제어합니까?",
      "promptEn": "What does the \"Top-P\" (nucleus sampling) parameter control in a generative AI model?",
      "explanation": [
        "- Top-P는 확률이 높은 후보군(누적 확률 P 이내) 내에서 단어를 선택하게 하여 결과의 다양성과 품질을 조절합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "The maximum length of the output.",
          "textKo": "출력의 최대 길이.",
          "text": "The maximum length of the output."
        },
        {
          "key": "B",
          "textEn": "The diversity of the output by selecting from a subset of tokens whose cumulative probability exceeds P.",
          "textKo": "누적 확률이 P를 초과하는 토큰 하위 집합에서 선택하여 출력의 다양성을 제어.",
          "text": "The diversity of the output by selecting from a subset of tokens whose cumulative probability exceeds P."
        },
        {
          "key": "C",
          "textEn": "The temperature of the GPU.",
          "textKo": "GPU의 온도.",
          "text": "The temperature of the GPU."
        },
        {
          "key": "D",
          "textEn": "The speed of the training process.",
          "textKo": "학습 과정의 속도.",
          "text": "The speed of the training process."
        }
      ],
      "answerKey": "B",
      "answerText": "The diversity of the output by selecting from a subset of tokens whose cumulative probability exceeds P."
    },
    {
      "id": 398,
      "sourceNumber": 398,
      "title": "Question 398",
      "promptKo": "한 회사가 일본어로 된 문서를 프랑스어로 번역하려고 합니다. 어떤 AWS 서비스가 가장 적합합니까?",
      "promptEn": "A company wants to translate documents from Japanese to French. Which AWS service is best suited for this?",
      "explanation": [
        "- Amazon Translate는 신경망 기계 번역 서비스로 다국어 간 텍스트 번역을 신속하게 수행합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Polly",
          "textKo": "Amazon Polly",
          "text": "Amazon Polly"
        },
        {
          "key": "B",
          "textEn": "Amazon Translate",
          "textKo": "Amazon Translate",
          "text": "Amazon Translate"
        },
        {
          "key": "C",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        },
        {
          "key": "D",
          "textEn": "Amazon Lex",
          "textKo": "Amazon Lex",
          "text": "Amazon Lex"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon Translate"
    },
    {
      "id": 399,
      "sourceNumber": 399,
      "title": "Question 399",
      "promptKo": "머신러닝을 위한 AWS Well-Architected Framework에 따르면, 서비스 또는 인프라 중단으로부터 시스템이 복구되는 능력에 초점을 맞춘 핵심 요소는 무엇입니까?",
      "promptEn": "According to the AWS Well-Architected Framework for Machine Learning, which pillar focuses on the ability of a system to recover from service or infrastructure disruptions?",
      "explanation": [
        "- 안정성(Reliability) 핵심 요소는 장애 복구, 가용성, 워크로드의 일관된 성능 보장에 중점을 둡니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Security",
          "textKo": "보안 (Security)",
          "text": "Security"
        },
        {
          "key": "B",
          "textEn": "Reliability",
          "textKo": "안정성 (Reliability)",
          "text": "Reliability"
        },
        {
          "key": "C",
          "textEn": "Operational Excellence",
          "textKo": "운영 우수성 (Operational Excellence)",
          "text": "Operational Excellence"
        },
        {
          "key": "D",
          "textEn": "Performance Efficiency",
          "textKo": "성능 효율성 (Performance Efficiency)",
          "text": "Performance Efficiency"
        }
      ],
      "answerKey": "B",
      "answerText": "Reliability"
    },
    {
      "id": 400,
      "sourceNumber": 400,
      "title": "Question 400",
      "promptKo": "한 회사가 고객 프레젠테이션을 위해 텍스트 설명을 기반으로 사실적인 건축 이미지를 생성하고자 합니다. 이 작업에 가장 적합한 생성형 AI 모델 유형은 무엇입니까?",
      "promptEn": "A company wants to generate realistic architectural images from text descriptions for client presentations. Which type of generative AI model is best suited for this task?",
      "explanation": [
        "- 텍스트 기술을 기반으로 고품질의 사실적인 이미지를 생성하는 작업(Text-to-Image)에는 주로 확산 모델(Diffusion Model) 아키텍처가 사용됩니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Large Language Model (LLM)",
          "textKo": "대규모 언어 모델 (LLM)",
          "text": "Large Language Model (LLM)"
        },
        {
          "key": "B",
          "textEn": "Diffusion Model",
          "textKo": "확산 모델 (Diffusion Model)",
          "text": "Diffusion Model"
        },
        {
          "key": "C",
          "textEn": "Sequence-to-Sequence Model",
          "textKo": "시퀀스 투 시퀀스 모델",
          "text": "Sequence-to-Sequence Model"
        },
        {
          "key": "D",
          "textEn": "Autoregressive Model",
          "textKo": "자기회귀 모델",
          "text": "Autoregressive Model"
        }
      ],
      "answerKey": "B",
      "answerText": "Diffusion Model"
    },
    {
      "id": 401,
      "sourceNumber": 401,
      "title": "Question 401",
      "promptKo": "AI 실무자가 배포된 모델을 모니터링하여 시간이 지남에 따라 입력 데이터의 통계적 특성이 변하고 이로 인해 모델 성능이 저하되는 시점을 감지해야 합니다. 이 개념은 무엇을 설명합니까?",
      "promptEn": "An AI practitioner needs to monitor a deployed model to detect when the statistical properties of the input data change over time, leading to a decline in model performance. Which concept does this describe?",
      "explanation": [
        "- 시간이 흐름에 따라 실제 운영 환경의 데이터 분포가 학습 데이터의 분포와 달라지는 현상을 데이터 드리프트(Data Drift)라고 하며, 이는 모델 예측력 저하의 주요 원인이 됩니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Model Bias",
          "textKo": "모델 편향 (Model Bias)",
          "text": "Model Bias"
        },
        {
          "key": "B",
          "textEn": "Overfitting",
          "textKo": "과적합 (Overfitting)",
          "text": "Overfitting"
        },
        {
          "key": "C",
          "textEn": "Data Drift",
          "textKo": "데이터 드리프트 (Data Drift)",
          "text": "Data Drift"
        },
        {
          "key": "D",
          "textEn": "Underfitting",
          "textKo": "과소적합 (Underfitting)",
          "text": "Underfitting"
        }
      ],
      "answerKey": "C",
      "answerText": "Data Drift"
    },
    {
      "id": 402,
      "sourceNumber": 402,
      "title": "Question 402",
      "promptKo": "한 헬스케어 회사가 Amazon Bedrock을 사용하여 AI 애플리케이션을 구축하려고 합니다. 이 회사는 엄격한 데이터 프라이버시 규정을 준수해야 하며, 자사의 학습 데이터가 제3자와 공유되거나 공개 모델을 개선하는 데 사용되지 않도록 보장해야 합니다. 이러한 조건에서 데이터와 모델의 소유권은 누구에게 있습니까?",
      "promptEn": "A healthcare company wants to build an AI application using Amazon Bedrock. They must comply with strict data privacy regulations and ensure that their training data is not shared with third parties or used to improve public models. Who owns the data and models under these conditions?",
      "explanation": [
        "- Amazon Bedrock은 기본적으로 고객 데이터의 프라이버시를 보장합니다. 고객이 제공한 데이터와 이를 통해 미세 조정된 맞춤형 모델은 오직 고객의 소유이며, 기본 모델 학습이나 타사 공유에 절대 사용되지 않습니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "AWS owns both the data and the customized model.",
          "textKo": "AWS가 데이터와 맞춤형 모델 모두에 대한 소유권을 가집니다.",
          "text": "AWS owns both the data and the customized model."
        },
        {
          "key": "B",
          "textEn": "The third-party model provider owns the customized model.",
          "textKo": "타사 모델 제공업체가 맞춤형 모델에 대한 소유권을 가집니다.",
          "text": "The third-party model provider owns the customized model."
        },
        {
          "key": "C",
          "textEn": "The customer maintains full ownership of their data and the customized model.",
          "textKo": "고객이 자신의 데이터와 맞춤형 모델에 대한 완전한 소유권을 유지합니다.",
          "text": "The customer maintains full ownership of their data and the customized model."
        },
        {
          "key": "D",
          "textEn": "The data is shared with the open-source community.",
          "textKo": "데이터가 오픈 소스 커뮤니티와 공유됩니다.",
          "text": "The data is shared with the open-source community."
        }
      ],
      "answerKey": "C",
      "answerText": "The customer maintains full ownership of their data and the customized model."
    },
    {
      "id": 403,
      "sourceNumber": 403,
      "title": "Question 403",
      "promptKo": "음성 오디오를 실시간 또는 배치 모드로 텍스트로 변환하는 클라우드 기반 웹 서비스인 AWS 서비스는 무엇입니까?",
      "promptEn": "Which AWS service is a cloud-based web service that converts spoken audio into text in real-time or batch mode?",
      "explanation": [
        "- Amazon Transcribe는 자동 음성 인식(ASR) 기술을 사용하여 음성을 텍스트로 변환(Speech-to-Text)해주는 전용 서비스입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Polly",
          "textKo": "Amazon Polly",
          "text": "Amazon Polly"
        },
        {
          "key": "B",
          "textEn": "Amazon Lex",
          "textKo": "Amazon Lex",
          "text": "Amazon Lex"
        },
        {
          "key": "C",
          "textEn": "Amazon Transcribe",
          "textKo": "Amazon Transcribe",
          "text": "Amazon Transcribe"
        },
        {
          "key": "D",
          "textEn": "Amazon Comprehend",
          "textKo": "Amazon Comprehend",
          "text": "Amazon Comprehend"
        }
      ],
      "answerKey": "C",
      "answerText": "Amazon Transcribe"
    },
    {
      "id": 404,
      "sourceNumber": 404,
      "title": "Question 404",
      "promptKo": "한 개발자가 텍스트 생성 모델의 성능을 평가하려고 합니다. 모델의 출력물을 고품질의 인간 참조 번역본 세트와 비교하고자 할 때, 이 목적으로 흔히 사용되는 지표는 무엇입니까?",
      "promptEn": "A developer wants to evaluate the performance of a text generation model. They want to compare the model's output against a set of high-quality human reference translations. Which metric is commonly used for this purpose?",
      "explanation": [
        "- BLEU 스코어는 기계 번역이나 텍스트 생성 결과물이 인간이 작성한 참조본과 얼마나 유사한지 N-gram 일치도를 기반으로 측정하는 대표적인 평가 지표입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "F1 Score",
          "textKo": "F1 스코어",
          "text": "F1 Score"
        },
        {
          "key": "B",
          "textEn": "BLEU Score",
          "textKo": "BLEU 스코어 (BLEU Score)",
          "text": "BLEU Score"
        },
        {
          "key": "C",
          "textEn": "Mean Squared Error (MSE)",
          "textKo": "평균 제곱 오차 (MSE)",
          "text": "Mean Squared Error (MSE)"
        },
        {
          "key": "D",
          "textEn": "Accuracy",
          "textKo": "정확도 (Accuracy)",
          "text": "Accuracy"
        }
      ],
      "answerKey": "B",
      "answerText": "BLEU Score"
    },
    {
      "id": 405,
      "sourceNumber": 405,
      "title": "Question 405",
      "promptKo": "AWS Well-Architected Framework에 따르면, 비즈니스 가치를 제공하기 위해 시스템을 실행 및 모니터링하고, 프로세스와 절차를 지속적으로 개선하는 것과 관련된 핵심 요소는 무엇입니까?",
      "promptEn": "According to the AWS Well-Architected Framework, which pillar is concerned with running and monitoring systems to deliver business value, and continually improving processes and procedures?",
      "explanation": [
        "- 시스템 운영 상태의 시각화, 모니터링, 그리고 지속적인 프로세스 개선을 통한 비즈니스 가치 창출은 운영 우수성(Operational Excellence) 핵심 요소의 주된 목표입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Operational Excellence",
          "textKo": "운영 우수성 (Operational Excellence)",
          "text": "Operational Excellence"
        },
        {
          "key": "B",
          "textEn": "Performance Efficiency",
          "textKo": "성능 효율성 (Performance Efficiency)",
          "text": "Performance Efficiency"
        },
        {
          "key": "C",
          "textEn": "Cost Optimization",
          "textKo": "비용 최적화 (Cost Optimization)",
          "text": "Cost Optimization"
        },
        {
          "key": "D",
          "textEn": "Reliability",
          "textKo": "안정성 (Reliability)",
          "text": "Reliability"
        }
      ],
      "answerKey": "A",
      "answerText": "Operational Excellence"
    },
    {
      "id": 406,
      "sourceNumber": 406,
      "title": "Question 406",
      "promptKo": "한 마케팅 회사가 홍보 이메일을 자동으로 작성하기 위해 생성형 AI 모델을 사용하려고 합니다. 이메일이 생성될 때마다 매우 창의적이고 다양하게 작성되기를 원할 때, 회사는 어떤 파라미터를 높여야 합니까?",
      "promptEn": "A marketing company wants to use a generative AI model to automatically draft promotional emails. They want the emails to be highly creative and varied each time they are generated. Which parameter should the company increase?",
      "explanation": [
        "- 온도(Temperature) 파라미터 값을 높이면 모델이 선택하는 단어의 무작위성과 다양성이 증가하여 더 창의적이고 매번 다른 형태의 결과물을 출력하게 됩니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Max tokens",
          "textKo": "최대 토큰 (Max tokens)",
          "text": "Max tokens"
        },
        {
          "key": "B",
          "textEn": "Stop sequences",
          "textKo": "중단 시퀀스 (Stop sequences)",
          "text": "Stop sequences"
        },
        {
          "key": "C",
          "textEn": "Temperature",
          "textKo": "온도 (Temperature)",
          "text": "Temperature"
        },
        {
          "key": "D",
          "textEn": "Top-P to 0",
          "textKo": "Top-P를 0으로 설정",
          "text": "Top-P to 0"
        }
      ],
      "answerKey": "C",
      "answerText": "Temperature"
    },
    {
      "id": 407,
      "sourceNumber": 407,
      "title": "Question 407",
      "promptKo": "한 금융 기관이 거래를 분석하고 이를 \"사기(Fraudulent)\" 또는 \"정상(Legitimate)\"의 두 가지 범주 중 하나로 분류하는 머신러닝 솔루션을 필요로 합니다. 이것은 어떤 유형의 머신러닝 작업입니까?",
      "promptEn": "A financial institution needs a machine learning solution to analyze transactions and assign them to one of two categories: \"Fraudulent\" or \"Legitimate\". Which type of machine learning task is this?",
      "explanation": [
        "- 예측하고자 하는 대상(Target)이 두 가지 명확한 범주(예/아니오, 사기/정상 등)로 나뉘는 문제를 이진 분류(Binary Classification)라고 합니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Regression",
          "textKo": "회귀 (Regression)",
          "text": "Regression"
        },
        {
          "key": "B",
          "textEn": "Binary Classification",
          "textKo": "이진 분류 (Binary Classification)",
          "text": "Binary Classification"
        },
        {
          "key": "C",
          "textEn": "Clustering",
          "textKo": "군집화 (Clustering)",
          "text": "Clustering"
        },
        {
          "key": "D",
          "textEn": "Unsupervised Learning",
          "textKo": "비지도 학습 (Unsupervised Learning)",
          "text": "Unsupervised Learning"
        }
      ],
      "answerKey": "B",
      "answerText": "Binary Classification"
    },
    {
      "id": 408,
      "sourceNumber": 408,
      "title": "Question 408",
      "promptKo": "한 회사가 과거 상호작용 데이터를 기반으로 웹사이트 사용자에게 자동화된 제품 추천을 제공하는 솔루션을 구현하고자 합니다. 어떤 AWS 서비스를 사용해야 합니까?",
      "promptEn": "A company wants to implement a solution that provides automated product recommendations to users on their website based on historical interaction data. Which AWS service should they use?",
      "explanation": [
        "- Amazon Personalize는 사용자 데이터(조회, 구매 이력 등)를 바탕으로 개인화된 맞춤형 추천 시스템을 실시간으로 구축할 수 있게 해주는 머신러닝 서비스입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "Amazon Kendra",
          "textKo": "Amazon Kendra",
          "text": "Amazon Kendra"
        },
        {
          "key": "B",
          "textEn": "Amazon Personalize",
          "textKo": "Amazon Personalize",
          "text": "Amazon Personalize"
        },
        {
          "key": "C",
          "textEn": "Amazon SageMaker Ground Truth",
          "textKo": "Amazon SageMaker Ground Truth",
          "text": "Amazon SageMaker Ground Truth"
        },
        {
          "key": "D",
          "textEn": "Amazon Lex",
          "textKo": "Amazon Lex",
          "text": "Amazon Lex"
        }
      ],
      "answerKey": "B",
      "answerText": "Amazon Personalize"
    },
    {
      "id": 409,
      "sourceNumber": 409,
      "title": "Question 409",
      "promptKo": "다음 중 Amazon Bedrock Knowledge Bases(지식 기반)의 핵심 기능을 설명한 것은 무엇입니까?",
      "promptEn": "Which of the following describes the core functionality of Amazon Bedrock Knowledge Bases?",
      "explanation": [
        "- Amazon Bedrock 지식 기반(Knowledge Bases)은 데이터 소스(예: S3)를 파운데이션 모델과 간편하게 연동하여 코딩을 최소화하고 RAG 시스템을 구현할 수 있도록 지원하는 완전 관리형 기능입니다."
      ],
      "wrongExplanations": [],
      "glossary": [],
      "type": "single-choice",
      "options": [
        {
          "key": "A",
          "textEn": "It trains a new foundation model from scratch using private data.",
          "textKo": "비공개 데이터를 사용하여 파운데이션 모델을 처음부터 새로 학습시킵니다.",
          "text": "It trains a new foundation model from scratch using private data."
        },
        {
          "key": "B",
          "textEn": "It automatically labels unstructured data for training.",
          "textKo": "학습을 위해 구조화되지 않은 데이터에 자동으로 라벨을 지정합니다.",
          "text": "It automatically labels unstructured data for training."
        },
        {
          "key": "C",
          "textEn": "It connects foundation models to internal data sources to implement Retrieval-Augmented Generation (RAG).",
          "textKo": "파운데이션 모델을 내부 데이터 소스에 연결하여 검색 증강 생성(RAG)을 구현합니다.",
          "text": "It connects foundation models to internal data sources to implement Retrieval-Augmented Generation (RAG)."
        },
        {
          "key": "D",
          "textEn": "It encrypts data stored on local hard drives.",
          "textKo": "로컬 하드 드라이브에 저장된 데이터를 암호화합니다.",
          "text": "It encrypts data stored on local hard drives."
        }
      ],
      "answerKey": "C",
      "answerText": "It connects foundation models to internal data sources to implement Retrieval-Augmented Generation (RAG)."
    }
  ]
};
