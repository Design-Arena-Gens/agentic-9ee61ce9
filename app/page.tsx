'use client';

import { useState } from 'react';

interface OpportunityResult {
  title: string;
  description: string;
  legitimacy: {
    isLegal: boolean;
    isGenuine: boolean;
    riskLevel: string;
    warnings: string[];
  };
  investment: {
    initial: string;
    ongoing: string;
  };
  roadmap: {
    phase: string;
    duration: string;
    steps: string[];
  }[];
  resources: string[];
  estimatedEarnings: string;
  pros: string[];
  cons: string[];
}

export default function Home() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<OpportunityResult[]>([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError('');
    setResults([]);

    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch opportunities');
      }

      const data = await response.json();
      setResults(data.opportunities);
    } catch (err) {
      setError('Failed to search for opportunities. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>💰 Money Making AI Agent</h1>
        <p>Find legitimate, low-investment opportunities with AI-powered analysis</p>
      </div>

      <div className="main-card">
        <div className="input-section">
          <label htmlFor="query">What kind of money-making opportunity are you looking for?</label>
          <textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g., 'online freelancing opportunities', 'passive income ideas', 'side hustles for beginners', etc."
            rows={4}
          />
        </div>

        <button
          className="button"
          onClick={handleSearch}
          disabled={loading || !query.trim()}
        >
          {loading ? 'Analyzing Opportunities...' : 'Find Opportunities'}
        </button>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Searching and analyzing opportunities...</p>
          </div>
        )}

        {error && (
          <div className="error">
            <strong>Error:</strong> {error}
          </div>
        )}

        {results.length > 0 && (
          <div className="results">
            {results.map((opportunity, index) => (
              <div key={index} className="opportunity-card">
                <h3>{opportunity.title}</h3>

                <div className="section">
                  <p>{opportunity.description}</p>
                </div>

                <div className="section">
                  <h4>✓ Legitimacy Check</h4>
                  <div>
                    <span className={`badge ${opportunity.legitimacy.isLegal ? 'badge-success' : 'badge-warning'}`}>
                      {opportunity.legitimacy.isLegal ? 'Legal' : 'Check Local Laws'}
                    </span>
                    <span className={`badge ${opportunity.legitimacy.isGenuine ? 'badge-success' : 'badge-warning'}`}>
                      {opportunity.legitimacy.isGenuine ? 'Genuine' : 'Requires Caution'}
                    </span>
                    <span className={`badge badge-info`}>
                      Risk: {opportunity.legitimacy.riskLevel}
                    </span>
                  </div>
                  {opportunity.legitimacy.warnings.length > 0 && (
                    <div style={{ marginTop: '10px' }}>
                      <strong>⚠️ Warnings:</strong>
                      <ul>
                        {opportunity.legitimacy.warnings.map((warning, i) => (
                          <li key={i}>{warning}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="section">
                  <h4>💵 Investment Required</h4>
                  <p><strong>Initial:</strong> {opportunity.investment.initial}</p>
                  <p><strong>Ongoing:</strong> {opportunity.investment.ongoing}</p>
                </div>

                <div className="section">
                  <h4>📈 Estimated Earnings</h4>
                  <p>{opportunity.estimatedEarnings}</p>
                </div>

                <div className="section">
                  <h4>🗺️ Complete Roadmap</h4>
                  <div className="timeline">
                    {opportunity.roadmap.map((phase, i) => (
                      <div key={i} className="timeline-item">
                        <h5>{phase.phase} ({phase.duration})</h5>
                        <ul>
                          {phase.steps.map((step, j) => (
                            <li key={j}>{step}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="section">
                  <h4>👍 Pros</h4>
                  <ul>
                    {opportunity.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </div>

                <div className="section">
                  <h4>👎 Cons</h4>
                  <ul>
                    {opportunity.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </div>

                <div className="section">
                  <h4>📚 Helpful Resources</h4>
                  <ul>
                    {opportunity.resources.map((resource, i) => (
                      <li key={i}>{resource}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
